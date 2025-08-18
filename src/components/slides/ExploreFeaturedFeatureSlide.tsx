import Slider, { LazyLoadTypes, Settings } from "react-slick";
import NextArrowSlider from "./NextArrowSlider";
import PrevArrowSlider from "./PrevArrowSlider";
import { featuredFeatureCRM } from "../../constants/constant";
import DynamicIcon from "../icons/DynamicIcon";
import { forwardRef } from "react";

type ExploreFeaturedFeatureSlideProps = {
  items: typeof featuredFeatureCRM.items;
};

const ExploreFeaturedFeatureSlide = forwardRef<
  Slider,
  ExploreFeaturedFeatureSlideProps
>(({ items }, ref) => {
  const settings: Settings = {
    dots: false,
    lazyLoad: "ondemand" as LazyLoadTypes,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    touchMove: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 4,
          dots: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          dots: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          dots: false,
          swipeToSlide: true,
          nextArrow: <NextArrowSlider />,
          prevArrow: <PrevArrowSlider />,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          dots: false,
          swipeToSlide: true,
          nextArrow: <NextArrowSlider />,
          prevArrow: <PrevArrowSlider />,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          dots: false,
          swipeToSlide: true,
          nextArrow: <NextArrowSlider />,
          prevArrow: <PrevArrowSlider />,
        },
      },
    ],
  };

  return (
    <div className="slider-container h-fit">
      <Slider ref={ref} {...settings}>
        {items.length &&
          items.map((item, index) => (
            <a
              href={item.href}
              key={`featured-feature-item-${index}`}
              className="flex flex-col items-center text-center justify-center bg-white hover:bg-orange-50 min-w-56 min-h-52 w-fit h-fit border border-gray-300 rounded-md sm:max-w-xs p-5 shadow-md"
            >
              <DynamicIcon
                iconName={item.icon}
                className="text-orange-500 text-center mx-auto"
                size={30}
              />
              <p className="text-orange-500 font-semibold text-lg mt-3">
                {item.title}
              </p>
              <p className="text-gray-700 text-base line-clamp-3">
                {item.description}
              </p>
            </a>
          ))}
      </Slider>
    </div>
  );
});

ExploreFeaturedFeatureSlide.displayName = "ExploreFeaturedFeatureSlide";
export default ExploreFeaturedFeatureSlide;
