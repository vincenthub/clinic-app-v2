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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Id_1 = __importDefault(require("../Id"));
function makeClinicsDb({ makeDb }) {
    return Object.freeze({
        findClinicById,
        findByName,
        insert,
        getAllClinics
    });
    function findClinicById({ id: _id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield makeDb();
            const result = yield db.collection('clinic').find({ _id });
            const found = yield result.toArray();
            if (found.length === 0) {
                return null;
            }
            const _a = found[0], { _id: id } = _a, info = __rest(_a, ["_id"]);
            return Object.assign({ id }, info);
        });
    }
    function findByName({ name }) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield makeDb();
            const result = yield db.collection('clinic').find({ name });
            const found = yield result.toArray();
            if (found.length === 0) {
                return null;
            }
            const clinicInfo = __rest(found[0], []);
            return Object.assign({}, clinicInfo);
        });
    }
    function insert(_a) {
        var { id: _id = Id_1.default.makeId() } = _a, clinicInfo = __rest(_a, ["id"]);
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield makeDb();
            const result = yield db
                .collection('clinic')
                .insertOne(Object.assign({ _id }, clinicInfo));
            const _b = result.ops[0], { _id: id } = _b, insertedInfo = __rest(_b, ["_id"]);
            return Object.assign({ id }, insertedInfo);
        });
    }
    function getAllClinics({}) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield makeDb();
            const result = yield db.collection('clinic').find({});
            const found = yield result.toArray();
            if (found.length === 0) {
                return null;
            }
            return found;
        });
    }
}
exports.default = makeClinicsDb;
//# sourceMappingURL=clinic-db.js.map