"use client";
import React, { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import ContextProviders from "./state-providers/ContextProviders";
import { ThemeProvider } from "next-themes";
type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ContextProviders>{children}</ContextProviders>;
  }

  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <ContextProviders>{children}</ContextProviders>
      </ThemeProvider>
    </>
  );
}
