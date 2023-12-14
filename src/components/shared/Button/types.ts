import { LinkProps } from "next/link";

export type Button = {
  style?: "solid" | "outlined" | "transparent";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "success" | "danger" | "default";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: any;
  buttonSize?: "full" | "auto";
  href?: any;
  loading?: boolean;
} & (ButtonProps | NextLinkProps);

type ButtonProps = {
  as?: "Button";
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
};

interface NextLinkProps extends LinkProps {
  as?: "NextLink";
}

export type VariantClasses = {
  [key in NonNullable<Button["variant"]>]: {
    solid: string;
    outlined?: string;
    transparent?: string;
  };
};
export type SizeClasses = {
  [key in NonNullable<Button["size"]>]: string;
};
