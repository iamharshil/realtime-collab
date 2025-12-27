import { createAuthClient } from "better-auth/react";

export const { signIn, signOut, signUp, useSession, ...authClient } = createAuthClient({
  baseURL: "http://localhost:3000", // Your app's base URL
});