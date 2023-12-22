import React from "react";

const StackRow = ({ stackName }: any) => {
  return (
    <div>
      <span className='py-2 px-3 text-sm flex items-center justify-center text-center border border-primary-border text-secondary-reverse rounded-full'>
        {stackName}
      </span>
    </div>
  );
};

export default StackRow;
