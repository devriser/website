import React from "react";
import Button from "./Button";

interface HeaderProps {
  title: string;
  description: string;
  btnText1: string;
  btnText2: string;
  btnHref1: string;
  btnHref2: string;
}

const TitleHeader = ({
  title,
  description,
  btnText1,
  btnText2,
  btnHref1,
  btnHref2,
}: HeaderProps) => {
  return (
    <div className="flex flex-col gap-4 justify-start">
      <h2 className="text-3xl font-semibold text-secondary-reverse">{title}</h2>
      <p className="text-xl text-secondary-reverse">{description}</p>
      <div className="flex gap-6 justify-start mt-10">
        <Button as="NextLink" href={btnHref1} variant="success" style="outlined">{btnText1}</Button>
        <Button as="NextLink" href={btnHref2} variant="success" style="solid">{btnText2}</Button>
      </div>
    </div>
  );
};

export default TitleHeader;
