"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            let user = jsonwebtoken_1.default.verify(token, "jabcdeefghijmklmnoipqrstsuvwh");
            req.userId = user.id;
        }
        else {
            res.status(404).send(`unauthorised user`);
        }
        next();
    }
    catch (error) {
        console.log(`auth catch error`, error);
        res.status(404).send(`unauthorised user`);
    }
};
exports.default = auth;
