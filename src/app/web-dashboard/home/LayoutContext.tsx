"use client";
import DashboardHeader from "@/components/DashboardComponent/DashboardHeader/DashboardHeader";
import DashboardNavbar from "@/components/DashboardComponent/DashboardNavbar/DashboardNavbar";
import React, { useEffect, useState } from "react";

export default function LayoutContext({ data }: { data: React.ReactNode }) {
  const [currentPageName, setCurrentPageName] = useState("Home");

  useEffect(() => {
    const pathToPageName: Record<string, string> = {
      "/web-dashboard/home": "Home",
      "/web-dashboard/home/blog-section": "Blog Section",
      "/web-dashboard/home/case-study": "Case Study",
      "/web-dashboard/home/user-management": "User Management",
      "/web-dashboard/home/portfolio": "Portfolio",
      "/web-dashboard/home/profile": "Portfolio",
    };

    const currentPath = window.location.pathname;
    setCurrentPageName(pathToPageName[currentPath] || "Home");
  }, []);

  const handleLinkClick = (path: string) => {
    const pathToPageName: Record<string, string> = {
      "/web-dashboard/home": "Home",
      "/web-dashboard/home/blog-section": "Blog Section",
      "/web-dashboard/home/case-study": "Case Study",
      "/web-dashboard/home/user-management": "User Management",
      "/web-dashboard/home/portfolio": "Portfolio",
      "/web-dashboard/home/profile": "Portfolio",
    };

    const updatedPageName = pathToPageName[path] || "Home";
    setCurrentPageName(updatedPageName);
  };

  return (
    <div className="flex w-full h-full">
      <div className="w-fit">
        <DashboardNavbar onLinkClick={handleLinkClick} />
      </div>
      <div className="w-full h-full ">
        <DashboardHeader currentPageName={currentPageName} />
        <div className="h-[calc(100%-72px)] bg-dashboard-light-bg">{data}</div>
      </div>
    </div>
  );
}
