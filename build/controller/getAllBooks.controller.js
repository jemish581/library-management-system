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
const getAllBooksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllBookInputParams = req.query;
    console.log(`getAllBookInputParams log ---->`, getAllBookInputParams);
    try {
        const filter = {
        // isissued: false,
        };
        if (getAllBookInputParams.author) {
            filter.author = { $regex: ".*" + getAllBookInputParams.author + ".*" };
        }
        if (getAllBookInputParams.category) {
            filter.category = {
                $regex: ".*" + getAllBookInputParams.category + ".*",
            };
        }
        if (getAllBookInputParams.minPrice && getAllBookInputParams.maxPrice) {
            filter.price = {
                $gte: getAllBookInputParams.minPrice,
                $lte: getAllBookInputParams.maxPrice,
            };
        }
        console.log(`filter log`, filter);
        const getFilteredData = yield bookmodel_1.default.find(filter);
        console.log(`getFilteredData log--------->`, getFilteredData);
        res.json(getFilteredData);
    }
    catch (error) {
        console.log(`get all product catch error-------->`, error);
    }
});
exports.default = getAllBooksController;
