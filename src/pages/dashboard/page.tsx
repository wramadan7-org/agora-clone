import { HiArrowNarrowRight } from "react-icons/hi";
import WhiteButton from "../../components/buttons/WhiteButton";
import OrangeButton from "../../components/buttons/OrangeButton";
import { BiLogoWhatsapp } from "react-icons/bi";
import { IoMdPlay } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import AutoPlaySlide from "../../components/slides/AutoPlaySlide";
import { Helmet } from "react-helmet-async";
import {
  accordionDashboard,
  descriptionFeature,
  favoriteToolsAndPlatforms,
  featureOptions,
  greateItems,
  socialMediaManagers,
} from "../../constants/constant";
import FeatureCard from "../../components/cards/FeatureCard";
import { useState } from "react";
import FeatureDescription from "../../components/features/FeatureDescription";
import { FeatureTitle } from "../../types/cardTypes";
import GreateSlide from "../../components/slides/GreateSlide";
import AccordionComponent from "../../components/accordions/frequently-question/AccordionComponent";
import HeroComponent from "../../components/layout/HeroComponent";

export default function Page() {
  const [activeFeatureState, setActiveFeatureState] = useState<{
    icon: string;
    title: string;
    color: string;
  }>(featureOptions[0]);
  const [isShowMoreQuestionState, setIsShowMoreQuestionState] =
    useState<boolean>(false);

  const handleShowMoreQuestion = () => {
    setIsShowMoreQuestionState(!isShowMoreQuestionState);
  };

  const handleFeatureClick = (feature: {
    icon: string;
    title: string;
    color: string;
  }) => {
    setActiveFeatureState(feature);
  };

  return (
    <>
      <Helmet>
        <title>Social Media Management Software | Agorapulse</title>
        <meta name="description" content="Social Media Management Software" />
        <meta
          name="og:title"
          content="Social Media Management Software | Agorapulse"
        />
        <meta
          property="og:description"
          content="Social Management Software. Drive Real Impact on Social Media."
        />
      </Helmet>

      <main className="flex flex-col gap-10 pb-10 pt-24 max-w-[1400px] mx-auto">
        <HeroComponent
          titleCore="Aplikasi CRM, Chat & Call Center Terlengkap. "
          titleOrange="Untuk tingkatkan penjualan dan pelayanan bisnis"
          description="Percepat sales dan layanan pelanggan dengan aplikasi Omnichannel CRM"
          disclaimer="Uji coba 30 hari gratis - Tidak membutuhkan kartu kredit"
        />

        <section
          id="social-media-managers"
          className="flex flex-col items-center p-5 gap-10"
        >
          <div className="flex flex-col sm:flex-row md:flex-col justify-center sm:justify-between md:justify-start w-full items-center md:items-start">
            <div className="flex flex-row flex-nowrap gap-2 items-center">
              <BiLogoWhatsapp size={40} className="text-neutral-900" />

              <TfiLayoutLineSolid
                size={15}
                className="text-neutral-900 rotate-90"
              />

              <p className="text-neutral-900 font-bold text-md">
                Percepat sales dan layanan pelanggan dengan aplikasi Omnichannel
                CRM
              </p>
            </div>

            <div className="grid grid-cols-12 gap-2 max-w-xs sm:max-w-full">
              <div className="col-span-6">
                <span className="text-[10px] font-semibold text-neutral-500">
                  Dashboard terpadu untuk kolaborasi tim yang efisien
                </span>
              </div>

              <div className="col-span-6">
                <span className="text-[10px] font-semibold text-neutral-500">
                  Optimalkan layanan pelanggan dengan chatbot otomatis
                </span>
              </div>

              <div className="col-span-6">
                <span className="text-[10px] font-semibold text-neutral-500">
                  Kirim pesan massal yang dipersonalisasi
                </span>
              </div>

              <div className="col-span-6">
                <span className="text-[10px] font-semibold text-neutral-500">
                  Laporan 360 dorong keputusan bisnis efektif
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <span className="text-center font-bold text-lg lg:text-xl text-neutral-900 px-5">
              Kami telah dipercaya oleh 1000+ industri & instansi
            </span>

            <AutoPlaySlide items={socialMediaManagers} />
          </div>
        </section>

        <section id="features" className="flex flex-col gap-10 p-5">
          <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-4xl text-neutral-900 text-center leading-9">
            Meningkatkan Produktivitas Penjualan dan Membuat Pelanggan Jadi
            Loyal{" "}
          </h1>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            {featureOptions.map((feature, index) => (
              <FeatureCard
                key={`${feature.title}-${index}`}
                feature={feature}
                activeFeature={activeFeatureState}
                handleFeatureClick={handleFeatureClick}
              />
            ))}
          </div>

          <FeatureDescription
            {...descriptionFeature[
              activeFeatureState.title.toLowerCase() as FeatureTitle
            ]}
          />

          <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
            <div className="w-full sm:max-w-48">
              <WhiteButton
                text="Try for free"
                icon={
                  <HiArrowNarrowRight
                    size={16}
                    className="mt-1 text-orange-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
                  />
                }
                link="https://app.agorapulse.com/auth/signup?language=en&_gl=1*10n8f7c*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDk5ODUwMjIkbzM5JGcxJHQxNzQ5OTg2MzQ1JGo2MCRsMCRoMA.."
              />
            </div>

            <div className="w-full sm:max-w-52">
              <OrangeButton
                text="Book a demo"
                icon={
                  <HiArrowNarrowRight
                    size={16}
                    className="mt-1 text-white group-hover:text-orange-600 group-hover:scale-125 duration-300 ease-in-out"
                  />
                }
                link="https://www.agorapulse.com/request-demo/"
              />
            </div>
          </div>
        </section>

        <section id="integration" className="bg-red-50 w-full">
          <div className="flex flex-col flex-nowrap sm:flex-row gap-10 px-5 py-10  items-center sm:justify-between">
            <div className="flex flex-col sm:max-w-sm text-neutral-900">
              <h2 className="font-bold text-base mb-2">Integrations</h2>

              <h1 className="font-extrabold text-3xl lg:text-4xl mb-5">
                Works perfectly with your favorite tools and platforms
              </h1>

              <p className="font-semibold text-base lg:text-lg mb-4">
                No more jumping between social networks and other solutions. Use
                Agorapulse to centralize all of your team's social media
                marketing activities.
              </p>

              <div className="w-full sm:max-w-52">
                <WhiteButton
                  text="See all integrations"
                  icon={
                    <HiArrowNarrowRight
                      size={16}
                      className="mt-1 text-orange-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
                    />
                  }
                  link="https://app.agorapulse.com"
                />
              </div>
            </div>

            <div className="flex flex-row flex-auto max-w-lg flex-wrap gap-1 gap-y-7 items-center justify-center">
              {favoriteToolsAndPlatforms.map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="flex flex-2/12 items-center justify-center"
                >
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-7"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="greate" className="flex flex-col gap-10 p-5">
          <h1 className="font-bold text-3xl lg:text-4xl text-neutral-900 text-center">
            What makes{" "}
            <span className="text-orange-600">Agorapulse greate?</span>
          </h1>

          <GreateSlide items={greateItems} />
        </section>

        <section
          id="success-stories"
          className="flex flex-col sm:flex-row gap-10 sm:gap-0 p-5 mt-20"
        >
          <div className="relative flex flex-[1_1_0%] w-full h-full max-h-48 sm:max-h-44 md:max-h-64 xl:max-h-80 max-w-[689px] rounded-md overflow-hidden bg-gray-300 sm:min-w-80 sm:mr-3.5">
            <img
              src="https://media.istockphoto.com/id/1392016982/photo/mixed-group-of-business-people-sitting-around-a-table-and-talking.jpg?s=612x612&w=0&k=20&c=d7mWQhdzKrowHYTWXXcCrNn02uyfLYQYB78M75G8lKg="
              alt="agora-success-thumbnail"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />

            <button
              type="button"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white flex items-center justify-center rounded-full hover:bg-orange-500 group"
            >
              <IoMdPlay
                size={16}
                className="text-orange-600 group-hover:text-white ml-1"
              />
            </button>
          </div>

          <div className="flex flex-[1_1_0%] sm:px-3.5 lg:px-12 items-center justify-center">
            <div className="flex flex-col gap-7 md:gap-4">
              <span className="text-gray-900 font-bold text-base sm:text-lg md:text-2xl">
                "Agorapulse has really changed our ability to follow up with
                customers and make sure we're being responsive and interacting
                with them when they want."
              </span>

              <span className="leading-5 font-semibold text-orange-600 text-start text-sm sm:text-sm md:text-lg">
                Jamie Mendelsohn, <br />
                Director of Customer Happiness Lovepop
              </span>

              <div className="w-full sm:max-w-52">
                <WhiteButton
                  text="See success stories"
                  link="https://www.agorapulse.com"
                  icon={
                    <HiArrowNarrowRight
                      size={16}
                      className="mt-1 text-orange-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <section id="frequently-question" className="flex flex-col gap-10 p-5">
          <h1 className="font-bold text-3xl text-neutral-900">
            Frequently Asked Questions
          </h1>

          <div>
            <AccordionComponent
              data={accordionDashboard}
              isShowAll={isShowMoreQuestionState}
            />
          </div>

          {!isShowMoreQuestionState && (
            <div className="w-full sm:max-w-44 cursor-pointer">
              <WhiteButton
                text="More Question"
                icon={
                  <HiArrowNarrowRight
                    size={16}
                    className="mt-1 text-orange-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
                  />
                }
                isButton
                onClick={handleShowMoreQuestion}
              />
            </div>
          )}
        </section>

        <section id="try-agora" className="bg-red-50">
          <div className="grid grid-cols-12 pt-5 px-5 space-y-10">
            <div className="grid col-span-12 sm:col-span-4 items-center">
              <h1 className="font-extrabold text-2xl sm:text-[28px] leading-7 sm:leading-normal lg:text-4xl text-neutral-900">
                Supercharge your social media goals with Agorapulse
              </h1>
            </div>

            <div className="flex flex-col-reverse sm:grid col-span-12 sm:col-span-8 grid-cols-12 space-y-10">
              <div className="grid col-span-12 sm:col-span-8 max-h-60 sm:max-h-60 overflow-hidden mb-0">
                <img
                  src="https://www.agorapulse.com/assets/hv2-home2/social-media-goals.png"
                  alt="try-agora-icon"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="grid col-span-12 sm:col-span-4 space-y-2 sm:max-w-40 h-fit">
                <div className="h-fit">
                  <WhiteButton
                    text="Try Agorapulse"
                    link="https://app.agorapulse.com"
                    icon={
                      <HiArrowNarrowRight
                        size={16}
                        className="mt-1 text-orange-600 group-hover:text-white group-hover:scale-125 duration-300 ease-in-out"
                      />
                    }
                  />
                </div>

                <div className="h-fit">
                  <OrangeButton
                    text="Book a demo"
                    link="https://www.agorapulse.com/request-demo/"
                    icon={
                      <HiArrowNarrowRight
                        size={16}
                        className="mt-1 text-white group-hover:text-orange-600 group-hover:scale-125 duration-300 ease-in-out"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
