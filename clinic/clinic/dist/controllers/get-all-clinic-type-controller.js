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
function makeGetAllClinicType({ getAllClinicTypesUseCase }) {
    return function getNewClinicType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clinicTypes = yield getAllClinicTypesUseCase({});
                return {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    statusCode: 200,
                    body: { clinicTypes }
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
exports.default = makeGetAllClinicType;
//# sourceMappingURL=get-all-clinic-type-controller.js.map