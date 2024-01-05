import React from "react";
import Button from "./Button";

interface Ibutton {
  href: string;
  variant: "primary" | "success" | "danger" | "default" | undefined;
  style: "solid" | "outlined" | "transparent" | undefined;
  text: string;
}
interface HeaderProps {
  title: string;
  description?: string;
  buttonArr?: Ibutton[];
}

const TitleHeader = ({ title, description, buttonArr }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-4 justify-start ">
      <h2 className="text-3xl font-semibold text-secondary-reverse dark:text-dark-secondary-reverse leading-relaxed max-md:text-center">
        {title}
      </h2>
      <p className="text-xl text-secondary-reverse dark:text-dark-secondary-reverse max-md:text-center">
        {description}
      </p>
      <div className="flex gap-4 justify-start mt-10 max-md:justify-center">
        {buttonArr &&
          buttonArr.map((item, index) => (
            <Button
              key={index}
              as="NextLink"
              href={item.href}
              variant={item.variant}
              style={item.style}
            >
              {item.text}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default TitleHeader;
