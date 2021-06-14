export default function makeGetAllClinicType ({ getAllClinicTypesUseCase }) {
    return async function getNewClinicType () {
      try {
        const clinicTypes = await getAllClinicTypesUseCase({})
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
  