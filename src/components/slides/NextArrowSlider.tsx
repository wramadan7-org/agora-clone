import { MdKeyboardArrowRight } from "react-icons/md";
import { ArrowSlideProps } from "../../types/slideTypes";

export default function NextArrowSlider({ onClick }: ArrowSlideProps) {
  return (
    <div
      className="absolute top-[110%] left-1/2 -translate-x-1/2 ml-10 z-10 cursor-pointer hover:bg-white bg-orange-500 border-2 border-orange-500 rounded-full group items-center duration-300 ease-in-out"
      onClick={onClick}
    >
      <MdKeyboardArrowRight
        size={35}
        className="group-hover:text-orange-600 text-white"
      />
    </div>
  );
}
