import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import { createNewUser }  from './controllers'
import makeCallback from './express-callback'

dotenv.config()

const port = process.env.NODE_PORT
const app = express()
const apiRoot = process.env.API_ROOT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//add routes here/app/v1
app.post('/api/v1/user', makeCallback(createNewUser))

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
