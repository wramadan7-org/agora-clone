import { TextPart } from "../../types/renderTypes";

export function RenderParts({ parts }: { parts: Partial<TextPart[]> }) {
  return parts.map((part, idx) => {
    if (part?.type === "text") return <span key={idx}>{part?.content}</span>;
    if (part?.type === "bold")
      return <strong key={idx}>{part?.content}</strong>;
    if (part?.type === "italic") return <em key={idx}>{part?.content}</em>;
    if (part?.type === "link")
      return (
        <a
          key={idx}
          href={part?.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-blue-600 underline ${part?.isBold && "font-bold"}`}
        >
          {part?.content}
        </a>
      );
    return null;
  });
}
