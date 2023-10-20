function listarDados(request, response) {
    response.send("Retorno de lista de informações do Banco de dados");
}

function gravarDados(request, response) {
    response.send('Método utilizado para salvar informações');
}

function atualizarDados(request, response) {
    response.send('Atualizar');
}

function deletarDados(request, response) {
    response.send('Deletar');
}

module.exports = {
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados,
}