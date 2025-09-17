import Order from "../models/Order.js";
import Product from "../models/Product.js";
import eventBus from "../utils/eventBus.js";

export const createOrder = async (req, res) => {
  const { products } = req.body;

  let totalPrice = 0;
  for (let item of products) {
    const product = await Product.findById(item.product);
    if (!product || product.stock < item.qty) {
      return res.status(400).json({ message: "Out of stock" });
    }
    totalPrice += product.price * item.qty;
    product.stock -= item.qty;
    await product.save();
  }

  const order = new Order({ user: req.user.id, products, totalPrice });
  await order.save();

  // Emit event
  eventBus.emit("orderCreated", order);

  res.status(201).json(order);
};
