import Id from '../tools/id'
import makeEmailModel from './email-model'
import makeSMSModel from "./sms-model";

const emailModel = makeEmailModel({Id})
const smsModel = makeSMSModel({Id})

export { emailModel, smsModel }
