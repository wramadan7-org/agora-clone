import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as LuIcons from "react-icons/lu";
import * as TbIcons from "react-icons/tb";
import * as RxIcons from "react-icons/rx";
import { IconType } from "react-icons";
import { DynamicIconProps } from "../../types/iconTypes";

type IconLibraries = {
  [prefix: string]: { [key: string]: IconType };
};

const iconLibraries: IconLibraries = {
  Fa: FaIcons,
  Md: MdIcons,
  Bi: BiIcons,
  Ai: AiIcons,
  Ri: RiIcons,
  Hi: HiIcons,
  Io: IoIcons,
  Fi: FiIcons,
  Bs: BsIcons,
  Gi: GiIcons,
  Lu: LuIcons,
  Tb: TbIcons,
  Rx: RxIcons,
};

export default function DynamicIcon({
  iconName,
  size = 25,
  className = "text-xl",
}: DynamicIconProps) {
  if (!iconName || iconName.length < 2) return null;

  const prefix = iconName.slice(0, 2);
  const iconPack = iconLibraries[prefix];
  const IconComponent = iconPack?.[iconName];

  if (!IconComponent) {
    return (
      <span className="text-red-500">Icon "{iconName}" tidak ditemukan</span>
    );
  }

  return <IconComponent size={size} className={className} />;
}
