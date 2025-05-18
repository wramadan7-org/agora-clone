import { HiArrowNarrowRight } from "react-icons/hi";
import { FeatureDescriptionProps } from "../../types/featureTypes";
import WhiteButton from "../buttons/WhiteButton";
import DynamicIcon from "../icons/DynamicIcon";

export default function FeatureDescription({
  icon,
  title,
  description,
  adventages,
  type,
  image,
}: FeatureDescriptionProps) {
  const conditionColor = {
    inbox: {
      button: "border-orange-600 hover:bg-orange-600",
      textHover: "text-orange-600 hover:text-white",
      textActive: "text-orange-600",
    },
    publishing: {
      button: "border-indigo-400 hover:bg-indigo-400",
      textHover: "text-indigo-400 hover:text-white",
      textActive: "text-indigo-400",
    },
    listening: {
      button: "border-emerald-300 hover:bg-emerald-300",
      textHover: "text-emerald-300 hover:text-white",
      textActive: "text-emerald-300",
    },
    reporting: {
      button: "border-sky-600 hover:bg-sky-600",
      textHover: "text-sky-600 hover:text-white",
      textActive: "text-sky-600",
    },
    roi: {
      button: "border-red-400 hover:bg-red-400",
      textHover: "text-red-400 hover:text-white",
      textActive: "text-red-400",
    },
  };

  return (
    <div className="flex flex-row flex-wrap gap-9">
      <div className="flex flex-col gap-9">
        <h2 className="font-bold text-neutral-900 text-2xl mt-5">{title}</h2>

        <div className="flex flex-col gap-9">
          <p className="font-semibold text-neutral-900 text-base">
            {description}
          </p>

          <div className="flex flex-col gap-2">
            {adventages.map((adventage, index) => (
              <div
                key={`${adventage}-${index}`}
                className="flex flex-row flex-nowrap items-center justify-start gap-4"
              >
                <div className="min-w-5">
                  <DynamicIcon
                    iconName={icon}
                    size={16}
                    className={
                      conditionColor[
                        type.toLowerCase() as keyof typeof conditionColor
                      ]["textActive"]
                    }
                  />
                </div>

                <p className="text-neutral-900 text-base font-semibold">
                  {adventage}
                </p>
              </div>
            ))}
          </div>

          <WhiteButton
            text={`Explore ${type}`}
            icon={
              <HiArrowNarrowRight
                size={16}
                className={`mt-1 ${
                  conditionColor[
                    type.toLowerCase() as keyof typeof conditionColor
                  ]["textActive"]
                } group-hover:text-white group-hover:scale-125 duration-300 ease-in-out`}
              />
            }
            link="#"
            customColorBgClass={`${
              conditionColor[type.toLowerCase() as keyof typeof conditionColor][
                "button"
              ]
            }`}
            cusotmColorTextClass={`${
              conditionColor[type.toLowerCase() as keyof typeof conditionColor][
                "textActive"
              ]
            }`}
          />
        </div>

        <div className="flex h-full max-h-[508px]">
          <img src={image} className="w-full h-full" alt={title} />
        </div>
      </div>
    </div>
  );
}
