import { makeCreateNewClinicTypeModel } from '../models'

export function makeCreateClinicType({ clinicTypeDb }) {

  return async function addNewClinicType(clinicTypeInfo) {
   
    const clinicType = makeCreateNewClinicTypeModel(clinicTypeInfo)
    
    const exists = await clinicTypeDb.findClinicTypeByName({ name: clinicType.getName() })

    if (exists) {
      throw new RangeError('Clinic Type is already exist')
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
