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
const usermodel_1 = __importDefault(require("../model/usermodel"));
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputDetails = req.body;
    try {
        const findAndRemoveUser = yield usermodel_1.default.findByIdAndRemove(inputDetails.userId);
        if (!inputDetails.userId) {
            res.status(400).send(`please enter User Id`);
        }
        if (!findAndRemoveUser) {
            res.status(404).send(`user not found ✘`);
        }
        res.send(`user deleted ✓`);
    }
    catch (error) {
        console.log(`removeUser catch error-->`, error);
    }
});
exports.default = removeUser;
