"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllClinicType = exports.createNewClinicType = exports.getAllClinic = exports.createNewClinic = void 0;
//use-cases
const use_cases_1 = require("../use-cases");
//make controllers
const create_new_clinic_1 = __importDefault(require("./create-new-clinic"));
const create_new_clinic_type_1 = __importDefault(require("./create-new-clinic-type"));
const get_all_clinic_type_1 = __importDefault(require("./get-all-clinic-type"));
const get_all_clinic_1 = __importDefault(require("./get-all-clinic"));
//express-validator
const express_validator_1 = require("express-validator");
//clinic contollers
const createNewClinic = create_new_clinic_1.default({ addNewClinic: use_cases_1.addNewClinic, validationResult: express_validator_1.validationResult });
exports.createNewClinic = createNewClinic;
const createNewClinicType = create_new_clinic_type_1.default({ addNewClinicType: use_cases_1.addNewClinicType, validationResult: express_validator_1.validationResult });
exports.createNewClinicType = createNewClinicType;
const getAllClinicType = get_all_clinic_type_1.default({ getAllClinicTypes: use_cases_1.getAllClinicTypes });
exports.getAllClinicType = getAllClinicType;
const getAllClinic = get_all_clinic_1.default({ getAllClinics: use_cases_1.getAllClinics });
exports.getAllClinic = getAllClinic;
//# sourceMappingURL=index.js.map