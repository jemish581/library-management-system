import { Express, Request, Response } from "express";
import bookmodel from "../model/bookmodel";
import issuemodel from "../model/issuemodel";

const getAvailableBooksController = async (req: Request, res: Response) => {
  try {
    const issuedBooks = await issuemodel.find({});
    console.log(`issuedBooks : `, issuedBooks.length);
    const issuedBooksIds = issuedBooks.map((issuedBook) => issuedBook.bookId);

    const availableBooks = await bookmodel.find({
      _id: {
        $nin: issuedBooksIds,
      },
    });
    res.send(availableBooks);
  } catch (error) {
    console.log(`getAvailableBooks catch error --->`, error);
  }
};

export default getAvailableBooksController;
