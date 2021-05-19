"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cuid_1 = __importDefault(require("cuid"));
const Id = Object.freeze({
    makeId: cuid_1.default,
    isValidId: cuid_1.default.isCuid
});
exports.default = Id;
//# sourceMappingURL=index.js.map