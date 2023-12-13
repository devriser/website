"use client";
import Link from "next/link";
import { VariantClasses, SizeClasses, Button } from "./types";
import { useRef } from "react";
import cn from "@/utils/functions/cn";

const Button = ({
  variant = "default",
  size = "md",
  style = "solid",
  loading,
  ...props
}: Button) => {
  props.as = props.as ?? "Button";
  const buttonRef = useRef<HTMLButtonElement>(null);
  const grandParentDiv = useRef<HTMLDivElement>(null);
  const parentDiv = useRef<HTMLDivElement>(null);

  // If the 'as' property in 'props' is not given (undefined or null), make it "Button" by default.
  // This way, we always have "Button" as the default value for 'as' if nothing else is provided.

  let baseClasses = `text-white rounded-medium h-fit transition-colors whitespace-nowrap ${
    props.buttonSize === "full" ? "w-full" : "w-fit"
  }`;
  const LoadVar = `max-lg:px-[16px] max-md:px-[10px] max-sm:px-[20px] max-sm:py-[10px] max-md:text-[16px]  after:border-themeColor relative flex cursor-not-allowed items-center justify-center !gap-[6px] !rounded border-transparent bg-gradient-to-r from-[#4576F6] to-[#0C49E7] px-6  py-3 text-lg !font-medium !capitalize text-[#fff] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-[50%] before:bg-gradient-to-r  before:from-[#4576F6] before:to-[#0C49E7] before:content-[''] after:absolute after:left-[38%] after:z-20 after:h-[25px] after:w-[25px] after:animate-spin after:rounded-[50%] after:border-[3px] after:border-b-[3px] after:border-t-[3px] after:border-solid after:border-b-transparent after:border-t-transparent after:content-[''] hover:bg-[#380Eff]`;

  // TODO: add hover focus and active classes later
  let variantClasses: VariantClasses = {
    default: {
      solid: "bg-white  text-black",
      outlined: "bg-main-background text-primary border border-primary",
      transparent: "bg-transparent text-primary border border-primary",
    },
    primary: {
      solid: "bg-gradient-primary",
      outlined: "bg-main-background text-blue border border-blue",
      transparent: "bg-transparent text-blue border border-blue",
    },
    success: {
      solid: "bg-blue-gradient",
      outlined: "bg-main-background text-success border border-success",
      transparent: "bg-transparent text-success border border-success",
    },
    danger: {
      solid: "bg-gradient-danger",
      outlined: "bg-main-background text-danger border border-danger",
      transparent: "bg-transparent text-danger border border-danger",
    },
  };

  // TODO: add text size and padding if required (later...)
  let sizeClasses: SizeClasses = {
    sm: cn("", props.children ? "py-1.5 px-4" : "p-2"),
    md: cn("", props.children ? "py-2 px-5" : "p-2.5"),
    lg: cn("", props.children ? "py-2.5 px-6" : "p-2.5"),
  };

  if (props.as === "NextLink") {
    return (
      <Link
        href={props.href}
        className={cn(
          baseClasses,
          variantClasses[variant][style],
          sizeClasses[size],
          "flex items-center justify-center gap-1.5",
          props.className
        )}
      >
        {props.leadingIcon}
        {props.children}
        {props.trailingIcon}
      </Link>
    );
  }
  if (props.as === "Button") {
    return (
      <button
        onClick={props.onClick}
        type={props.type ?? "button"}
        disabled={props.disabled || loading}
        className={cn(
          baseClasses,
          variantClasses[variant][style],
          sizeClasses[size],
          props.disabled || (loading && "cursor-not-allowed opacity-60"),

          "flex items-center justify-center gap-1.5",
          props.className
        )}
      >
        {props.leadingIcon}

        {loading && (
          <>
            <span className="mr-1">{props.children}</span>
            <span className="flex items-center justify-center h-5 w-5 will-change-transform rounded-[50%] border-2 border-r-transparent border-b-transparent border-l-blue-900 border-t-blue-900 animate-spin"></span>
          </>
        )}

        {!loading && props.children}

        {props.trailingIcon}
      </button>
    );
  }

  if (props.as === "SingleDropdownMenu") {
    return (
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={props.onClick}
          className={cn(
            baseClasses,
            variantClasses[variant][style],
            sizeClasses[size],
            "flex items-center justify-center gap-1.5 ",
            props.className
          )}
        >
          {props.leadingIcon}
          {props.children}
          {props.trailingIcon}
        </button>
        {/* <DropdownMenu options={props.options} isOpen={props.isOpen} setIsOpen={props.setIsOpen} parentDivRef={buttonRef} opener='Button' /> */}
      </div>
    );
  }

  //   if (props.as === "DualButton") {
  //     return (
  //       <div className='relative'>
  //         <div className={cn(baseClasses, variantClasses[variant][style], "flex items-center", props.className)} ref={grandParentDiv}>
  //           <button onClick={props.onClick} className={cn(sizeClasses[size], "flex items-center gap-1 border-r-2 pr-3")}>
  //             {props.leadingIcon}
  //             {props.children}
  //           </button>

  //           <div ref={parentDiv} className='cursor-pointer p-1' onClick={() => props.setIsOpen((prev) => !prev)}>
  //             {props.trailingIcon}
  //           </div>
  //         </div>
  //         <DropdownMenu
  //           options={props.options}
  //           isOpen={props.isOpen}
  //           setIsOpen={props.setIsOpen}
  //           parentDivRef={parentDiv}
  //           opener='Button'
  //           grandParentDivRef={grandParentDiv}
  //         />
  //       </div>
  //     );
  //   }
};

export default Button;
