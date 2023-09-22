// Importar o arquivo de configuração
const app = require('./app')
// Importar a porta do servid
[or
const PORT = app.get('port')

app.get('/api', (request, response) => {
    response.send('Retorno de informações do banco de dados')
    console.log('Listar informações')
});

app.post('/api', (request, response) => {
    response.send('Método utilizado para salvar informações')
    console.log('Listar informações')
});

app.put('/api/:id', (request, response) => {
    response.send('Grêmio maior do sul')
    console.log('Listar informações')
});
app.delete('/api/:id', (request, response) => {
    response.send('Grêmio maior do sul')
    console.log('Listar informações')
});

//Testar para ver se o servidor vai rodar
app.listen(PORT, () => console.log(`Runing at the port ${PORT}`))