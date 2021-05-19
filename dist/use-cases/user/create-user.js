"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateUser = void 0;
const clinic_1 = require("../../clinic");
function makeCreateUser({ userDb }) {
    return function addNewUser(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = clinic_1.makeCreateNewUser(userInfo);
            const exists = yield userDb.findByHash({ hash: user.getHash() });
            if (exists) {
                return exists;
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
                loginAttempts: user.getLoginAttempts(),
                isVerifiedEmail: user.isVerifiedEmail(),
                lastLogin: user.getLastLoginDate(),
                createStatus: user.getCreateStatus(),
                createdByUser: user.getCreatedByUserId(),
                createOn: user.getCreatedOn(),
                modifiedOn: user.getModifiedOn()
            });
        });
    };
}
exports.makeCreateUser = makeCreateUser;
//# sourceMappingURL=create-user.js.map