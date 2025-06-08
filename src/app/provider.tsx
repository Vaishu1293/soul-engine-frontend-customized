"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import UseMousePointer from "@/utils/MouseCursor";
import AppProvider from "@/contextApi/AppProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <UseMousePointer />
      <AppProvider>
        {children}
      </AppProvider>
      <Toaster position="top-center" richColors />
    </SessionProvider>
  );
}
