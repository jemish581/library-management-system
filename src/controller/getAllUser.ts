import { Request, Response } from "express";
import userDataModel from "../model/usermodel";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const getAllUser = await userDataModel.find({
      role: "user",
    });
    res.json(getAllUser);
  } catch (error) {
    console.log(`removeUser catch error-->`, error);
  }
};

export default getAllUser;
