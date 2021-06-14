import { check } from 'express-validator'

const clinicFieldValidation = [
    check('name', 'First Name should not be empty').not().isEmpty(),
    check('shortDescription', 'Last Name should not be empty').not().isEmpty(),
    check('longDescription', 'Mobile Number should not be empty').not().isEmpty(),
    check('address.postal').not().isEmpty()
]

export default clinicFieldValidation 