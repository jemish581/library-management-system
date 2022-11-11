"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addNewBook_controller_1 = __importDefault(require("../controller/addNewBook.controller"));
const getAllBooks_controller_1 = __importDefault(require("../controller/getAllBooks.controller"));
const getAvailableBooks_1 = __importDefault(require("../controller/getAvailableBooks"));
const issueBook_1 = __importDefault(require("../controller/issueBook"));
const returnBook_1 = __importDefault(require("../controller/returnBook"));
const ragisterUser_1 = __importDefault(require("../controller/ragisterUser"));
const getIssuedBook_1 = __importDefault(require("../controller/getIssuedBook"));
const getUserIssuedBook_1 = __importDefault(require("../controller/getUserIssuedBook"));
const removeBook_1 = __importDefault(require("../controller/removeBook"));
const getAllUser_1 = __importDefault(require("../controller/getAllUser"));
const signin_1 = __importDefault(require("../controller/signin"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = express_1.default.Router();
//-----------------------------------Add---New---Books------------------------------------
router.post("/add_New_Book", addNewBook_controller_1.default);
//--------------------------Get---All---Books---------------------------------------------
router.get("/get_all_Books", auth_1.default, getAllBooks_controller_1.default);
//---------------------------Available---Books---------------------------------------------
router.get("/available_books", auth_1.default, getAvailableBooks_1.default);
//---------------------------Issue ---Books------------------------------------------------
router.post("/issue_book", auth_1.default, issueBook_1.default);
//---------------------------return---Books---------------------------------------------
router.post("/return_book", auth_1.default, returnBook_1.default);
//---------------------------user---Ragister------------------------------------------------
router.post("/create_new_user", ragisterUser_1.default);
//-----------------------------get-all-issuedbooks-----------------------------------------
router.get("/get_issued_book", getIssuedBook_1.default);
//-----------------------------get-user-issuedbooks-----------------------------------------
router.get("/get_user_issued_book", auth_1.default, getUserIssuedBook_1.default);
//---------------------removeBook----------------------------------------------------------
router.delete("/remove_book", removeBook_1.default);
//---------------------removeUser----------------------------------------------
router.delete("/remove_user", getAllUser_1.default);
//------------------------login user---------------------------------------------
router.get("/login", signin_1.default);
exports.default = router;
