import React from "react";
import Heading from "../ui/heading";
import Link from "next/link";
import { YourChatsProps } from "@/types";
import ChatLink from "./chat-link";

export const YourChats = (props: YourChatsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading size={6} as="h6">
        Your Chats
      </Heading>
      <ul className="flex flex-col gap-4 max-h-52 overflow-y-auto">
        {props.chats.map((chat) => (
          <ChatLink
            key={chat.id}
            id={chat.id}
            name={chat.name}
            image={chat.image}
          />
        ))}
      </ul>
    </div>
  );
};
