"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllClinicsUseCase = exports.getAllClinicTypesUseCase = exports.addNewClinicTypeUseCase = exports.addNewClinicUseCase = void 0;
const data_access_1 = require("../data-access");
const create_clinic_usecase_1 = require("./create-clinic-usecase");
const create_clinic_type_usecase_1 = require("./create-clinic-type-usecase");
const get_all_clinic_type_usecase_1 = require("./get-all-clinic-type-usecase");
const get_all_clinic_usecase_1 = require("./get-all-clinic-usecase");
const addNewClinicUseCase = create_clinic_usecase_1.makeCreateClinic({ clinicDb: data_access_1.clinicDb });
exports.addNewClinicUseCase = addNewClinicUseCase;
const addNewClinicTypeUseCase = create_clinic_type_usecase_1.makeCreateClinicType({ clinicTypeDb: data_access_1.clinicTypeDb });
exports.addNewClinicTypeUseCase = addNewClinicTypeUseCase;
const getAllClinicTypesUseCase = get_all_clinic_type_usecase_1.makeGetAllClinicType({ clinicTypeDb: data_access_1.clinicTypeDb });
exports.getAllClinicTypesUseCase = getAllClinicTypesUseCase;
const getAllClinicsUseCase = get_all_clinic_usecase_1.makeGetAllClinic({ clinicDb: data_access_1.clinicDb });
exports.getAllClinicsUseCase = getAllClinicsUseCase;
const clinicService = Object.freeze({
    addNewClinicUseCase,
    addNewClinicTypeUseCase,
    getAllClinicTypesUseCase,
    getAllClinicsUseCase
});
exports.default = clinicService;
//# sourceMappingURL=index.js.map