"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildCreateClinicType({ Id }) {
    return function createClinicType({ id = Id.makeId(), name, description, createStatus = 'active', createdByUserId, createdOn = Date.now(), modifiedOn = Date.now() } = {
        id: String,
        name: String,
        description: String,
        createStatus: String,
        createdByUserId: String,
        createdOn: String,
        modifiedOn: String
    }) {
        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getDescription: () => description,
            getCreateStatus: () => createStatus,
            getCreatedByUserId: () => createdByUserId,
            getCreatedOn: () => createdOn,
            getModifiedOn: () => modifiedOn
        });
    };
}
exports.default = buildCreateClinicType;
//# sourceMappingURL=clinicType.js.map