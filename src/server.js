// Como criar um web server
// dentro do Arquivo serve.js vamos configurar o express para ser nosso server
const port = 8080 // definimos a porta a ser utilizada

const banco = require('./db');// import do qu era pra ser um banco de dados

const express = require('express'); // fazemos a requisiçao do express

const app = express()// instacimaento do express em uma constante
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

app.use(urlencoded({ extended: true }))

// se envex de usar get usar o USE ele vai resonder a qualquer requisiçao feira ao servidor
app.get('/produtos', (req, res, next) => {  // o metodo get é uma forma de requisiçao exta arrow funcion é o padrao middleware
    res.send( // neste caso estou respondendo com um obejto que sera convertido no formato json
        banco.getProdutos()
    )
})

app.get('/produtos/:id', (req, res, next) => { //READ
    res.send(banco.getProduto(req.params.id))
})


app.post('/produtos', (req, res, next) => { // CREATE
    const produto = banco.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => { //UPDATE
    const produto = banco.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => { //DELETE
    const produto = banco.excluirProduto(req.params.id)
    res.send(produto)
})


app.listen(port, () => { // essa funçao é uma callback apenas para conferencia nao é nessesaria
    console.log(`Servidor esta executando na porta ${port}`)
})// no final digo qual a porta que irei ficar escutando a aplicaçao