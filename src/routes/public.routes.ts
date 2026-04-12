import { Router } from "express";
import { getPublicMenu } from "../modules/menu/menu.controller";

const router = Router();

// 🌐 Public menu (QR scan)
router.get("/menu/:restaurantId", getPublicMenu);

export default router;
