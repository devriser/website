/* eslint-disable react/jsx-key */
import TitleHeader from "@/components/shared/TitleHeader";
import React from "react";
import erp from "@/assets/images/erp-service.png";
import web from "@/assets/images/web-service.png";
import mobile from "@/assets/images/mobile-service.png";
import uiux from "@/assets/images/uiux-service.png";
import cloud from "@/assets/images/cloud-service.png";
import game from "@/assets/images/game-service.png";
import blockchain from "@/assets/images/blockchain-service.png";
import internet from "@/assets/images/internet-service.png";
import aiml from "@/assets/images/aiml-service.png";
import ServiceSummary from "@/components/shared/Section/ServiceSummary";
import Heading from "./Heading";
import {
  AngularSVG,
  AwsSVG,
  BlockFiveSVG,
  BlockFourSVG,
  BlockOneSVG,
  BlockSixSVG,
  BlockThreeSVG,
  BlockTwoSVG,
  CloudOneSVG,
  CloudThreeSVG,
  CloudTwoSVG,
  DotNetSVG,
  EyeGameDevSVG,
  FigmaSVG,
  FlutterSVG,
  HTMLSVG,
  JavaSVG,
  KotlinSVG,
  LaravelSVG,
  NodeSVG,
  ObjCSVG,
  PandasSVG,
  PythonSVG,
  RailsSVG,
  ReactSVG,
  RubySVG,
  SvelteSVG,
  SwiftSVG,
  TensorFlowSVG,
  TypeScriptSVG,
  UnitySVG,
  UnrealSVG,
  XdSVG,
} from "@/assets/svg/TechIcons";
import { getLocales } from "../../../../getLocales";

const MainServiceContent = async ({ params }: any) => {
  const lang = await getLocales(params?.lang);

  const serviceSummaryArr = [
    {
      headerText: lang.mainServices.headingOne,
      description: lang.mainServices.descriptionOne,
      image: erp,
      buttonColor: "bg-purple-gradient",
      RedirectURL: "/en/services/enterprise-solutions-development",
    },

    {
      headerText: lang.mainServices.headingTwo,
      description: lang.mainServices.descriptionTwo,
      image: web,
      progressArr: ["Frontend", "Backend"],
      techArr: [
        <ReactSVG />,
        <AngularSVG />,
        <TypeScriptSVG />,
        <SvelteSVG />,
        <HTMLSVG />,
      ],
      buttonColor: "bg-green-gradient",
      switchDescription: lang.mainServices.switchDescriptionOne,
      switchTechArr: [
        <NodeSVG />,
        <LaravelSVG />,
        <PythonSVG />,
        <DotNetSVG />,
        <RailsSVG />,
      ],
      RedirectURL: "/en/services/website-development-services",
    },
    {
      headerText: lang.mainServices.headingThree,
      description: lang.mainServices.descriptionThree,
      image: mobile,
      progressArr: ["Development", "Design"],
      techArr: [
        <ReactSVG />,
        <ObjCSVG />,
        <SwiftSVG />,
        <FlutterSVG />,
        <KotlinSVG />,
        <JavaSVG />,
      ],
      buttonColor: "bg-yellow-gradient",
      RedirectURL: "/en/services/app-development",

      switchDescription: lang.mainServices.switchDescriptionTwo,
      switchTechArr: [<FigmaSVG />, <XdSVG />, <RubySVG />],
    },
    {
      headerText: lang.mainServices.headingFour,
      description: lang.mainServices.descriptionFour,
      image: uiux,
      techArr: [<FigmaSVG />, <XdSVG />, <RubySVG />],
      buttonColor: "bg-parakeet-gradient",
      RedirectURL: "/en/services/ui-ux-design",
    },
    {
      headerText: lang.mainServices.headingFive,
      description: lang.mainServices.descriptionFive,
      image: cloud,
      techArr: [
        <AwsSVG />,
        <CloudOneSVG />,
        <CloudTwoSVG />,
        <CloudThreeSVG />,
      ],
      buttonColor: "bg-teal-gradient",
      RedirectURL: "/en/services/cloud-computing",
    },
    {
      headerText: lang.mainServices.headingSix,
      description: lang.mainServices.descriptionSix,
      image: game,
      techArr: [<UnitySVG />, <UnrealSVG />, <EyeGameDevSVG />],
      buttonColor: "bg-orange-gradient",
      RedirectURL: "/en/services/game-development",
    },
    {
      headerText: lang.mainServices.headingSeven,
      description: lang.mainServices.descriptionSeven,
      image: blockchain,
      techArr: [
        <BlockOneSVG />,
        <BlockTwoSVG />,
        <BlockThreeSVG />,
        <BlockFourSVG />,
        <BlockFiveSVG />,
        <BlockSixSVG />,
      ],
      buttonColor: "bg-violet-gradient",
      RedirectURL: "/en/services/blockchain-development",
    },
    {
      headerText: lang.mainServices.headingEight,
      description: lang.mainServices.descriptionEight,
      image: internet,
      techArr: [<PythonSVG />, <TensorFlowSVG />, <PandasSVG />],
      buttonColor: "bg-emerald-gradient",
      RedirectURL: "/en/services/iot-development",
    },
    {
      headerText: lang.mainServices.headingNine,
      description: lang.mainServices.descriptionNine,
      image: aiml,
      techArr: [<PythonSVG />, <TensorFlowSVG />, <PandasSVG />],
      buttonColor: "bg-skyblue-gradient",
      RedirectURL: "/en/services/ai-ml-development",
    },
  ];

  return (
    <section className="bg-primary h-fit w-fit lg:w-full">
      <div className="pt-14 grid gap-2">
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-3xl font-semibold text-secondary-reverse dark:text-dark-secondary-reverse leading-relaxed text-center">
            Make the Most of Your Online Presence With Our Web & Mobile
            Solutions
          </h2>
        </div>
        <div className=" grid gap-16 mb-12">
          {serviceSummaryArr.map((item, index) => (
            <div key={index} className="grid gap-6">
              <Heading text={item.headerText} />
              <ServiceSummary
                description={item.description}
                image={item.image}
                index={index}
                progressArr={item.progressArr}
                techArr={item.techArr}
                buttonColor={item.buttonColor}
                switchDescription={item.switchDescription}
                switchTechArr={item.switchTechArr}
                redirectURL={item.RedirectURL}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServiceContent;
