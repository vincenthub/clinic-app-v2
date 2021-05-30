export function makeGetAllClinicType({ clinicTypeDb }) {
  return async function getAllClinicTypes() {
    return clinicTypeDb.getAllClinicTypes({})
  }
}
