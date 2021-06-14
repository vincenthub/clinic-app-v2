import {smsModel} from "../models";
export default function makeSendSMSUseCase({ smsDb, smsClient }) {
    return async function sendSMSUseCase({ id } = { id: String }) {
        const smsInfo = await smsDb.findById({id})
        if (smsInfo === null) {
            throw new Error('SMS information not found!')
        }
        if (smsInfo.sentOn === null) {
            try {
                await smsClient({to: smsInfo.contactNumber, body: smsInfo.message})
                await smsDb.updateSentOnTimestamp( {id: smsInfo.id} )
                return await smsDb.findById({id: smsInfo.id})
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}
