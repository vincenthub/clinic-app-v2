"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildCreateClinic({ Id }) {
    return function createClinic({ id = Id.makeId(), name, shortDescription, longDescription, logo, images, contactNumber, address, type, staffs, schedules, services, published, createStatus = 'active', createdByUserId, createdOn = Date.now(), modifiedOn = Date.now() } = {
        name: String,
        shortDescription: String,
        longDescription: String,
        logo: String,
        contactNumber: String,
        images: String,
        type: String,
        staffs: String,
        schedules: String,
        services: String,
        published: Boolean,
        address: Object,
        createStatus: String,
        createdByUserId: String,
        createdOn: String,
        modifiedOn: String
    }) {
        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getShortDescription: () => shortDescription,
            getLongDescription: () => longDescription,
            getLogo: () => logo,
            getImages: () => images,
            getContactNumber: () => contactNumber,
            getType: () => type,
            getStaffs: () => staffs,
            getSchedules: () => schedules,
            getServices: () => services,
            isPublished: () => published,
            getCreateStatus: () => createStatus,
            getCreatedByUserId: () => createdByUserId,
            getCreatedOn: () => createdOn,
            getModifiedOn: () => modifiedOn,
            getAddress: () => address
        });
    };
}
exports.default = buildCreateClinic;
//# sourceMappingURL=clinic-model.js.map