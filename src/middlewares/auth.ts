import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = (req.headers as any).authorization;
    if (req.originalUrl === "/login") {
      next();
      return;
    }
    const tokenType = authorization.split(" ")[0];
    const token = authorization.split(" ")[1];
    if (tokenType !== "Bearer") {
      return res.status(401).json({
        message:
          "Unauthorized access found, Please try login and access content",
      });
    }
    if (!token) {
      return res.status(401).json({
        message:
          "Unauthorized access found, Please try login and access content",
      });
    }
    var decoded: any = Jwt.verify(token, "jabcdeefghijmklmnoipqrstsuvwh");

    if (
      decoded.role === "user" &&
      [
        "/addNewBook",
        "/issueBook",
        "/returnBook",
        "/removeBook",
        "/removeUser",
      ].includes(req.originalUrl)
    ) {
      return res.status(401).json({
        message: "╭∩╮（︶︿︶）╭∩╮ Unauthorized access found ╭∩╮（︶︿︶）╭∩╮",
      });
    }
    next();
  } catch (error) {
    console.log(`auth catch error`, error);
    res.status(404).send(`unauthorised user`);
  }
};

export default auth;
