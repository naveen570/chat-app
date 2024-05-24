import { ChatInfo } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type ChatLinkProps = ChatInfo & {};
const ChatLink = (props: ChatLinkProps) => {
  return (
    <li>
      <Link
        href={`/chat/${props.id}`}
        className="flex items-center gap-2 rounded-md hover:bg-white/20 p-1 transition-colors duration-200"
      >
        <div className="size-10 rounded-full bg-green-300 shrink-0">
          <Image src={props.image} alt="user image" width={40} height={40} />
        </div>
        <span className="text-sm truncate capitalize">{props.name}</span>
      </Link>
    </li>
  );
};

export default ChatLink;
