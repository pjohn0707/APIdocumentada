# Documentação da API
* Abrir no terminal do gitbash
***
definir local do computador para criar a pasta do projeto
****
Mkdir Nome_do_projeto
****
Acessar a pasta do projeto
****
cd Nome_Projeto
***
code .
***
Iniciar o gerenciador de pacotes Node
***
npm init -y
***
Criar arquivo .gitignore: arquivos e pastas que não vão para o github
***
touch .gitgnore
***
Criar aquivo .env: armazenará as variáveis do ambiente
***
touch .env
***
Instalar pacotes da API
***
npm i express nodemon dotenv mysql2

* express: será o servidor da API
* nodmon: atualizar os arquivos alterados sem parar o servidor
* dotenv: gerenciador de variáveis de ambientes
***
Informar arquivos e pastas no .gitignore
***
node_modules
.env
***
Criar pasta src para estrura do projeto
***
mkdir src
***
Criar arquivo server.js na pasta src
***
touch src/server.js
***
//Importar pacote de express

const express = require('express');

//Instanciar o express na variável app

const app = express();

//Importar um pacote dotenv

const dotenv = require('dotenv').config();

//Definir a pora do servidor

const PORT = process.env.PORT || 3333;

//Testar para ver se o servidor vai rodar

app.listen(PORT, () => console.log(`Runing at the port ${PORT}`))
***
Criar comando para servidor
***
"start":"nodemon src/server.js"
***
Rodar o comando no terminal com Gitbash
***
npm run start

## Criar estrutura para o projeto

Criar o arquivo app.js na pasta src
```
touch src/app.js
```

## Rodar o comando 'npm install' sempre que fizer um clone do github

## Criar o arquivo .env e .env.example

```
touch .env
```
* Criar arquivo para salvar as variáveis necessárias da aplicação sem os valores
```
touch .env.example
```
* Crir pasta routes
```
mkdir routes
```
*Criar arquivo crudRouter.js dentro da pasta Routes
```
nano crudRouter.js
```
### Ctrl + o: Salva o arquivo
### Enter: Confirmar o nome do arquivo
### Ctrl + x: Para fechar o arquivo

* Digitar o código do arquivo criado
```
// Importar pacote do express
const { Router } = require('express');
// Instanciar o router na variável router
const router = Router();
// Importar funções do controller para a rota acessar as funções
const {
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados,
} = require('../controllers/controller')

router.get('/listar', listarDados);

router.post('/gravar', gravarDados)

router.put('/atualizar/:id', atualizarDados)

router.delete('/deletar/:id', deletarDados)

module.exports = router;

```

### CRIAÇÃO DE CONTROLES
* Arquivos para processar as requisições das rotas

### Criar pasta de controllers 
```
mkdir src/controllers
```

### Criar arquivo controllers
```
touch src/controllers/controller.js
```

### Criar funções para processar as requisições das rotas

```
function listarDados(request, repouse) {

}
```
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
```

<hr>

## Configurar estrutura de conexão com banco de dados

### Criar pasta "config" dentro da pasta "src"
```
mkdir src/config
```

### Criar arquivo "db.js" dentro da pasta "config"
```
touch src/config/db.js
```

### Colar o código do arquivo "db.js"

// Importanto o pacote de conexão com o banco de dados
const mysql1 = require("mysql2");
// Importar variáveis de conexão do banco
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect( (err) => {
    if (err) {
        console.log('Erro de conexão' + err)
    } else [
        console.log('Mysql Connected')
    ]
});

module.exports = connection;
```

## Criar banco de dados

* Criar database
* Dar um use na databese criada
* Criar tabelas

### Criar databse
```
create database NOME_DATABASE;
```
* Ctrl + Enter: executar o comando sql

### Selecionar a DATABASE
```
use NOME_DATABASE;
```

### Criar tabela de alunos
```
create table alunos(
    id int not null auto_increment,
    nome varchar(120) not null,
    dt_nascimento date not null,
    time_do_coracao varchar(120),
    primary key(id)
);
```

### Criar tabela de users
```
create table users(
    id int not null auto_increment,
    ds_nome varchar(120),
    primary key(id)
);
```