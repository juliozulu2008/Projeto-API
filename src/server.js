// Como criar um web server
// dentro do Arquivo serve.js vamos configurar o express para ser nosso server
const port = 8080 // definimos a porta a ser utilizada

const banco = require('./db');// import do qu era pra ser um banco de dados

const express = require('express') // fazemos a requisiçao do express

const app = express()// instacimaento do express em uma constante


// se envex de usar get usar o USE ele vai resonder a qualquer requisiçao feira ao servidor
app.get('/produtos', (req, res, next) => {  // o metodo get é uma forma de requisiçao exta arrow funcion é o padrao middleware
    res.send( // neste caso estou respondendo com um obejto que sera convertido no formato json
        banco.getProdutos()
    )
})

app.get('/produtos/id', (req, res, next) => {
    res.send(banco.getProduto(req.params.id))
})

app.post

app.listen(port, () => { // essa funçao é uma callback apenas para conferencia nao é nessesaria
    console.log(`Servidor esta executando na porta ${port}`)
})// no final digo qual a porta que irei ficar escutando a aplicaçao