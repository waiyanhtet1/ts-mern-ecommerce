import express, { Request, Response } from "express";
import { ProudctModel } from "../models/productModel";
import { sampleProducts } from "../utils/sampleProduct";

export const seedRouter = express.Router();

seedRouter.get("/", async (req: Request, res: Response) => {
  await ProudctModel.deleteMany({});
  const createdProducts = await ProudctModel.insertMany(sampleProducts);
  res.json(createdProducts);
});
