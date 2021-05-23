"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFieldValidation = void 0;
const express_validator_1 = require("express-validator");
const userFieldValidation = [
    express_validator_1.check('firstName', 'First Name should not be empty').not().isEmpty(),
    express_validator_1.check('lastName', 'Last Name should not be empty').not().isEmpty(),
    express_validator_1.check('mobileNumber', 'Mobile Number should not be empty').not().isEmpty(),
    express_validator_1.check('email', 'Email address should be valid').isEmail(),
    express_validator_1.check('password', 'Password should not be empty').isLength({ min: 8 }),
    express_validator_1.check('address.postal').not().isEmpty()
];
exports.userFieldValidation = userFieldValidation;
//# sourceMappingURL=userInfoCheck.js.map