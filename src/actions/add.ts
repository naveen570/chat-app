"use server";

import { auth } from "@/lib/auth";
import { fetchRedis } from "@/lib/redis";
import { sIsMemberSchema, userIdSchema } from "@/schemas";

export const addFriend = async (email: string) => {
  const userIdOfEmail = await fetchRedis("get", `user:email:${email}`);

  if (!userIdOfEmail) throw new Error("User not found");
  const userIdOfEmailParsed = userIdSchema.safeParse(userIdOfEmail);
  if (userIdOfEmailParsed.error) {
    throw new Error(
      `Zod Parsing Error ${userIdOfEmail.error.issues[0].message}`
    );
  }
  const parsedUserId = userIdOfEmailParsed.data;
  const session = await auth();
  if (!session) throw new Error("Unauthorized access");
  if (session.user.id === parsedUserId) throw new Error("Cannot add yourself");

  const isFriendRequestAlreadySent = sIsMemberSchema.parse(
    await fetchRedis(
      "sismember",
      `user:${parsedUserId}:incoming_friend_requests`,
      session.user.id
    )
  );
  if (isFriendRequestAlreadySent === 1)
    throw new Error("Friend request already sent");

  const isAlreadyAFriend = sIsMemberSchema.parse(
    await fetchRedis(
      "sismember",
      `user:${session.user.id}:friends`,
      parsedUserId
    )
  );
  if (isAlreadyAFriend === 1) throw new Error("Already a friend");

  const isAdded = sIsMemberSchema.parse(
    await fetchRedis(
      "sadd",
      `user:${parsedUserId}:incoming_friend_requests`,
      session.user.id
    )
  );
  if (isAdded === 0) throw new Error("Failed to send friend request");

  return true;
};
