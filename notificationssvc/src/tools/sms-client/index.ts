import { Twilio } from "twilio"
const {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER,
    SMS_TO_PHONE_NUMBER,
} = process.env

export default function makeSMSClient() {
    return async function smsClient({to = null, body = null} = { } ) {
        if (to !== null && body !== null) {
            try {
                const client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
                await client.messages
                    .create({
                        body,
                        from: TWILIO_PHONE_NUMBER,
                        to: SMS_TO_PHONE_NUMBER || to
                    })
            } catch (error) {
                throw new Error('error_sms_could_not_be_delivered')
            }
            return true
        }
        return false
    }
}
