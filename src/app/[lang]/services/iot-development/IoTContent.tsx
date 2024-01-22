import TitleHeader from "@/components/shared/TitleHeader";
import React, { ReactElement } from "react";
import {
  IOTEmergeArr,
  IOTHeaderData,
  IOTMethodAccordionData,
  IOTServicesArr,
  IotStackArr,
  IotserviceDesc,
} from "./IoTData";
import Image from "next/image";
import iotBanner from "@/assets/images/iot.png";
import ServiceHeader from "@/components/shared/ServiceHeader";
import CardWithIcon from "@/components/shared/Cards/CardWithIcon";
import StackRow from "@/components/shared/StackRow";
import Accordion from "@/components/shared/Accordion/Accordion";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";
import { FAQData } from "../website-development-services/ServiceData";
import { getLocales } from "../../../../../getLocales";
import {
  AutomationSVG,
  BlockchainSVG,
  ClockSVG,
  CloudCompute,
  GatewaySVG,
  IOTApps,
  IOTCloud,
  IOTMicSVG,
  NetworkSVG,
  VRSVG,
} from "@/assets/svg/IoTDevSVG/AlliOTSVG";

interface IconComponents {
  IOTApps: ReactElement;
  ClockSVG: ReactElement;
  IOTCloud: ReactElement;
  IOTMicSVG: ReactElement;
  GatewaySVG: ReactElement;
  NetworkSVG: ReactElement;
  AutomationSVG: ReactElement;
  CloudCompute: ReactElement;
  VRSVG: ReactElement;
  BlockchainSVG: ReactElement;
}

const iconComponents: IconComponents = {
  IOTApps: <IOTApps />,
  ClockSVG: <ClockSVG />,
  IOTCloud: <IOTCloud />,
  IOTMicSVG: <IOTMicSVG />,
  GatewaySVG: <GatewaySVG />,
  NetworkSVG: <NetworkSVG />,
  AutomationSVG: <AutomationSVG />,
  CloudCompute: <CloudCompute />,
  VRSVG: <VRSVG />,
  BlockchainSVG: <BlockchainSVG />,
};

interface ServiceCardItem {
  title: string;
  description: string;
  icon: keyof IconComponents;
}

export default async function IoTContent({ params }: any) {
  const lang = await getLocales(params.lang);

  return (
    <section className="bg-primary h-fit w-full pb-16">
      <div className="pt-14 grid gap-16">
        <div className="px-6">
          <TitleHeader
            title={lang.iOtDevelopement.mainHeading}
            description={lang.iOtDevelopement.subHeading}
            buttonArr={[
              {
                href: "/",
                variant: "primary",
                style: "outlined",
                text: lang.iOtDevelopement.buttonTextOne,
              },
              {
                href: `/${params.lang}/contact-us`,
                variant: "success",
                style: "solid",
                text: lang.iOtDevelopement.buttonTextTwo,
              },
            ]}
          />
        </div>
        <div className="px-6">
          {/* banner Image */}
          <Image
            src={iotBanner}
            alt="Picture of Tech"
            className="xl:w-full w-fit"
          />
        </div>

        <div className="grid gap-16 bg-primary px-6">
          {/* service Header */}
          <ServiceHeader
            title={lang.iOtDevelopement.section1.title}
            description={lang.iOtDevelopement.section1.description}
          />
          {/* service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lang.iOtDevelopement.section1?.IOTServicesArr?.map(
              (item: ServiceCardItem, index: any) => (
                <CardWithIcon
                  key={index}
                  title={item?.title}
                  description={item?.description}
                  icon={iconComponents[item?.icon]}
                  iconBG={"bg-emerald-gradient"}
                />
              )
            )}
          </div>
        </div>
        <div className="grid gap-16 py-16 bg-secondary px-6">
          <ServiceHeader
            title={lang.iOtDevelopement.section2.title}
            description={lang.iOtDevelopement.section2.description}
          />
          <div className="flex items-center justify-center flex-wrap container mx-auto gap-5">
            {IotStackArr.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-start"
              >
                <StackRow stackName={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-16 bg-primary px-6">
          {/* service Header */}
          <ServiceHeader title={lang.iOtDevelopement.section3.title} />
          {/* service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lang.iOtDevelopement.section3?.IOTEmergeArr?.map(
              (item: ServiceCardItem, index: any) => (
                <CardWithIcon
                  key={index}
                  title={item?.title}
                  description={item?.description}
                  icon={iconComponents[item?.icon]}
                  iconBG={"bg-emerald-gradient"}
                />
              )
            )}
          </div>
        </div>

        {/* <div className='grid xl:grid-cols-2 gap-8 xl:px-36 py-16'>
          <div>
            <h3 className='text-text-heading font-medium text-secondary-reverse'>
              Our IoT Development Methodology
            </h3>
          </div>
          <Accordion content={IOTMethodAccordionData} />
        </div> */}

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
