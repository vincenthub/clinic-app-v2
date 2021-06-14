import {
    createEmailUseCase,
    createSMSUseCase,
    sendSMSUseCase,
} from '../use-cases'

import makeCreateEmailController from './create-email-controller'
import makeCreateSMSController from './create-sms-controller'

const createEmailController = makeCreateEmailController({ createEmailUseCase })
const createSMSController = makeCreateSMSController({ createSMSUseCase, sendSMSUseCase })

const controller = Object.freeze({
    createEmailController,
    createSMSController,
    // createValidationCodeController,
    // validateValidationCodeController
})

export default controller
export {
    createEmailController,
    createSMSController,
    // createValidationCodeController,
    // validateValidationCodeController
}
