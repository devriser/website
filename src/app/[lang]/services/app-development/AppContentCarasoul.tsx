"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getLoacales } from "../../../../../getLocales";
import {
  LeftArrow,
  RightArrow,
  RightTick,
} from "@/assets/svg/AppDevelopmentSvg";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Tick from "@/assets/svg/Tick";

interface AppDevelopment {
  params: { lang: string };
}

interface Locales {
  appDevelopment: {
    sectionThree: {
      mainHeading: string;
      cards: string[];
    };
  };
}

export default function AppContentCarasoul({ params }: AppDevelopment) {
  const [lang, setLang] = useState<Locales | null>(null);
  const swiper = useRef<typeof Swiper>();
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const theSlides = useMemo(() => ["slide one", "slide two"], []);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

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
    <div className="flex flex-col gap-6 max-md:px-3 max-md:gap-10">
      <div className="flex items-center justify-center gap-5  max-md:flex-col ">
        <p className="text-text-heading text-secondary-reverse font-medium text-center">
          {lang.appDevelopment.sectionThree.mainHeading}
        </p>
        <div className="flex gap-4 ">
          <button onClick={handlePrevious} className="swiper-button-prev">
            <LeftArrow />
          </button>
          <button onClick={handleNext} className="swiper-button-next">
            <RightArrow />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        slidesOffsetAfter={300}
        navigation={true}
        {...{
          nextel: ".swiper-button-next",
          prevel: ".swiper-button-prev",
        }}
        modules={[Navigation, FreeMode]}
        freeMode={true}
        className="flex overflow-hidden max-sm:ps-3 mySwiper z-1"
      >
        <div className="flex gap-4 flex-col overflow-hidden  ">
          {lang.appDevelopment.sectionThree.cards &&
          lang.appDevelopment.sectionThree.cards.length > 0 ? (
            lang.appDevelopment.sectionThree.cards.map(
              (item: any, index: any) => (
                <div
                  className="flex flex-col gap-2 bg-secondary p-2 px-4 whitespace-nowrap"
                  key={index}
                >
                  {item && item.mainPoint ? (
                    <SwiperSlide
                      key={index}
                      className="flex bg-secondary   px-6 overflow-hidden py-2 whitespace-nowrap w-full z-1"
                    >
                      <div className=" flex flex-col gap-2">
                        <p className="text-text-subtitle font-medium">
                          {item.mainPoint}
                        </p>
                        <ul className="flex flex-col gap-2">
                          {item.subPoints?.map((subPoint: any, index: any) => (
                            <li key={index} className="flex gap-2">
                              <span className="flex-1">
                                <RightTick />
                              </span>
                              <span className="flex-[10]">{subPoint}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SwiperSlide>
                  ) : (
                    <p>Data structure is invalid for card at index </p>
                  )}
                </div>
              )
            )
          ) : (
            <p>No cards data available</p>
          )}
        </div>
      </Swiper>
    </div>
  );
}
