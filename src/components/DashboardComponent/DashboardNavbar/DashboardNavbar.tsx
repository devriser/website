"use client";

import React, { useEffect, useState } from "react";
import darkLogo from "@/assets/images/devriserDarkLogo.png";
import lightLogo from "@/assets/images/devriserLightLogo.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  BlogIcon,
  CaseStudyIcon,
  HomeIcon,
  LeadManagementIcon,
  LogoutIcon,
  PortfolioIcon,
  UserManagementIcon,
  WebsiteTrafficIcon,
} from "@/assets/svg/DashboardNavbarIcons";
import Link from "next/link";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import SkeletonLoading from "../Loader/SkeletonLoading";
import { useRouter } from "next/navigation";

export default function DashboardNavbar({ onLinkClick }: any) {
  const router = useRouter();
  const themes = useTheme();
  const [activeLink, setActiveLink] = useState("/web-dashboard/home");
  const [userRole, setUserRole] = useState("");

  const navBarContent = [
    {
      name: "Home",
      icon: <HomeIcon />,
      path: "/web-dashboard/home",
      roles: ["admin", "Blog Writer", "Portfolio Writer"],
    },
    {
      name: "Blog Section",
      icon: <BlogIcon />,
      path: "/web-dashboard/home/blog-section",
      roles: ["admin", "Blog Writer"],
    },
    {
      name: "Case Study",
      icon: <CaseStudyIcon />,
      path: "/web-dashboard/home/case-study",
      roles: ["admin"],
    },
    {
      name: "Portfolio Section",
      icon: <PortfolioIcon />,
      path: "/web-dashboard/home/portfolio",
      roles: ["admin", "Portfolio Writer"],
    },
    {
      name: "Website Traffic",
      icon: <WebsiteTrafficIcon />,
      path: "",
      roles: ["admin"],
    },
    {
      name: "User Management",
      icon: <UserManagementIcon />,
      path: "/web-dashboard/home/user-management",
      roles: ["admin"],
    },
    {
      name: "Lead Management",
      icon: <LeadManagementIcon />,
      path: "",
      roles: ["admin"],
    },
  ];

  const { data: userRoleData, isLoading: userRoleLoading } = useQuery(
    "userRole",
    async () => {
      const response = await fetch("http://localhost:3000/api/login");
      if (!response.ok) {
        throw new Error("Error loading user role information");
      }
      const data = await response.json();
      return data.role;
    }
  );
  useEffect(() => {
    if (!userRoleLoading) {
      setUserRole(userRoleData);
    }
  }, [userRoleLoading, userRoleData]);

  const handleLogout = () => {
    document.cookie = "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    router.push("/web-dashboard");
  };

  return (
    <div className="p-4 bg-dashboard-bg h-full gap-10 flex flex-col px-3">
      <Link
        href={"/web-dashboard/home"}
        className="flex items-center justify-center"
      >
        {themes.theme === "dark" && userRole ? (
          <Image alt="devriser logo" src={lightLogo} height={40} width={40} />
        ) : (
          <Image alt="devriser logo" src={darkLogo} height={40} width={40} />
        )}
        <h2 className="font-bold text-text-title text-secondary-reverse">
          Devriser
        </h2>
      </Link>
      {userRoleLoading ? (
        <div className="flex flex-col gap-16 w-[188px] h-full">
          <SkeletonLoading
            count={8}
            width="160px"
            wrapper={"div"}
            className="flex flex-col gap-16 bg-dashboard-input"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {navBarContent.map((item) =>
            userRole && (!item.roles || item.roles.includes(userRole)) ? (
              <Link
                href={item.path}
                key={item.name}
                onClick={(e) => {
                  onLinkClick(item.path);
                  setActiveLink(item.path);
                }}
                className={`flex items-center gap-1 px-2 py-2 whitespace-nowrap rounded-medium text-secondary-reverse font-medium ${
                  item.path === activeLink
                    ? "bg-dashboard-table  stroke-white"
                    : "hover:bg-dashboard-table "
                }`}
              >
                {item.icon}
                <h3 className={``}>{item.name}</h3>
              </Link>
            ) : null
          )}
          <div
            onClick={handleLogout}
            className={`cursor-pointer flex items-center gap-1 px-2 py-2 whitespace-nowrap rounded-medium text-secondary-reverse font-medium hover:bg-dashboard-table`}
          >
            <LogoutIcon />
            <h3 className={``}>Log out</h3>
          </div>
        </div>
      )}
    </div>
  );
}
