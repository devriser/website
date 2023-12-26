import React from "react";

interface TechRowProps {
  parent: string;
  child: string[];
}

const TechRow = ({ parent, child }: TechRowProps) => {
  return (
    <div className="flex items-center gap-16 bg-secondary max-md:flex-col max-md:gap-4">
      <h4 className="text-xl font-medium text-secondary-reverse"> {parent} </h4>
      <div className="flex items-center gap-4 flex-wrap ">
        {child.map((item, index) => (
          <p
            key={index}
            className="py-2 px-3 text-sm flex items-center justify-center text-center border border-primary-border text-secondary-reverse rounded-full"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TechRow;
