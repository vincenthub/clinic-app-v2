const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()

const port = process.env.NODE_PORT
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
