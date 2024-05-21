import { Redis } from "@upstash/redis";
import { redisToken, redisURL } from "./env";

export const db = new Redis({
  url: redisURL,
  token: redisToken,
});
