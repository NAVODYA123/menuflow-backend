import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  categoryId: String,
  restaurantId: String,
  isAvailable: { type: Boolean, default: true },
});

export const MenuItem = mongoose.model("MenuItem", menuSchema);
