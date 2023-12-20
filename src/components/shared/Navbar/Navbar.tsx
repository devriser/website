"use client";

import React, { useRef, useState } from "react";
import {
  AboutUs,
  Contact,
  DarkLogo,
  Industries,
  LanguageArrow,
  Portfolio,
  Services,
  Solutions,
} from "@/assets/svg/HeaderSvg";
import {
  useAppDispatch,
  useAppState,
} from "@/providers/state-providers/ContextProviders";
import Link from "next/link";
import { motion } from "framer-motion";
import { GradientRightArrow } from "@/assets/svg/AllIconComponent";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

const Sidebar = ({ subItems, params, closeSidebar }: any) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      closeSidebar();
    }
  };

  return (
    <motion.div
      ref={sidebarRef}
      initial={
        params.lang === "ar" ? { x: 10, opacity: 0 } : { x: -10, opacity: 0 }
      }
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className={` flex flex-col ${
        params.lang === "ar" ? "right-[86px]" : "left-[86px]"
      } absolute bg-secondary h-full -top-6 -bottom-12 gap-7 whitespace-nowrap px-2 py-5`}
    >
      {subItems?.map((subItem: any) => (
        <Link
          key={subItem.name}
          href={subItem.path}
          className={`flex text-secondary-reverse hover:bg-primary transition-colors duration-200 px-3 py-1 rounded-md ${
            subItem.name === "All Services" &&
            " text-transparent bg-blue-gradient bg-clip-text font-medium"
          } `}
        >
          {subItem.name === "All Services" ? (
            <div className="flex items-center gap-3">
              <p>All Services</p>
              <GradientRightArrow />
            </div>
          ) : (
            subItem.name
          )}
          {/* {subItem.name} */}
        </Link>
      ))}
    </motion.div>
  );
};

export default function Navbar({ params }: any) {
  const dispatch = useAppDispatch();
  const { activeLink, toggle } = useAppState();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(params.lang);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const themes = useTheme();

  const navBarData = [
    {
      name: "Services",
      icon: <Services />,
      subItems: [
        {
          name: "Enterprise Solutions",
          path: `/${params.lang}/services/enterprise-solutions-development`,
        },
        {
          name: "Web Development",
          path: `/${params.lang}/services/website-development-services`,
        },
        {
          name: "App Development",
          path: `/${params.lang}/services/app-development`,
        },
        { name: "UI/UX Design", path: "" },
        { name: "Cloud Computing", path: "" },
        { name: "Game Development", path: "" },
        { name: "Blockchain Development", path: "" },
        { name: "IoT Development", path: "" },
        { name: "AI/ML Developoment", path: "" },
        { name: "All Services", path: "" },
      ],
    },
    {
      name: "Solutions",
      icon: <Solutions />,
      subItems: [
        { name: "Enterprise Solutions", path: "" },
        { name: "Web Development", path: "" },
        { name: "App Development", path: "" },
        { name: "UI/UX Design", path: "" },
        { name: "Cloud Computing", path: "" },
        { name: "Game Development", path: "" },
        { name: "Blockchain Development", path: "" },
        { name: "IoT Development", path: "" },
        { name: "AI/ML Developoment", path: "" },
      ],
    },
    {
      name: "AboutUs",
      icon: <AboutUs />,
      subItems: [
        { name: "Enterprise Solutions", path: "" },
        { name: "Web Development", path: "" },
        { name: "App Development", path: "" },
        { name: "UI/UX Design", path: "" },
        { name: "Cloud Computing", path: "" },
        { name: "Game Development", path: "" },
        { name: "Blockchain Development", path: "" },
        { name: "IoT Development", path: "" },
        { name: "AI/ML Developoment", path: "" },
      ],
    },
    {
      name: "Industries",
      icon: <Industries />,
    },
    {
      name: "Portfolio",
      icon: <Portfolio />,
    },
    {
      name: "Contact",
      icon: <Contact />,
    },
  ];

  const language = [
    {
      name: "English",
      value: "en",
      flag: "",
    },
    {
      name: "French",
      value: "fr",
      flag: "",
    },
    {
      name: "Arabic",
      value: "ar",
      flag: "",
    },
  ];

  const handleItemClick = (itemName: any) => {
    if (activeLink === itemName) {
      dispatch({ type: "SET_TOGGLE", payload: !toggle });
    } else {
      dispatch({ type: "ACTIVE_LINK", payload: itemName });
      dispatch({ type: "SET_TOGGLE", payload: true });
    }
  };

  const handleLanguageClick = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };
  const handleLanguageChange = (language: any) => {
    setSelectedLanguage(language);
    const currentPath = window.location.pathname;
    const newPath = `/${params.lang}${currentPath}`;
    window.history.replaceState({}, "", newPath);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="bg-secondary h-full p-3 pt-6 flex flex-col items-center gap-8 justify-between max-lg:hidden">
      <div className="sticky top-6 flex flex-col items-center justify-between h-[calc(100vh-3rem)]">
        <Link href="" className="cursor-pointer">
          {/* <Image src={devRiserLogo} alt="img" height={56} width={56} /> */}
          <DarkLogo />
        </Link>
        <div className="flex flex-col items-center gap-6 ">
          {navBarData.map((ele) => (
            <div
              key={ele.name}
              className={`flex flex-col items-center cursor-pointer ${
                activeLink === ele.name && toggle
                  ? "bg-primary w-full py-2 transition-colors duration-200 rounded-md"
                  : " py-2"
              }`}
              onClick={() => handleItemClick(ele.name)}
            >
              <span>{ele.icon}</span>
              <p className="text-secondary-reverse">{ele.name}</p>
              {activeLink === ele.name && toggle && (
                <Sidebar
                  subItems={ele.subItems}
                  params={params}
                  closeSidebar={closeSidebar}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* <div onClick={themeChanger}>
            <LightMode />
          </div> */}
          <ThemeSwitch />

          <div
            onClick={handleLanguageClick}
            className=" relative border px-4 border-primary-border flex items-center justify-center gap-1 rounded-sm cursor-pointer "
          >
            <span className="text-secondary-reverse">{selectedLanguage}</span>
            <p className="pt-1">
              <LanguageArrow />
            </p>
          </div>
          {isLanguageDropdownOpen && (
            <motion.div
              initial={
                params.lang === "ar"
                  ? { x: 10, opacity: 0 }
                  : { x: -10, opacity: 0 }
              }
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`absolute ${
                params.lang === "ar" ? "right-[86px]" : "left-[86px]"
              } bg-secondary -bottom-[6px] py-1 px-1 rounded-md`}
            >
              <div className="flex flex-col gap-2">
                {language.map((item) => (
                  <span
                    onClick={() => {
                      handleLanguageChange(item.value);
                      setIsLanguageDropdownOpen(false);
                    }}
                    className="cursor-pointer hover:bg-primary text-secondary-reverse transition-colors duration-200 px-5 py-1 rounded-md"
                    key={item.name}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
