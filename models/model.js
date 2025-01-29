'use strict';

const sqlite = require('node:sqlite');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('../config/config.json'));

class Model {
    constructor() {
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

    // Implementar métodos para listagens (com paginação) e CRUD
}