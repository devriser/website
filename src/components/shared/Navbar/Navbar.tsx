"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AboutUs,
  AboutUsDark,
  ArabFlag,
  ChineseFlag,
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
import { getLocales } from "../../../../getLocales";

interface LocaleData {
  navBar: {
    mainHeadingOne: string;
    mainHeadingTwo: string;
    mainHeadingThree: string;
    mainHeadingFour: string;
    mainHeadingFive: string;
    subHeadingOne: string;
    subHeadingTwo: string;
    subHeadingThree: string;
    subHeadingFour: string;
    subHeadingFive: string;
    subHeadingSix: string;
    subHeadingSeven: string;
    subHeadingEight: string;
    subHeadingNine: string;
    subHeadingTen: string;
  };
}

interface NavbarProps {
  params: { lang: string };
}

export default function Navbar({ params }: NavbarProps) {
  const dispatch = useAppDispatch();
  const { activeLink, toggle } = useAppState();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(params.lang);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [lang, setLang] = useState<LocaleData | null>(null);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const themes = useTheme();

  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  useLayoutEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSideBar]);

  useLayoutEffect(() => {
    document.addEventListener("click", handleClickLanguage);

    return () => {
      document.removeEventListener("click", handleClickLanguage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLanguageDropdownOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node) &&
      openSideBar
    ) {
      setOpenSideBar(false);
    }
  };
  const handleClickLanguage = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node) &&
      isLanguageDropdownOpen
    ) {
      setIsLanguageDropdownOpen(false);
    }
  };

  useLayoutEffect(() => {
    const fetchData = async () => {
      const locales = await getLocales(params.lang);
      setLang(locales);
    };

    fetchData();
  }, [params.lang]);

  if (!lang) {
    return null;
  }

  const navBarData = [
    {
      name: lang.navBar.mainHeadingOne,
      icon: themes.theme === "dark" ? <ServicesDark /> : <Services />,
      subItems: [
        {
          name: lang.navBar.subHeadingOne,
          path: `/${params.lang}/services/enterprise-solutions-development`,
        },
        {
          name: lang.navBar.subHeadingTwo,
          path: `/${params.lang}/services/website-development-services`,
        },
        {
          name: lang.navBar.subHeadingThree,
          path: `/${params.lang}/services/app-development`,
        },
        {
          name: lang.navBar.subHeadingFour,
          path: `/${params.lang}/services/ui-ux-design`,
        },
        {
          name: lang.navBar.subHeadingFive,
          path: `/${params.lang}/services/cloud-computing`,
        },
        {
          name: lang.navBar.subHeadingSix,
          path: `/${params.lang}/services/game-development`,
        },
        {
          name: lang.navBar.subHeadingSeven,
          path: `/${params.lang}/services/blockchain-development`,
        },
        {
          name: lang.navBar.subHeadingEight,
          path: `/${params.lang}/services/iot-development`,
        },
        {
          name: lang.navBar.subHeadingNine,
          path: `/${params.lang}/services/ai-ml-development`,
        },
        {
          name: lang.navBar.subHeadingTen,
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
      name: lang.navBar.mainHeadingFour,
      href: `/${params.lang}/about-us`,
      icon: themes.theme === "dark" ? <AboutUsDark /> : <AboutUs />,
    },
    {
      name: lang.navBar.mainHeadingFive,
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
      shortName: "EN",

      flag: <EnglishFlag />,
    },
    {
      name: "Français",
      value: "fr",
      shortName: "FR",
      flag: <FrenchFlag />,
    },
    {
      name: "中文",
      value: "cn",
      shortName: "中文",
      flag: <ChineseFlag />,
    },
    {
      name: "العربية",
      value: "ar",
      shortName: "العربية",
      flag: <ArabFlag />,
    },
  ];

  const handleItemClick = (itemName: any) => {
    if (activeLink === itemName) {
      setOpenSideBar((prev) => !prev);
    } else {
      dispatch({ type: "ACTIVE_LINK", payload: itemName });
      setOpenSideBar(true);
    }
  };

  const handleLanguageClick = (language: any) => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setSelectedLanguage(language);
  };

  return (
    <header className="bg-secondary  h-full p-3 pt-6 flex flex-col items-center gap-8 justify-between max-lg:hidden ">
      <div className="sticky top-6 flex flex-col items-center justify-between h-[calc(100vh-3rem)]">
        <Link href={`/${params.lang}`} className="cursor-pointer">
          {themes.theme === "dark" ? (
            <Image src={lightLogo} alt="img" height={56} width={56} />
          ) : (
            <Image src={darkLogo} alt="img" height={56} width={56} />
          )}
        </Link>
        <div className="flex flex-col items-center gap-6 " ref={sidebarRef}>
          {navBarData.map((ele, index) => (
            <div
              key={index}
              className={`flex flex-col items-center cursor-pointer flex-wrap ${
                activeLink === ele.name && openSideBar
                  ? "bg-primary w-full py-2 transition-colors duration-200 rounded-md"
                  : " py-2"
              }`}
              onClick={() => handleItemClick(ele.name)}
            >
              <span>{ele.icon}</span>
              <p
                className={`text-secondary-reverse ${
                  params.lang === "fr" ? "w-24 text-center" : ""
                }`}
              >
                {ele.name}
              </p>
              {activeLink === ele.name && openSideBar && (
                <motion.div
                  initial={
                    params.lang === "ar"
                      ? { x: 10, opacity: 0 }
                      : { x: -10, opacity: 0 }
                  }
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className={`flex flex-col absolute bg-secondary ${
                    params.lang === "ar"
                      ? "right-[108px]"
                      : params.lang === "fr"
                      ? "left-[118px]"
                      : "left-[86px]"
                  } h-screen -top-6 -bottom-12 gap-7 whitespace-nowrap px-2 py-5 z-50`}
                >
                  {ele.subItems?.map((subItem: any, index: any) => (
                    <Link
                      key={index}
                      href={subItem.path}
                      className={`flex text-secondary-reverse hover:bg-primary transition-colors duration-200 px-3 py-1 rounded-md ${
                        subItem.name === lang.navBar.subHeadingTen &&
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
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          {navBarData2.map((item, index) => (
            <Link
              className={`flex flex-col items-center cursor-pointer ${
                activeLink === item.name && openSideBar
                  ? "bg-primary w-full py-2 transition-colors duration-200 rounded-md"
                  : " py-2"
              }`}
              key={index}
              href={item.href}
              onClick={() => setOpenSideBar(false)}
            >
              {item.icon}
              <span
                className={`text-secondary-reverse ${
                  params.lang === "fr" ? "w-24 text-center" : ""
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center">
            <ThemeSwitch params={params} />
          </div>
          <div
            onClick={() => handleLanguageClick(selectedLanguage)}
            className={`cursor-pointer relative border p-1  border-primary-border flex items-center justify-center gap-1 rounded-medium `}
          >
            <span className={`text-secondary-reverse flex items-center gap-1`}>
              {/* {
                language.find((locale) => locale.value === selectedLanguage)
                  ?.flag
              } */}
              {
                language.find((locale) => locale.value === selectedLanguage)
                  ?.shortName
              }
            </span>
            {/* <p className="">
              {themes.theme === "dark" ? (
                <LanguageArrowDark />
              ) : (
                <LanguageArrow />
              )}
            </p> */}
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
              className={`absolute flex flex-col gap-4 ${
                params.lang === "ar"
                  ? "right-[108px]"
                  : params.lang === "fr"
                  ? "left-[118px]"
                  : "left-[86px]"
              }  bg-secondary -bottom-[6px] py-2 px-1 rounded-md`}
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
