import Id from '../Id'
import buidlMakeCreateClinic from './clinic'
import buidlMakeCreateClinicType from './clinicType'

const makeCreateNewClinic = buidlMakeCreateClinic({ Id }) 
const makeCreateNewClinicType = buidlMakeCreateClinicType({ Id })

export { 
    makeCreateNewClinic,
    makeCreateNewClinicType 
}