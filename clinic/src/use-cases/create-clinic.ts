import { makeCreateNewClinic } from '../clinic'

export function makeCreateClinic({ clinicDb }) {

  return async function addNewClinic (clinicInfo) {
   
    const clinic = makeCreateNewClinic(clinicInfo)
    
    const exists = await clinicDb.findByName({ name: clinic.getName() })

    if (exists) {
      return exists
    }

    return clinicDb.insert({
      id: clinic.getId(),
      name: clinic.getName(),
      shortDescription: clinic.getShortDescription(),
      longDescription: clinic.getLongDescription(),
      contactNumber: clinic.getContactNumber(),
      logo: clinic.getLogo(),
      images: clinic.getImages(),
      address: clinic.getAddress(),
      type: clinic.getType(),
      staffs: clinic.getStaffs(),
      schedules: clinic.getSchedules(),
      services: clinic.getServices(),
      isPublished: clinic.isPublised(),
      createStatus: clinic.getCreateStatus (),
      createdByUserId: clinic.getCreatedByUserId(),
      createOn: clinic.getCreatedOn(),
      modifiedOn: clinic.getModifiedOn()
    })

  }

}
