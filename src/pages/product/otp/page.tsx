import { Helmet } from "react-helmet-async";
import HeroComponent from "../../../components/layout/HeroComponent";
import {
  comparisonOtpPlatform,
  superiorityOtpPlatform,
} from "../../../constants/optPlatform";
import DynamicIcon from "../../../components/icons/DynamicIcon";
import { RenderParts } from "../../../components/renders/RenderParts";
import { RenderList } from "../../../components/renders/RenderList";
import OrangeButton from "../../../components/buttons/OrangeButton";

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
      <main className="flex flex-col gap-10 pb-10 pt-24 max-w-[1400px] mx-auto">
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
              <h5 className="font-bold text-lg text-gray-700">{item.title}</h5>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </section>
        <section id="comparasion" className="flex flex-col gap-10 p-5">
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {comparisonOtpPlatform?.regulars?.map((item, index) => (
              <div
                key={`regular-${index}`}
                className="flex flex-col gap-4 items-center justify-start"
              >
                <div className="border border-orange-400 text-orange-400 h-14 w-14 flex items-center justify-center rounded-full text-center font-bold text-2xl">
                  {index + 1}
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-center text-gray-700 text-lg leading-tight">
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
            <p className="text-gray-700 text-center text-xl font-bold">
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
      </main>
    </>
  );
}
