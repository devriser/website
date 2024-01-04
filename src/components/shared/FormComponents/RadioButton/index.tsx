import React from "react";

type Props = {
  onChange?: any;
  id?: any;
  checked?: boolean;
  label?: string;
  name: string; // allways give a unique name
  position?: "top";
};

export default function RadioButton({
  onChange,
  id,
  checked,
  label,
  name,
  position,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <input
        type="radio"
        id={id}
        name={name}
        className={`h-5 w-5 cursor-pointer bg-secondary border-none ${
          position === "top" && "mt-1 self-start"
        }`}
        checked={checked}
        onChange={onChange}
      />
      {label && (
        <label
          htmlFor={id}
          className={`cursor-pointer flex-1 ${
            checked ? "text-secondary-reverse" : "text-secondary-reverse"
          } `}
        >
          {label}
        </label>
      )}
    </div>
  );
}
