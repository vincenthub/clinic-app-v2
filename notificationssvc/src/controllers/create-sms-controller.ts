export default function makeCreateSMSController ({ createSMSUseCase, sendSMSUseCase }) {
    return async function createSMSController ( httpRequest, statusCodes ) {
        try {

            const { ...smsInfo } = httpRequest.body

            const newSMS = await createSMSUseCase({ ...smsInfo })

            const sendSMS = await sendSMSUseCase( {id: newSMS.id } )

            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(newSMS.modifiedOn).toUTCString()
                },
                statusCode: statusCodes.CREATED,
                body: { sendSMS }
            }

        } catch (e) {

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: statusCodes.BAD_REQUEST,
                body: {
                    error: e.message
                }
            }
        }
    }
}

