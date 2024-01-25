import React from "react";
import Button from "../Button";
import { getLocales } from "../../../../getLocales";

export default async function LetDiscussYourProject({ params }: any) {
  const lang = await getLocales(params.lang);

  return (
    <div>
      <div className="bg-section-gradient flex flex-col items-center gap-8 rounded-large py-6">
        <div className="flex flex-col gap-2 max-md:px-2">
          <h2 className="text-text-heading text-[white] text-center font-semibold">
            {lang.letDiscussYourProject.mainHeading}
          </h2>
          <p className="text-text-subtitle text-white text-center w-[55%] mx-auto max-md:w-full max-lg:w-[70%]">
            {lang.letDiscussYourProject.heading}
          </p>
        </div>
        <Button as="NextLink" href={`/${params.lang}/contact-us`}>
          {lang.letDiscussYourProject.buttonText}
        </Button>
      </div>
    </div>
  );
}
