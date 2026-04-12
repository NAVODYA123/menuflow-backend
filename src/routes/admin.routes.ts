import { Router } from "express";
import { createItem, getItems } from "../modules/menu/menu.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

// 🔒 All routes require login
router.use(authMiddleware);

// ✅ Create menu item
router.post("/menu", createItem);

// ✅ Get all items (for logged-in restaurant owner)
router.get("/menu", getItems);

export default router;
