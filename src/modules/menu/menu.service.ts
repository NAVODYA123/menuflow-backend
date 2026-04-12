import { MenuItem } from "./menu.model";

// ✅ ADMIN: Create menu item
export const createItem = async (data: any, restaurantId: string) => {
  return await MenuItem.create({ ...data, restaurantId });
};

// ✅ ADMIN: Get all items (including hidden/unavailable if needed)
export const getItems = async (restaurantId: string) => {
  return await MenuItem.find({ restaurantId }).lean();
};

// ✅ PUBLIC: Get only visible menu for customers
export const getPublicMenu = async (restaurantId: string) => {
  return await MenuItem.find({
    restaurantId,
    isAvailable: true, // 👈 only show available items
  })
    .select("-__v") // optional: remove unwanted fields
    .lean();
};
