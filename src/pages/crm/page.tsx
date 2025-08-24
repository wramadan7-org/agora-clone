import { Helmet } from "react-helmet-async";
import HeroComponent from "../../components/layout/HeroComponent";
import OrangeButton from "../../components/buttons/OrangeButton";
import { HiArrowNarrowRight } from "react-icons/hi";
import WhiteButton from "../../components/buttons/WhiteButton";
import FeatureDescription from "../../components/features/FeatureDescription";
import {
  accordionDashboard,
  descriptionFeature,
  featuredFeatureCRM,
  featureOptions,
  reasonChoosingBusinessCRM,
  socialMediaManagers,
} from "../../constants/constant";
import FeatureCard from "../../components/cards/FeatureCard";
import { useRef, useState } from "react";
import { FeatureTitle } from "../../types/cardTypes";
import AutoPlaySlide from "../../components/slides/AutoPlaySlide";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiLogoWhatsapp } from "react-icons/bi";
import ExploreFeaturedFeatureSlide from "../../components/slides/ExploreFeaturedFeatureSlide";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import DynamicIcon from "../../components/icons/DynamicIcon";
import AccordionComponent from "../../components/accordions/frequently-question/AccordionComponent";

export default function Page() {
  const sliderRef = useRef<Slider>(null);

  const [activeFeatureState, setActiveFeatureState] = useState<{
    icon: string;
    title: string;
    color: string;
  }>(featureOptions[0]);

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
        <title>CRM Software | Agorapulse</title>
        <meta
          name="description"
          content="CRM Software untuk mengelola hubungan pelanggan dengan lebih efektif."
        />
        <meta name="og:title" content="CRM Software | Agorapulse" />
        <meta
          property="og:description"
          content="CRM Software. Tingkatkan manajemen pelanggan, optimalkan penjualan, dan bangun hubungan yang lebih kuat."
        />
      </Helmet>

      <main className="flex flex-col gap-10 pb-10 pt-24 max-w-[1400px] mx-auto overflow-x-hidden">
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
            {/* Need to create new variable for data featureOptions (because featureOptions is used in dashboard page) */}
            {featureOptions.map((feature, index) => (
              <FeatureCard
                key={`${feature.title}-${index}`}
                feature={feature}
                activeFeature={activeFeatureState}
                handleFeatureClick={handleFeatureClick}
              />
            ))}
          </div>

          {/* Need to create new variable for data descriptionFeature (because descriptionFeature is used in dashboard page) */}
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

        <section
          id="explore-featured-feature"
          className="flex flex-col gap-10 p-5"
        >
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-10">
              <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-4xl text-neutral-900 text-left leading-9">
                {featuredFeatureCRM.header}
              </h1>
            </div>
            <div className="hidden col-span-2 md:grid grid-cols-12 gap-2">
              <div className="col-span-6 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="z-10 w-10 h-10 cursor-pointer bg-white hover:bg-orange-500 border-2 border-orange-500 rounded-full group items-center duration-300 ease-in-out"
                >
                  <MdKeyboardArrowLeft
                    size={35}
                    className="text-orange-600 group-hover:text-white"
                  />
                </button>
              </div>
              <div className="col-span-6 flex items-center justify-start">
                <button
                  type="button"
                  onClick={() => sliderRef.current?.slickNext()}
                  className="z-10 w-10 h-10 cursor-pointer hover:bg-white bg-orange-500 border-2 border-orange-500 rounded-full group items-center duration-300 ease-in-out"
                >
                  <MdKeyboardArrowRight
                    size={35}
                    className="group-hover:text-orange-600 text-white"
                  />
                </button>
              </div>
            </div>
          </div>
          <ExploreFeaturedFeatureSlide
            ref={sliderRef}
            items={featuredFeatureCRM.items}
          />
        </section>

        <section
          id="reason-choosing-business"
          className="flex flex-col gap-10 p-5"
        >
          <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-4xl text-neutral-900 text-left leading-9">
            {reasonChoosingBusinessCRM.header}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {reasonChoosingBusinessCRM?.items?.map((item, index) => (
              <div
                key={index}
                className="p-5 space-y-3 border border-gray-300 rounded-md"
              >
                <DynamicIcon
                  iconName={item.icon}
                  className="text-orange-500"
                  size={30}
                />
                <h3 className="font-bold text-gray-700 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
            ))}
          </div>
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
        <section id="faq" className="grid lg:grid-cols-12 gap-10 p-5 min-w-0">
          <div className="lg:col-span-4 text-gray-700 space-y-5">
            <div>
              <span>Frequently Asked Questions (FAQ)</span>
              <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-4xl text-neutral-900 text-left leading-9">
                Apa itu Aplikasi CRM Mekari Qontak?
              </h1>
            </div>
            <p className="">
              Aplikasi CRM atau Software CRM (
              <i>Customer Relationship Management</i>) adalah sistem yang
              membantu Anda mengelola interaksi pelanggan dengan bisnis untuk
              menyederhanakan proses penjualan dan pemasaran, serta meningkatkan
              layanan pelanggan. Ini sangat penting bagi bisnis yang ingin
              meningkatkan hubungan pelanggan, meningkatkan penjualan, dan
              mengoptimalkan operasional secara keseluruhan.
            </p>
            <div className="flex flex-row flex-wrap gap-4 items-center justify-start just">
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
          </div>
          <div className="lg:col-span-8 lg:pl-36">
            <AccordionComponent
              data={accordionDashboard.slice(0, 7)}
              isShowAll={true}
            />
          </div>
        </section>
      </main>
    </>
  );
}
