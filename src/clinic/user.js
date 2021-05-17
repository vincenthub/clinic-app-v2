export default function buildCreateUser ({ Id }) {
    return function createUser ( {
        id = Id.makeId(),
        email,
        password,
        firstName,
        middleName,
        lastName,
        contactNumber,
        birthDate,
        image,
        token,
        tokenExpireDate,
        userPrefix,
        userSuffix,
        profession,
        address,
        socialLogins,
        loginAttempts,
        verifiedEmail,
        lastLoginDate,
        createStatus = 'active',
        createdByUserId,
        createdOn = Date.now(),
        modifiedOn = Date.now()
    } = {}) {
        //TODO:: Validator

        return Object.freeze({
            getId: () => id,
            getEmail: () => email,
            getPassword: () => password,
            getFirstName: () => firstName,
            getMiddleName: () => middleName,
            getLastName: () => lastName,
            getContactNumber: () => contactNumber,
            getBirthDate: () => birthDate,
            getImage: () => image,
            getToken: () => token,
            getTokenExpireDate: () => tokenExpireDate,
            getUserPrefix: () => userPrefix,
            getUserSuffix: () => userSuffix,
            getProfession: () => profession,
            getAddress: () => address,
            getSocialLogins: () => socialLogins,
            getLoginAttempts: () => loginAttempts,
            isVerifiedEmail: () => verifiedEmail,
            getLastLoginDate: () => lastLoginDate,
            getCreateStatus : () => createStatus,
            getCreatedByUserId: () => createdByUserId,
            getCreatedOn: () => createdOn,
            getModifiedOn: () => modifiedOn
        })
    }
}