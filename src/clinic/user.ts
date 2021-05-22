export default function buildCreateUser ({ Id, md5 }) {
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
        loginAttempts = 0,
        verifiedEmail,
        lastLoginDate,
        createStatus = 'active',
        createdByUserId,
        createdOn = Date.now(),
        modifiedOn = Date.now()
    } = { 
        email: String,
        password: String,
        firstName: String,
        middleName: String,
        lastName: String,
        contactNumber: String,
        birthDate: String,
        image: String,
        token: String,
        tokenExpireDate: String,
        userPrefix: String,
        userSuffix: String,
        profession: String,
        address: Object,
        socialLogins: Array,
        loginAttempts: Number,
        verifiedEmail: String,
        lastLoginDate: String,
        createdByUserId: String,
        createdOn: String,
        modifiedOn: String
    }) {
      
        let hash

        return Object.freeze({
            getId: () => id,
            getHash: () => hash || (hash = makeHash()),
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
        
        function makeHash () {
            return md5(
                email
            )
        }
    }
}