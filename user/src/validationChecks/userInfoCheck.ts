import { check } from 'express-validator'

const userFieldValidation = [
    check('firstName', 'First Name should not be empty').not().isEmpty(),
    check('lastName', 'Last Name should not be empty').not().isEmpty(),
    check('mobileNumber', 'Mobile Number should not be empty').not().isEmpty(),
    check('email', 'Email address should be valid').isEmail(),
    check('password', 'Password should not be empty').isLength({ min: 8}),
    check('address.postal').not().isEmpty()
]

export { userFieldValidation }