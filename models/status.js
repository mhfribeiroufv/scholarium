

class Status {
    reset() {
        this.id = undefined;
        this.descricao = undefined;
    }

    define(dados) {
        this.id = dados.id;
        this.descricao = dados.descricao;
    }
}

let status = new Status();
console.log(config.db);
