export default function makeGetAllClinicType ({ getAllClinicTypes }) {
    return async function getNewClinicType () {
      try {
        const clinicTypes = await getAllClinicTypes({})
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode: 200,
          body: { clinicTypes }
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
  