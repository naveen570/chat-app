import { z } from "zod";

export const addFriendSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Invalid email" }),
});
export const userIdSchema = z.string().min(1, "User Id is required");
export const sIsMemberSchema = z.literal(0).or(z.literal(1));
