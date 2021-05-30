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
exports.makeCreateClinicType = void 0;
const clinic_1 = require("../clinic");
function makeCreateClinicType({ clinicTypeDb }) {
    return function addNewClinicType(clinicTypeInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const clinicType = clinic_1.makeCreateNewClinicType(clinicTypeInfo);
            const exists = yield clinicTypeDb.findClinicTypeByName({ name: clinicType.getName() });
            if (exists) {
                return exists;
            }
            return clinicTypeDb.insertClinicType({
                id: clinicType.getId(),
                name: clinicType.getName(),
                description: clinicType.getDescription(),
                createStatus: clinicType.getCreateStatus(),
                createdByUserId: clinicType.getCreatedByUserId(),
                createOn: clinicType.getCreatedOn(),
                modifiedOn: clinicType.getModifiedOn()
            });
        });
    };
}
exports.makeCreateClinicType = makeCreateClinicType;
//# sourceMappingURL=create-clinic-type.js.map