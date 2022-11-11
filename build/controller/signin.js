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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputDetails = req.body;
    try {
        const findUser = yield usermodel_1.default.findOne({
            mobile: inputDetails.mobile,
        });
        const checkPassword = (findUser === null || findUser === void 0 ? void 0 : findUser.password) === inputDetails.password;
        if (!inputDetails.mobile) {
            return res.status(404).send(`please insert mobile number`);
        }
        if (!inputDetails.password) {
            return res.status(400).send(`please enter password!`);
        }
        if (!findUser) {
            return res.status(404).send(`user not found ✘`);
        }
        if (!checkPassword) {
            return res.status(400).send(`incorrect password! ✘`);
        }
        const token = jsonwebtoken_1.default.sign({ mobile: findUser.mobile, id: findUser._id }, "jabcdeefghijmklmnoipqrstsuvwh");
        res.json({ message: `login succsess ✓`, user: findUser, token: token });
    }
    catch (error) {
        console.log(`loginUser catch error`, error);
    }
});
exports.default = loginUser;
