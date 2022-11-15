import express from "express";
import addBookController from "../controller/addNewBook.controller";
import getAllBooksController from "../controller/getAllBooks.controller";
import getAvailableBooksController from "../controller/getAvailableBooks";
import issueBook from "../controller/issueBook";
import returnBook from "../controller/returnBook";
import RagisterNewUser from "../controller/ragisterUser";
import getBookissuedData from "../controller/getIssuedBook";
import getUserissuedData from "../controller/getUserIssuedBook";
import removeBook from "../controller/removeBook";
import removeUser from "../controller/getAllUser";
import loginUser from "../controller/signin";
import auth from "../middlewares/auth";
import getAllUser from "../controller/getAllUser";

const router = express.Router();

//-----------------------------------Add---New---Books------------------------------------
router.post("/addNewBook", auth, addBookController);

//--------------------------Get---All---Books---------------------------------------------
router.get("/getAllBooks", auth, getAllBooksController);

//---------------------------Available---Books---------------------------------------------
router.get("/availableBooks", auth, getAvailableBooksController);

//---------------------------Issue ---Books------------------------------------------------
router.post("/issueBook", auth, issueBook);

//---------------------------return---Books---------------------------------------------
router.post("/returnBook", auth, returnBook);

//---------------------------user---Ragister------------------------------------------------
router.post("/createNewUser", RagisterNewUser);

//-----------------------------get-all-issuedbooks-----------------------------------------
router.get("/getIssuedBook", auth, getBookissuedData);

//-----------------------------get-user-issuedbooks-----------------------------------------
router.get("/getUserIssuedBook", auth, getUserissuedData);

//---------------------removeBook----------------------------------------------------------
router.delete("/removeBook", auth, removeBook);

//---------------------removeUser----------------------------------------------

router.delete("/removeUser", auth, removeUser);

//------------------------login user--------------------------------------------
router.get("/login", auth, loginUser);

//------------------------getAllUser-------------------------------------------
router.get("/getAllUser", auth, getAllUser);
export default router;
