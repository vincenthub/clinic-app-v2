"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllClinicController = exports.getAllClinicTypeController = exports.createNewClinicTypeController = exports.createNewClinicController = void 0;
//use-cases
const use_cases_1 = require("../use-cases");
//make controllers
const create_new_clinic_controller_1 = __importDefault(require("./create-new-clinic-controller"));
const create_new_clinic_type_controller_1 = __importDefault(require("./create-new-clinic-type-controller"));
const get_all_clinic_type_controller_1 = __importDefault(require("./get-all-clinic-type-controller"));
const get_all_clinic_controller_1 = __importDefault(require("./get-all-clinic-controller"));
//clinic contollers
const createNewClinicController = create_new_clinic_controller_1.default({ addNewClinicUseCase: use_cases_1.addNewClinicUseCase });
exports.createNewClinicController = createNewClinicController;
const createNewClinicTypeController = create_new_clinic_type_controller_1.default({ addNewClinicTypeUseCase: use_cases_1.addNewClinicTypeUseCase });
exports.createNewClinicTypeController = createNewClinicTypeController;
const getAllClinicTypeController = get_all_clinic_type_controller_1.default({ getAllClinicTypesUseCase: use_cases_1.getAllClinicTypesUseCase });
exports.getAllClinicTypeController = getAllClinicTypeController;
const getAllClinicController = get_all_clinic_controller_1.default({ getAllClinicsUseCase: use_cases_1.getAllClinicsUseCase });
exports.getAllClinicController = getAllClinicController;
//# sourceMappingURL=index.js.map