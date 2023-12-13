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
  dropdownButtons?: Button;
  href?: any;
  loading?:boolean;
} & (ButtonProps | NextLinkProps | SingleDropdownMenu | DualButton);

type ButtonProps = {
  as?: "Button";
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
};

interface NextLinkProps extends LinkProps {
  as?: "NextLink";
}

interface Option {
  iconSVG?: any;
  name: string;
  value: string;
  onClick?: () => void;
  itemType?: string;
}

type SingleDropdownMenu = {
  as?: "SingleDropdownMenu";
  options: Option[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
  opener:"Button" | "ThreeDots"; // this will be only Button
};

type DualButton = {
  as?: "DualButton";
  options: Option[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
  opener:"Button";
};
export type VariantClasses = {
  [key in NonNullable<Button["variant"]>]: { solid: string; outlined?: string; transparent?: string };
};
export type SizeClasses = {
  [key in NonNullable<Button["size"]>]: string;
};
