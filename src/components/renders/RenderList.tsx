import { ListItem } from "../../types/renderTypes";
import { RenderParts } from "./RenderParts";

export function RenderList({
  list,
  level = 0,
}: {
  list: { items: ListItem[] };
  level?: number;
}) {
  const listStyles = [
    "list-[upper-roman]",
    "list-decimal",
    "list-[upper-alpha]",
    "list-disc",
  ];
  const ListTag = "ol";
  const styleClass = listStyles[level] || "list-decimal";

  return (
    <ListTag className={`${styleClass} pl-6 mb-3 text-gray-700`}>
      {list.items.map((item, idx) => (
        <li key={idx}>
          {item.parts && <RenderParts parts={item.parts} />}
          {item.descriptions?.map((desc, dIdx) => (
            <p
              key={dIdx}
              className={`mt-1 ${
                !desc.isSameLevel ? "ml-1 text-gray-600" : "text-gray-700"
              } mb-3`}
            >
              <RenderParts parts={desc.parts} />
            </p>
          ))}
          {item.subItems && (
            <RenderList list={{ items: item.subItems }} level={level + 1} />
          )}
          {item.subDescriptions?.map((desc, dIdx) => (
            <p
              key={dIdx}
              className={`mt-1 ${
                !desc.isSameLevel ? "ml-1 text-gray-600" : "text-gray-700"
              } mb-3`}
            >
              <RenderParts parts={desc.parts} />
            </p>
          ))}
        </li>
      ))}
    </ListTag>
  );
}
