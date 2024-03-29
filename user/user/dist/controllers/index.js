"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewUser = void 0;
//use-cases
const user_1 = require("../use-cases/user");
//make controllers
const create_new_user_1 = __importDefault(require("./create-new-user"));
//express-validator
const express_validator_1 = require("express-validator");
//clinic contollers
const createNewUser = create_new_user_1.default({ addNewUser: user_1.addNewUser, validationResult: express_validator_1.validationResult });
exports.createNewUser = createNewUser;
//# sourceMappingURL=index.js.map