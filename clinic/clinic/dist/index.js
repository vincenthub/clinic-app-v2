"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_callback_1 = __importDefault(require("./express-callback"));
const controllers_1 = require("./controllers");
const validationChecks_1 = require("./validationChecks");
dotenv_1.default.config();
const port = process.env.NODE_PORT;
const app = express_1.default();
const apiRoot = process.env.API_ROOT;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
console.log(apiRoot);
//add routes here/app/v1
app.post(`${apiRoot}/clinic`, validationChecks_1.clinicFieldValidation, express_callback_1.default(controllers_1.createNewClinic));
app.get(`${apiRoot}/clinics`, express_callback_1.default(controllers_1.getAllClinic));
app.post(`${apiRoot}/clinicType`, validationChecks_1.clinicTypeFieldValidation, express_callback_1.default(controllers_1.createNewClinicType));
app.get(`${apiRoot}/clinicTypes`, express_callback_1.default(controllers_1.getAllClinicType));
// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map