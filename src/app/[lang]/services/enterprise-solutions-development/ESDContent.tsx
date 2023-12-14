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
import { getLoacales } from "../../../../../getLocales";

export default async function ESDContent({ params }: any) {
  const lang = await getLoacales(params.lang);
  console.log(lang)
  return (
    <section className="bg-primary">
      <div className=" mx-auto pt-14 px-4 xl:px-0 grid gap-16">
        <div className="bg-primary container mx-auto">
          <TitleHeader title={lang.heroTitle} description={webDesc} />
        </div>

        <div className="container mx-auto">
          <Image src={webTech} alt="Picture of the author" className="w-full" />
        </div>
        <div className="grid gap-16 bg-primary container mx-auto">
          <ServiceHeader
            title="Our Services for Developing Web Apps"
            description={serviceDesc}
          />

          <div className=" grid 2xl:grid-cols-3 md:grid-cols-2 gap-8">
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

        <div className="grid gap-16 py-16 bg-secondary">
          <ServiceHeader
            title="Technologies We Use For Web Development"
            description={techDesc}
          />
          <div className="grid gap-6 container mx-auto">
            {techStackArr.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start gap-6 items-start px-20"
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

        <div className="grid gap-12 container mx-auto">
          <ServiceHeader
            title="What is Importance of a custom development solution?"
            description={impDesc}
          />
          <div className="grid  md:grid-cols-2 gap-8">
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

        <div className="grid gap-12 py-12 mb-16 bg-secondary">
          <ServiceHeader title="Technologies of the Future for Web Development" />
          <div className="grid gap-6 md:grid-cols-2 container mx-auto">
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
      </div>
    </section>
  );
}
