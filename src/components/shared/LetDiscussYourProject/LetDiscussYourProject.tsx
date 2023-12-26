import React from "react";
import { getLoacales } from "../../../../getLocales";
import Button from "../Button";

export default async function LetDiscussYourProject({ params }: any) {
  const lang = await getLoacales(params.lang);

  return (
    <div className="px-6">
      <div className="bg-section-gradient flex flex-col items-center gap-8 rounded-large py-6">
        <div className="flex flex-col gap-2 max-md:px-2">
          <p className="text-text-heading text-[white] text-center font-semibold">
            {lang.letDiscussYourProject.mainHeading}
          </p>
          <p className="text-text-subtitle text-white text-center w-[55%] mx-auto max-md:w-full max-lg:w-[70%]">
            {lang.letDiscussYourProject.heading}
          </p>
        </div>
        <Button>{lang.letDiscussYourProject.buttonText}</Button>
      </div>
    </div>
  );
}
