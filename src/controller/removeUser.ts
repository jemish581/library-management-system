import { Express, Request, Response } from "express";
import userDataModel from "../model/usermodel";

type IRemoveUser = {
  userId: String;
};

const removeUser = async (req: Request, res: Response) => {
  const inputDetails: IRemoveUser = req.body as any;
  try {
    const findAndRemoveUser = await userDataModel.findByIdAndRemove(
      inputDetails.userId
    );
    if (!inputDetails.userId) {
      res.status(400).send(`please enter User Id`);
    }
    if (!findAndRemoveUser) {
      res.status(404).send(`user not found ✘`);
    }
    res.send(`user deleted ✓`);
  } catch (error) {
    console.log(`removeUser catch error-->`, error);
  }
};

export default removeUser;
