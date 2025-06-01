import Slider, { LazyLoadTypes, Settings } from "react-slick";
import { pricings } from "../../constants/constant";
import { PlanPricingType } from "../../types/cardTypes";
import PricingBill from "../cards/PricingBill";
import { ArrowSlideProps } from "../../types/slideTypes";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const PrevArrow = ({
  onClick,
  activeArrowPosition,
  handleActiveArrowPosition,
}: ArrowSlideProps) => {
  const handleClick = () => {
    if (!onClick || !handleActiveArrowPosition) return;

    onClick();

    handleActiveArrowPosition("left");
  };

  return (
    <div
      className={`absolute top-1/2 -left-3 -translate-y-1/2 z-10 cursor-pointer shadow border border-gray-50 rounded-full group items-center duration-300 ease-in-out ${
        activeArrowPosition === "left"
          ? "bg-orange-500 hover:bg-white"
          : "bg-white hover:bg-orange-500"
      }`}
      onClick={handleClick}
    >
      <MdKeyboardArrowLeft
        size={35}
        className={
          activeArrowPosition === "left"
            ? "text-white group-hover:text-orange-600"
            : "text-orange-600 group-hover:text-white"
        }
      />
    </div>
  );
};

const NextArrow = ({
  onClick,
  activeArrowPosition,
  handleActiveArrowPosition,
}: ArrowSlideProps) => {
  const handleClick = () => {
    if (!onClick || !handleActiveArrowPosition) return;

    onClick();

    handleActiveArrowPosition("right");
  };

  return (
    <div
      className={`absolute top-1/2 -right-8 -translate-y-1/2 -translate-x-1/2 ml-10 z-10 cursor-pointer shadow border border-gray-50 rounded-full group items-center duration-300 ease-in-out ${
        activeArrowPosition === "right"
          ? "bg-orange-500 hover:bg-white"
          : "bg-white hover:bg-orange-500"
      }`}
      onClick={handleClick}
    >
      <MdKeyboardArrowRight
        size={35}
        className={
          activeArrowPosition === "right"
            ? "text-white group-hover:text-orange-600"
            : "text-orange-600 group-hover:text-white"
        }
      />
    </div>
  );
};

export default function PricingPlanSlider({
  subscriptionType,
}: {
  subscriptionType: "annual" | "monthly";
}) {
  const [activeArrowPositionState, setActiveArrowPositionState] = useState<
    "left" | "right" | null
  >(null);

  const handleChangeActiveArrowPosition = (
    position: "left" | "right" | null
  ) => {
    setActiveArrowPositionState(position);
  };

  const settings: Settings = {
    dots: false,
    lazyLoad: "ondemand" as LazyLoadTypes,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    touchMove: true,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: (
      <NextArrow
        activeArrowPosition={activeArrowPositionState}
        handleActiveArrowPosition={handleChangeActiveArrowPosition}
      />
    ),
    prevArrow: (
      <PrevArrow
        activeArrowPosition={activeArrowPositionState}
        handleActiveArrowPosition={handleChangeActiveArrowPosition}
      />
    ),
    responsive: [
      {
        breakpoint: 1096,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: false,
          swipeToSlide: true,
          nextArrow: (
            <NextArrow
              activeArrowPosition={activeArrowPositionState}
              handleActiveArrowPosition={handleChangeActiveArrowPosition}
            />
          ),
          prevArrow: (
            <PrevArrow
              activeArrowPosition={activeArrowPositionState}
              handleActiveArrowPosition={handleChangeActiveArrowPosition}
            />
          ),
        },
      },
      {
        breakpoint: 837,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          swipeToSlide: true,
          nextArrow: (
            <NextArrow
              activeArrowPosition={activeArrowPositionState}
              handleActiveArrowPosition={handleChangeActiveArrowPosition}
            />
          ),
          prevArrow: (
            <PrevArrow
              activeArrowPosition={activeArrowPositionState}
              handleActiveArrowPosition={handleChangeActiveArrowPosition}
            />
          ),
        },
      },
      {
        breakpoint: 659,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          swipeToSlide: true,
          nextArrow: (
            <NextArrow
              activeArrowPosition={activeArrowPositionState}
              handleActiveArrowPosition={handleChangeActiveArrowPosition}
            />
          ),
          prevArrow: (
            <PrevArrow
              activeArrowPosition={activeArrowPositionState}
              handleActiveArrowPosition={handleChangeActiveArrowPosition}
            />
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          swipeToSlide: true,
          nextArrow: (
            <NextArrow
              activeArrowPosition={activeArrowPositionState}
              handleActiveArrowPosition={handleChangeActiveArrowPosition}
            />
          ),
          prevArrow: (
            <PrevArrow
              activeArrowPosition={activeArrowPositionState}
              handleActiveArrowPosition={handleChangeActiveArrowPosition}
            />
          ),
        },
      },
    ],
  };

  return (
    <div className="slider-container h-fit">
      <Slider {...settings}>
        {!!pricings?.length &&
          (pricings as PlanPricingType[])
            ?.filter((item) => item?.plan?.toLowerCase() !== "free")
            ?.map((item, index) => (
              <PricingBill
                key={index}
                item={item}
                subscriptionType={subscriptionType}
              />
            ))}
      </Slider>
    </div>
  );
}
