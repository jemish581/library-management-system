import express, { Request, Response } from "express";
import { ObjectId } from "mongoose";
import bookIssueDataModel from "../model/issuemodel";

type returnBookDataObj = {
  bookId: String;
  userId: String;
};

const returnBook = async (req: Request, res: Response) => {
  const inputId: returnBookDataObj = req.body;
  console.log(`inputBookId log---->`, inputId);
  try {
    const finduser = await bookIssueDataModel.findOne({
      userId: inputId.userId,
    });
    console.log(`finduser log-------->`, finduser);
    if (!finduser) {
      return res.status(404).send(`user not found`);
    }
    const findbook = await bookIssueDataModel.findOne({
      bookId: inputId.bookId,
    });
    console.log(`findbook log ------->`, findbook);
    if (!findbook) {
      return res.status(404).send(`book not found`);
    }
    if (finduser && findbook) {
      const depositBook = await bookIssueDataModel.deleteOne(inputId);
      console.log(`depositBook log--------->`, depositBook);
      res.send(`book deposited successfull`);
    }
  } catch (error) {
    console.log(`issueBook catch error----->`, error);
    res.status(400).send(`bad request`);
  }
};

export default returnBook;
