const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/instagram', (req, res) => {
    res.send('manish_kr.official')
})
app.get('/github', (req, res) => {
    res.send('ManishIIITK')
})

app.get('/login', (req, res) => {
    res.send('Hello from login page')
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`This app is listening on port ${port}`)
})