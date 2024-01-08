import React from "react";
import {
  CRM,
  Enterprise,
  HRM,
  LeftArrow,
  RMS,
} from "@/assets/svg/ShelfSolutionsSvg";
import Link from "next/link";
import { getLocales } from "../../../../../getLocales";

export default async function ShelfSolutions({ params }: any) {
  const lang = await getLocales(params.lang);

  const shelfSolutionsData = [
    {
      heading: lang.shelfSolutions.headingOne,
      subHeading: lang.shelfSolutions.subTextOne,
      icon: <Enterprise />,
      link: "",
    },
    {
      heading: lang.shelfSolutions.headingTwo,
      subHeading: lang.shelfSolutions.subTextTwo,
      icon: <CRM />,
      link: "",
    },
    {
      heading: lang.shelfSolutions.headingThree,
      subHeading: lang.shelfSolutions.subTextThree,
      icon: <HRM />,
      link: "",
    },
    {
      heading: lang.shelfSolutions.headingFour,
      subHeading: lang.shelfSolutions.subTextFour,
      icon: <RMS />,
      link: "",
    },
  ];

  return (
    <div className="bg-secondary p-6 max-sm:flex max-sm:flex-col max-sm:gap-5">
      <p className="text-secondary-reverse text-text-heading font-semibold text-center">
        {lang.shelfSolutions.mainHeading}
      </p>
      <div className="grid grid-cols-2  gap-6 p-6 max-md:grid-cols-1 max-md:p-0">
        {shelfSolutionsData.map((item, index) => (
          <div key={index} className=" flex flex-col gap-2 bg-primary p-6">
            <span>{item.icon}</span>
            <p className="text-text-subtitle font-medium text-secondary-reverse">
              {item.heading}
            </p>
            <p className="text-secondary-reverse">{item.subHeading}</p>
            {/* <Link href={item.link} className='flex items-center gap-1'>
              <span className='text-solid-blue font-medium'>View More</span>
              <LeftArrow />
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
