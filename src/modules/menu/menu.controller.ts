import { Request, Response } from "express";
import { AuthRequest } from "../../types/global";
import * as menuService from "./menu.service";

interface PublicMenuParams {
  restaurantId: string;
}

export const createItem = async (req: AuthRequest, res: Response) => {
  const item = await menuService.createItem(req.body, req.user!.restaurantId);
  res.json(item);
};

export const getItems = async (req: AuthRequest, res: Response) => {
  const items = await menuService.getItems(req.user!.restaurantId);
  res.json(items);
};

export const getPublicMenu = async (
  req: Request<PublicMenuParams>,
  res: Response,
) => {
  const { restaurantId } = req.params;

  const menu = await menuService.getPublicMenu(restaurantId);
  res.json(menu);
};
