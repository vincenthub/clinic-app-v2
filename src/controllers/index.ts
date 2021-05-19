//use-cases
import { addNewUser  } from '../use-cases/user'

//make controllers
import makeCreateUser from './create-new-user'

//clinic contollers
const createNewUser = makeCreateUser({ addNewUser })

export { createNewUser }