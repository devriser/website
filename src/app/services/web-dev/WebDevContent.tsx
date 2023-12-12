import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import React from "react";
import webTech from "@/assets/images/web-tech.png";
import ServiceHeader from "@/components/shared/ServiceHeader";
import TechRow from "@/components/shared/TechRow";
import {
  customDevArr,
  futureWebTech,
  impDesc,
  serviceDesc,
  techDesc,
  techStackArr,
  webDesc,
  webServicesArr,
} from "./ServiceData";
import Card from "@/components/shared/Cards/Card";
import ServiceCard from "@/components/shared/Cards/ServiceCard";

const WebDevContent = () => {
  return (
    <section className='xl:w-[80%] mx-auto mt-14 px-4 xl:px-0 grid gap-16'>
      {/* top header */}
      <TitleHeader title='Web Development Services' description={webDesc} />
      {/* buttons */}
      {/* <div className=''></div> */}
      {/* banner Image */}
      <Image src={webTech} alt='Picture of the author' className='w-full' />
      <div className='grid gap-16'>
        {/* service Header */}
        <ServiceHeader
          title='Our Services for Developing Web Apps'
          description={serviceDesc}
        />
        {/* service cards */}
        <div className=' grid 2xl:grid-cols-3 md:grid-cols-2 gap-8'>
          {webServicesArr.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      {/* service Tech */}
      <div className='grid gap-16 py-16'>
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
                style={{
                  //   border: "1px solid rgba(237, 237, 237, 0.10)",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  display: index + 1 < techStackArr.length ? "block" : " none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* importance */}
      <div className='grid gap-12'>
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
        className='grid gap-12 py-12 mb-16'
        style={{ background: "#171717" }}
      >
        <ServiceHeader title='Technologies of the Future for Web Development' />
        <div className='grid gap-6 md:grid-cols-2 px-8'>
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
    </section>
  );
};

export default WebDevContent;
