import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import makeCallback from './tools/express-callback'

import { 
    createNewClinicController, 
    createNewClinicTypeController,
    getAllClinicTypeController,
    getAllClinicController 
}  from './controllers'
import { 
    clinicFieldValidation, 
    clinicTypeFieldValidation
} from './tools/validationChecks'

dotenv.config()

const port = process.env.NODE_PORT
const app = express()
const apiRoot = process.env.API_ROOT

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
console.log(apiRoot)

//add routes here/app/v1
app.post(`${apiRoot}/clinic`, clinicFieldValidation, makeCallback(createNewClinicController))
app.post(`${apiRoot}/clinicType`, clinicTypeFieldValidation, makeCallback(createNewClinicTypeController))
app.get(`${apiRoot}/clinics`, makeCallback(getAllClinicTypeController))
app.get(`${apiRoot}/clinicTypes`, makeCallback(getAllClinicController))

// listen for requests
app.listen(port, () => {
    console.log(`Clinic service is listening on port ${port}`)
})
