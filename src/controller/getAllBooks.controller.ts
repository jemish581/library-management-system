import express, { Request, Response } from "express";
import { FilterQuery } from "mongoose";
import booksdatamodel from "../model/bookmodel";

type TGetAllBookInputParams = {
  author: String;
  category: String;
  minPrice: Number;
  maxPrice: Number;
};

const getAllBooksController = async (req: Request, res: Response) => {
  const getAllBookInputParams: TGetAllBookInputParams = req.query as any;
  console.log(`getAllBookInputParams log ---->`, getAllBookInputParams);
  try {
    const filter: FilterQuery<typeof booksdatamodel> = {
      // isissued: false,
    };
    if (getAllBookInputParams.author) {
      filter.author = { $regex: ".*" + getAllBookInputParams.author + ".*" };
    }
    if (getAllBookInputParams.category) {
      filter.category = {
        $regex: ".*" + getAllBookInputParams.category + ".*",
      };
    }
    if (getAllBookInputParams.minPrice && getAllBookInputParams.maxPrice) {
      filter.price = {
        $gte: getAllBookInputParams.minPrice,
        $lte: getAllBookInputParams.maxPrice,
      };
    }
    console.log(`filter log`, filter);
    const getFilteredData = await booksdatamodel.find(filter);
    console.log(`getFilteredData log--------->`, getFilteredData);
    res.json(getFilteredData);
  } catch (error) {
    console.log(`get all product catch error-------->`, error);
  }
};

export default getAllBooksController;
