import { Helmet } from "react-helmet-async";
import { privacyPolicy } from "../../constants/constant";

type TextPart =
  | { type: "text"; content: string }
  | { type: "bold"; content: string }
  | { type: "italic"; content: string }
  | { type: "link"; content: string; href?: string; isBold?: boolean };

interface ListItem {
  text?: string; // kalau mau string biasa
  parts?: TextPart[]; // kalau mau ada formatting
  subItems?: ListItem[]; // nested list
}

function renderParts(parts: TextPart[]) {
  return parts.map((part, idx) => {
    if (part.type === "text") return <span key={idx}>{part.content}</span>;
    if (part.type === "bold") return <strong key={idx}>{part.content}</strong>;
    if (part.type === "italic") return <em key={idx}>{part.content}</em>;
    if (part.type === "link")
      return (
        <a
          key={idx}
          href={part.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-blue-600 underline ${part?.isBold && "font-bold"}`}
        >
          {part.content}
        </a>
      );
    return null;
  });
}

function renderList(list: { items: ListItem[] }, level = 0) {
  // Level menentukan style list
  const listStyles = ["list-decimal", "list-[upper-alpha]", "list-disc"];
  const ListTag = "ol"; // bisa ubah ke ul kalau mau bullet
  const styleClass = listStyles[level] || "list-decimal";

  return (
    <ListTag className={`${styleClass} pl-6 mb-3 text-gray-700`}>
      {list.items.map((item, idx) => (
        <li key={idx}>
          {item.parts ? renderParts(item.parts) : item.text}
          {item.subItems && renderList({ items: item.subItems }, level + 1)}
        </li>
      ))}
    </ListTag>
  );
}

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
      <main className="flex flex-col gap-10 pb-10 pt-24 max-w-[1400px] mx-auto">
        <section id="privacy-policy" className="px-5">
          <h1 className="text-3xl font-bold mb-6 text-orange-600">
            {privacyPolicy.title}
          </h1>

          {/* Deskripsi Awal */}
          {privacyPolicy.contents?.map((content, i) => (
            <p key={i} className="mb-4 text-gray-700">
              {typeof content === "string"
                ? content
                : renderParts((content.parts as TextPart[]) ?? [])}
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
                      {renderParts((content.parts as TextPart[]) ?? [])}
                    </p>
                  );
                }

                if (content.type === "list") {
                  return (
                    <div key={cIdx}>
                      {renderList(content as { items: ListItem[] })}
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
