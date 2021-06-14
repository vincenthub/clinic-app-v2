import makeCreateEmailUseCase from "./create-email-uc"
import makeCreateSMSUseCase from "./create-sms-uc"
import makeSendSMSUseCase from "./send-sms-uc"
import {smsDb, emailDb} from "../data-access"
import makeSMSClient from "../tools/sms-client"

const createEmailUseCase = makeCreateEmailUseCase({ emailDb })
const createSMSUseCase = makeCreateSMSUseCase({smsDb})

const smsClient = makeSMSClient()
const sendSMSUseCase = makeSendSMSUseCase({smsDb, smsClient})

export { createSMSUseCase, createEmailUseCase, sendSMSUseCase }
