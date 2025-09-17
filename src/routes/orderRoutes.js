import express from "express";
import { createOrder } from "../controllers/orderController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", protect, createOrder);

export default router;
