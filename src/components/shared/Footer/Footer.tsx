"use client";

import React, { useEffect, useState } from "react";
import { getLoacales } from "../../../../getLocales";
import { DarkLogo } from "@/assets/svg/HeaderSvg";
import { CallSvg, MailSvg, WhatsAppSvg } from "@/assets/svg/FooterSvg";
import darkLogo from "@/assets/images/devriserDarkLogo.png";
import lightLogo from "@/assets/images/devriserLightLogo.png";
import Image from "next/image";
import { useTheme } from "next-themes";

interface LocaleData {
  footer: {
    mainHeading: string;
    follow: string;
    companyDetail: {
      company: string;
      headingOne: string;
      headingTwo: string;
      headingThree: string;
      headingFour: string;
      headingFive: string;
      headingSix: string;
    };
    servicesDetails: {
      services: string;
      headingOne: string;
      headingTwo: string;
      headingThree: string;
      headingFour: string;
      headingFive: string;
      headingSix: string;
      headingSeven: string;
      headingEight: string;
    };
    industries: {
      industries: string;
      headingOne: string;
      headingTwo: string;
      headingThree: string;
      headingFour: string;
      headingFive: string;
      headingSix: string;
      headingSeven: string;
      headingEight: string;
      headingNine: string;
    };
    conversation: {
      conversation: string;
      email: string;
      phone: string;
      whatsApp: string;
    };
    copyright: {
      heading: string;
    };
  };
}

interface FooterProps {
  params: { lang: string };
}

export default function Footer({ params }: FooterProps) {
  const themes = useTheme();
  const [lang, setLang] = useState<LocaleData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const locales = await getLoacales(params.lang);
      setLang(locales);
    };

    fetchData();
  }, [params.lang]);

  if (!lang) {
    return null;
  }

  const companyData = [
    {
      heading: lang.footer.companyDetail.company,
      subHeading: [
        {
          headingOne: lang.footer.companyDetail.headingOne,
        },
        {
          headingTwo: lang.footer.companyDetail.headingTwo,
        },
        {
          headingThree: lang.footer.companyDetail.headingThree,
        },
        {
          headingFour: lang.footer.companyDetail.headingFour,
        },
        {
          headingFive: lang.footer.companyDetail.headingFive,
        },
        {
          headingSix: lang.footer.companyDetail.headingSix,
        },
      ],
    },
  ];

  const serviceData = [
    {
      heading: lang.footer.servicesDetails.services,
      subHeading: [
        {
          headingOne: lang.footer.servicesDetails.headingOne,
        },
        {
          headingTwo: lang.footer.servicesDetails.headingTwo,
        },
        {
          headingThree: lang.footer.servicesDetails.headingThree,
        },
        {
          headingFour: lang.footer.servicesDetails.headingFour,
        },
        {
          headingFive: lang.footer.servicesDetails.headingFive,
        },
        {
          headingSix: lang.footer.servicesDetails.headingSix,
        },
        {
          headingSeven: lang.footer.servicesDetails.headingSeven,
        },
        {
          headingEight: lang.footer.servicesDetails.headingEight,
        },
      ],
    },
  ];
  const industriesData = [
    {
      heading: lang.footer.industries.industries,
      subHeading: [
        {
          headingOne: lang.footer.industries.headingOne,
        },
        {
          headingTwo: lang.footer.industries.headingTwo,
        },
        {
          headingThree: lang.footer.industries.headingThree,
        },
        {
          headingFour: lang.footer.industries.headingFour,
        },
        {
          headingFive: lang.footer.industries.headingFive,
        },
        {
          headingSix: lang.footer.industries.headingSix,
        },
        {
          headingSeven: lang.footer.industries.headingSeven,
        },
        {
          headingEight: lang.footer.industries.headingEight,
        },
        {
          headingNine: lang.footer.industries.headingNine,
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-secondary px-6 py-10 flex justify-between max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col gap-16 max-sm:gap-4">
          <div className="flex flex-col gap-2 max-sm:items-center">
            {themes.theme === "dark" ? (
              <Image src={lightLogo} alt="img" height={56} width={56} />
            ) : (
              <Image src={darkLogo} alt="img" height={56} width={56} />
            )}
            <p className="text-secondary-reverse">{lang.footer.mainHeading}</p>
          </div>
          <div>
            <p className="text-secondary-reverse text-text-subtitle font-medium">
              {lang.footer.follow}
            </p>
          </div>
        </div>
        <div className="flex gap-10 max-sm:flex-wrap max-sm:gap-2 max-sm:justify-between">
          <div>
            {companyData.map((item) => (
              <div key={item.heading} className="flex flex-col gap-3">
                <span className="font-medium text-text-subtitle text-secondary-reverse">
                  {item.heading}
                </span>
                {item.subHeading.map((subItem, index) => (
                  <div key={index} className="text-secondary-reverse">
                    <p>{subItem.headingOne}</p>
                    <p>{subItem.headingTwo}</p>
                    <p>{subItem.headingThree}</p>
                    <p>{subItem.headingFour}</p>
                    <p>{subItem.headingFive}</p>
                    <p>{subItem.headingSix}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div>
            {serviceData.map((item) => (
              <div key={item.heading} className="flex flex-col gap-3">
                <span className="font-medium text-text-subtitle text-secondary-reverse">
                  {item.heading}
                </span>
                {item.subHeading.map((subItem, index) => (
                  <div key={index} className="text-secondary-reverse">
                    <p>{subItem.headingOne}</p>
                    <p>{subItem.headingTwo}</p>
                    <p>{subItem.headingThree}</p>
                    <p>{subItem.headingFour}</p>
                    <p>{subItem.headingFive}</p>
                    <p>{subItem.headingSix}</p>
                    <p>{subItem.headingSeven}</p>
                    <p>{subItem.headingEight}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div>
            {industriesData.map((item) => (
              <div key={item.heading} className="flex flex-col gap-3">
                <span className="font-medium text-text-subtitle text-secondary-reverse">
                  {item.heading}
                </span>
                {item.subHeading.map((subItem, index) => (
                  <div key={index} className="text-secondary-reverse">
                    <p>{subItem.headingOne}</p>
                    <p>{subItem.headingTwo}</p>
                    <p>{subItem.headingThree}</p>
                    <p>{subItem.headingFour}</p>
                    <p>{subItem.headingFive}</p>
                    <p>{subItem.headingSix}</p>
                    <p>{subItem.headingSeven}</p>
                    <p>{subItem.headingEight}</p>
                    <p>{subItem.headingNine}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-secondary-reverse text-text-subtitle font-medium">
            {lang.footer.conversation.conversation}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MailSvg />
              <span className="text-secondary-reverse">
                {lang.footer.conversation.email}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CallSvg />
              <span className="text-secondary-reverse">
                {lang.footer.conversation.phone}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <WhatsAppSvg />
              <span className="text-secondary-reverse">
                {lang.footer.conversation.whatsApp}
              </span>
            </div>
          </div>
        </div>
      </div>
      <CopyRight params={params} />
    </>
  );
}

export function CopyRight({ params }: any) {
  const [lang, setLang] = useState<LocaleData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const locales = await getLoacales(params.lang);
      setLang(locales);
    };

    fetchData();
  }, [params.lang]);

  if (!lang) {
    return null;
  }

  return (
    <p className="bg-primary text-center text-secondary-reverse py-4">
      {lang.footer.copyright.heading}
    </p>
  );
}
