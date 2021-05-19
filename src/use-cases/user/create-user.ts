import { makeCreateNewUser } from '../../clinic'

export function makeCreateUser({ userDb }) {

  return async function addNewUser (userInfo) {
   
    const user = makeCreateNewUser(userInfo)
    
    const exists = await userDb.findByHash({ hash: user.getHash() })

    if (exists) {
      return exists
    }

    return userDb.insert({
      id: user.getId(),
      hash: user.getHash(),
      email: user.getEmail(),
      password: user.getPassword(),
      firstName: user.getFirstName(),
      middleName: user.getMiddleName(),
      lastName: user.getLastName(),
      contactNumber: user.getContactNumber(),
      birthDate: user.getBirthDate(),
      image: user.getImage(),
      token: user.getToken(),
      tokenExpireDate: user.getTokenExpireDate(),
      userPrefix: user.getUserPrefix(),
      userSuffix: user.getUserSuffix(),
      profession: user.getProfession(),
      address: user.getAddress(),
      socialLogins: user.getSocialLogins(),
      loginAttepmts: user.getLoginAttempts(),
      isVerifiedEmail: user.isVerifiedEmail(),
      lastLogin: user.getLastLoginDate(),
      createStatus: user.getCreateStatus (),
      createdByUser: user.getCreatedByUserId(),
      createOn: user.getCreatedOn(),
      modifiedOn: user.getModifiedOn()
    })

  }

}
