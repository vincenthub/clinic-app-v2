export default function makeCreateEmailController ({ createEmailUseCase }) {
    return async function createEmailController (httpRequest, statusCodes) {
        try {

            const { ...emailInfo } = httpRequest.body

            const newEmail = await createEmailUseCase({...emailInfo})

            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(newEmail.modifiedOn).toUTCString()
                },
                statusCode: statusCodes.CREATED,
                body: { newEmail }
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

