import { Request, Response } from "express";
import bookIssueDataModel from "../model/issuemodel";

const getBookissuedData = async (req: Request, res: Response) => {
  try {
    const GetAllIssuedData = await bookIssueDataModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "issuerName",
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "bookId",
          foreignField: "_id",
          as: "bookName",
        },
      },
      {
        $project: {
          _id: 1,
          userId: 1,
          bookId: 1,
          "issuerName.userName": 1,
          "bookName.bookName": 1,
        },
      },
    ]);

    return res.status(200).json(GetAllIssuedData);
  } catch (error) {
    console.log(`getBookissuedData catch error-------->`, error);
  }
};

export default getBookissuedData;
