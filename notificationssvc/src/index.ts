import express from 'express'
// const app = express()
// app.use((req,res,next) => {
//     return res.status(200).json()
// });
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

app.post('/notification/sendSMS', smsValidation, makeCallback(createSMSController))
app.post('/notification/sendEmail', emailValidation, makeCallback(createEmailController))

app.listen(port, () => {
    console.log(`Notifications service is listening on port ${port}`)
})
