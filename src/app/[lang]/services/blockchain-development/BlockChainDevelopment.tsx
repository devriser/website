import TitleHeader from "@/components/shared/TitleHeader";
import React, { ReactElement } from "react";
import { getLoacales } from "../../../../../getLocales";
import Image from "next/image";
import blockChainImg from "@/assets/images/blockChain.webp";
import ServiceHeader from "@/components/shared/ServiceHeader";
import {
  CryptoWalletExchangeDevelopment,
  DevelopmentOfBlockchainApps,
  DevelopmentOfSmartContracts,
  EndToEndAppsSolutions,
} from "@/assets/svg/BlockChainSvg";
import CardWithIcon from "@/components/shared/Cards/CardWithIcon";
import TechRow from "@/components/shared/TechRow";
import Accordion from "@/components/shared/Accordion/Accordion";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";
import SmallCard from "@/components/shared/Cards/SmallCard";
import Button from "@/components/shared/Button";
import {
  HireDedicaed,
  JavaScriptDevelopment,
  UiUxDevelopment,
  WebDevelopment,
} from "@/assets/svg/AppDevelopmentSvg";

export default async function BlockChainDevelopment({ params }: any) {
  const lang = await getLoacales(params.lang);
  interface IconComponents {
    DevelopmentOfSmartContracts: ReactElement;
    DevelopmentOfBlockchainApps: ReactElement;
    EndToEndAppsSolutions: ReactElement;
    CryptoWalletExchangeDevelopment: ReactElement;
  }

  const iconComponents: IconComponents = {
    DevelopmentOfSmartContracts: <DevelopmentOfSmartContracts />,
    DevelopmentOfBlockchainApps: <DevelopmentOfBlockchainApps />,
    EndToEndAppsSolutions: <EndToEndAppsSolutions />,
    CryptoWalletExchangeDevelopment: <CryptoWalletExchangeDevelopment />,
  };
  interface ServiceCardItem {
    title: string;
    description: string;
    icon: keyof IconComponents;
  }
  const techStackArr = [
    {
      parent: "",
      child: [
        "Amazon AWS",
        "Alibaba Cloud ",
        "Digital Ocean",
        "Kubernetes",
        "OVHCloud",
        "microsoft Azure",
      ],
    },
  ];

  const BlockChainAccordionData = [
    {
      headerText: "Requirement Analysis & Platform",
      description:
        "Our Blockchain consultants assess the system in place  the company's objectives. Choose the finest platform based on your company's requirements.",
    },
    {
      headerText: "Proof of Concept Development",
      description:
        "Our specialists conduct a thorough project study to comprehend the business model, scope, and market trends. Our web development consultants do market research and competitor analysis based on the specifics of your project before making recommendations for the top digital solutions",
    },
    {
      headerText: "Blockchain App Development",
      description:
        "Our specialists conduct a thorough project study to comprehend the business model, scope, and market trends. Our web development consultants do market research and competitor analysis based on the specifics of your project before making recommendations for the top digital solutions",
    },
    {
      headerText: "Integration",
      description:
        "Our specialists conduct a thorough project study to comprehend the business model, scope, and market trends. Our web development consultants do market research and competitor analysis based on the specifics of your project before making recommendations for the top digital solutions",
    },
  ];

  return (
    <div className=" pt-14 pb-6 max-md:pt-6">
      <div className="flex flex-col gap-6 ">
        <div className="px-6">
          <TitleHeader
            title={lang.blockChainDevelopment.mainHeading}
            description={lang.blockChainDevelopment.subHeading}
            buttonArr={[
              {
                href: "/",
                variant: "primary",
                style: "outlined",
                text: lang.blockChainDevelopment.buttonTextOne,
              },
              {
                href: "/",
                variant: "success",
                style: "solid",
                text: lang.blockChainDevelopment.buttonTextTwo,
              },
            ]}
          />
        </div>
        <div className="px-6">
          <Image
            src={blockChainImg}
            alt="block chain development"
            className="rounded-banner-rounded w-full"
          />
        </div>
        <div className="flex flex-col gap-5 px-6">
          <ServiceHeader
            title={lang.blockChainDevelopment.sectionOne.appHeading}
            description={lang.blockChainDevelopment.sectionOne.appSubHeading}
          />

          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {lang.blockChainDevelopment.sectionOne.appServiceArr.map(
              (item: ServiceCardItem, index: number) => (
                <CardWithIcon
                  iconBG={"bg-violet-gradient"}
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
            title="Technologies We Use For Cloud Computing"
            description={
              "The technology stack for cloud computing that enables us to creatively translate software development ideas into actual projects is shown below."
            }
          />
          <div className="grid gap-6 ">
            {techStackArr.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-6 items-center px-20 max-md:px-6"
              >
                <TechRow parent={item.parent} child={item.child} />
                <div
                  className={`border-b border-primary-border w-full`}
                  style={{
                    display:
                      index + 1 < techStackArr.length ? "block" : " none",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex px-6 justify-between max-md:flex-col">
          <div className="flex-1">
            <h3 className="text-text-heading font-medium text-secondary-reverse">
              Our Blockchain Development Methodology
            </h3>
          </div>
          <div className="flex-1">
            <Accordion content={BlockChainAccordionData} />
          </div>
        </div>

        <div>
          <LetDiscussYourProject params={params} />
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
            <Button
              className="bg-secondary-reverse text-primary"
              style="solid"
              as="NextLink"
              href={`/${params.lang}/services`}
            >
              {lang.appDevelopment.sectionFour.btnText}
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-10 max-md:gap-3 flex-1">
            <div className="flex flex-col gap-4 ">
              <SmallCard
                icon={<JavaScriptDevelopment />}
                title={lang.appDevelopment.sectionFour.point1}
                isBorder
                bgColor="bg-violet-gradient"
                iconColor="black"
              />
              <SmallCard
                icon={<UiUxDevelopment />}
                title={lang.appDevelopment.sectionFour.point2}
                isBorder
                bgColor="bg-violet-gradient"
                iconColor="black"
              />
            </div>
            <div className="flex flex-col gap-4 pt-12 max-md:pt-0">
              <SmallCard
                icon={<WebDevelopment />}
                title={lang.appDevelopment.sectionFour.point3}
                isBorder
                bgColor="bg-violet-gradient"
                iconColor="black"
              />
              <SmallCard
                icon={<HireDedicaed />}
                title={lang.appDevelopment.sectionFour.point4}
                isBorder
                bgColor="bg-violet-gradient"
                iconColor="black"
              />
            </div>
          </div>
        </div>
        <div className="px-6 flex flex-col gap-6">
          <p className="text-text-heading text-secondary-reverse font-medium text-center">
            Frequently Asked Questions
          </p>
          <Accordion content={lang.esd.faq.faqList} />
        </div>
      </div>
    </div>
  );
}
