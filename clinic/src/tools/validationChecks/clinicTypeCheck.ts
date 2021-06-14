import { check } from 'express-validator'

const clinicTypeFieldValidation = [
    check('name', 'Name should not be empty').not().isEmpty(),
    check('description', 'Description should not be empty').not().isEmpty()
    
]

export default clinicTypeFieldValidation 