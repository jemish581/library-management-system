"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/", index_1.default);
app.listen(port, () => {
    console.log(`server was ranning on ------>  http://localhost:${port}`);
});
mongoose_1.default.set("debug", true);
mongoose_1.default
    .connect("mongodb+srv://jemish0581:Shivay99@cluster0.5ijjgyt.mongodb.net/Books?retryWrites=true&w=majority")
    .then(() => {
    console.warn("Database is connected successfully...");
});
