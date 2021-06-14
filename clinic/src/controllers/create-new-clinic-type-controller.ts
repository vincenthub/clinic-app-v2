export default function makeCreateNewClinicType ({ addNewClinicTypeUseCase }) {
    return async function createNewClinicType (httpRequest) {
      try {

        const { ...clinicTypeInfo } = httpRequest.body
      
        const newClinicType= await addNewClinicTypeUseCase({
          ...clinicTypeInfo
        })

        return {
          headers: {
            'Content-Type': 'application/json',
            'Last-Modified': new Date(newClinicType.modifiedOn).toUTCString()
          },
          statusCode: 201,
          body: { newClinicType }
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
  