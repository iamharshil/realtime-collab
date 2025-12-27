"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";

export default function DashboardPage() {
  return (
    <main>
      <div>Welcome to your dashboard!</div>
      <Button onClick={() => signOut()}>Logout</Button>
    </main>
  );
}