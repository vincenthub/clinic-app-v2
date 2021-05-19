"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateNewUser = void 0;
const crypto_1 = __importDefault(require("crypto"));
const Id_1 = __importDefault(require("../Id"));
const user_1 = __importDefault(require("./user"));
const makeCreateNewUser = user_1.default({ Id: Id_1.default, md5 });
exports.makeCreateNewUser = makeCreateNewUser;
function md5(text) {
    return crypto_1.default
        .createHash('md5')
        .update(text, 'utf-8')
        .digest('hex');
}
//# sourceMappingURL=index.js.map