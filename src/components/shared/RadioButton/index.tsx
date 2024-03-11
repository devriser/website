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
    <div className="flex items-center gap-4  flex-row-reverse justify-between">
      <input
        type="radio"
        id={id}
        name={name}
        className={`h-5 w-5 cursor-pointer bg-primary ${
          position === "top" && "mt-1 self-start"
        }`}
        checked={checked}
        onChange={onChange}
      />
      {label && (
        <label
          htmlFor={id}
          className={`cursor-pointer ps-2 ${
            checked ? "text-secondary-reverse" : "text-secondary-reverse "
          } `}
        >
          {label}
        </label>
      )}
    </div>
  );
}

// OLD Version -> its appearance is thick in nature.
// export default function RadioButton({ onChange, id, checked, label }: Props) {
//   return (
//     <div className='flex items-center gap-4'>
//       <input
//         type='radio'
//         id={id}
//         name='radio'
//         className={`h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-blue  ${checked ? "border-8 " : ""}`}
//         checked={checked}
//         onChange={onChange}
//       />
//       <label htmlFor={id} className={`cursor-pointer ${checked ? "text-primary" : "text-secondary"} `}>
//         {label}
//       </label>
//     </div>
//   );
// }
