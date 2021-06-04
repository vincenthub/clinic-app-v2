import { makeCreateNewClinicType } from '../clinic'

export function makeCreateClinicType({ clinicTypeDb }) {

  return async function addNewClinicType(clinicTypeInfo) {
   
    const clinicType = makeCreateNewClinicType(clinicTypeInfo)
    
    const exists = await clinicTypeDb.findClinicTypeByName({ name: clinicType.getName() })

    if (exists) {
      return exists
    }

    return clinicTypeDb.insertClinicType({
      id: clinicType.getId(),
      name: clinicType.getName(),
      description: clinicType.getDescription(),
      createStatus: clinicType.getCreateStatus (),
      createdByUserId: clinicType.getCreatedByUserId(),
      createOn: clinicType.getCreatedOn(),
      modifiedOn: clinicType.getModifiedOn()
    })

  }

}
