var express = require('express');
var fs = require('fs');
var router = express.Router();

// Inclusão do modelo de dados para status
// modelo é um objeto da classe Status
var modelo = require('../models/status');

// Lê arquivo de configurações
const config = JSON.parse(fs.readFileSync('./config/config.json'));

// Listagem com paginação
router.get('/', function(req, res, next) {
    let pagina = req.query.pagina == undefined? 1: req.query.pagina;
    const dados_pagina = modelo.lista(pagina);
    const total_paginas = modelo.total_paginas();
    
    // Prepara os dados para a renderização
    const scripts = ['status.js'];
    const dados_render = {
        scripts: scripts,
        fonte_base: config.fonte_base,
        ivp: config.ivp,
        total_paginas: total_paginas,
        pagina: pagina,
        itens_menu: config.itens_menu,
        ativo: 'Status',
        dados_pagina: dados_pagina
    };
    res.render('status', dados_render);
});

// Sub-rota de recuperação pelo id
router.get('/byid', function(req, res, next) {
    let id = req.query.id;
    const dados = modelo.getById(id);
    res.send(JSON.stringify(dados));
});

// Sub-rota de contagem de páginas
router.get('/tot', function(req, res, next) {
    const dados = modelo.total_paginas();
    res.send(JSON.stringify(dados));
});

// Sub-rota de inserção de novo status
router.post('/add', function(req, res) {
    const resposta = {
        sucesso: true,
        mensagem: 'Status inserido com sucesso'
    };

    try {
        let dados = {
            id: undefined,
            descricao: req.body.descricao
        };

        modelo.define(dados);
        modelo.salva();
    }  catch(erro) {
        resposta.sucesso = false;
        resposta.mensagem = erro.message;
    } finally {
        res.send(JSON.stringify(resposta));
    }
});

// Sub-rota de atualização de novo status
router.post('/upd', function(req, res) {
    const resposta = {
        sucesso: true,
        mensagem: 'Status atualizado com sucesso'
    };

    try {
        modelo.define(req.body);
        modelo.salva();
    }  catch(erro) {
        resposta.sucesso = false;
        resposta.mensagem = erro.message;
    } finally {
        res.send(JSON.stringify(resposta));
    }
});

// Sub-rota de remoção de novo status
router.post('/del', function(req, res) {
    const resposta = {
        sucesso: true,
        mensagem: 'Status removido com sucesso'
    };

    try {
        modelo.define(req.body);
        modelo.remove();
    } catch(erro) {
        resposta.sucesso = false;
        resposta.mensagem = erro.message;
    } finally {
        res.send(JSON.stringify(resposta));
    }
});

module.exports = router;
