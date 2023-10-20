// Importar pacote do express
const { Router } = require('express');
// Instanciar o router na variável router
const router = Router();
// Importar funções do controller para a rota acessar as funções
const { listarDados } = require('../controllers/controller')

router.get('/api', listarDados);

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
