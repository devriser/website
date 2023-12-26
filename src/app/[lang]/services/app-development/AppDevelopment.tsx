import React, { ReactElement } from "react";
import { getLoacales } from "../../../../../getLocales";
import TitleHeader from "@/components/shared/TitleHeader";
import appDevelopment from "@/assets/images/appDevelopment1.webp";
import Image from "next/image";
import ServiceHeader from "@/components/shared/ServiceHeader";
import CardWithIcon from "@/components/shared/Cards/CardWithIcon";
import {
  ApplicationDevelopmentConsultancy,
  CustomMobileApplicationDevelopment,
  DirectContact,
  EnterpriseMobileAppDevelopment,
  FlexibleEngagement,
  HireDedicaed,
  JavaScriptDevelopment,
  MobileGameDevelopment,
  SupportMaintenanceApps,
  Transperancy,
  UIUXDesignMobileApps,
  UiUxDevelopment,
  Uplifted,
  WebDevelopment,
} from "@/assets/svg/AppDevelopmentSvg";
import TechRow from "@/components/shared/TechRow";
import Button from "@/components/shared/Button";
import SmallCard from "@/components/shared/Cards/SmallCard";
import Accordion from "@/components/shared/Accordion/Accordion";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";
import AppContentCarasoul from "./AppContentCarasoul";

