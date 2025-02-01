'use strict';

const Model = require('./model');

class Status extends Model {
    reset() {
        this.id = undefined;
        this.descricao = undefined;
    }

    define(dados) {
        this.id = dados.id;
        this.descricao = dados.descricao;
    }

    salva() {
        if (this.descricao == undefined)
            throw new Error('O método define deve ser utilizado antes de salvar os dados');

        let sql;
        if (this.id == undefined) {
            sql = `INSERT INTO ${this.tabela} (descricao) VALUES ('${this.descricao}');`;
        } else {
            sql = `UPDATE ${this.tabela} SET descricao = '${this.descricao}' WHERE id = ${this.id};`;
        }

        try {
            this.execQuery(sql);
            return true;
        } catch (erro) {
            throw erro;
        }
    }

    remove() {
        if (this.descricao == undefined)
            throw new Error('O método define deve ser utilizado antes de remover os dados');

        let sql = `DELETE FROM ${this.tabela} WHERE id = ${this.id};`;
        
        try {
            this.execQuery(sql);
            return true;
        } catch (erro) {
            throw erro;
        }
    }
}

module.exports = new Status('status');
