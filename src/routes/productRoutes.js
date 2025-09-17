import express from "express";
import { createProduct, getProducts } from "../controllers/productController.js";
import { protect, admin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", protect, admin, createProduct);
router.get("/", getProducts);

export default router;
