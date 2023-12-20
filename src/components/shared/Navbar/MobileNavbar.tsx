"use client";

import {
  AboutUs,
  Contact,
  DarkLogo,
  Industries,
  LightMode,
  Portfolio,
  Services,
  Solutions,
} from "@/assets/svg/HeaderSvg";
import {
  useAppDispatch,
  useAppState,
} from "@/providers/state-providers/ContextProviders";
import React from "react";

export default function MobileNavbar({ params }: any) {
  const dispatch = useAppDispatch();
  const { toggle } = useAppState();

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

  return (
    <div className=" flex items-center justify-between px-6 py-3  sticky top-0 bg-primary lg:hidden">
      <div>
        <LightMode />
      </div>
      <div>
        <DarkLogo />
      </div>
      <div>
        <div
          onClick={() => {
            dispatch({ type: "SET_TOGGLE", payload: !toggle });
          }}
          className={
            toggle
              ? " flex flex-col justify-center border border-gray-100 hover:border-black hover:bg-gray-100 p-1 rounded-full w-10 h-10 items-center  transition-all duration-300"
              : " flex flex-col justify-center border gap-2 border-gray-100 hover:border-black hover:bg-gray-100 p-1 rounded-full w-10 h-10 items-center  hover:gap-1 transition-all duration-300  "
          }
        >
          <div
            className={
              toggle
                ? "w-6 h-[2px] bg-black rotate-45 translate-y-[1px] transition-all duration-700"
                : "w-6 h-[2px] bg-black transition-all duration-300"
            }
          ></div>
          <div
            className={
              toggle
                ? "w-6 h-[2px] bg-black -rotate-45 -translate-y-[1px] transition-all duration-700"
                : "w-6 h-[2px] bg-black transition-all duration-300"
            }
          ></div>
        </div>
        {toggle && (
          <>
            <div className=" bg-white h-screen top-20 absolute w-full left-0 px-6 border-t border-black pt-2"></div>
          </>
        )}
      </div>
    </div>
  );
}
