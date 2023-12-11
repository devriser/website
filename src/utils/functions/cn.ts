import { twMerge } from "tailwind-merge";

export default function cn(...classes : any) {
  return twMerge(classes);
}
