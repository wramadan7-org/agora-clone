import { FeatureTitle } from "../types/cardTypes";

export const socialMediaManagers = [
  "https://www.agorapulse.com/assets/hv2-home2/wwf-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/mccann-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/sezane-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/atari-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/dassault-aviation-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/saint-gobain-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/wd-40-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/berliner-philharmoniker-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/ogilvy-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/group-seb-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/1-first-bank-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/rockler-logo-grey-4.svg",
  "https://www.agorapulse.com/assets/hv2-home2/blue-diamond-resorts-logo-grey-4.svg",
];

export const effectiveSocialMediaManagement = [
  {
    icon: "FaRegCalendarAlt",
    title: "Stramline your social content management",
    description:
      "Everything you need to easily manage your content and grow your brand across all major social media platforms.",
  },
  {
    icon: "IoIosPeople",
    title: "Enhance team collaboration",
    description:
      "Remove the internal friction and downright annoyance of having to send multiple emails and messages to get approvals.",
  },
  {
    icon: "BiTachometer",
    title: "Empower your team with actionable insights",
    description:
      "Measure the metrics that matter to your brand. Get the insights and data you need to craft posts and cultivate conversations that grow your business.",
  },
];

export const featureOptions = [
  {
    icon: "FaInbox",
    title: "Inbox",
    color: "orange",
  },
  {
    icon: "LuSend",
    title: "Publishing",
    color: "indigo",
  },
  {
    icon: "TbWorldSearch",
    title: "Listening",
    color: "emerald",
  },
  {
    icon: "LuChartNoAxesCombined",
    title: "Reporting",
    color: "blue",
  },
  {
    icon: "BiTachometer",
    title: "ROI",
    color: "red",
  },
];

export const conditionColorFeature: Record<
  FeatureTitle,
  {
    backgroundHover: string;
    backgroundActive: string;
    textHover: string;
    textActive: string;
  }
> = {
  inbox: {
    backgroundHover: "hover:bg-orange-50",
    backgroundActive: "bg-orange-50",
    textHover: "group-hover:text-orange-600",
    textActive: "text-orange-600",
  },
  publishing: {
    backgroundHover: "hover:bg-indigo-50",
    backgroundActive: "bg-indigo-50",
    textHover: "group-hover:text-indigo-400",
    textActive: "text-indigo-400",
  },
  listening: {
    backgroundHover: "hover:bg-emerald-50",
    backgroundActive: "bg-emerald-50",
    textHover: "group-hover:text-emerald-300",
    textActive: "text-emerald-300",
  },
  reporting: {
    backgroundHover: "hover:bg-blue-50",
    backgroundActive: "bg-blue-50",
    textHover: "group-hover:text-sky-600",
    textActive: "text-sky-600",
  },
  roi: {
    backgroundHover: "hover:bg-red-50",
    backgroundActive: "bg-red-50",
    textHover: "group-hover:text-red-400",
    textActive: "text-red-400",
  },
};

export const descriptionFeature = {
  inbox: {
    icon: "FaInbox",
    title: "Keep tabs, without switching tabs",
    description:
      "Track and respond to all your social media interactions in one centralized inbox.",
    adventages: [
      "Prioritize, automate, and respond more efficiently.",
      "Centralize comment moderation and facilitate better teamwork.",
      "Enhance your engagement and improve customer experience.",
    ],
    type: "Inbox",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/screenshot-social-media-inbox-2.webp",
  },
  publishing: {
    icon: "LuSend",
    title: "Master your social media content strategy",
    description:
      "Plan and schedule your social media content across all platforms with an intuitive post scheduler and shared calendars.",
    adventages: [
      "Streamline your content management.",
      "Customize your post content for each platform.",
      "Enhance internal and external team collaboration.",
    ],
    type: "Publishing",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/screenshot-social-media-publishing-2.webp",
  },
  listening: {
    icon: "TbWorldSearch",
    title: "Listen to the conversations that matter most",
    description:
      "Monitor and track mentions of your brand, industry, and competitors. Capture conversations from social networks, news websites, and blogs.",
    adventages: [
      "Measure and protect your brand reputation.",
      "Uncover new ideas to create engaging content.",
      "Find out customer requirements and enhance brand loyalty.",
    ],
    type: "Listening",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/screenshot-social-media-monitoring-2.webp",
  },
  reporting: {
    icon: "LuChartNoAxesCombined",
    title: "Create meaningful reports, without the headache",
    description:
      "Make better business decisions with actionable social media reports that don’t take all day to create.",
    adventages: [
      "Compare key social metrics across all channels from a centralized dashboard.",
      "Easily identify your top-performing posts for each platform.",
      "Build and automate custom, presentation-ready social media reports.",
    ],
    type: "Reporting",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/screenshot-social-media-reporting.webp",
  },
  roi: {
    icon: "BiTachometer",
    title: "Measure and prove your social media ROI",
    description:
      "You already know that social media is more than brand awareness. But now you can actually prove it by uncovering what posts and conversations drive sales, leads, and traffic.",
    adventages: [
      "Automatically pull data from Google Analytics.",
      "Tie your social media activity to real revenue goals.",
      "Understand where to use your budget effectively.",
    ],
    type: "ROI",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/screenshot-social-media-roi.webp",
  },
};

