import React from "react";

const Heading = ({ text }: any) => {
  return (
    <h2 className='text-secondary-reverse text-text-title text-center font-semibold'>
      {text}
    </h2>
  );
};

export default Heading;
