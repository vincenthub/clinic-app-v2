"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewUser = void 0;
const create_user_1 = require("./create-user");
const data_access_1 = require("../../data-access");
const addNewUser = create_user_1.makeCreateUser({ userDb: data_access_1.userDb });
exports.addNewUser = addNewUser;
const userService = Object.freeze({
    addNewUser
});
//# sourceMappingURL=index.js.map