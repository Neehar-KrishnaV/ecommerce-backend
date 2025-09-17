import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, qty: Number }],
  totalPrice: Number,
  status: { type: String, enum: ["pending", "paid", "shipped"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
