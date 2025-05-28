import { ReactNode } from "react";
import { CommentTwitterCardType } from "./cardTypes";

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
  activeArrowPosition?: "left" | "right" | null;
  handleActiveArrowPosition?: (position: "left" | "right" | null) => void;
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

export type TwitterCommentSlideProps = {
  items: CommentTwitterCardType[];
};
