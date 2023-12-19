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
    <div className='flex flex-col gap-4 items-center text-center px-6'>
      <h2 className='text-text-heading font-semibold text-secondary-reverse'>
        {title}
      </h2>
      {description && <p className='max-w-6xl text-sub-text'>{description}</p>}
    </div>
  );
};

export default ServiceHeader;