export const favoriteToolsAndPlatforms = [
  {
    name: "Facebook",
    image: "https://www.agorapulse.com/assets/hv2-home2/facebook-logo.svg",
  },
  {
    name: "Youtube",
    image: "https://www.agorapulse.com/assets/hv2-home2/youtube-logo-2.svg",
  },
  {
    name: "TikTok",
    image: "https://www.agorapulse.com/assets/hv2-home2/tiktok-logo.svg",
  },
  {
    name: "Pinterest",
    image: "https://www.agorapulse.com/assets/hv2-home2/pinterest-logo.svg",
  },
  {
    name: "X",
    image: "https://www.agorapulse.com/assets/hv2-home2/x-logo.svg",
  },
  {
    name: "Google Business",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/google-business-logo.svg",
  },
  {
    name: "Instagram",
    image: "https://www.agorapulse.com/assets/hv2-home2/instagram-logo.svg",
  },
  {
    name: "LinkedIn",
    image: "https://www.agorapulse.com/assets/hv2-home2/linkedin-logo.svg",
  },
  {
    name: "Google Analytics",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/google-analytics-logo.svg",
  },
  {
    name: "Sales Force",
    image: "https://www.agorapulse.com/assets/hv2-home2/sales-force-logo.svg",
  },
  {
    name: "Google Drive",
    image: "https://www.agorapulse.com/assets/hv2-home2/google-drive-logo.svg",
  },
  {
    name: "Canva",
    image: "https://www.agorapulse.com/assets/hv2-home2/canva-logo.svg",
  },
  {
    name: "Tenor",
    image: "https://www.agorapulse.com/assets/hv2-home2/tenor-logo.svg",
  },
  {
    name: "Hubspot",
    image: "https://www.agorapulse.com/assets/hv2-home2/hubspot-logo.svg",
  },
  {
    name: "Slack",
    image: "https://www.agorapulse.com/assets/hv2-home2/slack-logo.svg",
  },
];

export const greateItems = [
  {
    title: "Intutive and easy to use",
    description:
      "Agorapulse's user-friendly UI/UX boosts team productivity by saving",
    subDescription: "50% of content creation time.",
    card: {
      image: "https://www.agorapulse.com/assets/hv2-home2/nadira-davis.png",
      name: "Nadira Davis",
      topic: "OneStreet Residential",
      comment:
        "Posting content for 21 different communities has been easier, thanks to Agorapulse&rsquo;s excellent user-friendliness.",
    },
  },
  {
    title: "Get backed by the best support team in the industry",
    description:
      "Our support team is ready to assist you with an average response time of 30 minutes or less, and a",
    subDescription: "96% user satisfaction rating.",
    card: {
      image: "https://www.agorapulse.com/assets/hv2-home2/kyle-riches.png",
      name: "Kyle Riches",
      topic: "Collaborative Drug Discovery",
      comment:
        "Active and responsive customer support topped our list of needs!",
    },
  },
  {
    title: "Cost-effective and transparent pricing",
    description:
      "Users who switch to Agorapulse from other social media tools don’t suffer hidden costs, so they average",
    subDescription: "savings of 30% for teams.",
    card: {
      image: "https://www.agorapulse.com/assets/hv2-home2/chris-edmonds.png",
      name: "Chris Edmonds",
      topic: "The Purposeful Culture Group",
      comment:
        "We needed a reliable platform that was fast, simple, and fairly priced. Agorapulse was a great solution for our needs.",
    },
  },
];
