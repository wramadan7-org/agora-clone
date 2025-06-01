import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AutoPlaySlideProps } from "../../types/slideTypes";

export default function AutoPlaySlide({ items }: AutoPlaySlideProps) {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    touchMove: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <div className="slider-container overflow-hidden h-20">
      <Slider {...settings}>
        {!!items?.length &&
          items.map((item, index) => (
            <div key={`item-slide-${item}`} className="h-full w-full scale-75">
              <img
                src={item}
                className="w-full h-20 bg-white object-contain"
                alt={`Item Slide ${index}`}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
