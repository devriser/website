"use client";
import { useQuery } from "react-query";
import {
  AvatarIcon,
  BellIcon,
  LogoutDropdown,
  ProfileDropdown,
} from "@/assets/svg/DashboardNavbarIcons";
import { DownArrow } from "@/assets/svg/HeaderSvg";
import ThemeSwitch from "@/components/shared/Navbar/ThemeSwitch";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SkeletonLoading from "../Loader/SkeletonLoading";

export default function DashboardHeader({ currentPageName }: any) {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);

  const {
    data: userInfo,
    isLoading,
    isError,
  } = useQuery(
    "userInfo",
    async () => {
      const response = await fetch("http://localhost:3000/api/login");
      if (!response.ok) {
        throw new Error("Error loading user information");
      }
      return response.json();
    },
    {
      // refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdown && !event.target.closest(".dropdown-container")) {
        setDropdown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdown]);

  const handleLogout = () => {
    document.cookie = "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    router.push("/web-dashboard");
  };

  return (
    <div className="flex items-center justify-between p-4 bg-dashboard-bg h-fit">
      <h2 className="font-medium text-text-title ">{currentPageName}</h2>
      <div
        className="flex gap-4 items-center"
        onClick={() => setDropdown(!dropdown)}
      >
        <BellIcon />
        <ThemeSwitch />
        <div className="flex items-center gap-2 relative cursor-pointer dropdown-container">
          {isLoading ? (
            <div className="h-full">
              <SkeletonLoading width={"130px"} />
            </div>
          ) : (
            <>
              <Image
                src={userInfo?.profileImage}
                alt="profile"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div>
                <p className="text-secondary-reverse font-medium">
                  {userInfo?.username}
                </p>
                <p className="text-sub-text text-xs">{userInfo?.role}</p>
              </div>
              <div
                className={`${
                  dropdown
                    ? "rotate-180 transition-all duration-100"
                    : "rotate-0 transition-all duration-100"
                }`}
              >
                <DownArrow />
              </div>
            </>
          )}
          {dropdown && (
            <div className="absolute z-50 top-16 w-full right-0 px-2 py-3 bg-dashboard-bg shadow-lg rounded-lg flex flex-col gap-2">
              <Link
                href={"/web-dashboard/home/profile"}
                className="flex items-center gap-2"
                onClick={() => setDropdown(false)}
              >
                <div className="bg-[#0075FF1A] p-1 rounded-full">
                  <ProfileDropdown />
                </div>
                <span className="font-medium text-[14px]">Profile</span>
              </Link>
              <div className="flex items-center gap-2">
                <div className="bg-[#0075FF1A] p-1 rounded-full">
                  <LogoutDropdown />
                </div>
                <span
                  onClick={handleLogout}
                  className="font-medium text-[14px]"
                >
                  Logout
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
