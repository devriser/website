import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "DevRiser | About Us",
  description:
    "Elevate your customer relationships with our cutting-edge solution, designed to supercharge your business and customer interactions.",
  keywords: [
    "Devriser",
    "Website Development",
    "Mobile App Development",
    "Web App Development",
    "Enterprise Solutions",
    "Ai-ml Development",
    "Software Development",
    "SaaS Development",
    "Ui-ux Development",
    "Blockchain Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
  ],
};

export default function layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
