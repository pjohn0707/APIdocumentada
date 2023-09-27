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
npm i express nodemon dotenv

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
´´´
touch src/app.js
´´´

## Rodar o comando 'npm install' sempre que fizer um clone do github

## Criar o arquivo .env e .env.example

```
touch .env
```
* Criar arquivo para salvar as variáveis necessárias da aplicação sem os valores
```
touch .env.example
```