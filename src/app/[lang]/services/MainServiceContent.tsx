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

const MainServiceContent = () => {
  const serviceSummaryArr = [
    {
      headerText: "Enterprise Solutions Development",
      description:
        "DevRiser specializes in crafting cutting-edge software solutions that elevate your business to new heights. Our team of experienced developers is dedicated to delivering tailor-made enterprise solutions, aligning seamlessly with your unique needs and challenges. From scalable applications to efficient system integrations, we are committed to propelling your business forward.",
      image: erp,
      buttonColor: "bg-purple-gradient",
      RedirectURL: "/en/services/enterprise-solutions-development",
    },

    {
      headerText: "Web Development",
      description:
        "DevRiser provides performance-driven, scalable, and responsive custom web app development services. The most recent technologies are used by our team of professionals to build cross-platform web applications.",
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
      switchDescription:
        "DevRiser excels in backend web development, delivering robust, scalable, and efficient solutions. Our dedicated team leverages the latest technologies to craft powerful backend systems, ensuring seamless functionality and optimal performance for your web applications.",
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
      headerText: "App Development",
      description:
        "DevRiser offers a variety of mobile app development services, such as cross-platform, Android, and iOS app development, to assist businesses in accelerating their growth and creating a distinctive brand identity. Our team specializes in developing mobile apps.",
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

      switchDescription:
        "DevRiser transforms ideas into captivating mobile experiences. Our expert designers specialize in cross-platform, Android, and iOS app development, crafting visually appealing and user-centric designs that align seamlessly with your brand identity. Elevate your business presence with DevRiser's innovative mobile app design solutions",
      switchTechArr: [<FigmaSVG />, <XdSVG />, <RubySVG />],
    },
    {
      headerText: "UI UX Design",
      description:
        "DevRiser's UI/UX design services consist of intuitive and eye-catching digital designs. To satisfy your business objectives and user needs, our UX design consulting company offers specialized design approaches. For UI/UX design services that promote company's expansion, contact us.",
      image: uiux,
      techArr: [<FigmaSVG />, <XdSVG />, <RubySVG />],
      buttonColor: "bg-parakeet-gradient",
      RedirectURL: "/en/services/ui-ux-design",
    },
    {
      headerText: "Cloud Computing Services",
      description:
        "DevRiser provides enterprise cloud IT solutions for all businesses through our company's cloud computing services and solutions across the globe. Our area of expertise is in providing specialized cloud services, For organizations, our cloud computing solutions",
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
      headerText: "Game Development",
      description:
        "DevRiser is a leading game development company that specializes in creating 2D and 3D game apps for desktops, iOS and Android. Using Unity and Unreal Engine, we develop original video games as well as AR/VR applications.",
      image: game,
      techArr: [<UnitySVG />, <UnrealSVG />, <EyeGameDevSVG />],
      buttonColor: "bg-orange-gradient",
      RedirectURL: "/en/services/game-development",
    },
    {
      headerText: "Blockchain Development",
      description:
        "Unlock the potential of decentralized technology with DevRiser's cutting-edge blockchain development services. From smart contract deployment to DApp creation, we empower businesses to embrace the future of secure and transparent digital ecosystems. Partner with us for innovative solutions that redefine possibilities in the blockchain space.",
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
      headerText: "Internet of Things",
      description:
        "We offer complete IoT software development services, specialized in custom IoT development and IoT mobile app development. Our specialized solutions boost operational effectiveness, cut expenses, and boost output across a range of industries. You can rely on us for dependable and secure IoT solutions.",
      image: internet,
      techArr: [<PythonSVG />, <TensorFlowSVG />, <PandasSVG />],
      buttonColor: "bg-emerald-gradient",
      RedirectURL: "/en/services/iot-development",
    },
    {
      headerText: "AI/ML Development",
      description:
        "Empower your business with DevRiser's AI/ML development services. From predictive analytics to intelligent automation, we harness the power of artificial intelligence and machine learning to elevate your operations. Revolutionize your technology landscape with our expertise, driving innovation and efficiency for a competitive edge in the digital era.",
      image: aiml,
      techArr: [<PythonSVG />, <TensorFlowSVG />, <PandasSVG />],
      buttonColor: "bg-skyblue-gradient",
      RedirectURL: "/en/services/ai-ml-development",
    },
  ];

  return (
    <section className="bg-primary h-fit w-fit lg:w-full">
      <div className="pt-14 px-0 md:px-6 grid gap-2">
        <div className="max-w-xl px-6">
          <TitleHeader title="Make the Most of Your Online Presence With Our Web & Mobile Solutions" />
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
