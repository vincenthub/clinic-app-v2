import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import makeCallback from './express-callback'
import { 
    createNewClinic, 
    createNewClinicType,
    getAllClinicType,
    getAllClinic 
}  from './controllers'
import { 
    clinicFieldValidation, 
    clinicTypeFieldValidation
} from './validationChecks'

dotenv.config()

const port = process.env.NODE_PORT
const app = express()
const apiRoot = process.env.API_ROOT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
console.log(apiRoot)

//add routes here/app/v1
app.post(`${apiRoot}/clinic`, clinicFieldValidation, makeCallback(createNewClinic))
app.get(`${apiRoot}/clinics`, makeCallback(getAllClinic))
app.post(`${apiRoot}/clinicType`, clinicTypeFieldValidation, makeCallback(createNewClinicType))
app.get(`${apiRoot}/clinicTypes`, makeCallback(getAllClinicType))

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
