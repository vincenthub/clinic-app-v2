"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const clinicFieldValidation = [
    express_validator_1.check('name', 'First Name should not be empty').not().isEmpty(),
    express_validator_1.check('shortDescription', 'Last Name should not be empty').not().isEmpty(),
    express_validator_1.check('longDescription', 'Mobile Number should not be empty').not().isEmpty(),
    express_validator_1.check('address.postal').not().isEmpty()
];
exports.default = clinicFieldValidation;
//# sourceMappingURL=clinicInfoCheck.js.map