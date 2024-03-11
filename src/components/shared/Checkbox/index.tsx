"use client";
import cn from "@/utils/functions/cn";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

type ChechBoxProps = {
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  label?: string;
  defaultChecked?: boolean;
  color?: string;
  onChange?: any;
  reverse?: boolean;
  checked?: boolean;

  disabled?: boolean;
  id?: string;
  name?: string;
};

const DevRiserCheckbox = ({
  onClick,
  label,
  checked = false,
  color = "blue",
  onChange,
  reverse = false,
  ...props
}: ChechBoxProps) => {
  const handleChange = () => {
    onChange && onChange(!checked);
  };

  return (
    <label
      className={cn(
        `items-center justify-between flex cursor-pointer w-full ${
          reverse && "flex-row-reverse"
        }`
      )}
    >
      <div>
        {label && (
          <span className="ml-2 text-sm  text-secondary-reverse">{label}</span>
        )}
      </div>
      <div>
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={() => handleChange()}
          onClick={(e) => {
            onClick && onClick(e);
          }}
          {...props}
        />
        <span
          className={`relative ml-2 inline-block h-5 w-5 rounded-md border border-solid border-blue-border ${
            checked ? `bg-solid-blue` : "bg-dashboard-light-bg"
          }`}
        >
          {checked && (
            <FaCheck className="absolute inset-0 top-3 m-auto -translate-y-1/2 transform text-xs text-main-background" />
          )}
        </span>
      </div>
    </label>
  );
};

export default DevRiserCheckbox;
