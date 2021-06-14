export default function makeCreateNewClinic ({ addNewClinicUseCase }) {
    return async function createNewClinic (httpRequest) {
      try {

        const { ...clinicInfo } = httpRequest.body
      
        const newClinic= await addNewClinicUseCase({
          ...clinicInfo
        })

        //TODO: Call email service

        return {
          headers: {
            'Content-Type': 'application/json',
            'Last-Modified': new Date(newClinic.modifiedOn).toUTCString()
          },
          statusCode: 201,
          body: { newClinic }
        }
        
      } catch (e) {
        // TODO: Error logging
        console.log(e)
  
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }
  