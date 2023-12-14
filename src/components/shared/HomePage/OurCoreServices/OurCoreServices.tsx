import React from "react";
import { getLoacales } from "../../../../../getLocales";
import UpArrow from "@/assets/svg/UpArrow";
import ourCoreServicesImg from "@/assets/images/ourCoreServices.webp";
import Image from "next/image";

export default async function OurCoreServices({ params }: any) {
  const lang = await getLoacales(params.lang);

  const OurCoreServicesData = [
    {
      name: lang.ourCoreServices.pointOne,
      number: "01",
      icon: <UpArrow />,
    },
    {
      name: lang.ourCoreServices.pointTwo,
      number: "02",
      icon: <UpArrow />,
    },
    {
      name: lang.ourCoreServices.pointThree,
      number: "03",
      icon: <UpArrow />,
    },
    {
      name: lang.ourCoreServices.pointFour,
      number: "04",
      icon: <UpArrow />,
    },
    {
      name: lang.ourCoreServices.pointFive,
      number: "05",
      icon: <UpArrow />,
    },
    {
      name: lang.ourCoreServices.pointSix,
      number: "06",
      icon: <UpArrow />,
    },
    {
      name: lang.ourCoreServices.pointSeven,
      number: "07",
      icon: <UpArrow />,
    },
    {
      name: lang.ourCoreServices.pointEight,
      number: "08",
      icon: <UpArrow />,
    },
    {
      name: lang.ourCoreServices.pointNine,
      number: "09",
      icon: <UpArrow />,
    },
  ];

  return (
    <div className="bg-secondary flex flex-col gap-8 pt-6 px-6 pb-6">
      <p className="text-secondary-reverse text-text-heading font-semibold text-center">
        {lang.ourCoreServices.heading}
      </p>
      <div className="flex gap-8">
        <Image
          src={ourCoreServicesImg}
          alt="Our Core Services"
          className="h-18 max-sm:hidden"
        />
        <div className="flex-1 flex flex-col justify-between max-sm:gap-4">
          {OurCoreServicesData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between max-sm:whitespace-nowrap max-sm:gap-2"
            >
              <div className="flex gap-3 ">
                <p className="text-text-subtitle text-secondary-reverse font-medium">
                  {item.number}
                </p>
                <p className="text-text-subtitle text-secondary-reverse font-medium">
                  {item.name}
                </p>
              </div>
              <p>{item.icon}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
