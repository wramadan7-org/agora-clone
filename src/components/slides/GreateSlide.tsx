import Slider, { LazyLoadTypes, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GreateSlideProps } from "../../types/slideTypes";
import { BiSolidLike } from "react-icons/bi";
import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function GreateSlide({ items }: GreateSlideProps) {
  const settings: Settings = {
    dots: false,
    lazyLoad: "ondemand" as LazyLoadTypes,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    touchMove: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [maxHeight, setMaxHeight] = useState<{
    contentTitle: number;
    contentCard: number;
  }>({
    contentTitle: 0,
    contentCard: 0,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      const titleHeights = titleRefs.current.map((ref) => {
        return ref?.offsetHeight || 0;
      });
      const cardHeights = cardRefs.current.map((ref) => {
        return ref?.offsetHeight || 0;
      });
      setMaxHeight((prev) => ({
        ...prev,
        contentTitle: Math.max(...titleHeights),
        contentCard: Math.max(...cardHeights),
      }));
    }, 100);

    return () => clearTimeout(timeout);
  }, [items]);

  console.log("MAX HEIGHT: ", maxHeight);

  return (
    <div className="slider-container overflow-hidden h-fit">
      <Slider {...settings}>
        {!!items?.length &&
          items.map((item, index) => (
            <div
              key={`greate-item-${index}`}
              className="flex flex-col space-y-5 items-center justify-center sm:max-w-xs"
            >
              <div
                className={`flex flex-col gap-5`}
                ref={(element) => {
                  titleRefs.current[index] = element;
                }}
                style={{ minHeight: maxHeight.contentTitle }}
              >
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 flex-nowrap items-center justify-center">
                  <div className="bg-orange-500 px-0.5 py-1 items-center flex justify-center rounded-sm relative w-6 min-w-6">
                    <BiSolidLike size={12} color="white" />

                    <div className="absolute top-full left-1/2 transform-x-1/2 bg-orange-500 w-1 h-1 rounded-b-full"></div>
                  </div>

                  <span className="text-neutral-900 text-lg text-center font-bold mt-3">
                    {item.title}
                  </span>
                </div>

                <span className="text-neutral-900 text-base font-semibold text-center">
                  {item.description}{" "}
                  <span className="font-bold">{item.subDescription}</span>
                </span>
              </div>

              <div
                className="flex flex-col w-full items-center justify-center gap-3 border border-gray-300 shadow-md rounded-md p-5"
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                style={{ minHeight: maxHeight.contentCard }}
              >
                <div className="flex flex-row flex-nowrap gap-2 items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-50 bg-cover object-center">
                    <img
                      src={item.card.image}
                      alt={`Avatar ${index}`}
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-neutral-900 font-bold text-base">
                      {item.card.name}
                    </span>

                    <span className="text-xs text-neutral-900 font-semibold">
                      {item.card.topic}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-600 text-base text-center">
                  “{item.card.comment}”
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
