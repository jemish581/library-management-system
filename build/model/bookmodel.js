"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uuid_1 = require("uuid");
const booksdatamodel = new mongoose_1.default.Schema({
    _id: {
        type: String,
        default() {
            return `BOOK-${(0, uuid_1.v4)()}`;
        },
    },
    bookName: {
        type: String,
    },
    author: {
        type: String,
    },
    pages: {
        type: Number,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
    },
});
exports.default = mongoose_1.default.model("books", booksdatamodel);
