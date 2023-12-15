import React from "react";

import { getLoacales } from "../../../../../getLocales";
import Button from "../../Button";

export default async function LandingPage({ params }: any) {
  const lang = await getLoacales(params.lang);

  return (
    <div className="px-6">
      <div className="pt-6 min-h-[40em] max-h-[50em] bg-landing-image h-full w-full bg-cover bg-center rounded-hero-rounded flex flex-col bg-blend-color-dodge justify-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <p className="text-text-hero text-transparent bg-hero-text bg-clip-text font-bold justify-center flex items-center w-[70%] text-center">
            {lang.homepage.heroTitle}
          </p>
          <p className="text-white text-[18px] w-[42%] text-center">
            {lang.homepage.heroHeading}
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button variant="default">{lang.homepage.heroButtonOne}</Button>
          <Button variant="success">{lang.homepage.heroButtonTwo}</Button>
        </div>
      </div>
    </div>
  );
}
