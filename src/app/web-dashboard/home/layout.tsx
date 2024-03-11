import DashboardHeader from "@/components/DashboardComponent/DashboardHeader/DashboardHeader";
import DashboardNavbar from "@/components/DashboardComponent/DashboardNavbar/DashboardNavbar";
import React from "react";
import LayoutContext from "./LayoutContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutContext data={children} />;
}
