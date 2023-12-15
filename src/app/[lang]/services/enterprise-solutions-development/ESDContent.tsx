import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import React, { ReactElement } from "react";
import ServiceHeader from "@/components/shared/ServiceHeader";
import TechRow from "@/components/shared/TechRow";
import esd from "@/assets/images/enterprise-solutions-development.webp";
import {
  AutomationTesting,
  FunctionalEvaluation,
  PerformanceEvaluation,
  UsabilityEvaluation,
  TestingForCompatibility,
  FunctionalEvaluation2,
} from "@/assets/svg/AllIconComponent";
import {
  customDevArr,
  futureWebTech,
  impDesc,
  techDesc,
  techStackArr,
} from "./ServiceData";
import Card from "@/components/shared/Cards/Card";
import ServiceCard from "@/components/shared/Cards/ServiceCard";
import { getLoacales } from "../../../../../getLocales";
interface IconComponents {
  AutomationTesting: ReactElement;
  FunctionalEvaluation: ReactElement;
  PerformanceEvaluation: ReactElement;
  UsabilityEvaluation: ReactElement;
  TestingForCompatibility: ReactElement;
  FunctionalEvaluation2: ReactElement;
}

const iconComponents: IconComponents = {
  AutomationTesting: <AutomationTesting />,
  FunctionalEvaluation: <FunctionalEvaluation />,
  PerformanceEvaluation: <PerformanceEvaluation />,
  UsabilityEvaluation: <UsabilityEvaluation />,
  TestingForCompatibility: <TestingForCompatibility />,
  FunctionalEvaluation2: <FunctionalEvaluation2 />,
};

interface ServiceCardItem {
  title: string;
  description: string;
  icon: keyof IconComponents;
}

export default async function ESDContent({ params }: any) {
  const lang = await getLoacales(params.lang);
  console.log(lang.esd.webServicesArr);
  return (
    <section className="bg-primary h-fit">
      <div className=" mx-auto pt-14 px-4 xl:px-0 grid gap-16">
        <div className="bg-primary container mx-auto">
          <TitleHeader
            title={lang.esd.heroTitle}
            description={lang.esd.heroHeading}
            buttonArr={[
              {
                href: "/",
                variant: "primary",
                style: "outlined",
                text: lang.esd.heroButtonOne,
              },
              {
                href: "/",
                variant: "success",
                style: "solid",
                text: lang.esd.heroButtonTwo,
              },
            ]}
          />
        </div>

        <div className="container mx-auto">
          <Image src={esd} alt="Picture of the author" className="w-full" />
        </div>
        <div className="grid gap-16 bg-primary container mx-auto">
          <ServiceHeader
            title={lang.esd.serviceHeaderTitle1}
            description={lang.esd.serviceHeaderDesc1}
          />

          <div className=" grid grid-cols-1 md:grid-cols-2  gap-8">
            {lang.esd.webServicesArr.map(
              (item: ServiceCardItem, index: number) => (
                <ServiceCard
                  iconBG={"bg-solid-purple"}
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={iconComponents[item.icon]}
                />
              )
            )}
          </div>
        </div>

        <div className="grid gap-16 bg-primary container mx-auto">
          <ServiceHeader
            title={lang.esd.serviceHeaderTitle1}
            description={lang.esd.serviceHeaderDesc1}
          />

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lang.esd.webServicesArr.map(
              (item: ServiceCardItem, index: number) => (
                <ServiceCard
                  iconBG={"bg-solid-purple"}
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={iconComponents[item.icon]}
                  
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
