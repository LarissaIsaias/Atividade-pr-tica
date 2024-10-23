const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World")

app.get('/sobre', (req, res) => {
    res.send('Esta é a página sobre, onde você encontra informações personalizadas.');
});

})
app.listen(port, () => {
    console.log("Servidor rodando em: http://localhost:" + port)
})