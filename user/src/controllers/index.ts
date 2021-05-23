//use-cases
import { addNewUser  } from '../use-cases/user'

//make controllers
import makeCreateUser from './create-new-user'

//express-validator
import { validationResult } from 'express-validator'

//clinic contollers
const createNewUser = makeCreateUser({ addNewUser, validationResult })

export { createNewUser }