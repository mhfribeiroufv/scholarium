function exibe_form() {
    let form = document.getElementById('frm_inclusao'); // Referência ao form
    form.classList.remove('oculto');
}

function oculta_form() {
    let inp_status = document.getElementById('inp_status');
    inp_status.value = '';
    
    let form = document.getElementById('frm_inclusao'); // Referência ao form
    form.classList.add('oculto');
}

function criaLinha() {
    // Referência à tabela
    let tbl_status = document.getElementById('tbl_status');
    // A partir da tabela, acesso ao corpo
    let tbody = tbl_status.lastElementChild;

    // Instancia uma nova linha de tabela
    let tr = document.createElement('tr');

    // Cria a célula do ID
    let td_id = document.createElement('td');
    let novo_id = tbody.childNodes.length + 1;
    td_id.textContent = novo_id;

    // Cria a célula do status
    let td_status = document.createElement('td');
    td_status.textContent = document.getElementById('inp_status').value;

    // Cria a célula dos botões
    let td_btns = document.createElement('td');

    // Criar os botões
    let btn_edit = document.createElement('button');
    btn_edit.textContent = 'Editar';
    // Cria o espaço entre botões
    let spc = document.createTextNode(' ');
    let btn_del = document.createElement('button');
    btn_del.textContent = 'Excluir';

    // Adicionar os botões à célula
    td_btns.appendChild(btn_edit);
    td_btns.appendChild(spc);
    td_btns.appendChild(btn_del);

    // Adicionar as células à linha de tabela
    tr.appendChild(td_id);
    tr.appendChild(td_status);
    tr.appendChild(td_btns);

    // Adicionar a linha de tabela ao tbody (equivale a adicionar ao DOM)
    tbody.appendChild(tr);

    // Executar oculta_form
    oculta_form();
}

// referência ao botão que mostra o formulário
const btn_novo = document.getElementById('btn_novo');
const btn_cancela = document.getElementById('btn_cancela');
const btn_inclusao = document.getElementById('btn_inclusao');

// EventListeners
btn_novo.addEventListener('click', exibe_form);
btn_cancela.addEventListener('click', oculta_form);
btn_inclusao.addEventListener('click', criaLinha);
