import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { UserId } from "./add";

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    image: string;
  }
}
declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
    };
  }
}
