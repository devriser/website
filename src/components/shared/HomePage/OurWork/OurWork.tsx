import React from "react";
import { getLoacales } from "../../../../../getLocales";
import ourWorkOneImg from "@/assets/images/ourWorkOne.webp";
import ourWorkTwoImg from "@/assets/images/ourWorkTwo.webp";
import ourWorkThreeImg from "@/assets/images/ourWorkThree.webp";
import Image from "next/image";
import Button from "../../Button";

export default async function OurWork({ params }: any) {
  const lang = await getLoacales(params.lang);

  const ourWorkData = [
    {
      heading: lang.ourWork.headingOne,
      subHeading: lang.ourWork.subTextOne,
      img: ourWorkOneImg,
    },
    {
      heading: lang.ourWork.headingTwo,
      subHeading: lang.ourWork.subTextTwo,
      img: ourWorkTwoImg,
    },
    {
      heading: lang.ourWork.headingThree,
      subHeading: lang.ourWork.subTextThree,
      img: ourWorkThreeImg,
    },
  ];

  return (
    <div className="px-6 flex flex-col gap-8">
      <div className="flex items-center justify-between px-5 max-md:px-0">
        <p className="text-secondary-reverse text-text-heading font-semibold text-center">
          {lang.ourWork.mainHeading}
        </p>
        <Button variant="success" style="solid">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-3 ps-5 justify-between gap-4 max-md:grid-cols-1 max-md:ps-0">
        {ourWorkData.map((item) => (
          <div key={item.heading} className="flex flex-col gap-4">
            <Image src={item.img} alt="img" />
            <div className="flex flex-col gap-1">
              <p className="text-text-subtitle font-medium text-secondary-reverse">
                {item.heading}
              </p>
              <p className="text-secondary-reverse">{item.subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
