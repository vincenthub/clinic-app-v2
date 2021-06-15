import makeCreateEmailUseCase from "./create-email-uc"
import makeCreateSMSUseCase from "./create-sms-uc"
import makeSendSMSUseCase from "./send-sms-uc"
import {smsDb, emailDb} from "../data-access"
import makeSendSMS from "../tools/sms-client"

const createEmailUseCase = makeCreateEmailUseCase({ emailDb })
const createSMSUseCase = makeCreateSMSUseCase({smsDb})

const sendSMS = makeSendSMS()
const sendSMSUseCase = makeSendSMSUseCase({smsDb, sendSMS})

export { createSMSUseCase, createEmailUseCase, sendSMSUseCase }
