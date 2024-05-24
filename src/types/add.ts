import { addFriendSchema, sIsMemberSchema, userIdSchema } from "@/schemas";
import { z } from "zod";

export type AddFriend = z.infer<typeof addFriendSchema>;
export type UserId = z.infer<typeof userIdSchema>;
export type IsSuccess = z.infer<typeof sIsMemberSchema>;
