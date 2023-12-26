"use client";
import { MinusIcon, PlusIcon } from "@/assets/svg/AllIconComponent";
import React, { useState } from "react";

interface accordionArr {
  headerText: string;
  description: string;
}

interface AccordionProps {
  content: accordionArr[];
  defaultOpenIndex?: number;
}

const Accordion = ({ content, defaultOpenIndex = 0 }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  console.log(openIndex);

  return (
    <div className="flex flex-col gap-6">
      {content.map((item, index) => (
        <div key={index} className="bg-secondary">
          <div
            onClick={() => handleToggle(index)}
            className="flex cursor-pointer list-none items-center justify-between text-secondary-reverse px-6 py-4"
          >
            <p className="text-xl">{item.headerText}</p>
            {openIndex === index ? <MinusIcon /> : <PlusIcon />}
          </div>

          {index === openIndex && (
            <div className="px-6 py-2 text-sub-text pb-4">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
