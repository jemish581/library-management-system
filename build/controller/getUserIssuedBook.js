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
        const matchCondition = {};
        if (inputId.bookId) {
            matchCondition.bookId = inputId.bookId;
        }
        if (inputId.userId) {
            matchCondition.userId = inputId.userId;
        }
        const GetAllIssuedData = yield issuemodel_1.default.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "issuerName",
                },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "bookId",
                    foreignField: "_id",
                    as: "bookName",
                },
            },
            {
                $match: matchCondition,
            },
            {
                $project: {
                    _id: 1,
                    userId: 1,
                    bookId: 1,
                    "issuerName.userName": 1,
                    "bookName.bookName": 1,
                },
            },
        ]);
        return res.status(200).json(GetAllIssuedData);
    }
    catch (error) {
        console.log(`getUserissuedData catch error-------->`, error);
    }
});
exports.default = getUserissuedData;
