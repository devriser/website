import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import React from "react";
import webTech from "@/assets/images/web-tech.png";
import ServiceHeader from "@/components/shared/ServiceHeader";
import TechRow from "@/components/shared/TechRow";
import {
  DevWebAppAccordionData,
  FAQData,
  customDevArr,
  futureTechServicesArr,
  futureWebTech,
  impDesc,
  serviceDesc,
  techDesc,
  techStackArr,
  webDesc,
  webServicesArr,
} from "./ServiceData";
import Card from "@/components/shared/Cards/Card";

import { getLoacales } from "../../../../../getLocales";
import Accordion from "@/components/shared/Accordion/Accordion";
import CardWithIcon from "@/components/shared/Cards/CardWithIcon";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";

export default async function WebDevContent({ params }: any) {
  const lang = await getLoacales(params.lang);
  console.log(lang);
  return (
    <section className='bg-primary h-fit w-full'>
      <div className='pt-14 px-0 xl:px-6 grid gap-16'>
        {/* top header */}
        <div className='bg-primary '>
          <TitleHeader
            title='Website Development Services'
            description={webDesc}
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
          {/* buttons */}
          {/* <div className=''></div> */}
        </div>

        <div className=''>
          {/* banner Image */}
          <Image
            src={webTech}
            alt='Picture of the author'
            className='xl:w-full w-fit'
          />
        </div>
        <div className='grid gap-16 bg-primary '>
          {/* service Header */}
          <ServiceHeader
            title='Our Services for Developing Web Apps'
            description={serviceDesc}
          />
          {/* service cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {webServicesArr.map((item, index) => (
              <CardWithIcon
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        {/* service Tech */}
        <div className='grid gap-16 py-16 bg-secondary'>
          <ServiceHeader
            title='Technologies We Use For Web Development'
            description={techDesc}
          />
          <div className='grid gap-6 '>
            {techStackArr.map((item, index) => (
              <div
                key={index}
                className='flex flex-col justify-start gap-6 items-start px-20'
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
        {/* importance */}
        <div className='grid gap-12 '>
          <ServiceHeader
            title='What is Importance of a custom development solution?'
            description={impDesc}
          />
          <div className='grid  md:grid-cols-2 gap-8'>
            {customDevArr.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                isBG
              />
            ))}
          </div>
        </div>
        {/* future tech */}
        <div
          className='grid gap-12 py-12 mb-16 bg-secondary'
          // style={{ background: "#171717" }}
        >
          <ServiceHeader title='Technologies of the Future for Web Development' />
          <div className='grid gap-6 md:grid-cols-2 container mx-auto px-4 '>
            {futureWebTech.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                isBorder
              />
            ))}
          </div>
        </div>

        {/* Method we use */}
        <div className='grid xl:grid-cols-2 gap-8 xl:px-36 py-16'>
          <div>
            <h3 className='text-text-heading font-medium text-secondary-reverse'>
              The Method We Use to Develop Web Apps
            </h3>
            <p className='text-sub-text mt-5'>
              We have been a dependable partner in web development for a wide
              range of companies, from start-ups and SMEs to enterprise-grade
              companies utilizing the most recent development tools and tech
              stack.
            </p>
          </div>
          <Accordion content={DevWebAppAccordionData} />
        </div>

        {/* dark card */}
        <div className='grid gap-16 bg-secondary py-16'>
          {/* service Header */}
          <ServiceHeader title='Technologies of the Future for Web Development' />
          {/* service cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto gap-8'>
            {futureTechServicesArr.map((item, index) => (
              <CardWithIcon
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                bgColor='bg-primary'
              />
            ))}
          </div>
        </div>

        {/* Discuss part */}
        <div className=''>
          <LetDiscussYourProject params={params} />
        </div>

        {/* FAQ */}
        <div className='py-16 grid gap-10 container mx-auto'>
          <ServiceHeader title='Frequently Asked Questions' />
          <Accordion content={FAQData} />
        </div>
      </div>
    </section>
  );
}
