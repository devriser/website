import TitleHeader from "@/components/shared/TitleHeader";
import React, { ReactElement } from "react";
import {
  aimlAccordionData,
  aimlDesc,
  aimlPerks,
  aimlServicesArr,
  aimlStackArr,
  aimlserviceHeader,
  aimlservicesubtext,
} from "./AIMLData";
import Image from "next/image";
import aimlBanner from "@/assets/images/aiml-banner.png";
import ServiceHeader from "@/components/shared/ServiceHeader";
import CardWithIcon from "@/components/shared/Cards/CardWithIcon";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";
import StackRow from "@/components/shared/StackRow";
import SmallCard from "@/components/shared/Cards/SmallCard";
import Accordion from "@/components/shared/Accordion/Accordion";
import { FAQData } from "../website-development-services/ServiceData";
import Button from "@/components/shared/Button";
import {
  HireDedicatedDevelopers,
  JavascriptDevelopment,
  UIUXDesigner,
  WebDevelopment,
} from "@/assets/svg/AIMLDevelopmentSVG/OtherService";
import { getLocales } from "../../../../../getLocales";
import {
  AISVG,
  BrainIcon,
  ChatbotIcon,
  CyborgIcon,
  ImgProcessingSVG,
  NLPIcon,
} from "@/assets/svg/AIMLDevelopmentSVG/ServiceIcons";
import {
  AwardSVG,
  CustomerServiceSVG,
  DirectionSVG,
  DomainSVG,
  ExpertSVG,
  LowCostSVG,
  SoftDevSVG,
  WebsiteSVG,
} from "@/assets/svg/AIMLDevelopmentSVG/PerksIcon";

interface IconComponents {
  CyborgIcon: ReactElement;
  BrainIcon: ReactElement;
  NLPIcon: ReactElement;
  AISVG: ReactElement;
  ChatbotIcon: ReactElement;
  ImgProcessingSVG: ReactElement;
  ExpertSVG: ReactElement;
  DomainSVG: ReactElement;
  CustomerServiceSVG: ReactElement;
  AwardSVG: ReactElement;
  WebsiteSVG: ReactElement;
  SoftDevSVG: ReactElement;
  DirectionSVG: ReactElement;
  LowCostSVG: ReactElement;
}

const iconComponents: IconComponents = {
  CyborgIcon: <CyborgIcon />,
  BrainIcon: <BrainIcon />,
  NLPIcon: <NLPIcon />,
  AISVG: <AISVG />,
  ChatbotIcon: <ChatbotIcon />,
  ImgProcessingSVG: <ImgProcessingSVG />,
  ExpertSVG: <ExpertSVG />,
  DomainSVG: <DomainSVG />,
  CustomerServiceSVG: <CustomerServiceSVG />,
  AwardSVG: <AwardSVG />,
  WebsiteSVG: <WebsiteSVG />,
  SoftDevSVG: <SoftDevSVG />,
  DirectionSVG: <DirectionSVG />,
  LowCostSVG: <LowCostSVG />,
};

interface ServiceCardItem {
  title: string;
  description: string;
  icon: keyof IconComponents;
}

const AIMLContent = async ({ params }: any) => {
  const lang = await getLocales(params?.lang);
  return (
    <section className="bg-primary h-fit w-full">
      <div className="pt-14  grid gap-16 pb-16">
        <div className=" flex flex-col gap-16">
          <TitleHeader
            title={lang.aiMlDevelopement.mainHeading}
            description={lang.aiMlDevelopement.subHeading}
            buttonArr={[
              {
                href: "/",
                variant: "primary",
                style: "outlined",
                text: lang.aiMlDevelopement.buttonTextOne,
              },
              {
                href: `/${params.lang}/contact-us`,
                variant: "success",
                style: "solid",
                text: lang.aiMlDevelopement.buttonTextTwo,
              },
            ]}
          />
          {/* banner image */}
          <Image
            src={aimlBanner}
            alt="Picture of a client"
            className="xl:w-full w-fit"
          />
        </div>
        <ServiceHeader
          title={lang.aiMlDevelopement.section1.title}
          description={lang.aiMlDevelopement.section1.description}
        />
        {/* service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  px-6">
          {lang.aiMlDevelopement.section1?.aimlServicesArr?.map(
            (item: ServiceCardItem, index: any) => (
              <CardWithIcon
                key={index}
                title={item?.title}
                description={item?.description}
                icon={iconComponents[item?.icon]}
                iconBG="bg-skyblue-gradient"
              />
            )
          )}
        </div>

        <div className="grid gap-16 py-16 bg-secondary ">
          <ServiceHeader
            title={lang.aiMlDevelopement.section2.title}
            description={lang.aiMlDevelopement.section2.description}
          />
          <div className="flex items-center justify-center flex-wrap  gap-5">
            {aimlStackArr.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-start"
              >
                <StackRow stackName={item} />
              </div>
            ))}
          </div>
        </div>

        {/* advantage/perks */}

        <div className="grid gap-10 px-6">
          <ServiceHeader
            title={lang.aiMlDevelopement.section3.title}
            description={lang.aiMlDevelopement.section3.description}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {lang.aiMlDevelopement.section3?.aimlPerks?.map(
              (item: ServiceCardItem, index: any) => (
                <SmallCard
                  key={index}
                  icon={iconComponents[item?.icon]}
                  title={item?.title}
                  iconBG="bg-skyblue-gradient"
                />
              )
            )}
          </div>
        </div>

        {/* methods with accordion */}
        {/* <div className="grid xl:grid-cols-2 gap-8  py-16">
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
          <Accordion content={aimlAccordionData} />
        </div> */}

        {/* postional div */}
        <div className="bg-secondary flex flex-col gap-10 md:flex-row lg:gap-80 justify-start items-center px-6 py-10">
          <div className="flex flex-col gap-16 self-start">
            <div className="flex flex-col gap-6">
              <div className="text-text-heading font-semibold text-secondary-reverse">
                {lang.aiMlDevelopement.section4.title}
              </div>
              <div className="text-sub-text">
                {lang.aiMlDevelopement.section4.description}
              </div>
            </div>
            <Button
              className="bg-skyblue-gradient text-[#171717]"
              as="NextLink"
              href={`/${params.lang}/services`}
            >
              {lang.aiMlDevelopement.section4.btnText}
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-10 ">
            <div className="flex flex-col gap-6 md:-mt-5">
              <SmallCard
                icon={<JavascriptDevelopment />}
                title={lang.aiMlDevelopement.section4.point1}
                isBorder
                path={`/${params.lang}/services/ai-ml-development`}
              />
              <SmallCard
                icon={<UIUXDesigner />}
                title={lang.aiMlDevelopement.section4.point2}
                isBorder
                path={`/${params.lang}/services/ui-ux-design`}
              />
            </div>
            <div className="flex flex-col gap-6">
              <SmallCard
                icon={<WebDevelopment />}
                title={lang.aiMlDevelopement.section4.point3}
                isBorder
                path={`/${params.lang}/services/website-development-services`}
              />
              <SmallCard
                icon={<HireDedicatedDevelopers />}
                title={lang.aiMlDevelopement.section4.point4}
                isBorder
                path={`/${params.lang}/services/game-development`}
              />
            </div>
          </div>
        </div>

        {/* FAQ */}
        {/* <div className="py-16 grid gap-10 container mx-auto">
          <ServiceHeader title="Frequently Asked Questions" />
          <Accordion content={FAQData} />
        </div> */}
        <LetDiscussYourProject params={params} />
      </div>
    </section>
  );
};

export default AIMLContent;
