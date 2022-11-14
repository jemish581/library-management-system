import { Request, Response } from "express";
import userDataModel from "../model/usermodel";
function onlyNumbers(str: any) {
  return /^[0-9]+$/.test(str);
}

type userDataObj = {
  userName: String;
  mobile: Number;
  email: String;
  address: String;
  password: String;
  role: any;
};

const RagisterNewUser = async (req: Request, res: Response) => {
  const inputperameter: userDataObj = req.body;
  console.log(`inputperameter log-------->`, inputperameter);

  try {
    const checkUser = await userDataModel.findOne({
      mobile: inputperameter.mobile,
    });
    if (checkUser) {
      return res.status(400).send(`mobile already exist`);
    }
    if (!inputperameter.userName) {
      return res.status(400).send(`user name is required`);
    }
    if (!inputperameter.mobile) {
      return res.status(400).send(`mobile number is required`);
    }
    if (!inputperameter.email) {
      return res.status(400).send(`email is required`);
    }
    if (!inputperameter.address) {
      return res.status(400).send(`address is required`);
    }
    const mobileValidation = onlyNumbers(inputperameter.mobile);
    if (!mobileValidation) {
      return res.status(400).send(`mobile number is not valid`);
    }
    if (!inputperameter.role) {
      return res.status(400).send("please enter role!");
    }

    const admin = "admin";
    const user = "user";

    if (![admin, user].includes(inputperameter.role)) {
      return res.send(`please enter the right role`);
    }

    const addUserData = await userDataModel.create(inputperameter);
    res.status(201).json({ user: addUserData });
  } catch (error) {
    console.log(`ragisteruser catch error ---------->`, error);
  }
};

export default RagisterNewUser;
