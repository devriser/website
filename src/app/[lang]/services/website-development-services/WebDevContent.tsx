import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import React, { ReactElement } from "react";
import webTech from "@/assets/images/web-tech.png";
import ServiceHeader from "@/components/shared/ServiceHeader";
import TechRow from "@/components/shared/TechRow";
import {
  DevWebAppAccordionData,
  FAQData,
  customDevArr,
  futureTechServicesArr,
  futureWebTech,
  impDesc,
  serviceDesc,
  techDesc,
  techStackArr,
  webDesc,
  webServicesArr,
} from "./ServiceData";
import Card from "@/components/shared/Cards/Card";

import Accordion from "@/components/shared/Accordion/Accordion";
import CardWithIcon from "@/components/shared/Cards/CardWithIcon";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";
import { getLocales } from "../../../../../getLocales";
import {
  BasicShape,
  CmsIcon,
  HalfGearIcon,
  MaintenanceIcon,
  MigrateIcon,
  ResponsiveIcon,
  SettingIcon,
  SolutionDomain,
  TestQaIcon,
  UxIcon,
} from "@/assets/svg/AllIconComponent";

interface IconComponents {
  UIUXDevelopment: ReactElement;
  SystemMigration: ReactElement;
  TestingQA: ReactElement;
  ResponsiveDesign: ReactElement;
  CustomDevelopment: ReactElement;
  CMS: ReactElement;

  SolutionDomain: ReactElement;
  BasicShape: ReactElement;
  SettingIcon: ReactElement;
  HalfGearIcon: ReactElement;
}

const iconComponents: IconComponents = {
  UIUXDevelopment: <UxIcon />,
  SystemMigration: <MigrateIcon />,
  TestingQA: <TestQaIcon />,
  ResponsiveDesign: <ResponsiveIcon />,
  CustomDevelopment: <MaintenanceIcon />,
  CMS: <CmsIcon />,

  SolutionDomain: <SolutionDomain />,
  BasicShape: <BasicShape />,
  SettingIcon: <SettingIcon />,
  HalfGearIcon: <HalfGearIcon />,
};

interface ServiceCardItem {
  title: string;
  description: string;
  icon: keyof IconComponents;
}

export default async function WebDevContent({ params }: any) {
  const lang = await getLocales(params.lang);
  return (
    <section className="bg-primary h-fit w-full pb-16">
      <div className="pt-14 grid gap-16 ">
        {/* top header */}
        <div className="bg-primary px-6">
          <TitleHeader
            title={lang.webDevelopment.mainHeading}
            description={lang.webDevelopment.subHeadingOne}
            buttonArr={[
              {
                href: "/",
                variant: "primary",
                style: "outlined",
                text: lang.webDevelopment.heroButtonOne,
              },
              {
                href: `/${params.lang}/contact-us`,
                variant: "success",
                style: "solid",
                text: lang.webDevelopment.heroButtonTwo,
              },
            ]}
          />
          {/* buttons */}
          {/* <div className=''></div> */}
        </div>

        <div className="px-6">
          {/* banner Image */}
          <Image
            src={webTech}
            alt="Picture of the author"
            className="xl:w-full w-fit"
          />
        </div>
        <div className="grid gap-16 bg-primary px-6">
          {/* service Header */}
          <ServiceHeader
            title={lang.webDevelopment.section1.serviceHeaderTitle}
            description={lang.webDevelopment.section1.serviceHeaderDesc}
          />
          {/* service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lang.webDevelopment.section1.webServicesArr.map(
              (item: ServiceCardItem, index: number) => (
                <CardWithIcon
                  iconBG={"bg-green-gradient"}
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={iconComponents[item.icon]}
                />
              )
            )}
          </div>
        </div>
        {/* service Tech */}
        <div className="grid gap-16 py-16 bg-secondary px-6">
          <ServiceHeader
            title={lang.webDevelopment.section2.title}
            description={lang.webDevelopment.section2.description}
          />
          <div className="grid gap-6 ">
            {lang.webDevelopment.section2.techStackArr.map(
              (item: any, index: any) => (
                <div
                  key={index}
                  className="flex flex-col justify-start gap-6 items-start px-20"
                >
                  <TechRow parent={item.parent} child={item.child} />
                  <div
                    className={`border-b border-primary-border w-full`}
                    style={{
                      display:
                        index + 1 <
                        lang.webDevelopment.section2.techStackArr.length
                          ? "block"
                          : " none",
                    }}
                  ></div>
                </div>
              )
            )}
          </div>
        </div>
        {/* importance */}
        <div className="grid gap-12 px-6">
          <ServiceHeader
            title={lang.webDevelopment.section3.title}
            description={lang.webDevelopment.section3.description}
          />
          <div className="grid  md:grid-cols-2 gap-8 px-6">
            {console.log(lang.webDevelopment.section3?.customDevArr)}
            {lang.webDevelopment.section3?.customDevArr?.map(
              (item: any, index: any) => (
                <Card
                  key={index}
                  title={item?.title}
                  description={item?.description}
                  isBG
                />
              )
            )}
          </div>
        </div>
        {/* future tech */}
        <div
          className="grid gap-12 py-12 bg-secondary"
          // style={{ background: "#171717" }}
        >
          <ServiceHeader title={lang.webDevelopment.section4.title} />
          <div className="grid gap-6 md:grid-cols-2 container mx-auto px-4 ">
            {lang.webDevelopment.section4?.futureWebTech?.map(
              (item: any, index: any) => (
                <Card
                  key={index}
                  title={item?.title}
                  description={item?.description}
                  isBorder
                />
              )
            )}
          </div>
        </div>

        {/* Method we use */}
        {/* <div className="grid xl:grid-cols-2 gap-8 xl:px-36 py-16">
          <div>
            <h3 className="text-text-heading font-medium text-secondary-reverse">
              The Method We Use to Develop Web Apps
            </h3>
            <p className="text-sub-text mt-5">
              We have been a dependable partner in web development for a wide
              range of companies, from start-ups and SMEs to enterprise-grade
              companies utilizing the most recent development tools and tech
              stack.
            </p>
          </div>
          <Accordion content={DevWebAppAccordionData} />
        </div> */}

        {/* dark card */}
        <div className="grid gap-16 bg-secondary py-16">
          {/* service Header */}
          <ServiceHeader title={lang.webDevelopment.section5.title} />
          {/* service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-8">
            {lang.webDevelopment.section5?.futureTechServicesArr?.map(
              (item: ServiceCardItem, index: any) => (
                <CardWithIcon
                  key={index}
                  title={item?.title}
                  description={item?.description}
                  icon={iconComponents[item?.icon]}
                  bgColor="bg-primary"
                  iconBG={"bg-green-gradient"}
                />
              )
            )}
          </div>
        </div>

        {/* Discuss part */}
        <div className="">
          <LetDiscussYourProject params={params} />
        </div>

        {/* FAQ */}
        {/* <div className='py-16 grid gap-10 container mx-auto'>
          <ServiceHeader title='Frequently Asked Questions' />
          <Accordion content={FAQData} />
        </div> */}
      </div>
    </section>
  );
}
