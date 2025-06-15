import { ButtonProps } from "../../types/buttonTypes";

export default function WhiteButton({
  text,
  icon,
  link,
  customColorBgClass,
  cusotmColorTextClass,
  isButton,
  onClick,
}: ButtonProps) {
  if (isButton) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`border bg-white cursor-pointer ${
          customColorBgClass
            ? customColorBgClass
            : "border-orange-500 hover:bg-orange-500"
        } flex flex-row w-full items-center justify-center py-2 rounded-md gap-2 group duration-200 ease-out`}
      >
        <span
          className={`${
            cusotmColorTextClass ? cusotmColorTextClass : "text-orange-600"
          } group-hover:text-white font-bold`}
        >
          {text}
        </span>
        {icon}
      </button>
    );
  } else {
    return (
      <a
        href={link}
        className={`border bg-white cursor-pointer ${
          customColorBgClass
            ? customColorBgClass
            : "border-orange-500 hover:bg-orange-500"
        } flex flex-row w-full items-center justify-center py-2 rounded-md gap-2 group duration-200 ease-out`}
      >
        <span
          className={`${
            cusotmColorTextClass ? cusotmColorTextClass : "text-orange-600"
          } group-hover:text-white font-bold`}
        >
          {text}
        </span>
        {icon}
      </a>
    );
  }
}
