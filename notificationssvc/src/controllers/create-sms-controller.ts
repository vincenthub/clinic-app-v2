export default function makeCreateSMSController ({ createSMSUseCase }) {
    return async function createSMSController ( httpRequest, statusCodes ) {
        try {

            const { ...smsInfo } = httpRequest.body

            const newSMS = await createSMSUseCase({ ...smsInfo })

            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(newSMS.modifiedOn).toUTCString()
                },
                statusCode: statusCodes.CREATED,
                body: { newSMS }
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

