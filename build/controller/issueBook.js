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
const usermodel_1 = __importDefault(require("../model/usermodel"));
const issuemodel_1 = __importDefault(require("../model/issuemodel"));
const issueBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputId = req.body;
    console.log(`inputBookId log---->`, inputId);
    try {
        const findBook = yield bookmodel_1.default.findById(inputId.bookId);
        console.log(`findBook log------->`, findBook);
        if (!findBook) {
            return res.status(404).send(`book not found`);
        }
        const findUser = yield usermodel_1.default.findById(inputId.userId);
        console.log(`findUser log------>`, findUser);
        if (!findUser) {
            return res.status(404).send(`user not found`);
        }
        const foundIssuedBook = yield issuemodel_1.default.findOne({
            bookId: inputId.bookId,
        });
        console.log(`foundIssuedBook log ------>`, foundIssuedBook);
        if (foundIssuedBook) {
            return res.status(400).send(`book is already issued`);
        }
        if (findBook && findUser) {
            const issueBookInIssueCollection = yield issuemodel_1.default.create(inputId);
            console.log(`issueBookInIssueCollection log-------->`, issueBookInIssueCollection);
            res.send(`book issued done`);
        }
    }
    catch (error) {
        console.log(`issueBook catch error----->`, error);
        res.status(400).send(`bad request`);
    }
});
exports.default = issueBook;
