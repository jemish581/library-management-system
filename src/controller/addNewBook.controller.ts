import express, { Response } from "express";
import booksdatamodel from "../model/bookmodel";
import { Request } from "express";
function onlyNumbers(str: any) {
  return /^[0-9]+$/.test(str);
}

type addbookDataObj = {
  bookName: String;
  author: String;
  pages: Number;
  description: String;
  category: String;
  isissued: Boolean;
  price: Number;
};
const addBookController = async (req: Request, res: Response) => {
  const inputperameter: addbookDataObj = req.body;
  console.log(`inputperameter log------>`, inputperameter);
  try {
    if (!inputperameter.bookName) {
      return res.status(400).send("bookname are required");
    }

    if (!inputperameter.author) {
      return res.status(400).send("author name are required");
    }

    if (!inputperameter.pages) {
      return res.status(400).send("pages are required");
    }

    if (!inputperameter.description) {
      return res.status(400).send("description are required");
    }

    if (!inputperameter.category) {
      return res.status(400).send("category are required");
    }

    if (!inputperameter.price) {
      return res.status(400).send("price are required");
    }

    if (onlyNumbers(inputperameter.price)) {
      const addBookData = await booksdatamodel.create(inputperameter);
      console.log(addBookData);
      res.send(`data added sucssesfully`);
    } else {
      res.status(400).send(`enter only number`);
    }
  } catch (error) {
    console.log(`catch error in add book--->`, error);
  }
};
export default addBookController;
