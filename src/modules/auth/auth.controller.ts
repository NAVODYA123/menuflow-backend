import { Request, Response } from "express";
import * as authService from "./auth.service";

export const register = async (req: Request, res: Response) => {
  const { email, password, restaurantId } = req.body;
  const user = await authService.register(email, password, restaurantId);
  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await authService.login(email, password);
  res.json({ token });
};
