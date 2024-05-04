import express from "express";
import {
  getProducts,
  getSingleProduct,
} from "../controllers/productController";

const router = express.Router();

router.get("/", getProducts);
router.get("/:slug", getSingleProduct);

export default router;
