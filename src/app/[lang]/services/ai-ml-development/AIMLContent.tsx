import TitleHeader from "@/components/shared/TitleHeader";
import React from "react";
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
import { getLoacales } from "../../../../../getLocales";
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

const AIMLContent = async ({ params }: any) => {
  const lang = await getLoacales(params?.lang);
  console.log(lang);
  return (
    <section className="bg-primary h-fit w-full">
      <div className="pt-14 px-0 xl:px-6 grid gap-16 mb-14">
        <TitleHeader
          title="AI/ML Development"
          description={aimlDesc}
          buttonArr={[
            {
              href: "/",
              variant: "primary",
              style: "outlined",
              text: "Our Portfolio",
            },
            {
              href: "/",
              variant: "success",
              style: "solid",
              text: "Contact Sales",
            },
          ]}
        />
        {/* banner image */}
        <Image
          src={aimlBanner}
          alt="Picture of a client"
          className="xl:w-full w-fit"
        />
        <ServiceHeader
          title={aimlserviceHeader}
          description={aimlservicesubtext}
        />
        {/* service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aimlServicesArr.map((item, index) => (
            <CardWithIcon
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              iconBG="bg-skyblue-gradient"
            />
          ))}
        </div>

        <LetDiscussYourProject params={params} />

        <div className="grid gap-16 py-16 bg-secondary">
          <ServiceHeader
            title="Our AI/ML Techstack"
            description="The most recent AI/ML technologies and industry-recognized AI/ML software tools utilized by Developer are listed below:"
          />
          <div className="flex items-center justify-center flex-wrap container mx-auto gap-5">
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

        <div className="grid gap-10">
          <ServiceHeader
            title="Why Go With DevRiser for AI/ML Development?"
            description="In order to address the different industrial use cases with AI-enabled algorithms and machine learning solutions, DevRiser utilizes the best in the business of AI/ML development services."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {aimlPerks.map((item, index) => (
              <SmallCard
                key={index}
                icon={item.icon}
                title={item.text}
                iconBG="bg-skyblue-gradient"
              />
            ))}
          </div>
        </div>

        {/* methods with accordion */}
        <div className="grid xl:grid-cols-2 gap-8  py-16">
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
        </div>

        {/* postional div */}
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
            <Button
              className="bg-skyblue-gradient text-[#171717]"
              as="NextLink"
              href={`/${params.lang}/services`}
            >
              {lang.cc.section3.btnText}
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-10 ">
            <div className="flex flex-col gap-6 md:-mt-5">
              <SmallCard
                icon={<JavascriptDevelopment />}
                title={lang.cc.section3.point1}
                isBorder
              />
              <SmallCard
                icon={<UIUXDesigner />}
                title={lang.cc.section3.point2}
                isBorder
                bgColor="bg-skyblue-gradient"
                iconColor="black"
              />
            </div>
            <div className="flex flex-col gap-6">
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

        {/* FAQ */}
        <div className="py-16 grid gap-10 container mx-auto">
          <ServiceHeader title="Frequently Asked Questions" />
          <Accordion content={FAQData} />
        </div>
      </div>
    </section>
  );
};

export default AIMLContent;
