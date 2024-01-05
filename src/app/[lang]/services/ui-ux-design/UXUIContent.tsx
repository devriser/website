import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import React, { ReactElement, useEffect } from "react";
import ServiceHeader from "@/components/shared/ServiceHeader";
import uxui from "@/assets/images/ui-ux-development.webp";
import alldevices from "@/assets/images/all-devices.webp";
import banner from "@/assets/images/ui-design-methodology.webp";
import {
  AuditOfUIUX,
  BrandingDesign,
  CustomWebsiteDesign,
  DesignForUserExperience,
  DesignOfWearableApps,
  DesigningMobileApps,
  DeviceUIDesign,
  DirectContactWithTeamMember,
  FlexibleEngagementModelCycle,
  HighDefinitionPrototyping,
  IntegratingTheFrontEnd,
  RightTickDark,
  SuperiorGraphics,
  TestingUsabilityUIFrictionlessUX,
  TransparencyWorkModal,
  UpliftedUserExperience,
  VisualizationOfConcepts,
  WearableApps,
  WebAndMobileDesign,
} from "@/assets/svg/UXUIDesign";

import { getLoacales } from "../../../../../getLocales";
import Accordion from "@/components/shared/Accordion/Accordion";

import CardWithIcon from "@/components/shared/Cards/CardWithIcon";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";
import SmallCard from "@/components/shared/Cards/SmallCard";
import Tick from "@/assets/svg/Tick";
import { useTheme } from "next-themes";
interface IconComponents {
  CustomWebsiteDesign: ReactElement;
  DesigningMobileApps: ReactElement;
  DesignOfWearableApps: ReactElement;
  IntegratingTheFrontEnd: ReactElement;
  WearableApps: ReactElement;
  AuditOfUIUX: ReactElement;
  DesignForUserExperience: ReactElement;
  SuperiorGraphics: ReactElement;
  TestingUsabilityUIFrictionlessUX: ReactElement;
  HighDefinitionPrototyping: ReactElement;
  VisualizationOfConcepts: ReactElement;
  DeviceUIDesign: ReactElement;
  WebAndMobileDesign: ReactElement;
  BrandingDesign: ReactElement;
  RightTickDark: ReactElement;
  TransparencyWorkModal: ReactElement;
  DirectContactWithTeamMember: ReactElement;
  UpliftedUserExperience: ReactElement;
  FlexibleEngagementModelCycle: ReactElement;
}

