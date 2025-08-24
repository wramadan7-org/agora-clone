import { Helmet } from "react-helmet-async";
import { privacyPolicy } from "../../constants/constant";
import { RenderParts } from "../../components/renders/RenderParts";
import { RenderList } from "../../components/renders/RenderList";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Agorapulse</title>
        <meta
          name="description"
          content="Read Agorapulse's Privacy Policy to learn how we collect, use, and protect your personal information."
        />
        <meta name="og:title" content="Privacy Policy | Agorapulse" />
        <meta
          property="og:description"
          content="Discover how Agorapulse safeguards your data, ensures transparency, and respects your privacy rights."
        />
      </Helmet>
      <main className="flex flex-col gap-10 pb-10 pt-24 max-w-[1400px] mx-auto overflox-x-hidden">
        <section id="privacy-policy" className="px-5">
          <h1 className="text-3xl font-bold mb-6 text-orange-600">
            {privacyPolicy.title}
          </h1>

          {/* Deskripsi Awal */}
          {privacyPolicy.contents?.map((content, i) => (
            <p key={i} className="mb-4 text-gray-700">
              {typeof content === "string" ? (
                content
              ) : (
                <RenderParts parts={content.parts ?? []} />
              )}
            </p>
          ))}

          {/* Loop Section */}
          {privacyPolicy.sections.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-orange-600">
                {section.heading}
              </h2>

              {section.contents?.map((content, cIdx) => {
                if (content.type === "paragraph") {
                  return (
                    <p key={cIdx} className="mb-3 text-gray-700">
                      <RenderParts parts={content.parts ?? []} />
                    </p>
                  );
                }

                if (content.type === "list") {
                  return (
                    <div key={cIdx}>
                      <RenderList list={content} level={1} />
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
