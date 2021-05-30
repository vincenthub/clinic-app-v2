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
function makeCreateNewClinicType({ addNewClinicType, validationResult }) {
    return function createNewClinicType(httpRequest, req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //validators
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        statusCode: 400,
                        body: errors
                    };
                }
                const clinicTypeInfo = __rest(httpRequest.body, []);
                const newClinicType = yield addNewClinicType(Object.assign({}, clinicTypeInfo));
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        'Last-Modified': new Date(newClinicType.modifiedOn).toUTCString()
                    },
                    statusCode: 200,
                    body: { newClinicType }
                };
            }
            catch (e) {
                // TODO: Error logging
                console.log(e);
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 400,
                    body: {
                        error: e.message
                    }
                };
            }
        });
    };
}
exports.default = makeCreateNewClinicType;
//# sourceMappingURL=create-new-clinic-type.js.map