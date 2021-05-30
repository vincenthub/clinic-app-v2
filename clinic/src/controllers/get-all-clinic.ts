export default function makeGetAllClinic ({ getAllClinics }) {
    return async function getAllClinic () {
      try {
        const clinics = await getAllClinics({})
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
  