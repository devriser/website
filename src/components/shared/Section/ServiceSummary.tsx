"use client";
import Image from "next/image";
import React, { useState } from "react";
import serviceBg from "@/assets/images/Rectangle 4193.png";
import Button from "../Button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const ServiceSummary = ({
  description,
  image,
  index,
  progressArr,
  techArr,
  buttonColor,
  switchDescription,
  switchTechArr,
  redirectURL,
}: any) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const router = useRouter();

  const themes = useTheme();

  const bgImage =
    themes.theme === "dark" ? "bg-services-image" : "bg-[#F4F3F6]";

  const handleNavigate = () => {
    router.push(redirectURL);
  };

  return (
    <div
      className={`${bgImage} flex gap-6 xl:gap-0 items-center justify-around border-2 border-dark-border px-8 py-12 rounded-3xl  ${
        (index + 1) % 2 === 0 ? "flex-row-reverse" : "flex-row"
      } bg-cover  `}
    >
      <div className='flex flex-col gap-8'>
        <div className={`flex items-center ${!progressArr && "hidden"}`}>
          {progressArr &&
            progressArr.map((item: any, index: any) => (
              <div key={index} className='flex items-center'>
                <p
                  className={`border-b-2 w-fit  px-4 pb-1 ${
                    selectedTab === index
                      ? "border-secondary-reverse"
                      : "text-light-secondary border-primary-border"
                  } cursor-pointer`}
                  onClick={() => setSelectedTab(index)}
                >
                  {item}
                </p>
              </div>
            ))}
        </div>

        <div className='flex items-center flex-wrap gap-7 '>
          {techArr &&
            selectedTab === 0 &&
            techArr.map((item: any, index: any) => (
              <div key={index} className=''>
                {item}
              </div>
            ))}
          {switchTechArr &&
            selectedTab === 1 &&
            switchTechArr.map((item: any, index: any) => (
              <div key={index} className=''>
                {item}
              </div>
            ))}
        </div>

        {progressArr ? (
          <p className='max-w-xl text-service-text'>
            {selectedTab === 0 && description}
            {selectedTab === 1 && switchDescription}
          </p>
        ) : (
          <p className='max-w-xl text-service-text'>{description}</p>
        )}
        <div>
          {buttonColor && (
            <Button className={`${buttonColor}`} onClick={handleNavigate}>
              Explore More
            </Button>
          )}
        </div>
      </div>
      <div>
        <Image src={image} alt='erp' />
      </div>
    </div>
  );
};

export default ServiceSummary;
