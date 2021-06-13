"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateNewClinicTypeModel = exports.makeCreateNewClinicModel = void 0;
const Id_1 = __importDefault(require("../tools/Id"));
const clinic_model_1 = __importDefault(require("./clinic-model"));
const clinicType_model_1 = __importDefault(require("./clinicType-model"));
const makeCreateNewClinicModel = clinic_model_1.default({ Id: Id_1.default });
exports.makeCreateNewClinicModel = makeCreateNewClinicModel;
const makeCreateNewClinicTypeModel = clinicType_model_1.default({ Id: Id_1.default });
exports.makeCreateNewClinicTypeModel = makeCreateNewClinicTypeModel;
//# sourceMappingURL=index.js.map