import Slider, { LazyLoadTypes, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EffectiveSocialMediaManagementSlideProps } from "../../types/slideTypes";
import DynamicIcon from "../icons/DynamicIcon";
import NextArrowSlider from "./NextArrowSlider";
import PrevArrowSlider from "./PrevArrowSlider";

export default function EffectiveSocialMediaManagementSlide({
  items,
}: EffectiveSocialMediaManagementSlideProps) {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand" as LazyLoadTypes,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    nextArrow: <NextArrowSlider />,
    prevArrow: <PrevArrowSlider />,
  };

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {!!items?.length &&
          items.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="p-5 space-y-5 bg-white rounded-lg shadow-md"
            >
              <div className="p-2 items-center max-h-10 max-w-10 bg-orange-100 rounded-md">
                <DynamicIcon
                  iconName={item.icon as string}
                  className="text-orange-600"
                  size={24}
                />
              </div>

              <h1 className="font-bold text-neutral-900 text-xl">
                {item.title}
              </h1>

              <p className="text-base text-neutral-500 font-semibold">
                {item.description}
              </p>
            </div>
          ))}
      </Slider>
    </div>
  );
}
