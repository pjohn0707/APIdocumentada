// Importar o arquivo de configuração
const app = require('./app')
// Importar a porta do servid
<<<<<<< HEAD
const PORT = app.get('port')

app.get('/api', (request, response) => {
    response.send('Listar Informações')
    console.log('Listar informações')
});

app.post('/api', (request, response) => {
    response.send('Salvar informações')
    console.log('Listar informações')
});

app.put('/api/:id', (request, response) => {
    response.send('Editar informações')
    console.log('Listar informações')
});
app.delete('/api/:id', (request, response) => {
    response.send('Grêmio maior do sul')
    console.log('Listar informações')
});
=======

const PORT = app.get('port')


>>>>>>> c26faf2b9c1a7382d38f75deb42c7ae72e3b7852

//Testar para ver se o servidor vai rodar
app.listen(PORT, () => console.log(`Runing at the port ${PORT}`))