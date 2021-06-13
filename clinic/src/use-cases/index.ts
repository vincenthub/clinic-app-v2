import { clinicDb, clinicTypeDb } from '../data-access'
import { makeCreateClinic } from './create-clinic-usecase'
import { makeCreateClinicType } from './create-clinic-type-usecase'
import { makeGetAllClinicType } from './get-all-clinic-type-usecase'
import { makeGetAllClinic } from './get-all-clinic-usecase'

const addNewClinicUseCase = makeCreateClinic({ clinicDb })
const addNewClinicTypeUseCase = makeCreateClinicType({ clinicTypeDb })
const getAllClinicTypesUseCase = makeGetAllClinicType({ clinicTypeDb })
const getAllClinicsUseCase = makeGetAllClinic({ clinicDb })

const clinicService = Object.freeze({
    addNewClinicUseCase,
    addNewClinicTypeUseCase,
    getAllClinicTypesUseCase,
    getAllClinicsUseCase
})

export default clinicService
export { 
    addNewClinicUseCase, 
    addNewClinicTypeUseCase, 
    getAllClinicTypesUseCase, 
    getAllClinicsUseCase 
}