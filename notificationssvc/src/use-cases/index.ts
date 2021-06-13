import makeCreateEmailUseCase from "./create-email-uc"
import makeCreateSMSUseCase from "./create-sms-uc";
import {smsDb, emailDb} from "../data-access";

const createEmailUseCase = makeCreateEmailUseCase({ emailDb })
const createSMSUseCase = makeCreateSMSUseCase({smsDb})

export { createSMSUseCase, createEmailUseCase }
