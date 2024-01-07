import Link from "next/link";
import React from "react";

interface serviceCardProps {
  title: string;
  icon: any;
  iconColor?: any;
  iconBG?: any;
  bgColor?: string;
  isBorder?: boolean;
  path?: any;
  titleTwo?: string;
}

const SmallCard = ({
  title,
  titleTwo,
  icon,
  iconColor,
  bgColor = "bg-secondary",
  isBorder = false,
  iconBG,
  path,
}: serviceCardProps) => {
  const cardContent = (
    <div className="flex flex-col justify-center items-center gap-3">
      <div
        className={` ${
          iconBG ? iconBG : ""
        } rounded-xl w-12 h-12  p-2 flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <h2
          className={`text-xl text-center  ${
            iconColor === "black" ? "text-black" : "text-secondary-reverse"
          }`}
        >
          {title}
        </h2>
        <h2
          className={`text-xl text-center  ${
            iconColor === "black" ? "text-black" : "text-secondary-reverse"
          }`}
        >
          {titleTwo}
        </h2>
      </div>
    </div>
  );

  return (
    <>
      {path ? (
        <Link
          href={`${path}`}
          className={`flex flex-col gap-5 w-full p-10 ${bgColor} ${
            isBorder ? "border border-primary-border" : ""
          }`}
        >
          {cardContent}
        </Link>
      ) : (
        <div
          className={`flex flex-col gap-5 w-full p-10 ${bgColor} ${
            isBorder ? "border border-primary-border" : ""
          }`}
        >
          {cardContent}
        </div>
      )}
    </>
  );
};

export default SmallCard;
