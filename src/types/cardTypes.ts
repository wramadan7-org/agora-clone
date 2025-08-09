export type FeatureCardProps = {
  feature: FeatureItem;
  activeFeature: FeatureItem;
  handleFeatureClick: (feature: FeatureItem) => void;
};

export type FeatureTitle =
  | "customer"
  | "sales"
  | "omnichannel"
  | "reporting"
  | "mobile";

export type FeatureItem = {
  title: string;
  icon: string;
  color: string;
};

export type CommentTwitterCardType = {
  profile: string;
  name: string;
  username: string;
  commentAt: number;
  linkProfile: string;
  comment: string;
  likes: number;
};

export type BillingCycle = "monthly" | "annually";

export type Currency = "USD"; // bisa diperluas jika ada mata uang lain

export type PricingOption = {
  amount: number;
  currency: Currency;
  per: string;
  billing_cycle: BillingCycle;
};

export type Pricing = {
  monthly: PricingOption;
  annual: PricingOption;
};

export type AdditionalProfileCostOption = {
  amount: number;
  currency: Currency;
  per: string;
  note: string;
};

export type AdditionalProfileCost = {
  monthly: AdditionalProfileCostOption;
  annual: AdditionalProfileCostOption;
};

export type TrialInfo = {
  duration_days: number;
  note: string;
};

export type CTA = {
  label: string;
  trial: TrialInfo | null;
};

export type FeaturePricing = {
  label: string;
  info?: string;
};

export type IncludeSocialProfile = {
  monthly: number;
  annual: number;
};

export type PlanPricingType = {
  plan: string;
  pricing: Pricing | null;
  included_social_profiles: IncludeSocialProfile | null;
  include_users?: number;
  additional_profile_cost: AdditionalProfileCost | null;
  cta: CTA | null;
  features: FeaturePricing[];
  note?: string;
};
