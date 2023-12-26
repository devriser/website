"use client";
import Link from "next/link";
import { VariantClasses, SizeClasses, Button } from "./types";
import cn from "@/utils/functions/cn";

const Button = ({
  variant = "default",
  size = "md",
  style = "solid",
  loading,
  ...props
}: Button) => {
  props.as = props.as ?? "Button";

  let baseClasses = `text-white rounded-medium h-fit transition-colors whitespace-nowrap ${
    props.buttonSize === "full" ? "w-full" : "w-fit"
  }`;

  // TODO: add hover focus and active classes later
  let variantClasses: VariantClasses = {
    default: {
      solid: "bg-white text-black",
      outlined: "bg-main-background text-primary border primary-border",
      transparent: "bg-transparent text-primary border primary-border",
    },
    primary: {
      solid: "bg-gradient-primary",
      outlined: "text-solid-blue  border border-blue-border",
      transparent: "bg-transparent text-blue border border-blue-border",
    },
    success: {
      solid: "bg-blue-gradient",
      outlined: "bg-main-background text-success border blue-border",
      transparent: "bg-transparent text-success border blue-border",
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
};

export default Button;
