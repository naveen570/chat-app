import Button from "@/components/ui/button";
import { db } from "@/lib/db";

export default function Home() {
  db.set("hello", "world");
  return (
    <main>
      <Button variant={"ghost"}>Click me</Button>
    </main>
  );
}
