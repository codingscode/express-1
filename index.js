const express = require('express')
const app = express()

app.get('/opa',(req, res) => {
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
})

app.listen(3000, () => {
    console.log('Backend executando...')
})

//localhost:3000
