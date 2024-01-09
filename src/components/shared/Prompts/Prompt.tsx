import React from "react";
import RoundedToastTick from "./RoundedToastTick";

const Prompt = ({ t, text, type }: any) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } pointer-events-auto flex  w-fit items-center justify-center  rounded-lg border                          
      ${type === "error" && " border-[#F44336] bg-[#FFDCDC]"} 
      ${type === "success" && " border-[#4CAF50] bg-[#B6DEB7]"}
      ${type === "warning" && " border-[#FFC107] bg-[#FFE699]"}
      ${type === "info" && " border-primary bg-[#ADC4FF]"} 
      relative
      px-2 shadow-lg`}
    >
      <div className="absolute -left-3 justify-self-start text-white">
        <RoundedToastTick type={type} />
      </div>

      <div className="flex items-center justify-center py-4 pr-2">
        <div className="flex items-center justify-center">
          <div className="flex-shrink-0 pt-0.5"></div>
          <div className=" ml-3 pr-1">
            <p className="text-sm font-bold text-black"> {text} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
