async function enviaPost(rota, objDados) {
    const resposta = await fetch(
        rota, // URL da requisição
        {
            method: 'POST', // Método POST, do HTTP
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(objDados),
        }
    );

    if (!resposta.ok) {
        // Houve algum erro de HTTP (comunicação/conexão)
        throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    // Caso contrário, chegaram dados vindos do servidor
    const dadosResposta = await resposta.json();

    // Se houve algum erro com a operação do servidor
    if (!dadosResposta.sucesso) {
        throw new Error(dadosResposta.mensagem);
    }

    return dadosResposta;
}