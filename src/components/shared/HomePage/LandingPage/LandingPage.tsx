import React from "react";

import Button from "../../Button";
import { getLocales } from "../../../../../getLocales";

export default async function LandingPage({ params }: any) {
  const lang = await getLocales(params.lang);

  return (
    <div>
      <div className="pt-6 min-h-[40em] max-h-[50em] bg-landing-image h-full w-full bg-cover bg-center rounded-hero-rounded flex flex-col bg-blend-color-dodge justify-center gap-10 max-sm:justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-text-hero text-transparent bg-hero-text bg-clip-text font-bold justify-center flex items-center w-[70%] text-center max-md:w-full max-lg:w-[90%]">
            {lang.homepage.heroTitle}
          </h1>
          <h3 className="text-white text-[18px] w-[42%] text-center max-md:w-[70%] max-sm:w-[97%]">
            {lang.homepage.heroHeading}
          </h3>
        </div>
        <div className="flex gap-3 justify-center">
          <Button variant="default">{lang.homepage.heroButtonOne}</Button>
          <Button
            variant="success"
            as="NextLink"
            href={`/${params.lang}/contact-us`}
          >
            {lang.homepage.heroButtonTwo}
          </Button>
        </div>
      </div>
    </div>
  );
}
