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