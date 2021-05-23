import { makeCreateUser } from './create-user'
import { userDb } from '../../data-access'

const addNewUser = makeCreateUser({ userDb })

const userService = Object.freeze({
    addNewUser
})

export { addNewUser }