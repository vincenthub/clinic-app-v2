import { Twilio } from "twilio"
const {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER
} = process.env
export default function makeSendSMS() {
    return async function sendSMS({ to = null, body = null }) {
        try {
            const client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
            await client.messages
                .create({ body, to, from: TWILIO_PHONE_NUMBER })
        } catch (error) {
            throw new Error(error)
        }
        return true
    }
}
