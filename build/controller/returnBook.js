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
const issuemodel_1 = __importDefault(require("../model/issuemodel"));
const returnBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputId = req.body;
    console.log(`inputBookId log---->`, inputId);
    try {
        const finduser = yield issuemodel_1.default.findOne({
            userId: inputId.userId,
        });
        console.log(`finduser log-------->`, finduser);
        if (!finduser) {
            return res.status(404).send(`user not found`);
        }
        const findbook = yield issuemodel_1.default.findOne({
            bookId: inputId.bookId,
        });
        console.log(`findbook log ------->`, findbook);
        if (!findbook) {
            return res.status(404).send(`book not found`);
        }
        if (finduser && findbook) {
            const depositBook = yield issuemodel_1.default.deleteOne(inputId);
            console.log(`depositBook log--------->`, depositBook);
            res.send(`book deposited successfull`);
        }
    }
    catch (error) {
        console.log(`issueBook catch error----->`, error);
        res.status(400).send(`bad request`);
    }
});
exports.default = returnBook;
