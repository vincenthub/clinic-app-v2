export default function makeCreateNewClinicType ({ addNewClinicType, validationResult }) {
    return async function createNewClinicType (httpRequest, req) {
      try {

        //validators
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 400,
            body: errors
          }
        }

        const { ...clinicTypeInfo } = httpRequest.body
      
        const newClinicType= await addNewClinicType({
          ...clinicTypeInfo,
        })

        return {
          headers: {
            'Content-Type': 'application/json',
            'Last-Modified': new Date(newClinicType.modifiedOn).toUTCString()
          },
          statusCode: 200,
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
  