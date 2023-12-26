"use client";

import {
  AboutUs,
  AboutUsDark,
  Contact,
  ContactDark,
  DarkLogo,
  DownArrow,
  Industries,
  IndustriesDark,
  LightMode,
  Portfolio,
  PortfolioDark,
  Services,
  ServicesDark,
  Solutions,
  SolutionsDark,
} from "@/assets/svg/HeaderSvg";
import {
  useAppDispatch,
  useAppState,
} from "@/providers/state-providers/ContextProviders";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import ThemeSwitchMobile from "./ThereSwitchMobile";
import darkLogo from "@/assets/images/devriserDarkLogo.png";
import lightLogo from "@/assets/images/devriserLightLogo.png";
import Image from "next/image";
import { LeftArrow } from "@/assets/svg/ShelfSolutionsSvg";
import UpArrow from "@/assets/svg/UpArrow";

export default function MobileNavbar({ params }: any) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { toggle } = useAppState();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const navBarData = [
    {
      name: "Services",
      icon: theme.theme === "dark" ? <ServicesDark /> : <Services />,

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
        { name: "AI/ML Development", path: "" },
        { name: "All Services", path: "" },
      ],
    },
    {
      name: "Solutions",
      icon: theme.theme === "dark" ? <SolutionsDark /> : <Solutions />,

      subItems: [
        { name: "Enterprise Solutions", path: "" },
        { name: "Web Development", path: "" },
        { name: "App Development", path: "" },
        { name: "UI/UX Design", path: "" },
        { name: "Cloud Computing", path: "" },
        { name: "Game Development", path: "" },
        { name: "Blockchain Development", path: "" },
        { name: "IoT Development", path: "" },
        { name: "AI/ML Development", path: "" },
      ],
    },
    {
      name: "AboutUs",
      icon: theme.theme === "dark" ? <AboutUsDark /> : <AboutUs />,

      subItems: [
        { name: "Enterprise Solutions", path: "" },
        { name: "Web Development", path: "" },
        { name: "App Development", path: "" },
        { name: "UI/UX Design", path: "" },
        { name: "Cloud Computing", path: "" },
        { name: "Game Development", path: "" },
        { name: "Blockchain Development", path: "" },
        { name: "IoT Development", path: "" },
        { name: "AI/ML Development", path: "" },
      ],
    },
    {
      name: "Industries",
      icon: theme.theme === "dark" ? <IndustriesDark /> : <Industries />,
    },
    {
      name: "Portfolio",
      icon: theme.theme === "dark" ? <PortfolioDark /> : <Portfolio />,
    },
    {
      name: "Contact",
      icon: theme.theme === "dark" ? <ContactDark /> : <Contact />,
    },
  ];

  const handleItemClick = (itemName: string) => {
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === itemName ? null : itemName
    );
  };

  const themes = useTheme();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between px-6 py-3 sticky top-0 z-50 bg-secondary lg:hidden"
      >
        <div>
          <ThemeSwitchMobile />
        </div>
        <Link href={`/${params.lang}`} className="cursor-pointer">
          {themes.theme === "dark" ? (
            <Image src={lightLogo} alt="img" height={56} width={56} />
          ) : (
            <Image src={darkLogo} alt="img" height={56} width={56} />
          )}
        </Link>
        <div>
          <div
            onClick={() => {
              dispatch({ type: "SET_TOGGLE", payload: !toggle });
            }}
            className={
              toggle
                ? " flex flex-col justify-center border border-secondary-reverse hover:secborder-secondary-reverse hover:secborder-secondary-reverse p-1 rounded-full w-10 h-10 items-center  transition-all duration-300"
                : " flex flex-col justify-center border gap-2 border-secondary-reverse hover:border-secondary-reverse hover:secborder-secondary-reverse p-1 rounded-full w-10 h-10 items-center  hover:gap-1 transition-all duration-300  "
            }
          >
            <div
              className={
                toggle
                  ? "w-6 h-[2px] bg-secondary-reverse rotate-45 translate-y-[1px] transition-all duration-700"
                  : "w-6 h-[2px] bg-secondary-reverse transition-all duration-300"
              }
            ></div>
            <div
              className={
                toggle
                  ? "w-6 h-[2px] bg-secondary-reverse -rotate-45 -translate-y-[1px] transition-all duration-700"
                  : "w-6 h-[2px] bg-secondary-reverse transition-all duration-300"
              }
            ></div>
          </div>
          {toggle && (
            <>
              <div className="fixed inset-0 top-20 backdrop-blur-2xl"></div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="  h-screen top-20 absolute w-full left-0 px-6  pt-2 "
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-8 overflow-auto h-screen pb-28 bg-secondary  p-2 rounded-large pt-4 px-4"
                >
                  {navBarData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-2"
                    >
                      <motion.div
                        className="flex items-center gap-2 cursor-pointer bg-primary py-2 ps-2 rounded-banner-rounded border border-secondary-reverse"
                        onClick={() => handleItemClick(item.name)}
                      >
                        {item.icon}
                        <span className="text-text-subtitle font-medium flex items-center justify-between w-full pe-6">
                          {item.name}
                          <DownArrow />
                        </span>
                      </motion.div>
                      {expandedItem === item.name && item.subItems && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-3 bg-primary py-2 ps-2 rounded-banner-rounded border-secondary-reverse border"
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              href={subItem.path}
                              key={subIndex}
                              className="border-b pb-3 ps-3"
                              onClick={() =>
                                dispatch({
                                  type: "SET_TOGGLE",
                                  payload: false,
                                })
                              }
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                  <div className="border p-2 flex items-center  text-text-title font-semibold bg-gray-300 rounded-large justify-between ps-8 pe-6">
                    English
                    <DownArrow />
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
