import React from "react";
import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import aboutUsImage from "@/assets/images/aboutUs.webp";
import missionVision from "@/assets/images/missionVision.webp";
import {
  Agility,
  Collabration,
  Innovation,
  Intergity,
  Quality,
  Transperancy,
} from "@/assets/svg/AboutUsSvg";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";
import { getLocales } from "../../../../getLocales";

export default async function AboutUs({ params }: any) {
  const lang = await getLocales(params.lang);

  const corevalueArr = [
    {
      heading: lang.aboutUs.coreValues.heading,
      subHeading: lang.aboutUs.coreValues.subHeading,
      icon: <Innovation />,
    },
    {
      heading: lang.aboutUs.coreValues.headingOne,
      subHeading: lang.aboutUs.coreValues.subHeadingOne,
      icon: <Quality />,
    },
    {
      heading: lang.aboutUs.coreValues.headingTwo,
      subHeading: lang.aboutUs.coreValues.subHeadingTwo,
      icon: <Collabration />,
    },
    {
      heading: lang.aboutUs.coreValues.headingThree,
      subHeading: lang.aboutUs.coreValues.subHeadingThree,
      icon: <Agility />,
    },
    {
      heading: lang.aboutUs.coreValues.headingFour,
      subHeading: lang.aboutUs.coreValues.subHeadingFour,
      icon: <Intergity />,
    },
    {
      heading: lang.aboutUs.coreValues.headingFive,
      subHeading: lang.aboutUs.coreValues.subHeadingFive,
      icon: <Transperancy />,
    },
  ];

  return (
    <div className=" pt-14 flex flex-col gap-16 pb-16 max-md:pt-6">
      <div className="flex flex-col gap-6 px-6">
        <TitleHeader
          title={lang.aboutUs.mainHeading}
          description={lang.aboutUs.subHeading}
        />
        <div>
          <Image
            src={aboutUsImage}
            alt="app development"
            className="rounded-banner-rounded w-full"
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 px-6 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {corevalueArr.map((value, index) => (
            <div
              key={index}
              className="bg-secondary px-4 py-6 flex flex-col justify-center items-center gap-3 "
            >
              <p>{value.icon}</p>
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium">{value.heading}</p>
                <p>{value.subHeading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex px-6 gap-6 max-lg:flex-col">
        <div className="flex-1">
          <Image
            src={missionVision}
            alt="app development"
            className="rounded-banner-rounded w-full bg-cover"
          />
        </div>
        <div className="flex-[2] flex flex-col gap-3 justify-between">
          <div>
            <p className="font-medium text-text-title">
              {lang.aboutUs.ourVision.mainHeading}
            </p>
            <p>{lang.aboutUs.ourVision.subHeading}</p>
          </div>
          <div>
            <p className="font-medium text-text-title">
              {lang.aboutUs.ourMission.mainHeading}
            </p>
            <p>{lang.aboutUs.ourMission.subHeading}</p>
          </div>
        </div>
      </div>
      <LetDiscussYourProject params={params} />
    </div>
  );
}
