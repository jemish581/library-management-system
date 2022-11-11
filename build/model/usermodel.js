"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uuid_1 = require("uuid");
const userDataModel = new mongoose_1.default.Schema({
    _id: {
        type: String,
        default() {
            return `MEM-${(0, uuid_1.v4)()}`;
        },
    },
    userName: {
        type: String,
    },
    mobile: {
        type: Number,
        require: true,
        unique: true,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
    },
});
exports.default = mongoose_1.default.model("user", userDataModel);
