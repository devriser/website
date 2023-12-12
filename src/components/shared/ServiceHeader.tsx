import React from "react";

/* color: #EDEDED;
text-align: center;

font-family: Mona-Sans;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal; */

interface serviceHeaderProps {
  title: string;
  description?: string;
}

const ServiceHeader = ({ title, description }: serviceHeaderProps) => {
  return (
    <div className='flex flex-col gap-4 items-center text-center'>
      <h2 className='text-3xl font-semibold '>{title}</h2>
      {description && <p className='text-[#A1A1A1] max-w-4xl'>{description}</p>}
    </div>
  );
};

export default ServiceHeader;
