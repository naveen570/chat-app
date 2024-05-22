import { auth } from "@/lib/auth";
import React from "react";

const Dashboard = async () => {
  const session = await auth();
  if (session) {
    return <h1>{session.user.name}</h1>;
  }
  return <div>Not Logged in</div>;
};

export default Dashboard;
