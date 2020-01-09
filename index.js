const express = require('express')
const app = express()

app.use((req, res) => {
    res.send('Estou <b>bem</b>!')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})

//localhost:3000