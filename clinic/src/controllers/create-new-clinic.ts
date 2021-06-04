export default function makeCreateNewClinic ({ addNewClinic, validationResult }) {
    return async function createNewClinic (httpRequest, req) {
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

        const { ...clinicInfo } = httpRequest.body
      
        const newClinic= await addNewClinic({
          ...clinicInfo,
        })

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
  