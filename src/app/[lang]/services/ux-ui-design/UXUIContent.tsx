import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import React, { ReactElement } from "react";
import ServiceHeader from "@/components/shared/ServiceHeader";
import cloudcomputing from "@/assets/images/cloud-computing.webp";
import {
  ArchitectureForCloudSolutions,
  ServicesForCloudMigration,
  DevelopmentOfCloudReadyApps,
  CloudSecurityAndRiskControl,
  DevOps,
  CloudSupportAndMonitoring,
  ComputingWithoutServers,
  ExclusiveCloudSupport,
  JavascriptDevelopment,
  UIUXDesigner,
  WebDevelopment,
  HireDedicatedDevelopers,
  TransparencyWorkModal,
  DirectContactWithTeamMember,
  UpliftedUserExperience,
  FlexibleEngagementModelCycle,
} from "@/assets/svg/CloudComputing";

import { getLoacales } from "../../../../../getLocales";
import Accordion from "@/components/shared/Accordion/Accordion";

import CardWithIcon from "@/components/shared/Cards/CardWithIcon";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";
import Button from "@/components/shared/Button";
import SmallCard from "@/components/shared/Cards/SmallCard";
interface IconComponents {
  ArchitectureForCloudSolutions: ReactElement;
  ServicesForCloudMigration: ReactElement;
  DevelopmentOfCloudReadyApps: ReactElement;
  CloudSecurityAndRiskControl: ReactElement;
  DevOps: ReactElement;
  CloudSupportAndMonitoring: ReactElement;
  ComputingWithoutServers: ReactElement;
  ExclusiveCloudSupport: ReactElement;
  TransparencyWorkModal: ReactElement;
  DirectContactWithTeamMember: ReactElement;
  UpliftedUserExperience: ReactElement;
  FlexibleEngagementModelCycle: ReactElement;
}

const iconComponents: IconComponents = {
  ArchitectureForCloudSolutions: <ArchitectureForCloudSolutions />,
  ServicesForCloudMigration: <ServicesForCloudMigration />,
  DevelopmentOfCloudReadyApps: <DevelopmentOfCloudReadyApps />,
  CloudSecurityAndRiskControl: <CloudSecurityAndRiskControl />,
  DevOps: <DevOps />,
  CloudSupportAndMonitoring: <CloudSupportAndMonitoring />,
  ComputingWithoutServers: <ComputingWithoutServers />,
  ExclusiveCloudSupport: <ExclusiveCloudSupport />,
  TransparencyWorkModal: <TransparencyWorkModal />,
  DirectContactWithTeamMember: <DirectContactWithTeamMember />,
  UpliftedUserExperience: <UpliftedUserExperience />,
  FlexibleEngagementModelCycle: <FlexibleEngagementModelCycle />,
};

interface ServiceCardItem {
  title: string;
  description: string;
  icon: keyof IconComponents;
}

export default async function UXUIContent({ params }: any) {
  const lang = await getLoacales(params.lang);

  return (
    <section className="bg-primary dark:bg-dark-primary h-fit">
      <div className="pt-14 grid gap-16">
        <div className="bg-primary dark:bg-dark-primary px-6 ">
          <TitleHeader
            title={lang.cc.heroTitle}
            description={lang.cc.heroHeading}
            buttonArr={[
              {
                href: "/",
                variant: "primary",
                style: "outlined",
                text: lang.cc.heroButtonOne,
              },
              {
                href: "/",
                variant: "success",
                style: "solid",
                text: lang.cc.heroButtonTwo,
              },
            ]}
          />
        </div>

        <div className="px-6 ">
          <Image
            src={cloudcomputing}
            alt="Cloud computing services"
            className="w-full"
          />
        </div>

        <div className="grid gap-10 bg-primary px-6 ">
          <ServiceHeader
            title={lang.cc.section1.serviceHeaderTitle}
            description={lang.cc.section1.serviceHeaderDesc}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lang.cc.section1.webServicesArr.map(
              (item: ServiceCardItem, index: number) => (
                <CardWithIcon
                  iconBG={"bg-solid-skyblue"}
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={iconComponents[item.icon]}
                />
              )
            )}
          </div>
        </div>

        <div className="grid gap-10 bg-secondary py-10 ">
          <ServiceHeader
            title={lang.cc.section2.serviceHeaderTitle}
            description={lang.cc.section2.serviceHeaderDesc}
          />
          <div className="flex gap-5 justify-center items-center flex-wrap px-6">
            {[
              "C++",
              "Java",
              "Sketch",
              "Adobe Illustrator",
              "Adobe XD",
              "Figma",
            ].map((item: string) => (
              <p
                key={item}
                className="py-2 px-3 text-sm flex items-center justify-center text-center border border-primary-border text-secondary-reverse rounded-full w-fit"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <LetDiscussYourProject params={params} />
        <div className="bg-secondary flex flex-col gap-10 md:flex-row lg:gap-80 justify-start items-center px-6 py-10">
          <div className="flex flex-col gap-16 self-start">
            <div className="flex flex-col gap-6">
              <div className="text-text-heading font-semibold text-secondary-reverse">
                {lang.cc.section3.title}
              </div>
              <div className="text-sub-text">
                {lang.cc.section3.description}
              </div>
            </div>
            <Button className="bg-solid-skyblue text-[#171717]">
              {lang.cc.section3.btnText}
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-10 ">
            <div className="flex flex-col gap-4 md:-mt-5">
              <SmallCard
                icon={<JavascriptDevelopment />}
                title={lang.cc.section3.point1}
                isBorder
              />
              <SmallCard
                icon={<UIUXDesigner />}
                title={lang.cc.section3.point2}
                isBorder
                bgColor="bg-solid-skyblue"
                iconColor="black"
              />
            </div>
            <div className="flex flex-col gap-4">
              <SmallCard
                icon={<WebDevelopment />}
                title={lang.cc.section3.point3}
                isBorder
              />
              <SmallCard
                icon={<HireDedicatedDevelopers />}
                title={lang.cc.section3.point4}
                isBorder
              />
            </div>
          </div>
        </div>

        <div className="grid gap-10 bg-primary px-6 ">
          <ServiceHeader
            title={lang.cc.section4.title}
            description={lang.cc.section4.description}
          />

          <div className="flex flex-wrap gap-4 justify-center">
            {lang.cc.section4.points.map(
              (item: ServiceCardItem, index: number) => (
                <SmallCard
                  key={index}
                  icon={iconComponents[item.icon]}
                  title={item.title}
                  iconBG={"bg-solid-skyblue"}
                />
              )
            )}
          </div>
        </div>

        <div className="py-16 grid gap-10 px-6 lg:px-20">
          <ServiceHeader title={lang.cc.faq.faqTitle} />
          <Accordion content={lang.cc.faq.faqList} />
        </div>
      </div>
    </section>
  );
}
