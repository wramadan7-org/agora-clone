import { AccordionItem } from "../components/accordions/frequently-question/AccordionComponent";
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

export const pricings = [
  {
    plan: "Standard",
    pricing: {
      monthly: {
        amount: 99,
        currency: "USD",
        per: "user/month",
        billing_cycle: "monthly",
      },
      annual: {
        amount: 79,
        currency: "USD",
        per: "user/month",
        billing_cycle: "annually",
      },
    },
    included_social_profiles: {
      monthly: 10,
      annual: 10,
    },
    additional_profile_cost: {
      monthly: {
        amount: 10,
        currency: "USD",
        per: "mo",
        note: "per additional social profile",
      },
      annual: {
        amount: 10,
        currency: "USD",
        per: "mo",
        note: "per additional social profile",
      },
    },
    cta: {
      link: "https://app.agorapulse.com/auth/signup?language=en&plan_intent=advanced-y&_gl=1*68kkso*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDk5ODUwMjIkbzM5JGcxJHQxNzQ5OTg2NTMxJGoxOCRsMCRoMA..",
      label: "Try for free now",
      trial: {
        duration_days: 30,
        note: "No card required",
      },
    },
    features: [
      {
        label: "Posts scheduling",
      },
      {
        label: "Unlimited posts",
      },
      {
        label: "Draft posts",
      },
      {
        label: "Unified Publishing Calendar",
        info: "View all your past and upcoming posts for all your social profiles in one, convenient Publishing Calendar",
      },
      {
        label: "Standard Social Inbox",
        info: "Up to 5000 messages or comments per month, ideal for moderately engaged audiences",
      },
      {
        label: "Automated Inbox Assistant",
      },
      {
        label: "Instant translations",
        info: "Instantly translate your messages and comments into any language",
      },
      {
        label: "Report export",
      },
      {
        label: "Basic Social Media ROI",
        info: "Simplified Google Analytics reports that highlight how networks and campaigns are contributing to ROI",
      },
      {
        label: "Custom Report date range",
        info: "Choose a custom date range for your reports",
      },
      {
        label: "White-label reporting",
        info: "Add your own logo to your reports",
      },
      {
        label: "Mobile application (iOS & Android)",
      },
      {
        label: "Google Analytics Integration",
      },
    ],
  },
  {
    plan: "Professional",
    pricing: {
      monthly: {
        amount: 149,
        currency: "USD",
        per: "user/month",
        billing_cycle: "monthly",
      },
      annual: {
        amount: 119,
        currency: "USD",
        per: "user/month",
        billing_cycle: "annually",
      },
    },
    included_social_profiles: {
      monthly: 10,
      annual: 10,
    },
    additional_profile_cost: {
      monthly: {
        amount: 10,
        currency: "USD",
        per: "mo",
        note: "per additional social profile",
      },
      annual: {
        amount: 10,
        currency: "USD",
        per: "mo",
        note: "per additional social profile",
      },
    },
    cta: {
      link: "https://app.agorapulse.com/auth/signup?language=en&plan_intent=advanced-y&_gl=1*68kkso*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDk5ODUwMjIkbzM5JGcxJHQxNzQ5OTg2NTMxJGoxOCRsMCRoMA..",
      label: "Try for free now",
      trial: {
        duration_days: 30,
        note: "No card required",
      },
    },
    features: [
      {
        label: "Instagram Product Tagging",
      },
      {
        label: "PulseLink in bio",
      },
      {
        label: "Instagram grid view",
      },
      {
        label: "First comment scheduling (Instagram, Facebook, LinkedIn)",
      },
      {
        label: "X (Twitter) threads scheduling",
      },
      {
        label: "Team workflow",
        info: "Assign posts to be approved by other team members. Ideal solution to speed up your internal approval process",
      },
      {
        label: "Canva integration",
      },
      {
        label: "Calendar notes",
        info: "Add notes in your Publishing Calendar to organize your publishing calendar, as a team, ahead of time",
      },
      {
        label: "Basic Ad Comment Monitoring",
        info: "Up to 300 active ads. Monitor comments on Facebook and Instagram for moderately active ad accounts",
      },
      {
        label: "TikTok & LinkedIn ad comments monitoring",
      },
      {
        label: "Team performance reports",
      },
      {
        label: "Priority email & chat support",
      },
    ],
  },
  {
    plan: "Advanced",
    pricing: {
      monthly: {
        amount: 199,
        currency: "USD",
        per: "user/month",
        billing_cycle: "monthly",
      },
      annual: {
        amount: 149,
        currency: "USD",
        per: "user/month",
        billing_cycle: "annually",
      },
    },
    included_social_profiles: {
      monthly: 10,
      annual: 10,
    },
    additional_profile_cost: {
      monthly: {
        amount: 10,
        currency: "USD",
        per: "mo",
        note: "per additional social profile",
      },
      annual: {
        amount: 10,
        currency: "USD",
        per: "mo",
        note: "per additional social profile",
      },
    },
    cta: {
      link: "https://app.agorapulse.com/auth/signup?language=en&plan_intent=advanced-y&_gl=1*68kkso*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDk5ODUwMjIkbzM5JGcxJHQxNzQ5OTg2NTMxJGoxOCRsMCRoMA..",
      label: "Try for free now",
      trial: {
        duration_days: 30,
        note: "No card required",
      },
    },
    features: [
      {
        label: "Content Library",
      },
      {
        label: "5 Shared Calendars",
        info: "Easily gather feedback from external stakeholders with Shared Calendars",
      },
      {
        label: "Bulk publish content",
      },
      {
        label: "Content queues",
        info: "Schedule posts bulk",
      },
      {
        label: "Advanced spam management",
        info: "Hide or delete messages and comments in bulk",
      },
      {
        label: "Advanced Ad comments monitoring",
        info: "Monitor comments on Facebook and Instagram for very active ad accounts up to 2500 live ads creatives",
      },
      {
        label: "Saved replies",
      },
      {
        label: "Inbox bulk actions",
        info: "Assign, label, review, hide and delete messages and comments in bulk",
      },
      {
        label: "Publishing content labels",
      },
      {
        label: "Advanced Social Media ROI reports",
      },
      {
        label: "Power reports (customized)",
      },
    ],
  },
  {
    plan: "Custom",
    pricing: null,
    included_social_profiles: null,
    additional_profile_cost: null,
    cta: {
      link: "https://app.agorapulse.com/auth/signup?language=en&plan_intent=advanced-y&_gl=1*68kkso*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDk5ODUwMjIkbzM5JGcxJHQxNzQ5OTg2NTMxJGoxOCRsMCRoMA..",
      label: "Get a quote",
      trial: {
        duration_days: 0,
        note: "-",
      },
    },
    features: [
      {
        label: "Unlimited social profiles",
      },
      {
        label: "Unlimited Shared Calendars",
      },
      {
        label: "Unlimited Inbox Moderation Rules",
      },
      {
        label: "Priority email, chat, & video call",
      },
      {
        label: "Dedicated Account Manager",
      },
      {
        label: "Quarterly Business Reviews",
      },
      {
        label: "Single Sign-On (SSO)",
      },
      {
        label: "CRM Integration",
        info: "Connect your Salesforce or HubSpot CRM to link customer contacts directly to your Social Inbox engagement.",
      },
      {
        label: "Reply Suggestions",
        info: "AI-powered private message replies that adapt based on your latest replies",
      },
      {
        label: "Schedule Facebook Boosted Posts",
      },
      {
        label: "Open Reports API",
      },
    ],
  },
  {
    plan: "Free",
    pricing: {
      monthly: {
        amount: 0,
        currency: "USD",
        per: "user/month",
        billing_cycle: "monthly",
      },
      annual: {
        amount: 0,
        currency: "USD",
        per: "user/month",
        billing_cycle: "annually",
      },
    },
    included_social_profiles: {
      monthly: 3,
      annual: 3,
    },
    include_users: 1,
    additional_profile_cost: null,
    cta: {
      link: "https://app.agorapulse.com/auth/signup?language=en&plan_intent=advanced-y&_gl=1*68kkso*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDk5ODUwMjIkbzM5JGcxJHQxNzQ5OTg2NTMxJGoxOCRsMCRoMA..",
      label: "Create a free account",
      trial: null,
    },
    features: [
      {
        label: "10 scheduled posts",
      },
      {
        label: "Basic social Inbox",
      },
      {
        label: "Basic reporting",
      },
      {
        label: "Limited Social Media ROI report",
        info: "Top performing post ROI",
      },
      {
        label: "Mobile app",
        info: "Android and iOs",
      },
    ],
    note: "limited to 100 messages or comments per month",
  },
];