export default async function AppDevelopment({ params }: any) {
  const lang = await getLoacales(params.lang);

  interface IconComponents {
    ApplicationDevelopmentConsultancy: ReactElement;
    UIUXDesignMobileApps: ReactElement;
    CustomMobileApplicationDevelopment: ReactElement;
    EnterpriseMobileAppDevelopment: ReactElement;
    MobileGameDevelopment: ReactElement;
    SupportMaintenanceApps: ReactElement;
  }

  const iconComponents: IconComponents = {
    ApplicationDevelopmentConsultancy: <ApplicationDevelopmentConsultancy />,
    UIUXDesignMobileApps: <UIUXDesignMobileApps />,
    CustomMobileApplicationDevelopment: <CustomMobileApplicationDevelopment />,
    EnterpriseMobileAppDevelopment: <EnterpriseMobileAppDevelopment />,
    MobileGameDevelopment: <MobileGameDevelopment />,
    SupportMaintenanceApps: <SupportMaintenanceApps />,
  };

  interface ServiceCardItem {
    title: string;
    description: string;
    icon: keyof IconComponents;
  }

  const techStackArr = [
    {
      parent: "Android",
      child: [
        "Java",
        "Kotlin",
        "Android Studio",
        "Graddle",
        "Dagger2",
        "Jet Pack",
        "Coroutines",
      ],
    },
    {
      parent: "IOS",
      child: [
        "Swift",
        "Objective-C",
        "Swift UI",
        "Cocoa Pods",
        "Rx Swift",
        "Swift Lint",
        "Circle CI",
        "X-Code",
      ],
    },
    {
      parent: "Cross-Platform",
      child: [
        "Flutter",
        "React Native",
        "Native Script",
        "Ionic",
        "JavaScript",
        "TypeScript",
        "HTML5",
      ],
    },
    {
      parent: "Cloud",
      child: [
        "AWS",
        "Google Cloud",
        "Microsoft Azure",
        "OVH Cloud",
        "Alibaba Cloud",
      ],
    },
    {
      parent: "Database",
      child: [
        "Firebase",
        "Redis",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Oracle",
        "SQLite",
        "DynamoDB",
        "Room persistence library",
      ],
    },
  ];

  interface ServiceCardItem {
    title: string;
    description: string;
    icon: keyof IconComponents;
  }

  const sectionFiveArr = [
    {
      heading: lang.appDevelopment.sectionFive.cardHeadingOne,
      icon: <Transperancy />,
    },
    {
      heading: lang.appDevelopment.sectionFive.cardHeadingTwo,
      icon: <DirectContact />,
    },
    {
      heading: lang.appDevelopment.sectionFive.cardHeadingThree,
      icon: <Uplifted />,
    },
    {
      heading: lang.appDevelopment.sectionFive.cardHeadingFour,
      icon: <FlexibleEngagement />,
    },
  ];

  return (
    <div className=" pt-14 flex flex-col gap-6">
      <div className="flex flex-col gap-6 px-6">
        <TitleHeader
          title={lang.appDevelopment.mainHeading}
          description={lang.appDevelopment.subHeading}
          buttonArr={[
            {
              href: "/",
              variant: "primary",
              style: "outlined",
              text: lang.appDevelopment.buttonTextOne,
            },
            {
              href: "/",
              variant: "success",
              style: "solid",
              text: lang.appDevelopment.buttonTextTwo,
            },
          ]}
        />
        <div>
          <Image
            src={appDevelopment}
            alt="app development"
            className="rounded-banner-rounded w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 px-6">
        <ServiceHeader
          title={lang.appDevelopment.sectionOne.appHeading}
          description={lang.appDevelopment.sectionOne.appSubHeading}
        />

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {lang.appDevelopment.sectionOne.appServiceArr.map(
            (item: ServiceCardItem, index: number) => (
              <CardWithIcon
                iconBG={"bg-solid-yellow"}
                key={index}
                title={item.title}
                description={item.description}
                icon={iconComponents[item.icon]}
              />
            )
          )}
        </div>
      </div>
      <div className="grid gap-16 py-16 bg-secondary">
        <ServiceHeader
          title="Technologies & Tools Used In App Development"
          description={
            "Here is a summary of the technology and tools for app development that allow us to creatively translate our Mobile Application concepts into actual projects."
          }
        />
        <div className="grid gap-6 ">
          {techStackArr.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-start gap-6 items-start px-20 max-md:px-6"
            >
              <TechRow parent={item.parent} child={item.child} />
              <div
                className={`border-b border-primary-border w-full`}
                style={{
                  display: index + 1 < techStackArr.length ? "block" : " none",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6">
        <AppContentCarasoul params={params} />
      </div>
      <div className="flex bg-primary p-6 pt-8 gap-6 max-md:flex-col">
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-2">
            <p className="text-text-heading text-secondary-reverse font-medium">
              {lang.appDevelopment.sectionFour.title}
            </p>
            <p className="text-secondary-reverse">
              {lang.appDevelopment.sectionFour.description}
            </p>
          </div>
          <Button className="bg-secondary-reverse text-primary" style="solid">
            {lang.appDevelopment.sectionFour.btnText}
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-10 max-md:gap-3 flex-1">
          <div className="flex flex-col gap-4 ">
            <SmallCard
              icon={<JavaScriptDevelopment />}
              title={lang.appDevelopment.sectionFour.point1}
              isBorder
              bgColor="bg-solid-yellow"
              iconColor="black"
            />
            <SmallCard
              icon={<UiUxDevelopment />}
              title={lang.appDevelopment.sectionFour.point2}
              isBorder
              bgColor="bg-solid-yellow"
              iconColor="black"
            />
          </div>
          <div className="flex flex-col gap-4 pt-12 max-md:pt-0">
            <SmallCard
              icon={<WebDevelopment />}
              title={lang.appDevelopment.sectionFour.point3}
              isBorder
              bgColor="bg-solid-yellow"
              iconColor="black"
            />
            <SmallCard
              icon={<HireDedicaed />}
              title={lang.appDevelopment.sectionFour.point4}
              isBorder
              bgColor="bg-solid-yellow"
              iconColor="black"
            />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-8 pb-0 bg-secondary ">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-text-heading text-secondary-reverse font-medium text-center">
            {lang.appDevelopment.sectionFive.mainHeading}
          </p>
          <p className="text-center w-[50%] max-md:w-[90%] max-lg:w-[70%]">
            {lang.appDevelopment.sectionFive.subHeading}
          </p>
        </div>
        <div className="flex  justify-between px-12 max-md:flex-wrap max-md:px-6 max-md:gap-6  gap-8">
          {sectionFiveArr.map((item) => (
            <div
              key={item.heading}
              className="flex flex-col bg-primary p-5 rounded-banner-rounded items-center gap-4 w-full"
            >
              <span className="bg-solid-yellow flex items-center p-1 rounded-large w-fit ">
                {item.icon}
              </span>
              <span className=" text-secondary-reverse font-medium  text-center">
                {item.heading}
              </span>
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <LetDiscussYourProject params={params} />
      <div className="p-6">
        <Accordion content={lang.esd.faq.faqList} />
      </div>
    </div>
  );
}
