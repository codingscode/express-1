const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Roberto'))

app.use((req, res, proximo) => {  //sem o 3º parametro proximo chama o próximo app
    console.log('Antes...')  //fazer requisicao no browser ou outro
    proximo()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte) {
      corpo += parte
    })
  
    req.on('end', function() {
      res.send(corpo)
    })
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Clientes ${req.params.id} selecionado !`)
})


app.get('/opa',(req, res, proximo) => {
    //res.send('<h1>Estou bem!</h1><br><br><h2>Tipo é HTML!</h2>')
    /*res.json({
        nome: 'celular',
        preco: 600.00,
        desconto: 0.12 
    }) */
    /*res.json([
        {id: 7, nome: 'Ana', posicao: 1},
        {id: 34, nome: 'Bia', posicao: 2},
        {id: 73, nome: 'Carlos', posicao: 3}
    ])*/
    console.log('Durante...')  
    res.json({
        data: [
            {id: 7, nome: 'Ana', posicao: 1},
            {id: 34, nome: 'Bia', posicao: 2},
            {id: 73, nome: 'Carlos', posicao: 3}
          ],
        contar: 30,
        skip: 0,
        limite: 3,
        status: 200
    })
    proximo()
})

app.use((req, res) => {  
    console.log('Depois...')  
})


app.listen(3000, () => {
    console.log('Backend executando...')
})

//localhost:3000
//localhost:3000/opa
//localhost:3000/clientes/1
//localhost:3000/clientes/relatorio?completo=true&ano=2018
//localhost:3000/corpo
