import React from "react";

interface serviceCardProps {
  title: string;
  icon: any;
  iconColor?: any;
  iconBG?:any;
  bgColor?: string;
  isBorder?: boolean;
}

const SmallCard = ({
  title,
  icon,
  iconColor,
  bgColor = "bg-secondary",
  isBorder = false,
  iconBG,
}: serviceCardProps) => {
  return (
    <div
      className={`flex flex-col gap-5 md:w-64 p-10 ${bgColor} ${
        isBorder ? "border border-primary-border" : ""
      } `}
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <div
          className={` ${iconBG ? iconBG : ""} rounded-xl w-12 h-12  p-2 flex items-center justify-center`}
        >
          {icon}
        </div>
        <h2
          className={`text-xl text-center  ${
            iconColor === "black" ? "text-black" : "text-secondary-reverse"
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SmallCard;
