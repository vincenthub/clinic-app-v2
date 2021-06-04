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
Object.defineProperty(exports, "__esModule", { value: true });
function makeClinicTypeDb({ makeDb }) {
    return Object.freeze({
        insertClinicType,
        findClinicTypeByName,
        getAllClinicTypes
    });
    function insertClinicType(_a) {
        var typeInfo = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield makeDb();
            const result = yield db
                .collection('clinictype')
                .insertOne(Object.assign({}, typeInfo));
            const insertedTypeInfo = __rest(result.ops[0], []);
            return Object.assign({}, insertedTypeInfo);
        });
    }
    function findClinicTypeByName({ name }) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield makeDb();
            const result = yield db.collection('clinictype').find({ name });
            const found = yield result.toArray();
            if (found.length === 0) {
                return null;
            }
            const clinicInfo = __rest(found[0], []);
            return Object.assign({}, clinicInfo);
        });
    }
    function getAllClinicTypes({}) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield makeDb();
            const result = yield db.collection('clinictype').find({});
            const found = yield result.toArray();
            if (found.length === 0) {
                return null;
            }
            return found;
        });
    }
}
exports.default = makeClinicTypeDb;
//# sourceMappingURL=clinic-type-db.js.map