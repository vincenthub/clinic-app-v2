export function makeGetAllClinic({ clinicDb }) {
    return async function getAllClinics() {
      return clinicDb.getAllClinics({})
    }
  }
  