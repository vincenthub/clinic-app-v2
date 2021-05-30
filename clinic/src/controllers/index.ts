//use-cases
import { addNewClinic, addNewClinicType, getAllClinics, getAllClinicTypes } from '../use-cases'

//make controllers
import makeCreateClinic from './create-new-clinic'
import makeCreateClinicType from './create-new-clinic-type'
import makeGetAllClinicTypes from './get-all-clinic-type'
import makeGetAllClinics from './get-all-clinic'

//express-validator
import { validationResult } from 'express-validator'

//clinic contollers
const createNewClinic = makeCreateClinic({ addNewClinic, validationResult })
const createNewClinicType = makeCreateClinicType({ addNewClinicType, validationResult })
const getAllClinicType = makeGetAllClinicTypes({ getAllClinicTypes })
const getAllClinic = makeGetAllClinics({ getAllClinics })

export { createNewClinic, getAllClinic, createNewClinicType, getAllClinicType }