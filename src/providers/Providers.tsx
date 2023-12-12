import React, { ReactNode } from "react";
import ContextProviders from "./state-providers/ContextProviders";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return <ContextProviders>{children}</ContextProviders>;
}
