"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllClinics = exports.getAllClinicTypes = exports.addNewClinicType = exports.addNewClinic = void 0;
const data_access_1 = require("../data-access");
const create_clinic_1 = require("./create-clinic");
const create_clinic_type_1 = require("./create-clinic-type");
const get_all_clinic_type_1 = require("./get-all-clinic-type");
const get_all_clinic_1 = require("./get-all-clinic");
const addNewClinic = create_clinic_1.makeCreateClinic({ clinicDb: data_access_1.clinicDb });
exports.addNewClinic = addNewClinic;
const addNewClinicType = create_clinic_type_1.makeCreateClinicType({ clinicTypeDb: data_access_1.clinicTypeDb });
exports.addNewClinicType = addNewClinicType;
const getAllClinicTypes = get_all_clinic_type_1.makeGetAllClinicType({ clinicTypeDb: data_access_1.clinicTypeDb });
exports.getAllClinicTypes = getAllClinicTypes;
const getAllClinics = get_all_clinic_1.makeGetAllClinic({ clinicDb: data_access_1.clinicDb });
exports.getAllClinics = getAllClinics;
const clinicService = Object.freeze({
    addNewClinic,
    addNewClinicType,
    getAllClinicTypes,
    getAllClinics
});
exports.default = clinicService;
//# sourceMappingURL=index.js.map