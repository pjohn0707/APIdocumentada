// Importar pacote do express

const express = require('express');
// Instanciar o router na variável router

const router = express.Router();

router.get('/api', (request, response) => {
    response.send('Retorno de informações do banco de dados')
    console.log('Listar informações')
});

router.post('/api', (request, response) => {
    response.send('Método utilizado para salvar informações')
    console.log('Listar informações')
});

router.put('/api/:id', (request, response) => {
    response.send('Grêmio maior do sul')
    console.log('Listar informações')
});
router.delete('/api/:id', (request, response) => {
    response.send('Grêmio maior do sul')
    console.log('Listar informações')
});

module.exports = router;