import Slider, { LazyLoadTypes, Settings } from "react-slick";
import PricingCommentX from "../cards/PricingCommentX";
import { twitterCommentsPricing } from "../../constants/constant";
import { CommentTwitterCardType } from "../../types/cardTypes";
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
      className={`absolute -top-8 right-8 -translate-y-1/2 z-10 cursor-pointer shadow border border-gray-50 rounded-full group items-center duration-300 ease-in-out ${
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
      className={`absolute -top-8 -right-8 -translate-y-1/2 -translate-x-1/2 ml-10 z-10 cursor-pointer shadow border border-gray-50 rounded-full group items-center duration-300 ease-in-out ${
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

export default function TwitterCommentSlider() {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    touchMove: true,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: true,
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
        breakpoint: 943,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          swipeToSlide: true,
          dots: false,
          centerMode: true,
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
        breakpoint: 627,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          dots: false,
          centerMode: false,
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
        {!!twitterCommentsPricing?.length &&
          (twitterCommentsPricing as CommentTwitterCardType[])?.map(
            (item, index) => (
              <PricingCommentX key={`comment-${index}`} item={item} />
            )
          )}
      </Slider>
    </div>
  );
}
