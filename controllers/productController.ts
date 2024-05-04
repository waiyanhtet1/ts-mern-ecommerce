import { Request, Response } from "express";
import { ProudctModel } from "../models/productModel";

export const getProducts = async (req: Request, res: Response) => {
  const products = await ProudctModel.find();
  res.status(200).json(products);
};

export const getSingleProduct = async (req: Request, res: Response) => {
  const product = await ProudctModel.findOne({ slug: req.params.slug });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
};
