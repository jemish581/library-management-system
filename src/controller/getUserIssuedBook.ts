import Express, { Request, Response } from "express";
import bookIssueDataModel from "../model/issuemodel";

type getIssuedDataInputParams = {
  userId: String;
  bookId: String;
};

const getUserissuedData = async (req: Request, res: Response) => {
  const inputId: getIssuedDataInputParams = req.query as any;
  console.log(`inputId log------------>`, inputId);
  try {
    const matchCondition: any = {};

    if (inputId.bookId) {
      matchCondition.bookId = inputId.bookId;
    }
    if (inputId.userId) {
      matchCondition.userId = inputId.userId;
    }
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
        $match: matchCondition,
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
    console.log(`getUserissuedData catch error-------->`, error);
  }
};

export default getUserissuedData;
