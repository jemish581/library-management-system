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
const getUserissuedData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputId = req.query;
    console.log(`inputId log------------>`, inputId);
    try {
        const filter = {};
        console.log(`filter log------------>`, filter);
        if (inputId.UserId) {
            filter.userId = inputId.UserId;
            const GetUserIssuedData = yield issuemodel_1.default.find({ filter });
            console.log(`GetAllIssuedData log------>`, GetUserIssuedData);
            res.json(GetUserIssuedData);
        }
    }
    catch (error) {
        console.log(`getBookissuedData catch error-------->`, error);
    }
});
exports.default = getUserissuedData;
