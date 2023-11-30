const connection = require('../config/db');

function listarDados(request, response) {
    response.send('Retorno de lista de informações de banco de dados');
}

function gravarDados(request, response) {
    response.send('Metodo utilizado para gravar informações!');
}

function atualizarDados(request, response) {
    response.send('Metodo utilizado para atualizar informações!');
}

function deletarDados(request, response) {
    response.send('Metodo utilizado para deletar informações!');
}

function selecionarAlunoId(request, response) {
    response.send('Metodo utilizado para selecionar informações!');
}

module.exports = {
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados,
    selecionarAlunoId
}