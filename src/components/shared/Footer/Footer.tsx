"use client";

import React, { useEffect, useState } from "react";
import { DarkLogo } from "@/assets/svg/HeaderSvg";
import {
  CallSvg,
  FaceBookSvg,
  InstaGramSvg,
  MailSvg,
  TwitterSvg,
  WhatsAppSvg,
  YoutubeSvg,
} from "@/assets/svg/FooterSvg";
import darkLogo from "@/assets/images/devriserDarkLogo.png";
import lightLogo from "@/assets/images/devriserLightLogo.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { socialLinks } from "./socialLinks";
import { getLocales } from "../../../../getLocales";

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
      headingNine: string;
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
      const locales = await getLocales(params.lang);
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
          path: `/${params.lang}/about-us`,
        },
        // {
        //   headingTwo: lang.footer.companyDetail.headingTwo,
        //   path: ``,
        // },
        // {
        //   headingThree: lang.footer.companyDetail.headingThree,
        //   path: ``,
        // },
        // {
        //   headingFour: lang.footer.companyDetail.headingFour,
        //   path: ``,
        // },
        // {
        //   headingFive: lang.footer.companyDetail.headingFive,
        //   path: ``,
        // },
        {
          headingSix: lang.footer.companyDetail.headingSix,
          path: `/${params.lang}/contact-us`,
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
          path: `/${params.lang}/services/app-development`,
        },
        {
          headingTwo: lang.footer.servicesDetails.headingTwo,
          path: `/${params.lang}/services/website-development-services`,
        },
        {
          headingThree: lang.footer.servicesDetails.headingThree,
          path: `/${params.lang}/services/game-development`,
        },
        {
          headingFour: lang.footer.servicesDetails.headingFour,
          path: `/${params.lang}/services/cloud-computing`,
        },
        {
          headingFive: lang.footer.servicesDetails.headingFive,
          path: `/${params.lang}/services/ai-ml-development`,
        },
        {
          headingSix: lang.footer.servicesDetails.headingSix,
          path: `/${params.lang}/services/blockchain-development`,
        },
        {
          headingSeven: lang.footer.servicesDetails.headingSeven,
          path: `/${params.lang}/services/ui-ux-design`,
        },
        {
          headingEight: lang.footer.servicesDetails.headingEight,
          path: `/${params.lang}/services/iot-development`,
        },
        {
          headingNine: lang.footer.servicesDetails.headingNine,
          path: `/${params.lang}/services/enterprise-solutions-development`,
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
          path: ``,
        },
        {
          headingTwo: lang.footer.industries.headingTwo,
          path: ``,
        },
        {
          headingThree: lang.footer.industries.headingThree,
          path: ``,
        },
        {
          headingFour: lang.footer.industries.headingFour,
          path: ``,
        },
        {
          headingFive: lang.footer.industries.headingFive,
          path: ``,
        },
        // {
        //   headingSix: lang.footer.industries.headingSix,
        //   path: ``,
        // },
        // {
        //   headingSeven: lang.footer.industries.headingSeven,
        //   path: ``,
        // },
        // {
        //   headingEight: lang.footer.industries.headingEight,
        //   path: ``,
        // },
        // {
        //   headingNine: lang.footer.industries.headingNine,
        //   path: ``,
        // },
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
          <div className="flex flex-col gap-2">
            <p className="text-secondary-reverse text-text-subtitle font-medium">
              {lang.footer.follow}
            </p>
            <span className="flex gap-2">
              <TwitterSvg />
              <FaceBookSvg />
              <InstaGramSvg />
              <YoutubeSvg />
            </span>
          </div>
        </div>
        <div className="flex gap-10 max-sm:flex-wrap max-sm:gap-2 max-sm:justify-between">
          <div>
            {companyData.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <span className="font-medium text-text-subtitle text-secondary-reverse">
                  {item.heading}
                </span>
                {item.subHeading.map((subItem, index) => (
                  <div key={index} className="text-secondary-reverse  ">
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingOne}
                    </Link>
                    {/* <Link href={subItem.path} className="hover:underline">
                      {subItem.headingTwo}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingThree}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingFour}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingFive}
                    </Link> */}
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingSix}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div>
            {serviceData.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <span className="font-medium text-text-subtitle text-secondary-reverse">
                  {item.heading}
                </span>
                {item.subHeading.map((subItem, index) => (
                  <div key={index} className="text-secondary-reverse">
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingOne}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingTwo}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingThree}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingFour}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingFive}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingSix}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingSeven}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingEight}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingNine}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div>
            {industriesData.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <span className="font-medium text-text-subtitle text-secondary-reverse">
                  {item.heading}
                </span>
                {item.subHeading.map((subItem, index) => (
                  <div key={index} className="text-secondary-reverse">
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingOne}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingTwo}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingThree}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingFour}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingFive}
                    </Link>
                    {/* <Link href={subItem.path} className="hover:underline">
                      {subItem.headingSix}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingSeven}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingEight}
                    </Link>
                    <Link href={subItem.path} className="hover:underline">
                      {subItem.headingNine}
                    </Link> */}
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
            <Link
              href={`mailto:${socialLinks.emailLink}?subject=Inquiry%20for%20Services%20and%20Quote&body=Dear%20DevRiser%20Team,%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20am%20reaching%20out%20to%20inquire%20about%20your%20services%20for%20a%20potential%20project.%20I%20have%20a%20project%20in%20mind%20and%20would%20appreciate%20it%20if%20you%20could%20provide%20me%20with%20a%20quote%20based%20on%20the%20details%20I'll%20share.%0A%0ALooking%20forward%20to%20your%20prompt%20response.%0A%0ABest%20regards`}
              target="_blank"
              className="flex items-center gap-2"
            >
              <MailSvg />
              <span className="text-secondary-reverse">
                {lang.footer.conversation.email}
              </span>
            </Link>

            {/* <div className="flex items-center gap-2">
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
            </div> */}
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
      const locales = await getLocales(params.lang);
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
