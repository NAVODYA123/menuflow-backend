import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "./auth.model";

export const register = async (
  email: string,
  password: string,
  restaurantId: string,
) => {
  const hashed = await bcrypt.hash(password, 10);
  return await User.create({ email, password: hashed, restaurantId });
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user?.password as string);
  if (!valid) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { userId: user._id, restaurantId: user.restaurantId },
    process.env.JWT_SECRET!,
  );

  return token;
};
