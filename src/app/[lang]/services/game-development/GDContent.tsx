import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import React, { ReactElement } from "react";
import ServiceHeader from "@/components/shared/ServiceHeader";
import gd from "@/assets/images/game-development.webp";

import { getLoacales } from "../../../../../getLocales";
import Accordion from "@/components/shared/Accordion/Accordion";

import CardWithIcon from "@/components/shared/Cards/CardWithIcon";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";
import {
  ARAndVRGameDevelopment,
  FantasyGameDevelopment,
  HTML5Games,
  MobileGameDevelopment,
  NFTGameDevelopment,
  TwoDAnd3DGameDevelopment,
} from "@/assets/svg/GameDevelopment";
interface IconComponents {
  MobileGameDevelopment: ReactElement;
  FantasyGameDevelopment: ReactElement;
  TwoDAnd3DGameDevelopment: ReactElement;
  ARAndVRGameDevelopment: ReactElement;
  HTML5Games: ReactElement;
  NFTGameDevelopment: ReactElement;
}

const iconComponents: IconComponents = {
  MobileGameDevelopment: <MobileGameDevelopment />,
  FantasyGameDevelopment: <FantasyGameDevelopment />,
  TwoDAnd3DGameDevelopment: <TwoDAnd3DGameDevelopment />,
  ARAndVRGameDevelopment: <ARAndVRGameDevelopment />,
  HTML5Games: <HTML5Games />,
  NFTGameDevelopment: <NFTGameDevelopment />,
};

interface ServiceCardItem {
  title: string;
  description: string;
  icon: keyof IconComponents;
}

export default async function GDContent({ params }: any) {
  const lang = await getLoacales(params.lang);

  return (
    <section className="bg-primary h-fit">
      <div className=" pt-14 grid gap-16">
        <div className="bg-primary px-6">
          <TitleHeader
            title={lang.gd.heroTitle}
            description={lang.gd.heroHeading}
            buttonArr={[
              {
                href: "/",
                variant: "primary",
                style: "outlined",
                text: lang.gd.heroButtonOne,
              },
              {
                href: "/",
                variant: "success",
                style: "solid",
                text: lang.gd.heroButtonTwo,
              },
            ]}
          />
        </div>

        <div className="px-6">
          <Image src={gd} alt="Picture of the author" className="w-full" />
        </div>

        <div className="grid gap-16 bg-primary px-6 mx-auto">
          <ServiceHeader
            title={lang.gd.section1.serviceHeaderTitle}
            description={lang.gd.section1.serviceHeaderDesc}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lang.gd.section1.webServicesArr.map(
              (item: ServiceCardItem, index: number) => (
                <CardWithIcon
                  iconBG={"bg-sunset-salmon"}
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={iconComponents[item.icon]}
                />
              )
            )}
          </div>
        </div>

        <div className="grid gap-10 bg-secondary py-10 px-6">
          <ServiceHeader
            title={lang.gd.section7.title}
            description={lang.gd.section7.description}
          />
          <div className="flex gap-5 justify-center items-center flex-wrap px-6">
            {[
              "C++",
              "Java",
              "Sketch",
              "Adobe Illustrator",
              "Adobe XD",
              "Figma",
            ].map((item: string) => (
              <p
                key={item}
                className="py-2 px-3 text-sm flex items-center justify-center text-center border border-primary-border text-secondary-reverse rounded-full w-fit"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row bg-primary py-10 gap-8 px-6">
          <div className="w-1/3 flex flex-col gap-5">
            <div className="text-text-title font-semibold ">
              {lang.gd.faq2.faqTitle}
            </div>
            <div className="text-secondary-reverse">{lang.gd.faq2.faqDisc}</div>
          </div>
          <div className="w-2/3">
            <Accordion content={lang.gd.faq2.faqList} />
          </div>
        </div>

        

        <LetDiscussYourProject params={params} />
        <div className="py-16 grid gap-10 px-6">
          <ServiceHeader title={lang.gd.faq.faqTitle} />
          <Accordion content={lang.gd.faq.faqList} />
        </div>
      </div>
    </section>
  );
}
