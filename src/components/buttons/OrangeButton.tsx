import { ButtonProps } from "../../types/buttonTypes";

export default function OrangeButton({
  text,
  icon,
  link,
  isButton,
  onClick,
}: ButtonProps) {
  if (isButton) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="border border-orange-500 bg-orange-500 hover:bg-white flex flex-row w-full items-center justify-center py-2 rounded-md gap-2 group duration-200 ease-out cursor-pointer"
      >
        <span className="text-white group-hover:text-orange-600 font-bold">
          {text}
        </span>
        {icon}
      </button>
    );
  } else {
    return (
      <a
        href={link}
        className="border border-orange-500 bg-orange-500 hover:bg-white flex flex-row w-full items-center justify-center py-2 rounded-md gap-2 group duration-200 ease-out cursor-pointer"
      >
        <span className="text-white group-hover:text-orange-600 font-bold">
          {text}
        </span>
        {icon}
      </a>
    );
  }
}
