import { addFriendSchema } from "@/schemas";
import { z } from "zod";

export type AddFriend = z.infer<typeof addFriendSchema>;
