import { check } from 'express-validator'

import makeSMSValidation from './sms-validation'
import makeEmailValidation from './email-validation'

const smsValidation = makeSMSValidation({ check })
const emailValidation = makeEmailValidation({ check })

export { smsValidation, emailValidation }
