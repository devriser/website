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
  const [openIndexes, setOpenIndexes] = useState<number[]>([defaultOpenIndex]);

  const handleToggle = (index: number) => {
    if (openIndexes.includes(index)) {
      // If the clicked item is already open, close it
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // If the clicked item is closed, open it
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className='flex flex-col gap-6'>
      {content.map((item, index) => (
        <div key={index}>
          <details open={index === defaultOpenIndex} className='bg-secondary'>
            <summary
              className='flex cursor-pointer list-none items-center justify-between text-secondary-reverse px-6 py-4 '
              onClick={() => handleToggle(index)}
            >
              <p className='text-xl'>{item.headerText}</p>

              {openIndexes.includes(index) ? <MinusIcon /> : <PlusIcon />}
            </summary>

            <div className='px-6 py-2 text-sub-text pb-4'>
              {item.description}
            </div>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
