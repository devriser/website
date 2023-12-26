import React from "react";
import { getLoacales } from "../../../../../getLocales";
import {
  LeftArrow,
  RightArrow,
  RightTick,
} from "@/assets/svg/AppDevelopmentSvg";

export default async function AppContentCarasoul({ params }: any) {
  const lang = await getLoacales(params.lang);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-center gap-5">
        <p className="text-text-heading text-secondary-reverse font-medium text-center">
          {lang.appDevelopment.sectionThree.mainHeading}
        </p>
        <div className="flex gap-4">
          <div className="border border-secondary-reverse rounded-full p-1">
            <LeftArrow />
          </div>
          <div className="border border-secondary-reverse rounded-full p-1">
            <RightArrow />
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        {lang.appDevelopment.sectionThree.cards &&
        lang.appDevelopment.sectionThree.cards.length > 0 ? (
          lang.appDevelopment.sectionThree.cards.map((item: any) => (
            <div
              key={item.mainPoint}
              className="flex flex-col gap-2 bg-secondary p-2 px-4"
            >
              {item && item.mainPoint ? (
                <>
                  <p className="text-text-subtitle font-medium">
                    {item.mainPoint}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item.subPoints?.map((subPoint: any) => (
                      <li key={subPoint} className="flex gap-2">
                        <span className="flex-1">
                          <RightTick />
                        </span>
                        <span className="flex-[10]">{subPoint}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>Data structure is invalid for card at index </p>
              )}
            </div>
          ))
        ) : (
          <p>No cards data available</p>
        )}
      </div>
    </div>
  );
}
