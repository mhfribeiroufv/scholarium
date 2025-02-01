function preencheModalExclusao(event) {
    let td = this.parentNode;
    let descricao = td.previousElementSibling.textContent;
    let id = td.previousElementSibling.previousElementSibling.textContent;
    let span = document.getElementById('spn_del_descricao');
    span.textContent = descricao;
    let hid_descricao = document.getElementById('hid_del_descricao');
    hid_descricao.value = descricao;
    let hid_id = document.getElementById('hid_del_id');
    hid_id.value = id;
}

function preencheModalEdicao(event) {
    let td = this.parentNode;
    let descricao = td.previousElementSibling.textContent;
    let id = td.previousElementSibling.previousElementSibling.textContent;
    
    let hid_id = document.getElementById('hid_ins_id');
    hid_id.value = id;

    let inp_descricao = document.getElementById('descricaoInput');
    inp_descricao.value = descricao;
}

async function enviaExclusao(event) {
    event.preventDefault();

    const objDados = {
        id: document.getElementById('hid_del_id').value,
        descricao: document.getElementById('hid_del_descricao').value
    };

    const resposta = await enviaPost('/status/del', objDados);

    alert(resposta.mensagem);

    const btnFecha = document.getElementById('btnCancelaExclusao');
    // força o click no botão que fecha o modal
    btnFecha.dispatchEvent(new Event('click'));

    // Recarga da página
    window.location.reload(true);
}

async function enviaDados(event) {
    event.preventDefault();

    // Usando a validação do bootstrap
    const form = document.getElementById('formInsercao');
    let resultado = form.checkValidity();
    form.classList.add("was-validated");
    if (!resultado) {
        return false;
    }

    const descricao = document.getElementById('descricaoInput').value;
    const id = document.getElementById('hid_ins_id').value;

    let resposta;

    if (id == '') {
        const objDados = {
            descricao: descricao
        };
    
        resposta = await enviaPost('/status/add', objDados);
    } else {
        const objDados = {
            id: id,
            descricao: descricao
        };

        resposta = await enviaPost('/status/upd', objDados);
    }

    alert(resposta.mensagem);

    const btnFecha = document.getElementById('btnCancelaInsercao');
    // força o click no botão que fecha o modal
    btnFecha.dispatchEvent(new Event('click'));

    // Recarga da página
    window.location.reload(true);
}

const btns = document.querySelectorAll('button');
const btnExclusao = document.getElementById('btnExclusao');
const btnInsercao = document.getElementById('btnInsercao');

btns.forEach(btn => {
    if (btn.id.startsWith('btn_del_item')) {
        btn.addEventListener('click', preencheModalExclusao);
    } else if (btn.id.startsWith('btn_upd_item')) {
        btn.addEventListener('click', preencheModalEdicao);
    }
});

btnExclusao.addEventListener('click', enviaExclusao);
btnInsercao.addEventListener('click', enviaDados);