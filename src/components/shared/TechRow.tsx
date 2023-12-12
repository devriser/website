import React from "react";

interface TechRowProps {
  parent: string;
  child: string[];
}

const TechRow = ({ parent, child }: TechRowProps) => {
  return (
    <div className='flex items-center gap-16 '>
      <h4 className='text-xl font-medium'> {parent} </h4>
      <div className='flex items-center gap-4 flex-wrap'>
        {child.map((item, index) => (
          <p
            key={index}
            className='py-2 px-3 text-sm flex items-center justify-center text-center'
            style={{
              borderRadius: "92px",
              // border: " 1px solid rgba(237, 237, 237, 0.10)",
              border: " 1px solid rgba(0, 0, 0, 0.10)",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TechRow;
