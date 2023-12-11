import React from "react";

interface CardProps {
  title: string;
  description: string;
  isBG?: boolean;
  isBorder?: boolean;
}

const Card = ({ title, description, isBG, isBorder }: CardProps) => {
  return (
    <div
      className={`flex flex-col gap-3 p-7 ${isBG ? "bg-[#171717]" : ""} ${
        isBorder ? "border border-[#EDEDED1A]" : ""
      }`}
    >
      <h2 className='text-lg font-semibold'>{title}</h2>
      <p className='text-[#A1A1A1]'>{description}</p>
    </div>
  );
};

export default Card;
