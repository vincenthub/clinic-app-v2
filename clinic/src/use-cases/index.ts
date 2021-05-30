import { clinicDb, clinicTypeDb } from '../data-access'
import { makeCreateClinic } from './create-clinic'
import { makeCreateClinicType } from './create-clinic-type'
import { makeGetAllClinicType } from './get-all-clinic-type'
import { makeGetAllClinic } from './get-all-clinic'


const addNewClinic = makeCreateClinic({ clinicDb })
const addNewClinicType = makeCreateClinicType({ clinicTypeDb })
const getAllClinicTypes = makeGetAllClinicType({ clinicTypeDb })
const getAllClinics = makeGetAllClinic({ clinicDb })

const clinicService = Object.freeze({
    addNewClinic,
    addNewClinicType,
    getAllClinicTypes,
    getAllClinics
})

export default clinicService
export { addNewClinic, addNewClinicType, getAllClinicTypes, getAllClinics }