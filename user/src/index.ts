import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import { createNewUser }  from './controllers'
import makeCallback from './express-callback'
import { userFieldValidation } from './validationChecks/userInfoCheck'

dotenv.config()

const port = process.env.NODE_PORT
const app = express()
const apiRoot = process.env.API_ROOT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
console.log(apiRoot)

//add routes here/app/v1
app.post(`${apiRoot}/user`, userFieldValidation, makeCallback(createNewUser))

// listen for requests
app.listen(port, () => {
    console.log(`User service is listening on port ${port}`)
})
