import { MdKeyboardArrowLeft } from "react-icons/md";
import { ArrowSlideProps } from "../../types/slideTypes";

export default function PrevArrowSlider({ onClick }: ArrowSlideProps) {
  return (
    <div
      className="absolute top-[110%] left-1/2 -translate-x-[200%] z-10 cursor-pointer bg-white hover:bg-orange-500 border-2 border-orange-500 rounded-full group items-center duration-300 ease-in-out"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft
        size={35}
        className="text-orange-600 group-hover:text-white"
      />
    </div>
  );
}
