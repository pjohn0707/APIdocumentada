function listarDados(request, response) {
    response.send("Retorno de lista de informações do Banco de dados")
    console.log("get")
}

exports.module = {
    listarDados
}