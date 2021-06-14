//use-cases
import { 
    addNewClinicUseCase, 
    addNewClinicTypeUseCase, 
    getAllClinicsUseCase, 
    getAllClinicTypesUseCase 
} from '../use-cases'

//make controllers
import makeCreateClinic from './create-new-clinic-controller'
import makeCreateClinicType from './create-new-clinic-type-controller'
import makeGetAllClinicTypes from './get-all-clinic-type-controller'
import makeGetAllClinics from './get-all-clinic-controller'

//clinic contollers
const createNewClinicController = makeCreateClinic({ addNewClinicUseCase })
const createNewClinicTypeController = makeCreateClinicType({ addNewClinicTypeUseCase })
const getAllClinicTypeController = makeGetAllClinicTypes({ getAllClinicTypesUseCase })
const getAllClinicController = makeGetAllClinics({ getAllClinicsUseCase })

export { createNewClinicController, createNewClinicTypeController, getAllClinicTypeController, getAllClinicController }