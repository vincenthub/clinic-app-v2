"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const clinicTypeFieldValidation = [
    express_validator_1.check('name', 'Name should not be empty').not().isEmpty(),
    express_validator_1.check('description', 'Description should not be empty').not().isEmpty()
];
exports.default = clinicTypeFieldValidation;
//# sourceMappingURL=clinicTypeCheck.js.map