export const supportedNetworks = [
  {
    name: "Facebook",
    image: "https://www.agorapulse.com/assets/hv2-home2/facebook-logo.svg",
  },
  {
    name: "Instagram",
    image: "https://www.agorapulse.com/assets/hv2-home2/instagram-logo.svg",
  },
  {
    name: "X",
    image: "https://www.agorapulse.com/assets/hv2-home2/x-logo.svg",
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
    name: "Google Business",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/google-business-logo.svg",
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

export const twitterCommentsPricing = [
  {
    profile:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "John Francis M.",
    username: "@johnfrancis",
    commentAt: 1748243710,
    linkProfile: "https://twitter.com/johnfrancis",
    comment:
      "Agorapulse is incredibly intuitive and user-friendly, making it easy for me to schedule posts, engage with our audience, and track performance across multiple platforms. The reporting features are also robust, providing valuable insights.",
    likes: 10,
  },
  {
    profile:
      "https://img.freepik.com/free-photo/young-woman-wearing-her-hair-bun_273609-9988.jpg?semt=ais_hybrid&w=740",
    name: "Sandra H.",
    username: "@sandrah",
    commentAt: 1748243710,
    linkProfile: "https://twitter.com/sandrah",
    comment:
      "Agorapulse is incredibly intuitive and user-friendly, making it easy for me to schedule posts, engage with our audience, and track performance across multiple platforms. The reporting features are also robust, providing valuable insights.",
    likes: 5,
  },
  {
    profile:
      "https://img.freepik.com/free-photo/close-up-portrait-serious-man-with-curly-hair_176532-7988.jpg",
    name: "محمد وليد",
    username: "@mohamedwalid",
    commentAt: 1748243710,
    linkProfile: "https://twitter.com/mohamedwalid",
    comment:
      "Most helpful about Agorapulse is the publishing and reporting options I have as a social media manager. It's easy to use, all my colleagues got set up in it quickly, and we use it every day.",
    likes: 15,
  },
  {
    profile:
      "https://img.freepik.com/free-photo/indoor-shot-serious-self-assured-woman-contemplates-about-future-plans-wants-change-job-position_273609-16881.jpg?semt=ais_hybrid&w=740",
    name: "Lisa Sicard",
    username: "@lisasicard",
    commentAt: 1748243710,
    linkProfile: "https://twitter.com/lisasicard",
    comment:
      "I highly value Agorapulse's reporting capabilities for my clients. It clearly demonstrates how effectively their social media strategies and posts are performing.",
    likes: 125,
  },
  {
    profile:
      "https://img.freepik.com/free-photo/young-man-with-beard-round-glasses_273609-6994.jpg?semt=ais_hybrid&w=740",
    name: "Paul Aroga",
    username: "@paularoga",
    commentAt: 1748243710,
    linkProfile: "https://twitter.com/paularoga",
    comment:
      "Agorapulse offers an efficient solution for monitoring social media platforms. Its user-friendly interface simplifies the process, making it accessible for anyone looking to enhance their social media management skills.",
    likes: 0,
  },
];

export const comparePlans = [
  {
    type: "thead-core",
    image: "https://www.agorapulse.com/assets/pricing/rocket_publish.webp",
    data: [
      "Publishing",
      "Free",
      "Standard",
      "Professional",
      "Advanced",
      "Custom",
    ],
  },
  {
    type: "tbody",
    data: [
      "Schedule post",
      "10 Scheduled posts",
      "Unlimited",
      "Unlimited",
      "Unlimited",
      "Unlimited",
    ],
  },
  {
    type: "tbody",
    data: ["Unified calendar", false, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["Instagram Product Tagging", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: ["PulseLink in bio", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: ["Instagram grid", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: [
      "First comment scheduling (Instagram, Facebook, LinkedIn)",
      false,
      false,
      true,
      true,
      true,
    ],
  },
  {
    type: "tbody",
    data: ["X (Twitter) threads scheduling", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: ["Label Content", false, false, false, true, true],
  },
  {
    type: "tbody",
    data: [
      "Content library",
      false,
      "10 images/2 videos",
      "10 images/2 videos",
      true,
      true,
    ],
  },
  {
    type: "tbody",
    data: ["Facebook Boosting", false, false, false, false, true],
  },
  {
    type: "thead",
    image: "https://www.agorapulse.com/assets/pricing/hands.webp",
    data: ["Collaboraton", "", "", "", "", ""],
  },
  {
    type: "tbody",
    data: ["Assign & approve posts", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: ["Comments on posts", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: ["Collision detection", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: ["Bulk approve", false, false, false, true, true],
  },
  {
    type: "tbody",
    data: ["Multi-step approval workflows", false, false, false, false, true],
  },
  {
    type: "tbody",
    data: ["Shared calendar", false, false, false, "yes, 5", "Unlimited"],
  },
  {
    type: "thead",
    image: "https://www.agorapulse.com/assets/pricing/like_social.webp",
    data: ["Productivity", "", "", "", "", ""],
  },
  {
    type: "tbody",
    data: ["Draft posts", false, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["Canva integration", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: ["Calendar notes", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: ["Content queues", false, false, false, true, true],
  },
  {
    type: "tbody",
    data: ["Bulk publishing", false, false, false, true, true],
  },
  {
    type: "tbody",
    data: ["Slack Integration", false, false, false, false, true],
  },
  {
    type: "thead",
    image:
      "https://www.agorapulse.com/assets/pricing/balloons_celebration_reporting.webp",
    data: ["Engagement", "", "", "", "", ""],
  },
  {
    type: "tbody",
    data: ["Advanded social inbox", false, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["Manage GMB reviews", false, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["Inline translation", false, true, true, true, true],
  },
  {
    type: "tbody",
    data: [
      "Automated inbox assistant",
      false,
      true,
      true,
      true,
      "Yes, Unlimited",
    ],
  },
  {
    type: "tbody",
    data: ["Assign content", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: ["Ad comments monitoring", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: [
      "TikTok & LinkedIn ad comments monitoring",
      false,
      false,
      true,
      true,
      true,
    ],
  },
  {
    type: "tbody",
    data: ["Advanced spam management", false, false, false, true, true],
  },
  {
    type: "tbody",
    data: ["Saved replies", false, false, false, true, true],
  },
  {
    type: "tbody",
    data: ["Reply Suggestions", false, false, false, false, true],
  },
  {
    type: "tbody",
    data: ["Bulk actions", false, false, false, true, true],
  },
  {
    type: "tbody",
    data: ["Label tags", false, false, false, true, true],
  },
  {
    type: "tbody",
    data: ["Sentiment", false, false, false, "Display", "Display & Filter"],
  },
  {
    type: "thead",
    image: "https://www.agorapulse.com/assets/pricing/watch.webp",
    data: ["Listening", "", "", "", "", ""],
  },
  {
    type: "tbody",
    data: [
      "Advanced Social/Web Listening Search",
      false,
      "$100/search/month",
      "$100/search/month",
      "$100/search/month",
      "$100/search/month",
    ],
  },
  {
    type: "thead",
    image: "https://www.agorapulse.com/assets/pricing/graph_publish.webp",
    data: ["Reporting", "", "", "", "", ""],
  },
  {
    type: "tbody",
    data: ["Basic report", true, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["Google Analytics Integration", true, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["Basic social media ROI report", true, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["Basic report export", false, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["Top content", false, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["Report date picker", false, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["White-label reporting", false, true, true, true, true],
  },
  {
    type: "tbody",
    data: [
      "Competitor benchmarking report",
      false,
      "Yes, 1",
      "Yes, 1",
      "Yes, 6",
      "Yes, Custom",
    ],
  },
  {
    type: "tbody",
    data: ["Team performance report", false, false, true, true, true],
  },
  {
    type: "tbody",
    data: ["Advanced power reports", false, false, false, true, true],
  },
  {
    type: "tbody",
    data: ["Advanced social media ROI report", false, false, false, true, true],
  },
  {
    type: "tbody",
    data: ["Open Reports API", false, false, false, false, true],
  },
  {
    type: "tbody",
    data: [
      "Data retention",
      "1 month",
      "6 month",
      "12 month",
      "24 month",
      "24 month",
    ],
  },
  {
    type: "thead",
    image: "https://www.agorapulse.com/assets/pricing/plants_reporting.webp",
    data: ["Other benefits", "", "", "", "", ""],
  },
  {
    type: "tbody",
    data: ["Mobile app", true, true, true, true, true],
  },
  {
    type: "tbody",
    data: ["X Lite", true, true, true, true, true],
  },
  {
    type: "tbody",
    data: [
      "X Plus",
      false,
      "$50/month/profile",
      "$50/month/profile",
      "$50/month/profile",
      "$50/month/profile",
    ],
  },
  {
    type: "tbody",
    data: [
      "Advocacy",
      false,
      "$150/month",
      "$150/month",
      "$150/month",
      "Custom",
    ],
  },
  {
    type: "tbody",
    data: [
      "Customer support",
      "email support",
      "email support",
      "email & chat support",
      "email & chat support",
      "email & chat & video call",
    ],
  },
  {
    type: "tbody",
    data: [
      "Response time",
      "best efforts",
      "6hrs or less",
      "2hrs or less",
      "1hrs or less",
      "30mins or less",
    ],
  },
  {
    type: "tbody",
    data: ["Training", false, false, false, false, "1-1 training"],
  },
  {
    type: "tbody",
    data: ["Dedicated account manager", false, false, true, false, true],
  },
  {
    type: "tbody",
    data: ["Quaterly business review", false, false, true, false, true],
  },
  {
    type: "tbody",
    data: ["Single Sign-On (SSO)", false, false, true, false, true],
  },
  {
    type: "tbody",
    data: ["CRM Integration", false, false, true, false, true],
  },
];

export const accordionDashboard: AccordionItem[] = [
  {
    title: "What is Agorapulse?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Agorapulse is a top player in social media management, known for its award-winning platform and industry-leading customer support. But we're more than just accolades. Our Social ROI feature goes a step further, allowing users to measure the real business impact of their organic social media efforts, beyond just engagement metrics.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Diving into the details, our user-friendly dashboard equips businesses, agencies, and marketers with the tools to schedule posts, monitor social conversations, engage with followers, and analyze performance seamlessly. Whether you're a small business or a large enterprise, Agorapulse has tailored solutions to fit your brand's needs.",
          },
        ],
      },
    ],
  },
  {
    title:
      "How is Agorapulse different from other social media management tools?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Where do we even start? Agorapulse offers teams and marketers a more streamlined workflow, more features, and more support at a more affordable price than other popular tools like ",
          },
          {
            type: "link",
            text: "Hootsuite™",
            url: "https://www.agorapulse.com/hootsuite-alternatives/",
          },
          {
            type: "text",
            text: " or ",
          },
          {
            type: "link",
            text: "Sprout Social™",
            url: "https://www.agorapulse.com/blog/social-media-management-tools/agorapulse-vs-sprout-social/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Plus, with the #1 customer support team in the industry, Agorapulse users routinely receive fast, thorough support and even opportunities to request features, leave feedback, and help us improve our tool.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "To date, we've won awards from third-party review sites like G2, Capterra, and TrustRadius in critical categories, such as:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "Estimated social media ROI",
          "Usability",
          "Results",
          "Audience engagement analysis",
          "User satisfaction",
          "Ease of setup",
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Currently, we're also the only social media management scheduling tool that allows you to quickly and easily track sales, traffic, and leads generated from your organic social media posts so you can make data-driven decisions.",
          },
        ],
      },
    ],
  },
  {
    title: "Who's Agorapulse for?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Agorapulse is for businesses of all sizes, social media managers, digital marketers, and agencies looking for a comprehensive tool to manage multiple social media accounts. Whether you're a solopreneur, a growing start-up, or a large enterprise with complex social media needs, Agorapulse can help you accelerate your workflow and optimize your social media performance.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "link",
            text: "Click here to start your free account.",
            url: "https://www.agorapulse.com/blog/success-stories/",
          },
        ],
      },
    ],
  },
  {
    title: "Can I use Agorapulse for free?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Yes. Our Free plan allows you to create one user and 3 social profiles. Features include:",
          },
        ],
      },
      {
        type: "list",
        items: [
          "10 scheduled posts",
          "Basic social Inbox",
          "Basic reporting",
          "Limited Social Media ROI report",
          "Mobile app",
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "link",
            text: "Click here to start your free account.",
            url: "https://app.agorapulse.com/auth/signup?plan=free&language=en&_gl=1*98o9gn*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDc1NzMxMjEkbzE1JGcxJHQxNzQ3NTczMjAzJGo0OSRsMCRoMCRkR091OThPaHJ6R2RxQi1UaUNDYS1aWnF1N292NDhJTTlsZw..",
          },
        ],
      },
    ],
  },
  {
    title: "Can I connect multiple social media platforms?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Yes. You can connect Facebook, Instagram, LinkedIn, Twitter (X), YouTube, and other supported platforms to manage all your accounts from a single interface.",
          },
        ],
      },
    ],
  },
  {
    title: "Does Agorapulse support team collaboration?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Absolutely! You can invite team members, assign roles, review content, and collaborate on your social media strategy in real-time.",
          },
        ],
      },
    ],
  },
  {
    title: "How does Agorapulse help with reporting?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Agorapulse offers comprehensive reports on engagement, reach, audience growth, and ROI. You can customize reports and schedule automated report delivery to stakeholders.",
          },
        ],
      },
    ],
  },
  {
    title: "Is there a limit to scheduled posts?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Depending on your plan, you can schedule hundreds of posts in advance across multiple social profiles, allowing you to stay organized and maintain consistent posting schedules.",
          },
        ],
      },
    ],
  },
  {
    title: "Can I monitor brand mentions?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Yes, Agorapulse includes social listening features that allow you to monitor brand mentions, keywords, hashtags, and competitors, helping you stay on top of relevant conversations.",
          },
        ],
      },
    ],
  },
  {
    title: "Is there customer support available?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Our award-winning support team is available 24/7 to assist you via chat or email. We pride ourselves on fast response times and helpful solutions.",
          },
        ],
      },
    ],
  },
];

