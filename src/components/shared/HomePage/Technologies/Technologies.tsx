"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Android,
  AngularSVGTech,
  Flutter,
  Ionic,
  Ios,
  Kotlin,
  ObjectiveC,
  ReactNative,
  ReactSVGTech,
  Swift,
  Titanium,
  TypeScriptSVGTech,
} from "@/assets/svg/TechnologiesSvg/Index";
import { JavaSVG, ReactSVG, TypeScriptSVG } from "@/assets/svg/TechIcons";
import { getLocales } from "../../../../../getLocales";

type TechnologyData = {
  heading: string;
  icons?: Array<{ icon: React.ReactNode; name: string }>;
};

export default function Technologies({ params }: any) {
  const [lang, setLang] = useState<any>(null);
  const [selectedHeading, setSelectedHeading] = useState<string | null>(
    (lang && lang.technologies.headingOne) || null
  );

  useEffect(() => {
    const fetchData = async () => {
      const locales = await getLocales(params.lang);
      setLang(locales);
    };

    fetchData();
  }, [params.lang]);

  useEffect(() => {
    if (lang && lang.technologies && lang.technologies.headingOne) {
      setSelectedHeading(lang.technologies.headingOne);
    }
  }, [lang]);

  if (!lang) {
    return null;
  }

  const getIconsByHeading = (heading: string | null) => {
    const selectedData = technologiesData.find(
      (data) => data.heading === heading
    );
    return selectedData ? selectedData.icons : [];
  };

  const technologiesData: TechnologyData[] = [
    {
      heading: lang.technologies.headingOne,
      icons: [
        {
          icon: <Ios />,
          name: "IOS",
        },
        {
          icon: <Android />,
          name: "Android",
        },
        {
          icon: <ReactNative />,
          name: "React Native",
        },
        {
          icon: <Flutter />,
          name: "Flutter",
        },
        {
          icon: <Ionic />,
          name: "Ionic",
        },
        {
          icon: <Kotlin />,
          name: "Kotlin",
        },
        {
          icon: <ObjectiveC />,
          name: "Objective C",
        },
        {
          icon: <Titanium />,
          name: "Titanium",
        },
        {
          icon: <Swift />,
          name: "Swift",
        },
        {
          icon: <TypeScriptSVGTech />,
          name: "TypeScript",
        },
      ],
    },
    {
      heading: lang.technologies.headingTwo,
      icons: [
        {
          icon: <Ios />,
          name: "IOS",
        },
        {
          icon: <Android />,
          name: "Android",
        },
        {
          icon: <ReactNative />,
          name: "React Native",
        },
        {
          icon: <Flutter />,
          name: "Flutter",
        },
        {
          icon: <Ionic />,
          name: "Ionic",
        },
        {
          icon: <Kotlin />,
          name: "Kotlin",
        },
        {
          icon: <ObjectiveC />,
          name: "Objective C",
        },
        {
          icon: <Titanium />,
          name: "Titanium",
        },
        {
          icon: <Swift />,
          name: "Swift",
        },
      ],
    },
    {
      heading: lang.technologies.headingThree,
      icons: [
        {
          icon: <Ios />,
          name: "IOS",
        },
        {
          icon: <Android />,
          name: "Android",
        },
        {
          icon: <ReactNative />,
          name: "React Native",
        },
        {
          icon: <Flutter />,
          name: "Flutter",
        },
        {
          icon: <Ionic />,
          name: "Ionic",
        },
        {
          icon: <Kotlin />,
          name: "Kotlin",
        },
        {
          icon: <ObjectiveC />,
          name: "Objective C",
        },
        {
          icon: <Titanium />,
          name: "Titanium",
        },
        {
          icon: <Swift />,
          name: "Swift",
        },
      ],
    },
    {
      heading: lang.technologies.headingFour,
      icons: [
        {
          icon: <Ios />,
          name: "IOS",
        },
        {
          icon: <Android />,
          name: "Android",
        },
        {
          icon: <ReactNative />,
          name: "React Native",
        },
        {
          icon: <Flutter />,
          name: "Flutter",
        },
        {
          icon: <Ionic />,
          name: "Ionic",
        },
        {
          icon: <Kotlin />,
          name: "Kotlin",
        },
        {
          icon: <ObjectiveC />,
          name: "Objective C",
        },
        {
          icon: <Titanium />,
          name: "Titanium",
        },
        {
          icon: <Swift />,
          name: "Swift",
        },
      ],
    },
    {
      heading: lang.technologies.headingFive,
      icons: [
        {
          icon: <Ios />,
          name: "IOS",
        },
        {
          icon: <Android />,
          name: "Android",
        },
        {
          icon: <ReactNative />,
          name: "React Native",
        },
        {
          icon: <Flutter />,
          name: "Flutter",
        },
        {
          icon: <Ionic />,
          name: "Ionic",
        },
        {
          icon: <Kotlin />,
          name: "Kotlin",
        },
        {
          icon: <ObjectiveC />,
          name: "Objective C",
        },
        {
          icon: <Titanium />,
          name: "Titanium",
        },
        {
          icon: <Swift />,
          name: "Swift",
        },
      ],
    },
    {
      heading: lang.technologies.headingSix,
      icons: [
        {
          icon: <Ios />,
          name: "IOS",
        },
        {
          icon: <Android />,
          name: "Android",
        },
        {
          icon: <ReactNative />,
          name: "React Native",
        },
        {
          icon: <Flutter />,
          name: "Flutter",
        },
        {
          icon: <Ionic />,
          name: "Ionic",
        },
        {
          icon: <Kotlin />,
          name: "Kotlin",
        },
        {
          icon: <ObjectiveC />,
          name: "Objective C",
        },
        {
          icon: <Titanium />,
          name: "Titanium",
        },
        {
          icon: <Swift />,
          name: "Swift",
        },
      ],
    },
  ];

  return (
    <div className="px-6 flex flex-col gap-8">
      <h2 className="text-secondary-reverse text-text-heading font-semibold text-center">
        {lang.technologies.mainHeading}
      </h2>
      <div className="flex flex-col items-center justify-center gap-12">
        {/* <div className='flex gap-10 flex-wrap max-sm:justify-center'>
          {technologiesData.map((data, index) => (
            <div key={index}>
              <p
                onClick={() => setSelectedHeading(data.heading)}
                className={`text-secondary-reverse text-text-subtitle font-semibold cursor-pointer ${
                  selectedHeading === data.heading ? "text-solid-blue" : ""
                }`}
              >
                {data.heading}
              </p>
            </div>
          ))}
        </div> */}
        <div className="flex overflow-hidden ">
          {selectedHeading && (
            <motion.div
              className="flex gap-10 flex-wrap max-sm:justify-center  overflow-hidden z-10"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                duration: 12,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{ whiteSpace: "nowrap" }}
            >
              <AnimatePresence>
                {getIconsByHeading(selectedHeading)?.map((data, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2 p-2 whitespace-nowrap"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, x: "100%" }}
                  >
                    {data.icon}
                    <p className="text-secondary-reverse">{data.name}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
