"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const controllers_1 = require("./controllers");
const express_callback_1 = __importDefault(require("./express-callback"));
dotenv_1.default.config();
const port = process.env.NODE_PORT;
const app = express_1.default();
const apiRoot = process.env.API_ROOT;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
//add routes here/app/v1
app.post('/api/v1/user', express_callback_1.default(controllers_1.createNewUser));
// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map