export const accordionPricing: AccordionItem[] = [
  {
    title: "How does the 30-day trial work?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Your free trial lets you explore Agorapulse with no credit card needed! After your first 15 days of trial, you can either subscribe or renew it once for another 15 days ",
          },
          {
            type: "link",
            text: "(instructions here)",
            url: "https://support.agorapulse.com/en/articles/8762631-how-can-i-renew-my-free-trial-with-agorapulse?_gl=1*rsv2yr*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDk5ODUwMjIkbzM5JGcxJHQxNzQ5OTg4NDc1JGo1NSRsMCRoMA..",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "By default, your trial includes 1 user and 20 social profiles, and you will be able to add up to 3 more users. You also have access to our most advanced features such as the content Library and advanced Social Media ROI reports.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "If you need more social media profiles or users during your trial, contact us ",
          },
          {
            type: "link",
            text: "here",
            url: "https://www.agorapulse.com/contact/",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "If at any point during the trial you plan to subscribe to Agorapulse, great! ",
          },
          {
            type: "link",
            text: "Here ",
            url: "https://support.agorapulse.com/en/articles/8762844-how-to-subscribe-to-agorapulse?_gl=1*2lor77*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDk5ODUwMjIkbzM5JGcxJHQxNzQ5OTg5NzY0JGo1NyRsMCRoMA..",
          },
          {
            type: "text",
            text: "are detailed instructions and screenshots on how to subscribe.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "If you take the trial and decide not to subscribe to Agorapulse, we wish you well in finding a great social media management tool. We’re constantly evolving to make social media management even easier.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "link",
            text: "Subscribe to our release notes ",
            url: "https://www.agorapulse.com/release-notes/",
          },
          {
            type: "text",
            text: "or check back in a few months to see if we better meet your needs.",
          },
        ],
      },
    ],
  },
  {
    title: "What is a social profile?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "The social profiles we support are Facebook pages, Facebook groups, X (Twitter) accounts, Instagram business profiles, LinkedIn profiles, LinkedIn company pages, and YouTube channels. You can mix and match these profiles up to the cumulative social profile limit of each plan. ",
          },
          {
            type: "link",
            text: "More info",
            url: "https://support.agorapulse.com/en/articles/8762832-what-is-a-social-profile?_gl=1*aqa2fv*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDk5ODUwMjIkbzM5JGcxJHQxNzQ5OTg5NzY0JGo1NyRsMCRoMA..",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    ],
  },
  {
    title: "What should I do if I have a question during my trial?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "We're here to help! Just reach out to support@agorapulse.com.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "We offer around-the-clock customer service. Our support team has an average response time of 16 minutes and a happiness score of 96%. Don’t believe us? ",
          },
          {
            type: "link",
            text: "Check out what G2 reviewers say ",
            url: "https://www.g2.com/products/agorapulse/reviews?utf8=%E2%9C%93&filters%5Bnps_score%5D=5",
          },
          {
            type: "text",
            text: "about us versus other social media management tools.",
          },
        ],
      },
    ],
  },
  {
    title: "Does Agorapulse offer nonprofit pricing?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Indeed. All registered nonprofit organizations are entitled to a 20% discount on our self-service plans, monthly or yearly.",
          },
        ],
      },
    ],
  },
  {
    title: "What payment options do you offer?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "We accept Visa, Mastercard, AmEx, or PayPal through our secure online payment system. If you subscribe to a monthly plan, you will be billed each month on the anniversary of your subscription. No contracts or commitments necessary—and you can cancel at any time.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "We do offer invoicing for our annual plans as needed. Payment must be made via EFT (no checks). Please contact sales@agorapulse.com if you require manual payment.",
          },
        ],
      },
    ],
  },
  {
    title: "Can I change my plan after subscribing?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Yes, you can upgrade or downgrade your plan at any time directly from your billing settings. The changes will be prorated based on your current billing cycle.",
          },
        ],
      },
    ],
  },
  {
    title: "Do you offer discounts for annual subscriptions?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Absolutely! We offer a significant discount if you choose to pay yearly instead of monthly. Annual plans can save you up to 20% compared to paying monthly.",
          },
        ],
      },
    ],
  },
  {
    title: "Are there any setup fees?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "No, we do not charge any setup fees. You can get started immediately after signing up.",
          },
        ],
      },
    ],
  },
  {
    title: "What happens if I cancel my subscription?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "If you cancel, you’ll continue to have access to your subscription features until the end of your current billing period. After that, your account will revert to our free plan.",
          },
        ],
      },
    ],
  },
  {
    title: "Is my payment information secure?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Yes. We use industry-standard SSL encryption and partner with certified PCI DSS-compliant payment processors to ensure your payment information is fully secure.",
          },
        ],
      },
    ],
  },
  {
    title: "Can I get a refund if I change my mind?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "We do not offer refunds for subscriptions, but you can cancel anytime to prevent future charges. Please review our full ",
          },
          {
            type: "link",
            text: "Refund Policy",
            url: "https://www.agorapulse.com/refund-policy/",
          },
          {
            type: "text",
            text: " for more details.",
          },
        ],
      },
    ],
  },
  {
    title: "Do you offer custom enterprise pricing?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Yes, for larger organizations with complex needs, we offer custom enterprise plans with tailored features, onboarding, and dedicated support. Please contact our sales team for a personalized quote.",
          },
        ],
      },
    ],
  },
  {
    title: "Are taxes included in the pricing?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Applicable taxes (such as VAT or GST) will be calculated and added at checkout based on your location and local regulations.",
          },
        ],
      },
    ],
  },
  {
    title: "Do you support multiple currencies?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Currently, all payments are processed in USD. Currency conversion may be applied by your bank or credit card provider.",
          },
        ],
      },
    ],
  },
];

