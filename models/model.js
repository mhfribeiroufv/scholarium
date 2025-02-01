'use strict';

const sqlite = require('node:sqlite');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./config/config.json'));

class Model {
    constructor(tabela) {
        this.tabela = tabela;
        this.conn = new sqlite.DatabaseSync(config.db);
        this.reset();
    }

    // Emulação de método abstrato (GAMBIARRA)
    reset() {
        throw new Error('A classe concreta deve implementar o método reset()');
    }

    define(dados) {
        throw new Error('A classe concreta deve implementar o método define(dados)');
    }

    // Listagem de itens de uma determinada tabela com paginação
    lista(pagina=1, orderby='id') {
        try {
            // Preparação da instrução SQL
            let offset = (pagina - 1) * config.ipp;
            const sql = `SELECT * FROM ${this.tabela} ORDER BY ${orderby} LIMIT ${config.ipp} OFFSET ${offset};`;
            
            // Preparação da consulta (query)
            const query = this.conn.prepare(sql);

            // Execução da consulta
            return query.all();
        } catch(erro) {
            console.error('Erro no método lista:', erro.message);
            throw erro;
        }
    }

    // Retorna o total de páginas em uma tabela
    total_paginas() {
        try {
            // Preparação da instrução SQL
            let tam_pagina = config.ipp + '.0';
            const sql = `SELECT COUNT(id) / ${tam_pagina} AS total_paginas FROM ${this.tabela};`;
            
            // Preparação da consulta (query)
            const query = this.conn.prepare(sql);

            // Execução da consulta
            let tot = parseFloat(query.get().total_paginas);

            return Math.ceil(tot);
        } catch(erro) {
            console.error('Erro no método total_paginas:', erro.message);
            throw erro;
        }
    }

    // Obtém dados pelo id
    getById(id) {
        try {
            // Preparação da instrução SQL
            const sql = `SELECT * FROM ${this.tabela} WHERE id = ${id};`;
            
            // Preparação da consulta (query)
            const query = this.conn.prepare(sql);

            // Execução da consulta
            return query.get();
        } catch(erro) {
            console.error('Erro no método getById:', erro.message);
            throw erro;
        }
    }

    // Persiste os dados da classe para o banco de dados (INSERT ou UPDATE)
    salva() {
        throw new Error('O método salva deve ser implementado na classe concreta');
    }

    // Remove uma instância do modelo no banco de dados (DELETE)
    remove() {
        throw new Error('O método remove deve ser implementado na classe concreta');
    }

    // Executa uma consulta arbitrária
    execQuery(sql) {
        try {
            // Preparação da consulta (query)
            const query = this.conn.prepare(sql);

            // Execução da consulta
            return query.run();
        } catch(erro) {
            console.error('Erro no método execQuery:', erro.message);
            throw erro;
        }
    }
}

module.exports = Model;
