import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import makeCallback from './tools/express-callback'
import {
    createEmailController,
    createSMSController,
} from './controllers'
import {
    smsValidation,
    emailValidation,
} from './tools/validations'

dotenv.config()

const port = process.env.NODE_PORT
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/sendSMS', smsValidation, makeCallback(createSMSController))
app.post('/sendEmail', emailValidation, makeCallback(createEmailController))

app.listen(port, () => {
    console.log(`Notifications service is listening on port ${port}`)
})