export const topFeatureNavbarOptions = [
  {
    icon: "FaInbox",
    title: "Inbox",
    color: "orange",
    description: "Take control of your social media",
    hoverColor: "group-hover:text-orange-600",
  },
  {
    icon: "LuSend",
    title: "Publishing",
    color: "indigo",
    description: "Everything you need to publish on social media",
    hoverColor: "group-hover:text-indigo-400",
  },
  {
    icon: "TbWorldSearch",
    title: "Listening",
    color: "emerald",
    description:
      "Discover what people are saying about your brand, industry, and competitors",
    hoverColor: "group-hover:text-emerald-300",
  },
  {
    icon: "LuChartNoAxesCombined",
    title: "Reporting",
    color: "blue",
    description: "Measeure the business result of your social media efforts",
    hoverColor: "group-hover:text-sky-600",
  },
  {
    icon: "BiTachometer",
    title: "ROI",
    color: "red",
    description: "Get actionable insights to inform your social strategy",
    hoverColor: "group-hover:text-red-400",
  },
];

export const advancedFeatureNavbarOptions = [
  {
    icon: "RxMagicWand",
    title: "AI Writing Assistant",
    description: "Write better, faster",
    hoverColor: "group-hover:text-red-400",
  },
  {
    icon: "IoIosLink",
    title: "PulseLink in Bio",
    description: "Link in bio tool from Agorapulse",
    hoverColor: "group-hover:text-indigo-400",
  },
  {
    icon: "HiOutlineSpeakerphone",
    title: "Advocacy",
    description: "Amplify your message to boost reach",
    hoverColor: "group-hover:text-sky-600",
    tag: "New!",
  },
];

