import { makeCreateNewClinicModel } from '../models'

export function makeCreateClinic({ clinicDb }) {

  return async function addNewClinic (clinicInfo) {
   
    const clinic = makeCreateNewClinicModel(clinicInfo)
    
    const exists = await clinicDb.findByName({ name: clinic.getName() })

    if (exists) {
      throw new RangeError('Clinic is already exist')
    }

    return clinicDb.insert({
      id: clinic.getId(),
      name: clinic.getName(),
      shortDescription: clinic.getShortDescription(),
      longDescription: clinic.getLongDescription(),
      contactNumber: clinic.getContactNumber(),
      logo: clinic.getLogo(),
      images: clinic.getImages(),
      type: clinic.getType(),
      staffs: clinic.getStaffs(),
      schedules: clinic.getSchedules(),
      services: clinic.getServices(),
      isPublished: clinic.isPublished(),
      createStatus: clinic.getCreateStatus (),
      createdByUserId: clinic.getCreatedByUserId(),
      createOn: clinic.getCreatedOn(),
      modifiedOn: clinic.getModifiedOn(),
      address: clinic.getAddress()
    })

  }

}
