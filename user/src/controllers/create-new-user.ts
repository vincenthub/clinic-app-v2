export default function makeCreateNewUser ({ addNewUser, validationResult }) {
    return async function createNewUser (httpRequest, req) {
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

        const { ...userInfo } = httpRequest.body
      
        const newUser = await addNewUser({
          ...userInfo,
        })

        return {
          headers: {
            'Content-Type': 'application/json',
            'Last-Modified': new Date(newUser.modifiedOn).toUTCString()
          },
          statusCode: 201,
          body: { newUser }
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
  