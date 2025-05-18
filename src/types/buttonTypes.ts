import { ReactNode } from "react";

export type ButtonProps = {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  link?: string;
  customColorBgClass?: string;
  cusotmColorTextClass?: string;
};
