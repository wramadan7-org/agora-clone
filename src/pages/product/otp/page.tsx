import { Helmet } from "react-helmet-async";
import HeroComponent from "../../../components/layout/HeroComponent";
import {
  autoOptimizeOtpPlatform,
  compareChannels,
  comparisonOtpPlatform,
  connectChannel,
  easyIntegrationOtpPlatform,
  singleIntegrationOtpPlatform,
  superiorityOtpPlatform,
} from "../../../constants/optPlatform";
import DynamicIcon from "../../../components/icons/DynamicIcon";
import { RenderParts } from "../../../components/renders/RenderParts";
import { RenderList } from "../../../components/renders/RenderList";
import OrangeButton from "../../../components/buttons/OrangeButton";
import CompareChannelTable from "../../../components/tables/CompareChannelTable";
import CompareChannelCard from "../../../components/cards/CompareChannelCard";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>OTP Platform | Agorapulse</title>
        <meta
          name="description"
          content="Platform OTP (One Time Password) untuk verifikasi yang aman, cepat, dan mudah diintegrasikan ke berbagai aplikasi."
        />
        <meta name="og:title" content="OTP Platform | Agorapulse" />
        <meta
          property="og:description"
          content="Gunakan OTP Platform untuk meningkatkan keamanan transaksi dan autentikasi pengguna dengan verifikasi kode sekali pakai yang andal."
        />
      </Helmet>
      <main className="flex flex-col gap-10 pb-10 pt-24 max-w-[1400px] mx-auto text-neutral-900 overflox-x-hidden">
        <HeroComponent
          titleCore="Aplikasi CRM, Chat & Call Center Terlengkap. "
          titleOrange="Untuk tingkatkan penjualan dan pelayanan bisnis"
          description="Percepat sales dan layanan pelanggan dengan aplikasi Omnichannel CRM"
          disclaimer="Uji coba 30 hari gratis - Tidak membutuhkan kartu kredit"
        />
        <section
          id="superiority-otp-platform"
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-5"
        >
          {superiorityOtpPlatform?.map((item, index) => (
            <div
              key={`superiority-${index}`}
              className="flex flex-col items-start justify-start bg-white rounded-md p-5 gap-3 shadow-md border border-orange-100"
            >
              <DynamicIcon
                iconName={item.icon}
                className="text-orange-500"
                size={30}
              />
              <h5 className="font-bold text-lg text-neutral-900">
                {item.title}
              </h5>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </section>
        <section id="comparasion" className="flex flex-col gap-10 p-5">
          <div className="max-w-lg mx-auto space-y-3">
            <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-4xl text-neutral-900 text-center leading-9">
              {comparisonOtpPlatform?.header}
            </h1>
            {comparisonOtpPlatform?.subHeaders?.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index} className="mb-3 text-gray-700 text-center">
                    <RenderParts parts={item.parts ?? []} />
                  </p>
                );
              }

              if (item.type === "list") {
                return (
                  <div key={index}>
                    <RenderList list={item} level={1} />
                  </div>
                );
              }

              return null;
            })}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-10">
            {comparisonOtpPlatform?.regulars?.map((item, index) => (
              <div
                key={`regular-${index}`}
                className="flex flex-col gap-4 items-center justify-start"
              >
                <div className="border border-orange-400 text-orange-400 h-14 w-14 flex items-center justify-center rounded-full text-center font-bold text-2xl">
                  {index + 1}
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-center text-neutral-900 text-lg leading-tight">
                    {item.title}
                  </h5>
                  <p className="text-gray-700 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <p className="text-gray-400 text-center text-xl font-bold">
              Regular OTP Integration
            </p>
            <div className="grid grid-cols-3 items-center">
              <div className="h-[1px] w-full border border-orange-500"></div>
              <p className="text-orange-500 text-center">Comparison</p>
              <div className="h-[1px] w-full border border-orange-500"></div>
            </div>
            <p className="text-neutral-900 text-center text-xl font-bold">
              OTP Integration with Fazpass
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 rounded-md bg-orange-500 px-5 py-8">
            {comparisonOtpPlatform?.owns?.map((item, index) => (
              <div
                key={`regular-${index}`}
                className="flex flex-col gap-4 items-center justify-start"
              >
                <div className="border bg-white/50 text-orange-500 font-bold h-14 w-14 flex items-center justify-center rounded-full text-2xl text-center">
                  {index + 1}
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-center text-white text-lg leading-tight">
                    {item.title}
                  </h5>
                  <p className="text-white text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-52 mx-auto">
            <OrangeButton
              text="Start Integration"
              link="https://fazpass.com/developer/"
            />
          </div>
        </section>
        <section id="single-integration" className="flex flex-col p-5 gap-10">
          <div className="bg-orange-50 rounded-md p-8 space-y-8">
            <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-4xl text-neutral-900 text-center leading-9">
              {singleIntegrationOtpPlatform.header}
            </h1>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4 order-2 lg:order-1">
                {singleIntegrationOtpPlatform?.items?.map((item, index) => (
                  <div
                    key={`single-integration-${index}`}
                    className="grid grid-cols-12 gap-3 bg-white p-5 rounded-md shadow-md"
                  >
                    <div className="col-span-12 sm:col-span-3 justify-center items-center flex">
                      <DynamicIcon
                        iconName={item?.icon}
                        className="text-orange-500"
                        size={35}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-9 text-center sm:text-start">
                      <h5 className="font-bold text-lg">{item.title}</h5>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-1 lg:order-2 flex items-center justify-center">
                <img
                  src={singleIntegrationOtpPlatform?.image}
                  className="object-contain object-center w-full h-full max-w-[700px] max-h-[413px]"
                  loading="lazy"
                  alt="Single Integration"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="easy-integration" className="flex flex-col gap-10 p-5">
          <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-4xl text-neutral-900 text-center leading-9">
            {easyIntegrationOtpPlatform.header}
          </h1>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <img
                src={easyIntegrationOtpPlatform?.image}
                alt="Easy Integration"
                className="object-contain object-center w-full h-full max-w-[700px] max-h-[413px]"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              {easyIntegrationOtpPlatform?.items?.map((item, index) => (
                <div
                  key={`easy-integration-${index}`}
                  className="grid grid-cols-12 gap-3 bg-white border border-orange-300 shadow-md p-5 rounded-md"
                >
                  <div className="col-span-12 sm:col-span-3 justify-center items-center flex">
                    <DynamicIcon
                      iconName={item?.icon}
                      className="text-orange-500"
                      size={35}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-9 text-center sm:text-start">
                    <h5 className="font-bold text-lg">{item.title}</h5>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="optimize" className="flex flex-col p-5 gap-10">
          <div className="bg-orange-50 rounded-md p-8 space-y-8">
            <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-4xl text-neutral-900 text-center leading-9">
              {autoOptimizeOtpPlatform.header}
            </h1>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4 order-2 lg:order-1">
                {autoOptimizeOtpPlatform?.items?.map((item, index) => (
                  <div
                    key={`optimize-${index}`}
                    className="grid grid-cols-12 gap-3 bg-white p-5 rounded-md shadow-md"
                  >
                    <div className="col-span-12 sm:col-span-3 justify-center items-center flex">
                      <DynamicIcon
                        iconName={item?.icon}
                        className="text-orange-500"
                        size={35}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-9 text-center sm:text-start">
                      <h5 className="font-bold text-lg">{item.title}</h5>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-1 lg:order-2 flex items-center justify-center">
                <img
                  src={autoOptimizeOtpPlatform?.image}
                  className="object-contain object-center w-full h-full max-w-[700px] max-h-[413px]"
                  loading="lazy"
                  alt="Auto Optimize"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="compare-channel" className="flex flex-col gap-10 p-5">
          <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-4xl text-neutral-900 text-center leading-9">
            {compareChannels.header}
          </h1>
          <CompareChannelTable data={compareChannels} />
          <div className="flex flex-col gap-5 lg:hidden">
            {compareChannels?.headers?.slice(1)?.map((header, hIdx) => {
              const lists: {
                title: string;
                value: string;
              }[] = [];

              compareChannels?.rows?.forEach((item) => {
                const data = {
                  title: item[0],
                  value: item[hIdx + 1],
                };
                lists.push(data);
              });

              return (
                <CompareChannelCard
                  key={`compare-channel-${hIdx}`}
                  header={header.title}
                  icon={header.icon}
                  lists={lists}
                />
              );
            })}
          </div>
          <div className="w-xs mx-auto">
            <OrangeButton
              text="Learn about Seamless Authentication"
              link="https://fazpass.com/product/seamless-passwordless-authentication/"
            />
          </div>
        </section>
        <section
          id="connect-to-channel"
          className="bg-orange-50 px-5 py-8 flex flex-col gap-10 rounded-md"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-4xl text-neutral-900 text-left leading-9">
                {connectChannel?.header}
              </h1>
              <p className="text-gray-700 text-left">
                {connectChannel?.description}
              </p>
              <div className="w-56">
                <OrangeButton
                  text="Start Integration"
                  link="https://fazpass.com/developer/"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-full border-2 border-orange-500 rounded-md p-5 items-center justify-center flex">
                <div className="max-w-xl grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-3 lg:gap-y-3">
                  {connectChannel.channels?.map((item, index) => (
                    <div className="flex w-full items-center justify-center">
                      <a
                        key={`${item.text}-${index}`}
                        href={item.href}
                        className="border border-orange-500 text-center text-orange-500 flex min-w-3xs sm:min-w-0 flex-row gap-2 w-full sm:w-64 rounded-md items-center justify-center p-3"
                      >
                        <DynamicIcon iconName={item.icon} size={25} />
                        <span className="font-bold">{item.text}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
