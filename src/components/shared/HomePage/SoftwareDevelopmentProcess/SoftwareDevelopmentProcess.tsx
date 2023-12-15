import React from "react";
import { getLoacales } from "../../../../../getLocales";
import {
  Build,
  Deliver,
  Design,
  Discover,
} from "@/assets/svg/SoftwareDevelopmentProcessSvg";

export default async function SoftwareDevelopmentProcess({ params }: any) {
  const lang = await getLoacales(params.lang);

  const SoftwareDevelopmentProcessData = [
    {
      heading: lang.softwareDevelopmentProcess.headingOne,
      subHeading: lang.softwareDevelopmentProcess.subTextOne,
      icon: <Discover />,
    },
    {
      heading: lang.softwareDevelopmentProcess.headingTwo,
      subHeading: lang.softwareDevelopmentProcess.subTextTwo,
      icon: <Design />,
    },
    {
      heading: lang.softwareDevelopmentProcess.headingThree,
      subHeading: lang.softwareDevelopmentProcess.subTextThree,
      icon: <Build />,
    },
    {
      heading: lang.softwareDevelopmentProcess.headingFour,
      subHeading: lang.softwareDevelopmentProcess.subTextFour,
      icon: <Deliver />,
    },
  ];

  return (
    <div className="px-6 flex flex-col gap-8">
      <p className="text-secondary-reverse text-text-heading font-semibold text-center">
        {lang.softwareDevelopmentProcess.mainHeading}
      </p>
      <div className="grid grid-cols-4 max-md:grid-cols-2 gap-8 px-8">
        {SoftwareDevelopmentProcessData.map((item, index) => (
          <div
            key={item.heading}
            className="flex flex-col justify-start  items-center flex-1  gap-2"
          >
            <div className="relative">
              <span>{item.icon}</span>
              {index !== SoftwareDevelopmentProcessData.length - 1 && (
                <div className="absolute top-0 left-0 border-b-2 border-black"></div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <p className="text-text-subtitle font-medium text-secondary-reverse">
                {item.heading}
              </p>
              <p className="text-center text-secondary-reverse">
                {item.subHeading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
