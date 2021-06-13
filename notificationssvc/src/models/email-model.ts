// todo: user interface for EmailModel
export default function makeEmailModel({ Id }) {
    return function emailModel(
        {
            id = Id.makeId(),
            emailAddress,
            plainTextMessage,
            htmlMessage,
            sendOn= Date.now()
        } = {
            emailAddress: String,
            plainTextMessage: String,
            htmlMessage: String,
            sendOn: Date
        }
    ) {
        return Object.freeze({
            getId: () => id,
            getEmailAddress: () => emailAddress,
            getPlainTextMessage: () => plainTextMessage,
            getHtmlMessage: () => htmlMessage,
            getSendOn: () => sendOn
        })
    }
}
