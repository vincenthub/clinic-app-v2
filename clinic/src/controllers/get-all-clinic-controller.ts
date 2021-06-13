export default function makeGetAllClinic ({ getAllClinicsUseCase }) {
    return async function getAllClinic () {
      try {
        const clinics = await getAllClinicsUseCase({})
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 200,
          body: { clinics }
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
  