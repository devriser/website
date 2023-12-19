"use client";
import React, { ReactNode, useEffect, useState } from "react";
import ContextProviders from "./state-providers/ContextProviders";
import { ThemeProvider, useTheme } from "next-themes";
type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ContextProviders>{children}</ContextProviders>;
  }

  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <ContextProviders>{children}</ContextProviders>;
    </ThemeProvider>
  );
}
