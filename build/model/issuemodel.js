"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uuid_1 = require("uuid");
const bookIssueDataModel = new mongoose_1.default.Schema({
    _id: {
        type: String,
        default() {
            return `ISSUED-${(0, uuid_1.v4)()}`;
        },
    },
    userId: {
        type: String,
        ref: "userId",
    },
    bookId: {
        type: String,
        ref: "bookId",
    },
});
exports.default = mongoose_1.default.model("issuedBooks", bookIssueDataModel);
