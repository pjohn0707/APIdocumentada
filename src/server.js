// Importar o arquivo de configuração
const app = require('./app')
// Importar a porta do servid

const PORT = app.get('port')



//Testar para ver se o servidor vai rodar
app.listen(PORT, () => console.log(`Runing at the port ${PORT}`))