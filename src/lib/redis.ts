import { redisToken, redisURL } from "./env";

type Command = "get" | "sismember" | "smemebers" | "zrange" | "sadd";
export const fetchRedis = async (
  command: Command,
  ...args: (string | number)[]
) => {
  const url = `${redisURL}/${command}/${args.join("/")}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${redisToken}`,
    },
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error(`Error executing Redis command: ${response.statusText}`);
  }
  const data = await response.json();
  return data?.result;
};
