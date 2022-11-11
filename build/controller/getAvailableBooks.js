"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookmodel_1 = __importDefault(require("../model/bookmodel"));
const issuemodel_1 = __importDefault(require("../model/issuemodel"));
const getAvailableBooksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const issuedBooks = yield issuemodel_1.default.find({});
        console.log(`issuedBooks : `, issuedBooks.length);
        const issuedBooksIds = issuedBooks.map((issuedBook) => issuedBook.bookId);
        const availableBooks = yield bookmodel_1.default.find({
            _id: {
                $nin: issuedBooksIds,
            },
        });
        res.send(availableBooks);
    }
    catch (error) {
        console.log(`getAvailableBooks catch error --->`, error);
    }
});
exports.default = getAvailableBooksController;
