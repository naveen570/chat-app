import Link from "next/link";
import React from "react";
import { Icons } from "../Icons";
import { YourChats } from "@/components/side-bar";
import { ChatInfo } from "@/types";

export const SideBarNav = () => {
  const chats: ChatInfo[] = [];
  return (
    <div className="W-full h-full max-w-xs grow overflow-y-auto bg-black/50 backdrop-blur-lg flex flex-col gap-7 py-2 px-4">
      <Link href={"/dashboard"}>
        <Icons.Logo className="h-8" />
      </Link>
      <nav>
        <ul>
          <li role="list">
            <YourChats chats={[]} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
