import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const TitleHeader = ({ title, description }: HeaderProps) => {
  return (
    <div className='flex flex-col gap-4 justify-start'>
      <h2 className='text-3xl font-semibold text-secondary-reverse'>{title}</h2>
      <p className='text-xl text-secondary-reverse'>{description}</p>
    </div>
  );
};

export default TitleHeader;
