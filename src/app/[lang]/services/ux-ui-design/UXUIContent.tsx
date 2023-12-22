import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import React, { ReactElement } from "react";
import ServiceHeader from "@/components/shared/ServiceHeader";
import uxui from "@/assets/images/uxui.jpg";
import alldevices from "@/assets/images/all-devices.webp";
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
import Button from "@/components/shared/Button";
import SmallCard from "@/components/shared/Cards/SmallCard";
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
    <section className='bg-primary h-fit'>
      <div className='pt-14 grid gap-16'>
        <div className='bg-primary px-6 '>
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

        <div className='px-6 '>
          <Image src={uxui} alt='Cloud computing services' className='w-full' />
        </div>

        <div className='grid gap-10 bg-primary px-6 '>
          <ServiceHeader
            title={lang.uxui.section1.serviceHeaderTitle}
            description={lang.uxui.section1.serviceHeaderDesc}
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {lang.uxui.section1.webServicesArr.map(
              (item: ServiceCardItem, index: number) => (
                <CardWithIcon
                  iconBG={"bg-solid-greenish-yellow"}
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={iconComponents[item.icon]}
                />
              )
            )}
          </div>
        </div>

        <div className='grid gap-10 bg-secondary py-10 '>
          <ServiceHeader
            title={lang.uxui.section2.serviceHeaderTitle}
            description={lang.uxui.section2.serviceHeaderDesc}
          />
          <div className='flex gap-5 justify-center items-center flex-wrap px-6'>
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
            ].map((item: string) => (
              <p
                key={item}
                className='py-2 px-3 text-sm flex items-center justify-center text-center border border-primary-border text-secondary-reverse rounded-full w-fit'
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className='grid gap-10 bg-primary px-6 py-6 relative'>
          {/* <div className=" rounded-2xl absolute -top-1/2 ">
            <Image
              src={alldevices}
              alt="Cloud computing services"
              className="w-full rounded-2xl"
            />
          </div> */}
          <ServiceHeader
            title={lang.uxui.section4.title}
            description={lang.uxui.section4.description}
          />

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center'>
            {lang.uxui.section4.points.map(
              (item: ServiceCardItem, index: number) => (
                <SmallCard
                  key={index}
                  icon={iconComponents[item.icon]}
                  title={item.title}
                  iconBG={"bg-solid-greenish-yellow"}
                  isBorder
                  bgColor='bg-secondary'
                />
              )
            )}
          </div>
        </div>
        <LetDiscussYourProject params={params} />
        <div className='py-16 grid gap-10 px-6 lg:px-20'>
          <ServiceHeader title={lang.uxui.faq.faqTitle} />
          <Accordion content={lang.uxui.faq.faqList} />
        </div>
      </div>
    </section>
  );
}
