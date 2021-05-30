"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateNewClinicType = exports.makeCreateNewClinic = void 0;
const Id_1 = __importDefault(require("../Id"));
const clinic_1 = __importDefault(require("./clinic"));
const clinicType_1 = __importDefault(require("./clinicType"));
const makeCreateNewClinic = clinic_1.default({ Id: Id_1.default });
exports.makeCreateNewClinic = makeCreateNewClinic;
const makeCreateNewClinicType = clinicType_1.default({ Id: Id_1.default });
exports.makeCreateNewClinicType = makeCreateNewClinicType;
//# sourceMappingURL=index.js.map