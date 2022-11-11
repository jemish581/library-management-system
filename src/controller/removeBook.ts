import express, { Request, Response } from "express";
import bookIssueDataModel from "../model/bookmodel";

type IRemoveBookDT = {
  bookId: String;
};

const removeBook = async (req: Request, res: Response) => {
  const inputDetails: IRemoveBookDT = req.body as any;
  try {
    const removeBookDB = await bookIssueDataModel.findByIdAndRemove(
      inputDetails.bookId
    );
    if (!inputDetails.bookId) {
      return res.status(400).send(`please enter book id`);
    }
    if (!removeBookDB) {
      return res.status(404).send(`book not found!`);
    }
    return res.send(`book is deleted`);
  } catch (error) {
    console.log(`removeBook catch error-->`, error);
  }
};

export default removeBook;
