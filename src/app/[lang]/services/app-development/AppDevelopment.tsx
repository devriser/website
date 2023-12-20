import React, { ReactElement } from "react";
import { getLoacales } from "../../../../../getLocales";
import TitleHeader from "@/components/shared/TitleHeader";
import appDevelopment from "@/assets/images/appDevelopment1.webp";
import Image from "next/image";
import ServiceHeader from "@/components/shared/ServiceHeader";
import CardWithIcon from "@/components/shared/Cards/CardWithIcon";
import {
  ApplicationDevelopmentConsultancy,
  CustomMobileApplicationDevelopment,
  EnterpriseMobileAppDevelopment,
  MobileGameDevelopment,
  SupportMaintenanceApps,
  UIUXDesignMobileApps,
} from "@/assets/svg/AppDevelopmentSvg";

export default async function AppDevelopment({ params }: any) {
  const lang = await getLoacales(params.lang);

  interface IconComponents {
    ApplicationDevelopmentConsultancy: ReactElement;
    UIUXDesignMobileApps: ReactElement;
    CustomMobileApplicationDevelopment: ReactElement;
    EnterpriseMobileAppDevelopment: ReactElement;
    MobileGameDevelopment: ReactElement;
    SupportMaintenanceApps: ReactElement;
  }

  const iconComponents: IconComponents = {
    ApplicationDevelopmentConsultancy: <ApplicationDevelopmentConsultancy />,
    UIUXDesignMobileApps: <UIUXDesignMobileApps />,
    CustomMobileApplicationDevelopment: <CustomMobileApplicationDevelopment />,
    EnterpriseMobileAppDevelopment: <EnterpriseMobileAppDevelopment />,
    MobileGameDevelopment: <MobileGameDevelopment />,
    SupportMaintenanceApps: <SupportMaintenanceApps />,
  };

  interface ServiceCardItem {
    title: string;
    description: string;
    icon: keyof IconComponents;
  }

  return (
    <div className="p-6 pt-14 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <TitleHeader
          title={lang.appDevelopment.mainHeading}
          description={lang.appDevelopment.subHeading}
          buttonArr={[
            {
              href: "/",
              variant: "primary",
              style: "outlined",
              text: lang.appDevelopment.buttonTextOne,
            },
            {
              href: "/",
              variant: "success",
              style: "solid",
              text: lang.appDevelopment.buttonTextTwo,
            },
          ]}
        />
        <div>
          <Image
            src={appDevelopment}
            alt="app development"
            className="rounded-banner-rounded w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <ServiceHeader
          title={lang.appDevelopment.sectionOne.appHeading}
          description={lang.appDevelopment.sectionOne.appSubHeading}
        />

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {lang.appDevelopment.sectionOne.appServiceArr.map(
            (item: ServiceCardItem, index: number) => (
              <CardWithIcon
                iconBG={"bg-solid-yellow"}
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
  );
}
