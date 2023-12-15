import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import React, { ReactElement } from "react";
import ServiceHeader from "@/components/shared/ServiceHeader";
import esd from "@/assets/images/enterprise-solutions-development.webp";
import {
  AutomationTesting,
  FunctionalEvaluation,
  PerformanceEvaluation,
  UsabilityEvaluation,
  TestingForCompatibility,
  FunctionalEvaluation2,
  APITesting,
  AppTesting,
  WebSecurityTesting,
  LoadTesting,
  PerformanceTesting,
  ManualTesting,
} from "@/assets/svg/AllIconComponent";
import ServiceCard from "@/components/shared/Cards/ServiceCard";
import { getLoacales } from "../../../../../getLocales";
import Accordion from "@/components/shared/Accordion/Accordion";
import { FAQData } from "../web-dev/ServiceData";
interface IconComponents {
  AutomationTesting: ReactElement;
  FunctionalEvaluation: ReactElement;
  PerformanceEvaluation: ReactElement;
  UsabilityEvaluation: ReactElement;
  TestingForCompatibility: ReactElement;
  FunctionalEvaluation2: ReactElement;

  APITesting:ReactElement;
  AppTesting:ReactElement;
  WebSecurityTesting:ReactElement;
  LoadTesting:ReactElement;
  PerformanceTesting:ReactElement;
  ManualTesting:ReactElement;
}

const iconComponents: IconComponents = {
  AutomationTesting: <AutomationTesting />,
  FunctionalEvaluation: <FunctionalEvaluation />,
  PerformanceEvaluation: <PerformanceEvaluation />,
  UsabilityEvaluation: <UsabilityEvaluation />,
  TestingForCompatibility: <TestingForCompatibility />,
  FunctionalEvaluation2: <FunctionalEvaluation2 />,
  APITesting:<APITesting/>,
  AppTesting:<AppTesting/>,
  WebSecurityTesting:<WebSecurityTesting/>,
  LoadTesting:<LoadTesting/>,
  PerformanceTesting:<PerformanceTesting/>,
  ManualTesting:<ManualTesting/>,
};

interface ServiceCardItem {
  title: string;
  description: string;
  icon: keyof IconComponents;
}

export default async function ESDContent({ params }: any) {
  const lang = await getLoacales(params.lang);
  console.log(lang.esd);
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
            title={lang.esd.section1.serviceHeaderTitle}
            description={lang.esd.section1.serviceHeaderDesc}
          />

          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {lang.esd.section1.webServicesArr.map(
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
            title={lang.esd.section2.serviceHeaderTitle}
            description={lang.esd.section2.serviceHeaderDesc}
          />

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lang.esd.section2.webServicesArr.map(
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
        <div className='py-16 grid gap-10 container mx-auto'>
          <ServiceHeader title={lang.esd.faq.faqTitle} />
          <Accordion content={lang.esd.faq.faqList} />
        </div>
      </div>
    </section>
  );
}
