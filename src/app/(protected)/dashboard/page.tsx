"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";

export default function DashboardPage() {
  return (
    <div className="h-screen w-screen">
      <header className="flex justify-between p-2 bg-gray-200 text-black items-center squircle squircle-2xl squircle-teal-400 m-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div>
          <Button onClick={() => signOut()}>Logout</Button>
        </div>
      </header>
      <div className="container mx-auto">

      </div>
      <div>Welcome to your dashboard!</div>
    </div>
  );
}