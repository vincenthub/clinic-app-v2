import {smsModel} from "../models";
export default function makeCreateSMSUseCase({ smsDb }) {
    return async function createSMSUseCase( smsInfo ) {
        const sms = smsModel(smsInfo)
        return smsDb.insert({
            contactNumber: sms.getContactNumber(),
            message: sms.getMessage(),
            sendOn: sms.getSendOn(),
            sentOn: null,
            createdOn: Date.now(),
            modifiedOn: Date.now()
        })
    }
}
