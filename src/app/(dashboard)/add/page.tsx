import AddFriendForm from "@/components/add/add-friend-form";
import Heading from "@/components/ui/heading";
import React from "react";

const Add = () => {
  return (
    <main className="px-4">
      <Heading size={1} as="h1" className="my-4">
        Add Friends
      </Heading>
      <AddFriendForm />
    </main>
  );
};
export default Add;
