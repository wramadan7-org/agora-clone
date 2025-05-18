import { conditionColorFeature } from "../../constants/constant";
import { FeatureCardProps, FeatureTitle } from "../../types/cardTypes";
import DynamicIcon from "../icons/DynamicIcon";

export default function FeatureCard({
  feature,
  activeFeature,
  handleFeatureClick,
}: FeatureCardProps) {
  const hoverColor = conditionColorFeature[
    feature.title.toLowerCase() as FeatureTitle
  ] ?? {
    backgroundHover: "hover:bg-gray-100",
    backgroundActive: "bg-gray-100",
    textHover: "group-hover:text-neutral-900",
    textActive: "text-neutral-900",
  };

  return (
    <button
      type="button"
      className={`flex flex-row gap-2 items-center justify-center ${
        feature.title.toLowerCase() === activeFeature.title.toLowerCase()
          ? hoverColor.backgroundActive
          : "bg-gray-100"
      } w-full max-w-52 p-2 rounded-md cursor-pointer group ${
        hoverColor.backgroundHover
      }`}
      onClick={() => handleFeatureClick(feature)}
    >
      <DynamicIcon
        iconName={feature.icon as string}
        size={25}
        className={`${
          feature.title.toLowerCase() === activeFeature.title.toLowerCase()
            ? hoverColor.textActive
            : "text-gray-400"
        } ${hoverColor.textHover}`}
      />

      <span
        className={`font-semibold ${
          feature.title.toLowerCase() === activeFeature.title.toLowerCase()
            ? hoverColor.textActive
            : "text-neutral-900"
        } text-base ${hoverColor.textHover}`}
      >
        {feature.title}
      </span>
    </button>
  );
}
