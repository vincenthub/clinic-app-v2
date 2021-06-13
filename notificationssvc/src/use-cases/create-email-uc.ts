import {emailModel} from '../models'
export default function makeCreateEmailUseCase({ emailDb }) {
    return async function createSMSUseCase( emailInfo ) {
        const email = emailModel(emailInfo)
        return emailDb.insert({
            emailAddress: email.getEmailAddress(),
            plainTextMessage: email.getPlainTextMessage(),
            htmlMessage: email.getHtmlMessage(),
            sendOn: email.getSendOn(),
            sentOn: null,
            createdOn: Date.now(),
            modifiedOn: Date.now(),
        })
    }
}
