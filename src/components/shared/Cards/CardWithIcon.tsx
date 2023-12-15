import React from "react";

interface serviceCardProps {
  title: string;
  description: string;
  icon: any;
  iconBG?: any;
  bgColor?: string;
  isBorder?: boolean;
}

const CardWithIcon = ({
  title,
  description,
  icon,
  iconBG = "bg-solid-green",
  bgColor = "bg-secondary",
  isBorder = false,
}: serviceCardProps) => {
  return (
    <div
      className={`flex flex-col gap-5 p-7 ${bgColor} ${
        isBorder ? "border border-primary-border" : ""
      } `}
    >
      <div className='flex items-center gap-3'>
        <div
          className={`${iconBG} rounded-xl w-12 h-12  p-2 flex items-center justify-center`}
        >
          {icon}
        </div>
        <h2 className='text-xl font-semibold text-secondary-reverse'>
          {title}
        </h2>
      </div>
      <p className='text-sub-text'>{description}</p>
    </div>
  );
};

export default CardWithIcon;
