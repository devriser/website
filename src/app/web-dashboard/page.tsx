import React from "react";
import LoginForm from "@/components/DashboardComponent/LoginForm/LoginForm";
import getCookieData from "@/utils/getCookieData";
import { redirect } from "next/navigation";

export default function page() {
  const { token } = getCookieData();
  if (token) redirect("web-dashboard/home");
  return <LoginForm />;
}
