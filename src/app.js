// Importar pacote do express
const express = require('express');

// Instanciar a express na variável app
const app = express();

// Importar as rotas para serem executadas na aplicação
const router = require('./Router/crudRouter')

// Importar pacote dotenv
const dotenv = require('dotenv').config();

// Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT);

// Exportar as configurações do app para outros arquivos acessrarem
module.exports = app;