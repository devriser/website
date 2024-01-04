"use client";

import React, { useEffect, useState } from "react";
import { getLoacales } from "../../../../../getLocales";
import UpArrow from "@/assets/svg/UpArrow";
import ourCoreServicesImg from "@/assets/images/ourCoreServices.webp";
import Image from "next/image";
import Link from "next/link";

interface OurCoreServicesProps {
  params: { lang: string };
}

interface Locales {
  ourCoreServices: {
    heading: string;
    pointOne: string;
    pointTwo: string;
    pointThree: string;
    pointFour: string;
    pointFive: string;
    pointSix: string;
    pointSeven: string;
    pointEight: string;
    pointNine: string;
  };
}

export default function OurCoreServices({ params }: OurCoreServicesProps) {
  const [lang, setLang] = useState<Locales | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const locales = await getLoacales(params.lang);
      setLang(locales);
    };

    fetchData();
  }, [params.lang]);

  if (!lang) {
    return null;
  }
  const OurCoreServicesData = [
    {
      name: lang.ourCoreServices.pointOne,
      number: "01",
      icon: <UpArrow />,
      path: `/${params.lang}/services/enterprise-solutions-development`,
    },
    {
      name: lang.ourCoreServices.pointTwo,
      number: "02",
      icon: <UpArrow />,
      path: `/${params.lang}/services/website-development-services`,
    },
    {
      name: lang.ourCoreServices.pointThree,
      number: "03",
      icon: <UpArrow />,
      path: `/${params.lang}/services/app-development`,
    },
    {
      name: lang.ourCoreServices.pointFour,
      number: "04",
      icon: <UpArrow />,
      path: `/${params.lang}/services/cloud-computing`,
    },
    {
      name: lang.ourCoreServices.pointFive,
      number: "05",
      icon: <UpArrow />,
      path: `/${params.lang}/services/ai-ml-development`,
    },
    {
      name: lang.ourCoreServices.pointSix,
      number: "06",
      icon: <UpArrow />,
      path: `/${params.lang}/services/block-chain-development`,
    },
    {
      name: lang.ourCoreServices.pointSeven,
      number: "07",
      icon: <UpArrow />,
      path: ``,
    },
    {
      name: lang.ourCoreServices.pointEight,
      number: "08",
      icon: <UpArrow />,
      path: ``,
    },
    {
      name: lang.ourCoreServices.pointNine,
      number: "09",
      icon: <UpArrow />,
      path: ``,
    },
  ];

  return (
    <div className="bg-secondary flex flex-col gap-8 p-6">
      <p className="text-secondary-reverse text-text-heading font-semibold text-center">
        {lang.ourCoreServices.heading}
      </p>
      <div className="flex gap-8 max-lg:flex-col">
        <Image
          src={ourCoreServicesImg}
          alt="Our Core Services"
          className="h-18 max-sm:hidden max-lg:w-full"
        />
        <div className="flex-1 flex flex-col justify-between max-sm:gap-4 max-lg:gap-6 transition-colors duration-300">
          {OurCoreServicesData.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className="flex items-center justify-between  max-sm:gap-2 group cursor-pointer"
            >
              <div className="flex gap-3 ">
                <p className="text-text-subtitle text-secondary-reverse font-medium group-hover:text-solid-blue transition-colors duration-300">
                  {item.number}
                </p>
                <p className="text-text-subtitle text-secondary-reverse font-medium group-hover:text-solid-blue transition-colors duration-300">
                  {item.name}
                </p>
              </div>
              <p>{item.icon}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
