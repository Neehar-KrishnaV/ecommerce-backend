import EventEmitter from "events";
const eventBus = new EventEmitter();

eventBus.on("orderCreated", (order) => {
  console.log("📦 Order Created Event:", order._id);
  // Extend: email, payment, notifications
});

export default eventBus;
