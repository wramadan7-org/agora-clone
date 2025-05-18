export type FeatureCardProps = {
  feature: FeatureItem;
  activeFeature: FeatureItem;
  handleFeatureClick: (feature: FeatureItem) => void;
};

export type FeatureTitle =
  | "inbox"
  | "publishing"
  | "listening"
  | "reporting"
  | "roi";

export type FeatureItem = {
  title: string;
  icon: string;
  color: string;
};
