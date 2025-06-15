import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export type InlineContent =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "link";
      text: string;
      url: string;
    };

export type AccordionContent =
  | {
      type: "paragraph";
      children: InlineContent[];
    }
  | {
      type: "list";
      items: string[];
    };

export type AccordionItem = {
  title: string;
  contents: AccordionContent[];
};

type AccordionComponentProps = {
  data: AccordionItem[];
  isShowAll?: boolean;
};

export default function AccordionComponent({
  data,
  isShowAll,
}: AccordionComponentProps) {
  const refactorDataByDefault = isShowAll ? data : data?.slice(0, 5);
  return (
    <>
      {refactorDataByDefault?.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="text-gray-700 font-bold text-lg sm:text-xl"
          >
            {item.title}
          </AccordionSummary>

          <AccordionDetails className="space-y-3 text-base">
            {item.contents.map((content, idx) => {
              if (content.type === "paragraph") {
                return (
                  <p key={idx}>
                    {content.children.map((child, childIdx) => {
                      if (child.type === "text") {
                        return <span key={childIdx}>{child.text}</span>;
                      }
                      if (child.type === "link") {
                        return (
                          <a
                            key={childIdx}
                            href={child.url}
                            target="_blank"
                            className="text-orange-600"
                          >
                            {child.text}
                          </a>
                        );
                      }
                      return null;
                    })}
                  </p>
                );
              }

              if (content.type === "list") {
                return (
                  <ul key={idx} className="list-disc ml-8">
                    {content.items.map((li, liIdx) => (
                      <li key={liIdx}>{li}</li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
