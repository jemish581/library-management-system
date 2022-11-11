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
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}
const addBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputperameter = req.body;
    try {
        if (!inputperameter.bookname) {
            return res.status(400).send("bookname are required");
        }
        if (!inputperameter.author) {
            return res.status(400).send("author name are required");
        }
        if (!inputperameter.pages) {
            return res.status(400).send("pages are required");
        }
        if (!inputperameter.description) {
            return res.status(400).send("description are required");
        }
        if (!inputperameter.category) {
            return res.status(400).send("category are required");
        }
        if (!inputperameter.price) {
            return res.status(400).send("price are required");
        }
        if (onlyNumbers(inputperameter.price)) {
            const addBookData = yield bookmodel_1.default.create(inputperameter);
            console.log(addBookData);
            res.send(`data added sucssesfully`);
        }
        else {
            res.status(400).send(`enter only number`);
        }
    }
    catch (error) {
        console.log(`catch error in add book--->`, error);
    }
});
exports.default = addBookController;
