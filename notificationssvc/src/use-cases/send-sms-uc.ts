export default function makeSendSMSUseCase({ smsDb, sendSMS }) {
    return async function sendSMSUseCase({ id } = { id: String }) {
        const smsInfo = await smsDb.findById({id})
        if (smsInfo === null) {
            throw new Error('sms_args_is_empty')
        }
        if (smsInfo.sentOn === null) {
            try {
                await sendSMS({to: smsInfo.contactNumber, body: smsInfo.message})
                await smsDb.updateSentOnTimestamp( {id: smsInfo.id} )
                return await smsDb.findById({id: smsInfo.id})
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}
