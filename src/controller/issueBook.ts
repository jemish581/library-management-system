import express, { Request, Response } from "express";
import booksDataModel from "../model/bookmodel";
import userDataModel from "../model/usermodel";
import bookIssueDataModel from "../model/issuemodel";

type issueBookInputType = {
  bookId: String;
  userId: String;
};

const issueBook = async (req: Request, res: Response) => {
  const inputId: issueBookInputType = req.body as any;
  console.log(`inputBookId log---->`, inputId);
  try {
    const findBook = await booksDataModel.findById(inputId.bookId);
    console.log(`findBook log------->`, findBook);
    if (!findBook) {
      return res.status(404).send(`book not found`);
    }
    const findUser = await userDataModel.findById(inputId.userId);
    console.log(`findUser log------>`, findUser);
    if (!findUser) {
      return res.status(404).send(`user not found`);
    }
    const foundIssuedBook = await bookIssueDataModel.findOne({
      bookId: inputId.bookId,
    });
    console.log(`foundIssuedBook log ------>`, foundIssuedBook);
    if (foundIssuedBook) {
      return res.status(400).send(`book is already issued`);
    }

    if (findBook && findUser) {
      const issueBookInIssueCollection = await bookIssueDataModel.create(
        inputId
      );
      console.log(
        `issueBookInIssueCollection log-------->`,
        issueBookInIssueCollection
      );
      res.send(`book issued done`);
    }
  } catch (error) {
    console.log(`issueBook catch error----->`, error);
    res.status(400).send(`bad request`);
  }
};

export default issueBook;
