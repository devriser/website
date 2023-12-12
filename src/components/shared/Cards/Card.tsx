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
      className={`flex flex-col gap-3 p-7 ${isBG ? "bg-secondary" : ""} ${
        isBorder ? "border border-primary-border" : ""
      }`}
    >
      <h2 className='text-lg font-semibold text-secondary-reverse'>{title}</h2>
      <p className='text-sub-text'>{description}</p>
    </div>
  );
};

export default Card;
