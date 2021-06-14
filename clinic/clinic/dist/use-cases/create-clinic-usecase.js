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
exports.makeCreateClinic = void 0;
const models_1 = require("../models");
function makeCreateClinic({ clinicDb }) {
    return function addNewClinic(clinicInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const clinic = models_1.makeCreateNewClinicModel(clinicInfo);
            const exists = yield clinicDb.findByName({ name: clinic.getName() });
            if (exists) {
                throw new RangeError('Clinic is already exist');
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
                createStatus: clinic.getCreateStatus(),
                createdByUserId: clinic.getCreatedByUserId(),
                createOn: clinic.getCreatedOn(),
                modifiedOn: clinic.getModifiedOn(),
                address: clinic.getAddress()
            });
        });
    };
}
exports.makeCreateClinic = makeCreateClinic;
//# sourceMappingURL=create-clinic-usecase.js.map