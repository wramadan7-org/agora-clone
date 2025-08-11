export type TextPart =
  | { type: "text"; content: string }
  | { type: "bold"; content: string }
  | { type: "italic"; content: string }
  | { type: "link"; content: string; href: string; isBold?: boolean };

export interface ParagraphContent {
  isSameLevel?: boolean;
  type: "paragraph";
  parts: TextPart[];
}

export interface ListItem {
  parts: TextPart[];
  descriptions?: ParagraphContent[];
  subItems?: ListItem[];
  subDescriptions?: ParagraphContent[];
}

export interface ListContent {
  type: "list";
  ordered?: boolean;
  items: ListItem[];
}

export type SectionContent = ParagraphContent | ListContent;

export interface Section {
  heading?: string;
  contents: SectionContent[];
}

export interface PrivacyPolicy {
  title: string;
  contents: ParagraphContent[]; // intro di atas sections
  sections: Section[];
}
