import { ReactNode } from "react";

export type ButtonProps = {
  isButton?: boolean;
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  link?: string;
  customColorBgClass?: string;
  cusotmColorTextClass?: string;
};
