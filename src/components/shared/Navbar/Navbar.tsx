"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  AboutUs,
  AboutUsDark,
  ArabFlag,
  Contact,
  ContactDark,
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
import { motion } from "framer-motion";
import { GradientRightArrow } from "@/assets/svg/AllIconComponent";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";
import darkLogo from "@/assets/images/devriserDarkLogo.png";
import lightLogo from "@/assets/images/devriserLightLogo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { i18n } from "../../../../i18n";

const Sidebar = ({ subItems, params, closeSidebar }: any) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (closeSidebar) {
      const handleDomClick = (e: any) => {
        if (
          !sidebarRef.current?.contains(e.target) &&
          !e.target.closest(".your-sidebar-class") &&
          !e.target.closest(".your-navbar-class")
        ) {
          closeSidebar();
        }
      };
      document.addEventListener("click", handleDomClick);

      return () => {
        document.removeEventListener("click", handleDomClick);
      };
    }
  }, [closeSidebar]);

  return (
    <div className="h-full">
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
        } absolute bg-secondary h-screen -top-6 -bottom-12 gap-7 whitespace-nowrap px-2 py-5 z-50 your-sidebar-class`}
      >
        {subItems?.map((subItem: any, index: any) => (
          <Link
            key={index}
            href={subItem.path}
            className={`flex text-secondary-reverse hover:bg-primary transition-colors duration-200 px-3 py-1 rounded-md ${
              subItem.name === "All Services" &&
              " text-transparent bg-blue-gradient bg-clip-text font-medium"
            } `}
          >
            {subItem.name === "All Services" ? (
              <span className="flex items-center gap-3">
                <p>All Services</p>
                <GradientRightArrow />
              </span>
            ) : (
              subItem.name
            )}
            {/* {subItem.name} */}
          </Link>
        ))}
      </motion.div>
    </div>
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
      icon:
        themes.theme === "dark" && themes.systemTheme === "dark" ? (
          <ServicesDark />
        ) : (
          <Services />
        ),
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
        {
          name: "UI/UX Design",
          path: `/${params.lang}/services/ui-ux-design`,
        },
        {
          name: "Cloud Computing",
          path: `/${params.lang}/services/cloud-computing`,
        },
        {
          name: "Game Development",
          path: `/${params.lang}/services/game-development`,
        },
        {
          name: "Blockchain Development",
          path: `/${params.lang}/services/blockchain-development`,
        },
        {
          name: "IoT Development",
          path: `/${params.lang}/services/iot-development`,
        },
        {
          name: "AI/ML Developoment",
          path: `/${params.lang}/services/ai-ml-development`,
        },
        {
          name: "All Services",
          path: `/${params.lang}/services`,
        },
      ],
    },
    // {
    //   name: "Solutions",
    //   icon: themes.theme === "dark" ? <SolutionsDark /> : <Solutions />,
    //   subItems: [
    //     { name: "Enterprise Solutions", path: "" },
    //     { name: "Web Development", path: "" },
    //     { name: "App Development", path: "" },
    //     { name: "UI/UX Design", path: "" },
    //     { name: "Cloud Computing", path: "" },
    //     { name: "Game Development", path: "" },
    //     { name: "Blockchain Development", path: "" },
    //     { name: "IoT Development", path: "" },
    //     { name: "AI/ML Developoment", path: "" },
    //   ],
    // },
    // {
    //   name: "Industries",
    //   icon: themes.theme === "dark" ? <IndustriesDark /> : <Industries />,
    //   subItems: [
    //     { name: "Enterprise Solutions", path: "" },
    //     { name: "Web Development", path: "" },
    //     { name: "App Development", path: "" },
    //     { name: "UI/UX Design", path: "" },
    //     { name: "Cloud Computing", path: "" },
    //     { name: "Game Development", path: "" },
    //     { name: "Blockchain Development", path: "" },
    //     { name: "IoT Development", path: "" },
    //     { name: "AI/ML Developoment", path: "" },
    //   ],
    // },
  ];

  const navBarData2 = [
    {
      name: "About Us",
      href: `/${params.lang}/about-us`,
      icon:
        themes.theme === "dark" && themes.systemTheme === "dark" ? (
          <AboutUsDark />
        ) : (
          <AboutUs />
        ),
    },
    {
      name: "Contact",
      href: `/${params.lang}/contact-us`,
      icon:
        themes.theme === "dark" && themes.systemTheme === "dark" ? (
          <ContactDark />
        ) : (
          <Contact />
        ),
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

  const handleItemClick = (itemName: any) => {
    if (activeLink === itemName) {
      dispatch({ type: "SET_TOGGLE", payload: !toggle });
    } else {
      dispatch({ type: "ACTIVE_LINK", payload: itemName });
      dispatch({ type: "SET_TOGGLE", payload: true });
    }
  };

  const handleLanguageClick = (language: any) => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setSelectedLanguage(language);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <header className="bg-secondary h-full p-3 pt-6 flex flex-col items-center gap-8 justify-between max-lg:hidden your-navbar-class">
      <div className="sticky top-6 flex flex-col items-center justify-between h-[calc(100vh-3rem)]">
        <Link href={`/${params.lang}`} className="cursor-pointer">
          {themes.theme === "dark" ? (
            <Image src={lightLogo} alt="img" height={56} width={56} />
          ) : (
            <Image src={darkLogo} alt="img" height={56} width={56} />
          )}
        </Link>
        <div className="flex flex-col items-center gap-6 ">
          {navBarData.map((ele, index) => (
            <div
              key={index}
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

          {navBarData2.map((item, index) => (
            <Link
              className={`flex flex-col items-center cursor-pointer ${
                activeLink === item.name && toggle
                  ? "bg-primary w-full py-2 transition-colors duration-200 rounded-md"
                  : " py-2"
              }`}
              key={index}
              href={item.href}
            >
              {item.icon}
              <span className="text-secondary-reverse">{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center">
            <ThemeSwitch params={params} />
          </div>
          {/* <div
            onClick={() => handleLanguageClick(selectedLanguage)}
            className={`cursor-pointer relative border p-1  border-primary-border flex items-center justify-center gap-1 rounded-medium `}
          >
            <span className={`text-secondary-reverse flex items-center gap-1`}>
              {
                language.find((locale) => locale.value === selectedLanguage)
                  ?.flag
              }
              {selectedLanguage}
            </span>
            <p className='pt-1'>
              {themes.theme === "dark" ? (
                <LanguageArrowDark />
              ) : (
                <LanguageArrow />
              )}
            </p>
          </div> */}
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
              className={`absolute flex flex-col gap-4 ${
                params.lang === "ar" ? "right-[86px]" : "left-[86px]"
              } bg-secondary -bottom-[6px] py-2 px-1 rounded-md`}
            >
              {language.map((locale, index) => (
                <Link href={redirectedPathName(locale.value)} key={index}>
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
        </div>
      </div>
    </header>
  );
}
