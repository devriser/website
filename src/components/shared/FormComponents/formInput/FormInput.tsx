"use client";

import { FieldError, UseFormRegister } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { ArrowIcon } from "../form-select/Icons";
import { CloseEyeIcon, OpenEyeIcon } from "./EyeIcon";

type SelectOption = {
  label: string;
  value: string | number;
};

type Props = {
  label?: string;
  registerValue?: any;
  registerReq?: boolean;
  error?: FieldError;
  register?: UseFormRegister<any>;
  type?:
    | "text"
    | "search"
    | "email"
    | "number"
    | "file"
    | "checkbox"
    | "password"
    | "date";
  inputType?: "textarea" | "input";
  placeHolder?: string;
  row?: number;
  accept?:
    | ".pdf, .doc, .docx"
    | ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  required?: boolean;
  selectOptions?: SelectOption[];
  labelColumn?: boolean;
};
export default function FormInput({
  registerValue,
  registerReq,
  error,
  register,
  label,
  type,
  placeHolder,
  accept,
  inputType,
  row,
  required,
  selectOptions,
  labelColumn,
}: Props) {
  const [active, setActive] = useState<boolean>(false);
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<
    string | number | undefined
  >(selectOptions?.[0]?.value);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setHasValue(inputValue.trim() !== "");
  };

  if (inputType === "textarea")
    return (
      <div
        className={`flex w-full  ${
          labelColumn ? "flex-col items-start" : "items-center"
        }  gap-2 max-sm:flex-col max-sm:items-start`}
      >
        <div className="flex-1">
          <label className="whitespace-nowrap font-weight-medium text-secondary">
            {label ? label : null}
          </label>
        </div>
        <div className="w-full flex-[3] max-md:flex-[3] max-sm:w-full">
          <textarea
            className="placeholder:text-linkColor flex w-full flex-1 rounded-small  bg-primary p-1 py-[6px] ps-[10px] text-secondary-reverse outline-none transition-colors duration-100 "
            rows={row}
            placeholder={placeHolder}
            style={{ resize: "none" }}
            onFocus={() => setActive(true)}
            {...register?.(registerValue, {
              required: registerReq,
              onBlur(e) {
                e?.target?.value?.length ? setActive(true) : setActive(false);
              },
              onChange(e) {
                e?.target?.value?.length ? setActive(true) : setActive(false);
              },
            })}
          />
          {error && (
            <span className="font-regular text-[12px] text-red-500">
              This field is required
            </span>
          )}
        </div>
      </div>
    );

  return (
    <div
      className={`flex w-full  ${
        labelColumn ? "flex-col items-start" : "items-center"
      }  gap-2 max-sm:flex-col max-sm:items-start`}
    >
      {label ? (
        <div className="flex-1">
          <label className="whitespace-nowrap font-medium text-secondary-reverse ">
            {label}
          </label>
        </div>
      ) : (
        ""
      )}
      <div className="flex w-full flex-[3]">
        <div className="flex w-full flex-col gap-1">
          <div className="flex w-full">
            <div>
              {selectOptions && (
                <div className="flex">
                  <div className="custom-select relative">
                    <div
                      className="selected-option flex cursor-pointer items-center justify-between gap-2 rounded-small rounded-r-none border border-r-0 border-input bg-main-background p-1 px-2 py-[6px] text-primary outline-none"
                      onClick={() => setActive(!active)}
                    >
                      {selectedOption}
                      <div className="fill-svg-color text-svg-color">
                        <ArrowIcon direction={active ? "left" : "right"} />
                      </div>
                    </div>
                    {active && (
                      <div className="select-dropdown absolute z-10 mt-1 w-full rounded-small border border-input bg-primary  ">
                        {selectOptions.map((option) => (
                          <div
                            key={option.value}
                            className="option cursor-pointer"
                            onClick={() => {
                              setSelectedOption(option.value);
                              setActive(false);
                            }}
                          >
                            <p className="p-1 px-2 text-secondary-reverse">
                              {option.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="relative  w-full">
              <input
                min={0}
                className={` placeholder:text-linkColor flex w-full ${
                  selectOptions ? "rounded-l-none" : ""
                }  bg-primary p-1 py-[10px] ps-[10px] text-secondary-reverse outline-none `}
                placeholder={placeHolder}
                accept={accept}
                type={type === "password" && showPassword ? "text" : type}
                {...register?.(registerValue, { required: registerReq })}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              {required && (
                <div className="absolute bottom-0 left-[12px] top-[25%]  h-[50%] w-[2px] rounded bg-red-500"></div>
              )}
              {type === "password" && hasValue && (
                <div
                  className="absolute bottom-0 right-[12px] top-[25%] cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <div onClick={() => setShowPassword(showPassword)}>
                      <OpenEyeIcon />
                    </div>
                  ) : (
                    <div onClick={() => setShowPassword(showPassword)}>
                      <CloseEyeIcon />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {error && !hasValue && (
            <span className="font-regular text-[12px] text-red-500">
              {label} is required
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
