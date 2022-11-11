import { Express, Request, Response } from "express";
import userDataModel from "../model/usermodel";
import Jwt from "jsonwebtoken";

type ILoginDataT = {
  mobile: Number;
  password: String;
};

const loginUser = async (req: Request, res: Response) => {
  const inputDetails: ILoginDataT = req.body as any;
  try {
    const findUser = await userDataModel.findOne({
      mobile: inputDetails.mobile,
    });
    const checkPassword = findUser?.password === inputDetails.password;
    if (!inputDetails.mobile) {
      return res.status(404).send(`please insert mobile number`);
    }
    if (!inputDetails.password) {
      return res.status(400).send(`please enter password!`);
    }
    if (!findUser) {
      return res.status(404).send(`user not found ✘`);
    }
    if (!checkPassword) {
      return res.status(400).send(`incorrect password! ✘`);
    }
    const token = Jwt.sign(
      { mobile: findUser.mobile, id: findUser._id },
      "jabcdeefghijmklmnoipqrstsuvwh"
    );
    res.json({ message: `login succsess ✓`, user: findUser, token: token });
  } catch (error) {
    console.log(`loginUser catch error`, error);
  }
};

export default loginUser;