export const solutionsNetworkIntegrationNavbarOptions = [
  {
    icon: "FaFacebook",
    title: "Facebook",
    description: "Stramline your Facebook management",
    hoverColor: "group-hover:text-blue-400",
  },
  {
    icon: "FaInstagram",
    title: "Instagram",
    description: "Build your organic growth on Instagram",
    hoverColor: "group-hover:text-pink-400",
  },
  {
    icon: "BsTwitterX",
    title: "X (Twitter)",
    description: "Grow your X (Twitter) effortlessly",
    hoverColor: "group-hover:text-black",
  },
  {
    icon: "FaLinkedin",
    title: "LinkedIn",
    description: "Build a strong LinkedIn presence",
    hoverColor: "group-hover:text-blue-500",
  },
  {
    icon: "FaPinterest",
    title: "Pinterest",
    description: "Plan, schedule and pin",
    hoverColor: "group-hover:text-red-500",
  },
  {
    icon: "FaTiktok",
    title: "TikTok",
    description: "Grow your TikTok channels",
    hoverColor: "group-hover:text-black",
  },
  {
    icon: "FaYoutube",
    title: "YouTube",
    description: "Conquer the world of videos",
    hoverColor: "group-hover:text-red-500",
  },
  {
    icon: "BsThreads",
    title: "Threads",
    description:
      "Share ideas, ask question, post random throughts, find your people and more.",
    hoverColor: "group-hover:text-black",
  },
  {
    icon: "SiGoogleanalytics",
    title: "Google Analytics",
    description: "Track and measure the business results of your compaigns",
    hoverColor: "group-hover:text-orange-500",
  },
];

export const solutionsIndustrieNavbarOptions = [
  {
    icon: "LuBuilding2",
    title: "For Agencies",
    description: "Preferred choice for agencies, priced for growing teams",
    hoverColor: "group-hover:text-red-400",
  },
  {
    icon: "GiShoppingCart",
    title: "For E-Commerce",
    description: "Sell online easily and efficiently",
    hoverColor: "group-hover:text-red-400",
  },
  {
    icon: "RiHandbagLine",
    title: "For Multi-Location Retail Stores",
    description: "Build a better retail experience on social media",
    hoverColor: "group-hover:text-red-400",
  },
  {
    icon: "PiSwap",
    title: "For B2B Companies",
    description: "Tailored social media solutions for B2B success",
    hoverColor: "group-hover:text-red-400",
  },
];
