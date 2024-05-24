import { auth } from "@/lib/auth";
import { fetchRedis } from "@/lib/redis";

export const getYourChats = async () => {
  const session = await auth();
  if (!session) throw new Error("Unauthorized access");
  const response = await fetchRedis(
    "smemebers",
    `user:${session.user.id}:friends`
  );
};
