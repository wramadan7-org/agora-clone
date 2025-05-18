import { ReactNode } from "react";

export type AutoPlaySlideProps = {
  items: string[];
};

export type EffectiveSocialMediaManagementItem = {
  icon: ReactNode | string;
  title: string;
  description: string;
};

export type EffectiveSocialMediaManagementSlideProps = {
  items: EffectiveSocialMediaManagementItem[];
};

export type ArrowSlideProps = {
  onClick?: () => void;
};

export type GreateSlideCardType = {
  image: string;
  name: string;
  topic: string;
  comment: string;
};

export type GreateSlideItemType = {
  title: string;
  description: string;
  subDescription: string;
  card: GreateSlideCardType;
};

export type GreateSlideProps = {
  items: GreateSlideItemType[];
};
