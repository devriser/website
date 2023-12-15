"use client";

import React, { useEffect, useState } from "react";
import {
  AboutUs,
  Contact,
  DarkLogo,
  Industries,
  LanguageArrow,
  LightMode,
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
import { getLoacales } from "../../../../getLocales";

const Sidebar = ({ subItems }: any) => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className=" flex flex-col absolute left-24 bg-[#f5f5ff] h-full top-0 gap-7 whitespace-nowrap px-2 py-5"
    >
      {subItems?.map((subItem: any) => (
        <Link
          key={subItem.name}
          href={subItem.path}
          className="flex text-black hover:bg-primary transition-colors duration-200 px-3 py-1 rounded-md "
        >
          {subItem.name}
        </Link>
      ))}
    </motion.div>
  );
};

export default function Navbar({ params }: any) {
  const dispatch = useAppDispatch();
  const { activeLink, toggle } = useAppState();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const navBarData = [
    {
      name: "Services",
      icon: <Services />,
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
  };
  return (
    <header className="bg-secondary h-full p-3 pt-6 flex flex-col items-center gap-8 justify-between ">
      <div className="sticky top-6 flex flex-col items-center justify-between h-[calc(100vh-3rem)]">
        <div className="cursor-pointer">
          {/* <Image src={devRiserLogo} alt="img" height={56} width={56} /> */}
          <DarkLogo />
        </div>
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
                <Sidebar subItems={ele.subItems} params={params} />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5">
          <div>
            <LightMode />
          </div>

          <div
            onClick={handleLanguageClick}
            className=" relative border px-4 border-black flex items-center justify-center gap-1 rounded-sm cursor-pointer "
          >
            <span>{selectedLanguage}</span>
            <p className="pt-1">
              <LanguageArrow />
            </p>
          </div>
          {isLanguageDropdownOpen && (
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute left-24 bg-[#f5f5ff] bottom-2 py-1 px-1 rounded-md"
            >
              <div className="flex flex-col gap-2">
                {language.map((item) => (
                  <span
                    onClick={() => {
                      handleLanguageChange(item.value);
                      setIsLanguageDropdownOpen(false);
                    }}
                    className="cursor-pointer hover:bg-primary transition-colors duration-200 px-5 py-1 rounded-md"
                    key={item.name}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
              {/* Add more languages as needed */}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
