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