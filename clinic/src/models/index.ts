import Id from '../tools/Id'
import buildlMakeCreateClinic from './clinic-model'
import buildlMakeCreateClinicType from './clinicType-model'

const makeCreateNewClinicModel = buildlMakeCreateClinic({ Id }) 
const makeCreateNewClinicTypeModel = buildlMakeCreateClinicType({ Id })

export { 
    makeCreateNewClinicModel,
    makeCreateNewClinicTypeModel 
}