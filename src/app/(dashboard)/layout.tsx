import { SideBarNav } from "@/components/side-bar/";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) notFound();
  return (
    <main className="w-full flex h-screen">
      <SideBarNav />
      <div className="grow">{children}</div>
    </main>
  );
};

export default DashboardLayout;
