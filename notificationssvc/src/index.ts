import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import {
    createEmailController,
    createSMSController,
} from './controllers'
import {
    smsValidation,
    emailValidation,
} from './tools/validations'
import makeCallback from './tools/express-callback'

dotenv.config()

const port = process.env.NODE_PORT
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/notification/sendSMS', smsValidation, makeCallback(createSMSController))
app.post('/notification/sendEmail', emailValidation, makeCallback(createEmailController))

app.listen(port, () => {
    console.log(`Notifications service is listening on port ${port}`)
})
