const express = require('express')
const v1Routes = require('./v1/routes/movies.routes')

const app = express()

app.use(express.json())
express.urlencoded({ extended: false })

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', (req, res) => {
    res.send(`<h1>✌ Hello world</h1>`)
})

app.use('api/v1/movies', v1Routes)

module.exports = app