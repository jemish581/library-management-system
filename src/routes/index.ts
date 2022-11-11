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

const router = express.Router();

//-----------------------------------Add---New---Books------------------------------------
router.post("/add_New_Book", addBookController);

//--------------------------Get---All---Books---------------------------------------------
router.get("/get_all_Books", auth, getAllBooksController);

//---------------------------Available---Books---------------------------------------------
router.get("/available_books", auth, getAvailableBooksController);

//---------------------------Issue ---Books------------------------------------------------
router.post("/issue_book", auth, issueBook);

//---------------------------return---Books---------------------------------------------
router.post("/return_book", auth, returnBook);

//---------------------------user---Ragister------------------------------------------------
router.post("/create_new_user", RagisterNewUser);

//-----------------------------get-all-issuedbooks-----------------------------------------
router.get("/get_issued_book", getBookissuedData);

//-----------------------------get-user-issuedbooks-----------------------------------------
router.get("/get_user_issued_book", auth, getUserissuedData);

//---------------------removeBook----------------------------------------------------------
router.delete("/remove_book", removeBook);

//---------------------removeUser----------------------------------------------

router.delete("/remove_user", removeUser);

//------------------------login user---------------------------------------------
router.get("/login", loginUser);
export default router;
