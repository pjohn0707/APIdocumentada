// Importar a conexão com o banco de dados
const connection = require('../config/db');

// Função async: realiza uma requisição des forma paralela ao sistema
// request: nesta variável recuperamos os dados enviados na requisição
// response: tem a responsabilidade de retornar as informações para quem requisitou
async function listarUsuarios(request, response) {
    // Variável para executar a consulta no banco
    const query = 'SELECT * FROM alunos;';

// err: retorna erros na execução
// results: retorna a ação realizada com sucesso 
    connection.query(query, (err, results) => {
        if(results) {
            response
            .status(200)
            .json({
                sucess: true,
                message: "Sucesso! Lista de alunos",
                data: results
            });
        }else {
            response
            .status(200)
            .json({
                sucess: true,
                message: "Ooops! Não foi possível listar as informações solicitadas!",
                data: err
            });
        }
    });
}

async function cadastrarAluno(request, response) {
// 1° passo: recuperar varáveis
// 2° passo: montar query para inserir os dados 
// 3° passo: tentar executar a ação no banco
// 4° passo: definir retornos da requisição

// Recuperando dados da requisição
const params = Array(
    request.body.nome, 
    request.body.dt_nascimento,
    request.body.time_do_coracao,
    request.params.id
);


const query = 'INSERT INTO alunos(nome, dt_nascimento, time_do_coracao) values(?, ?, ?);';

connection.query(query, params, (err, results) => {
    if (results) {
        response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso! Aluno cadastrado",
                data: results
            })
    }
})
}

async function update (request, response) {
    // Comando Sql
    const query = "UPDATE alunos SET nome = ?, dt_nascimento = ?, time_do_coracao = ? WHERE id = ?";

    const params = Array(
        request.params.id,
        request.body.nome
    )

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Aluno atualizado com sucesso",
                    data: results
                })
        }else {
            response
            .status(400)
            .json({
                sucess: true,
                message: "Aluno não atualizado",
                mysql: err
            })
        }
    });
}

async function selecionarAlunoId(request, response) {
    // Comando Sql
    const query = "select nome FROM alunos WHERE id =  ?;";

    const params = Array(
        request.params.id
    )

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Aluno selecionado com sucesso",
                    data: results
                })
        }else {
            response
            .status(400)
            .json({
                sucess: false ,
                message: "Aluno não encontrado",
                mysql: err
            })
        }
    });
}

async function deleteAluno(request, response) {
    // Comando Sql
    const query = "DELETE FROM alunos ";

    const params = Array(
        request.params.id
    )

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Aluno removido com sucesso",
                    data: results
                })
        }else {
            response
            .status(400)
            .json({
                sucess: false ,
                message: "Aluno não removido",
                mysql: err
            })
        }
    });
}




module.exports = {
    listarUsuarios,
    cadastrarAluno,
    update,
    deleteAluno,
    selecionarAlunoId
};