const iconComponents: IconComponents = {
  CustomWebsiteDesign: <CustomWebsiteDesign />,
  DesigningMobileApps: <DesigningMobileApps />,
  DesignOfWearableApps: <DesignOfWearableApps />,
  IntegratingTheFrontEnd: <IntegratingTheFrontEnd />,
  WearableApps: <WearableApps />,
  AuditOfUIUX: <AuditOfUIUX />,
  DesignForUserExperience: <DesignForUserExperience />,
  SuperiorGraphics: <SuperiorGraphics />,
  TestingUsabilityUIFrictionlessUX: <TestingUsabilityUIFrictionlessUX />,
  HighDefinitionPrototyping: <HighDefinitionPrototyping />,
  VisualizationOfConcepts: <VisualizationOfConcepts />,
  DeviceUIDesign: <DeviceUIDesign />,
  WebAndMobileDesign: <WebAndMobileDesign />,
  BrandingDesign: <BrandingDesign />,
  RightTickDark: <RightTickDark />,
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
    <section className="bg-primary h-fit pb-8">
      <div className="pt-14 grid gap-8">
        <div className="bg-primary px-6 ">
          <TitleHeader
            title={lang.uxui.heroTitle}
            description={lang.uxui.heroHeading}
            buttonArr={[
              {
                href: "/",
                variant: "primary",
                style: "outlined",
                text: lang.uxui.heroButtonOne,
              },
              {
                href: "/",
                variant: "success",
                style: "solid",
                text: lang.uxui.heroButtonTwo,
              },
            ]}
          />
        </div>

        <div className="px-6 rounded-3xl ">
          <Image
            src={uxui}
            alt="Picture of ui ux services"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="grid gap-10 bg-primary px-6 ">
          <ServiceHeader
            title={lang.uxui.section1.serviceHeaderTitle}
            description={lang.uxui.section1.serviceHeaderDesc}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lang.uxui.section1.webServicesArr.map(
              (item: ServiceCardItem, index: number) => (
                <CardWithIcon
                  iconBG={"bg-parakeet-gradient"}
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={iconComponents[item.icon]}
                />
              )
            )}
          </div>
        </div>

        <div className="grid gap-8 bg-secondary  p-6 ">
          {/* <div className=" rounded-2xl  ">
            <Image
              src={alldevices}
              alt="All devices banner"
              className="w-full rounded-2xl"
            />
          </div> */}

          <ServiceHeader
            title={lang.uxui.section2.serviceHeaderTitle}
            description={lang.uxui.section2.serviceHeaderDesc}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
            {lang.uxui.section2.webServicesArr.map(
              (item: ServiceCardItem, index: number) => (
                <SmallCard
                  key={index}
                  icon={iconComponents[item.icon]}
                  title={item.title}
                  iconBG={"bg-parakeet-gradient"}
                  isBorder
                />
              )
            )}
          </div>
        </div>

        <div className="bg-primary p-6">
          <ServiceHeader
            title={lang.uxui.section5.title}
            description={lang.uxui.section5.description}
          />
          <div className="flex flex-col lg:flex-row gap-20 my-10">
            <Image
              src={banner}
              alt="UI Design Methodology"
              className="w-full rounded-2xl"
            />
            <div className="flex flex-col gap-10 ">
              {lang.uxui.section5.methodologies.map(
                (item: any, index: number) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="text-text-title font-semibold text-secondary-reverse ">
                      {item.title}
                    </div>
                    <div className="text-sub-text">{item.subTitle}</div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* <ServiceHeader title={lang.uxui.section6.title} />

          <div className="flex flex-row flex-wrap items-start gap-10 justify-center mt-10 ">
            {lang.uxui.section6.services.map((item: any, index: number) => (
              <div
                key={index}
                className="flex flex-col gap-6 bg-secondary p-8 "
              >
                <div className="text-text-title font-semibold text-solid-greenish-yellow ">
                  {item.title}
                </div>
                {item.points.map((item: any, index: number) => (
                  <div className="flex gap-4" key={index}>
                    <Tick />

                    <div className="text-secondary-reverse">{item}</div>
                  </div>
                ))}
              </div>
            ))}
          </div> */}
        </div>

        <div className="grid gap-10 bg-secondary py-10 ">
          <ServiceHeader
            title={lang.uxui.section7.title}
            description={lang.uxui.section7.description}
          />
          <div className="flex gap-5 justify-center items-center flex-wrap px-6">
            {[
              "Sketch",
              "Adobe XD",
              "Photoshop",
              "Illustrator",
              "Figma",
              "Invision",
              "AfterEffects",
              "Adobe Cloud",
              "Adobe Animate",
              "Zeplin",
            ].map((item: string, index: any) => (
              <p
                key={index}
                className="py-2 px-3 text-sm flex items-center justify-center text-center border border-primary-border text-secondary-reverse rounded-full w-fit"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-10 bg-primary px-6 py-6 ">
          <ServiceHeader
            title={lang.uxui.section4.title}
            description={lang.uxui.section4.description}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
            {lang.uxui.section4.points.map(
              (item: ServiceCardItem, index: number) => (
                <SmallCard
                  key={index}
                  icon={iconComponents[item.icon]}
                  title={item.title}
                  iconBG={"bg-parakeet-gradient"}
                  isBorder
                  bgColor="bg-secondary"
                />
              )
            )}
          </div>
        </div>
        <LetDiscussYourProject params={params} />
        {/* <div className='py-16 grid gap-10 px-6 lg:px-20'>
          <ServiceHeader title={lang.uxui.faq.faqTitle} />
          <Accordion content={lang.uxui.faq.faqList} />
        </div> */}
      </div>
    </section>
  );
}
