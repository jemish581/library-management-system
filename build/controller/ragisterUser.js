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
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}
const RagisterNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputperameter = req.body;
    console.log(`inputperameter log-------->`, inputperameter);
    try {
        const checkUser = yield usermodel_1.default.findOne({
            mobile: inputperameter.mobile,
        });
        if (checkUser) {
            return res.status(400).send(`mobile already exist`);
        }
        if (!inputperameter.userName) {
            return res.status(400).send(`user name is required`);
        }
        if (!inputperameter.mobile) {
            return res.status(400).send(`mobile number is required`);
        }
        if (!inputperameter.email) {
            return res.status(400).send(`email is required`);
        }
        if (!inputperameter.address) {
            return res.status(400).send(`address is required`);
        }
        const mobileValidation = onlyNumbers(inputperameter.mobile);
        if (!mobileValidation) {
            res.status(400).send(`mobile number is not valid`);
        }
        const addUserData = yield usermodel_1.default.create(inputperameter);
        res.status(201).json({ user: addUserData });
    }
    catch (error) {
        console.log(`ragisteruser catch error ---------->`, error);
    }
});
exports.default = RagisterNewUser;
