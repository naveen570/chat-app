import { Loader2 } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen grid place-items-center">
      <Loader2 className="size-10 text-slate-900 animate-spin" />
    </div>
  );
}
