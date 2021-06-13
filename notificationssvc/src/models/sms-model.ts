// todo: user interface for SMSModel
export default function makeSMSModel({ Id }) {
    return function smsModel (
        {
            id = Id.makeId(),
            contactNumber,
            message,
            sendOn = Date.now(),
            sentOn = null,
            createdOn = Date.now(),
            modifiedOn = Date.now()
        } = {
            contactNumber: String,
            message: String,
            sendOn: Date,
            sentOn: Date,
            createdOn: Date,
            modifiedOn: Date
        } ) {
            return Object.freeze({
                getId: () => id,
                getContactNumber: () => contactNumber,
                getMessage: () => message,
                getSendOn: () => sendOn, // timestamp on when to send
                getSentOn: () => sentOn, // timestamp it was sent
                getCreatedOn: () => createdOn, // timestamp it was created
                getModifiedOn: () => modifiedOn //
            })
    }
}
