import React from "react";
import {
  GlobalOffices,
  HappyClients,
  IndustryExperience,
  Union,
} from "@/assets/svg/OurAchievementsSvg";
import { getLocales } from "../../../../../getLocales";

export default async function OurAchievments({ params }: any) {
  const lang = await getLocales(params.lang);

  const ourAchievementData = [
    {
      name: lang.ourAchievement.subHeadingOne,
      icon: <HappyClients />,
      number: "150+",
    },
    {
      name: lang.ourAchievement.subHeadingTwo,
      icon: <IndustryExperience />,
      number: "5+",
    },
    {
      name: lang.ourAchievement.subHeadingThree,
      icon: <Union />,
      number: "20+",
    },
    {
      name: lang.ourAchievement.subHeadingFour,
      icon: <GlobalOffices />,
      number: "3",
    },
  ];

  return (
    <div className="bg-primary flex flex-col gap-8 px-6">
      <p className="text-secondary-reverse text-text-heading font-semibold text-center">
        {lang.ourAchievement.heading}
      </p>

      <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-5  justify-between px-5 flex-wrap">
        {ourAchievementData.map((item) => (
          <div key={item.name} className="flex flex-col">
            <div className="flex flex-col items-center">
              <span>{item.icon}</span>
              <p className="text-secondary-reverse text-text-subtitle font-semibold text-center">
                {item.number}
              </p>
              <p className="text-secondary-reverse text-text-subtitle  text-center">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
