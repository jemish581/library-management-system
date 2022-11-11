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
const removeBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputDetails = req.body;
    try {
        const removeBookDB = yield bookmodel_1.default.findByIdAndRemove(inputDetails.bookId);
        if (!inputDetails.bookId) {
            return res.status(400).send(`please enter book id`);
        }
        if (!removeBookDB) {
            return res.status(404).send(`book not found!`);
        }
        return res.send(`book is deleted`);
    }
    catch (error) {
        console.log(`removeBook catch error-->`, error);
    }
});
exports.default = removeBook;
