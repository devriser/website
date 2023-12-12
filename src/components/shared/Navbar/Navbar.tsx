"use client";

import React, { useContext, useState } from "react";
import devRiserLogo from "@/assets/images/devRiserLogo.png";
import Image from "next/image";
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

const Sidebar = ({ subItems }: any) => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="flex flex-col absolute left-24 bg-[#f5f5fff0] h-full top-0 gap-7 whitespace-nowrap px-2 py-5"
    >
      {subItems?.map((subItem: any) => (
        <Link
          key={subItem.name}
          href={subItem.path}
          className="flex text-black hover:bg-white transition-colors duration-200 px-3 py-1 rounded-md "
        >
          {subItem.name}
        </Link>
      ))}
    </motion.div>
  );
};

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { activeLink, toggle } = useAppState();
  const [isHovered, setIsHovered] = useState(false);

  const navBarData = [
    {
      name: "Servces",
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

  const handleItemClick = (itemName: any) => {
    if (activeLink === itemName) {
      dispatch({ type: "SET_TOGGLE", payload: !toggle });
    } else {
      dispatch({ type: "ACTIVE_LINK", payload: itemName });
      dispatch({ type: "SET_TOGGLE", payload: true });
    }
  };

  return (
    <div className="fixed top-0 bg-[#F5F5FF] h-full p-3 pt-6 flex flex-col items-center gap-8 justify-between ">
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
                ? "bg-white w-full py-2 transition-colors duration-200 rounded-md"
                : " py-2"
            }`}
            onClick={() => handleItemClick(ele.name)}
          >
            <span>{ele.icon}</span>
            <p>{ele.name}</p>
            {activeLink === ele.name && toggle && (
              <Sidebar subItems={ele.subItems} />
            )}
          </div>
        ))}
      </div>
      <div>
        <LightMode />
      </div>

      <div className="border px-4 border-black flex items-center justify-center gap-1 rounded-sm cursor-pointer">
        <p>En</p>
        <LanguageArrow />
      </div>
    </div>
  );
}
