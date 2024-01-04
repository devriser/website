"use client";

import {
  AboutUs,
  AboutUsDark,
  ArabFlag,
  Contact,
  ContactDark,
  DownArrow,
  EnglishFlag,
  FrenchFlag,
  Industries,
  IndustriesDark,
  LanguageArrow,
  LanguageArrowDark,
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
import { usePathname } from "next/navigation";

export default function MobileNavbar({ params }: any) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { toggle } = useAppState();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(params.lang);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const themes = useTheme();

  const pathName = usePathname();

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
    // {
    //   name: "Solutions",
    //   icon: theme.theme === "dark" ? <SolutionsDark /> : <Solutions />,

    //   subItems: [
    //     { name: "Enterprise Solutions", path: "" },
    //     { name: "Web Development", path: "" },
    //     { name: "App Development", path: "" },
    //     { name: "UI/UX Design", path: "" },
    //     { name: "Cloud Computing", path: "" },
    //     { name: "Game Development", path: "" },
    //     { name: "Blockchain Development", path: "" },
    //     { name: "IoT Development", path: "" },
    //     { name: "AI/ML Development", path: "" },
    //   ],
    // },
    // {
    //   name: "Industries",
    //   icon: theme.theme === "dark" ? <IndustriesDark /> : <Industries />,

    //   subItems: [
    //     { name: "Enterprise Solutions", path: "" },
    //     { name: "Web Development", path: "" },
    //     { name: "App Development", path: "" },
    //     { name: "UI/UX Design", path: "" },
    //     { name: "Cloud Computing", path: "" },
    //     { name: "Game Development", path: "" },
    //     { name: "Blockchain Development", path: "" },
    //     { name: "IoT Development", path: "" },
    //     { name: "AI/ML Development", path: "" },
    //   ],
    // },
  ];

  const navBarData2 = [
    {
      name: "About Us",
      href: `/${params.lang}/about-us`,
      icon: themes.theme === "dark" ? <AboutUsDark /> : <AboutUs />,
    },
    {
      name: "Contact",
      href: `/${params.lang}/contact-us`,
      icon: themes.theme === "dark" ? <ContactDark /> : <Contact />,
    },
    // {
    //   name: "Portfolio",
    //   href: "",
    //   icon: themes.theme === "dark" ? <PortfolioDark /> : <Portfolio />,
    // },
  ];
  const language = [
    {
      name: "English",
      value: "en",

      flag: <EnglishFlag />,
    },
    {
      name: "French",
      value: "fr",
      flag: <FrenchFlag />,
    },
    {
      name: "Arabic",
      value: "ar",
      flag: <ArabFlag />,
    },
  ];

  const handleItemClick = (itemName: string) => {
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === itemName ? null : itemName
    );
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleLanguageClick = (language: any) => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setSelectedLanguage(language);
  };

  return (
    <AnimatePresence>
      <div className="flex items-center justify-between px-6 py-3 sticky top-0 z-50 bg-secondary lg:hidden">
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
                  className="flex flex-col gap-6 overflow-auto h-screen pb-28 bg-secondary  p-2 rounded-large pt-4 px-4"
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
                        className="flex items-center gap-2 cursor-pointer  py-2 ps-2 "
                        onClick={() => handleItemClick(item.name)}
                      >
                        {item.icon}
                        <span className="text-text-subtitle font-medium flex items-center justify-between w-full pe-6">
                          {item.name}
                          <div
                            className={`${
                              expandedItem === item.name
                                ? "rotate-180 transition-all duration-200"
                                : "rotate-0 transition-all duration-200"
                            }`}
                          >
                            <DownArrow />
                          </div>
                        </span>
                      </motion.div>
                      {expandedItem === item.name && item.subItems && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-3  py-2 ps-2 "
                        >
                          {item.subItems.map((subItem, index) => (
                            <Link
                              href={subItem.path}
                              key={index}
                              className="pb-2 ps-5"
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

                  {navBarData2.map((item, index) => (
                    <Link
                      className="flex items-center gap-2 cursor-pointer  py-2 ps-2 "
                      key={index}
                      href={item.href}
                      onClick={() =>
                        dispatch({ type: "SET_TOGGLE", payload: false })
                      }
                    >
                      {item.icon}
                      <span className="text-text-subtitle font-medium flex items-center justify-between w-full pe-6">
                        {item.name}
                      </span>
                    </Link>
                  ))}

                  {/* <div
                    onClick={() => handleLanguageClick(selectedLanguage)}
                    className={`cursor-pointer flex-col  border p-1 bg-primary border-primary-border flex items-center justify-center gap-3 py-2 rounded-medium `}
                  >
                    <div
                      className={`text-secondary-reverse flex items-center gap-3 text-text-title font-medium `}
                    >
                      {
                        language.find(
                          (locale) => locale.value === selectedLanguage
                        )?.flag
                      }
                      <span>
                        {selectedLanguage === "en" && "English"}
                        {selectedLanguage === "fr" && "French"}
                        {selectedLanguage === "ar" && "Arabic"}
                      </span>
                      <p
                        className={`pt-1 ${
                          isLanguageDropdownOpen
                            ? "rotate-90 transition-all duration-200"
                            : " transition-all duration-200"
                        }`}
                      >
                        {themes.theme === "dark" ? (
                          <LanguageArrowDark />
                        ) : (
                          <LanguageArrow />
                        )}
                      </p>
                    </div>
                    {isLanguageDropdownOpen && (
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -10, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className={` flex flex-col gap-4 bg-primary w-full  top-14 py-2 px-1 rounded-medium`}
                      >
                        {language.map((locale, index) => (
                          <Link
                            href={redirectedPathName(locale.value)}
                            key={index}
                          >
                            <div
                              className={`cursor-pointer flex gap-2 px-2 hover:bg-primary py-1 rounded-large text-secondary-reverse transition-colors duration-200 `}
                            >
                              {locale.flag}
                              {locale.name}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div> */}
                </motion.div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}
