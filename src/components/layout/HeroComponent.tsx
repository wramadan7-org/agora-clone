import { HiArrowNarrowRight } from "react-icons/hi";
import WhiteButton from "../buttons/WhiteButton";
import OrangeButton from "../buttons/OrangeButton";
import { BsWhatsapp } from "react-icons/bs";

type HeroPropsType = {
  titleCore: string;
  titleOrange?: string;
  description: string;
  disclaimer?: string;
  textButtonOne?: string;
  textButtonTwo?: string;
  linkButtonOne?: string;
  linkButtonTwo?: string;
  imageHero?: string;
};

export default function HeroComponent({
  titleCore,
  titleOrange,
  description,
  disclaimer,
  textButtonOne,
  textButtonTwo,
  linkButtonOne,
  linkButtonTwo,
  imageHero,
}: HeroPropsType) {
  return (
    <section id="hero" className="px-5 flex flex-col md:flex-row">
      <div className="flex flex-col flex-[1_1_0%] gap-5">
        <span className="text-neutral-900 text-wrap text-[40px] leading-10 md:text-4xl lg:text-5xl lg:leading-14 font-extrabold">
          {/* Aplikasi CRM, Chat & Call Center Terlengkap.{" "} */}
          {titleCore}
          <span className="text-orange-600">
            {/* Untuk tingkatkan penjualan dan pelayanan bisnis */}
            {titleOrange}
          </span>
        </span>

        <p className="text-md font-semibold text-neutral-900 text-wrap">
          {/* Percepat sales dan layanan pelanggan dengan aplikasi Omnichannel
                  CRM */}
          {description}
        </p>

        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
          <div className="w-full sm:max-w-36">
            <WhiteButton
              text={textButtonOne ?? "Coba Gratis"}
              icon={
                <HiArrowNarrowRight
                  size={16}
                  className="mt-1 text-orange-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
                />
              }
              link={
                linkButtonOne ??
                "https://app.agorapulse.com/auth/signup?language=en&_gl=1*10n8f7c*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDk5ODUwMjIkbzM5JGcxJHQxNzQ5OTg2MzQ1JGo2MCRsMCRoMA.."
              }
            />
          </div>

          <div className="w-full sm:max-w-72">
            <OrangeButton
              text={textButtonTwo ?? "Hubungi Sales Kami"}
              icon={
                <BsWhatsapp
                  size={16}
                  className="mt-1 text-white group-hover:text-orange-600 group-hover:scale-125 duration-300 ease-in-out"
                />
              }
              link={linkButtonTwo ?? "https://www.agorapulse.com/request-demo/"}
            />
          </div>
        </div>

        {disclaimer && (
          <div className="flex items-center justify-center sm:justify-start">
            <span className="text-xs font-semibold">
              {/* Uji coba 30 hari gratis - Tidak membutuhkan kartu kredit */}
              {disclaimer}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-[1_1_0%]">
        <img
          src={
            imageHero ??
            "https://www.agorapulse.com/assets/hv2-home2/hero-image-en-5.webp"
          }
          className="w-full h-full max-w-[700px] max-h-[413px] object-center object-contain"
          alt="Hero Image"
          decoding="async"
        />
      </div>
    </section>
  );
}
