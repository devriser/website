import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import React from "react";
import webTech from "@/assets/images/web-tech.png";
import ServiceHeader from "@/components/shared/ServiceHeader";
import TechRow from "@/components/shared/TechRow";
import esd from "@/assets/images/enterprise-solutions-development.webp";
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
import { getLoacales } from "../../../../../getLocales";

export default async function ESDContent({ params }: any) {
  const lang = await getLoacales(params.lang);
  console.log(lang);
  return (
    <section className='bg-primary'>
      <div className=' mx-auto pt-14 px-4 xl:px-0 grid gap-16'>
        <div className='bg-primary container mx-auto'>
          <TitleHeader
            title={lang.esd.heroTitle}
            description={lang.esd.heroHeading}
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
        </div>

        <div className='container mx-auto'>
          <Image
            src={esd}
            alt='enterprise-solutions-development banner'
            className='w-full'
          />
        </div>

        <ServiceHeader
          title={lang.esd.servicesTitle}
          description={lang.esd.servicesSubtitle}
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
    </section>
  );
}
