import TitleHeader from "@/components/shared/TitleHeader";
import React from "react";
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

const IoTContent = ({ params }: any) => {
  return (
    <section className="bg-primary h-fit w-full pb-16">
      <div className="pt-14 px-0 xl:px-6 grid gap-16">
        <TitleHeader
          title="IoT Development"
          description={IOTHeaderData}
          buttonArr={[
            {
              href: "/",
              variant: "primary",
              style: "outlined",
              text: "Our Portfolio",
            },
            {
              href: `/${params.lang}/contact-us`,
              variant: "success",
              style: "solid",
              text: "Contact Sales",
            },
          ]}
        />
        <div className="">
          {/* banner Image */}
          <Image
            src={iotBanner}
            alt="Picture of Tech"
            className="xl:w-full w-fit"
          />
        </div>

        <div className="grid gap-16 bg-primary ">
          {/* service Header */}
          <ServiceHeader
            title="Our Services for IoT Development"
            description={IotserviceDesc}
          />
          {/* service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IOTServicesArr.map((item, index) => (
              <CardWithIcon
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                iconBG={"bg-emerald-gradient"}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-16 py-16 bg-secondary">
          <ServiceHeader
            title="Our IOT Development Techstack"
            description="According to project use cases and industry verticals at DevRiser, the following list of contemporary blockchain development technologies and platforms is used:"
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

        <div className="grid gap-16 bg-primary ">
          {/* service Header */}
          <ServiceHeader title="Emerging Internet of Things (IoT) Technologies" />
          {/* service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IOTEmergeArr.map((item, index) => (
              <CardWithIcon
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                iconBG={"bg-emerald-gradient"}
              />
            ))}
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
};

export default IoTContent;
