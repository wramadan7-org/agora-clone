import { AccordionItem } from "../components/accordions/frequently-question/AccordionComponent";
import { FeatureTitle } from "../types/cardTypes";
import { PrivacyPolicy } from "../types/renderTypes";

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
    icon: "FaUsers",
    title: "Customer",
    color: "orange",
  },
  {
    icon: "LuSend",
    title: "Sales",
    color: "indigo",
  },
  {
    icon: "TbWorldSearch",
    title: "Omnichannel",
    color: "emerald",
  },
  {
    icon: "LuChartNoAxesCombined",
    title: "Reporting",
    color: "blue",
  },
  {
    icon: "BiTachometer",
    title: "Mobile",
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
  customer: {
    backgroundHover: "hover:bg-orange-50",
    backgroundActive: "bg-orange-50",
    textHover: "group-hover:text-orange-600",
    textActive: "text-orange-600",
  },
  sales: {
    backgroundHover: "hover:bg-indigo-50",
    backgroundActive: "bg-indigo-50",
    textHover: "group-hover:text-indigo-400",
    textActive: "text-indigo-400",
  },
  omnichannel: {
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
  mobile: {
    backgroundHover: "hover:bg-red-50",
    backgroundActive: "bg-red-50",
    textHover: "group-hover:text-red-400",
    textActive: "text-red-400",
  },
};

export const descriptionFeature = {
  customer: {
    icon: "FaUsers",
    title: "Kelola tiap pelanggan secara personal dan bangun loyalitas",
    description:
      "Ketahui kebutuhan setiap pelanggan melalui daftar riwayat aktivitas pelanggan dan bangun loyalitas pelanggan.",
    adventages: [
      "Manajemen Prospek",
      "Manajemen Organisasi",
      "Integrasi API Data Prospek",
      "Manajemen Kontak",
      "Riwayat Aktivitas Pelanggan",
    ],
    type: "Customer",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/screenshot-social-media-inbox-2.webp",
  },
  sales: {
    icon: "LuSend",
    title: "Pantau Progress Penjualan dengan Analisa yang Tepat",
    description:
      "Pantau progress tahapan penjualan bisnis Anda lebih mudah di satu halaman dan buat analisa yang lebih baik",
    adventages: [
      "Pipeline Penjualan",
      "Multiple Pipeline",
      "Analisis Pencapaian Penjualan",
      "Riwayat Aktivitas Penjualan",
    ],
    type: "Sales",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/screenshot-social-media-publishing-2.webp",
  },
  omnichannel: {
    icon: "TbWorldSearch",
    title: "Terhubung dengan Pelanggan dari Saluran Mana Pun",
    description:
      "Permudah proses penjualan Anda dengan pelanggan karena bisa berinteraksi dari saluran mana pun",
    adventages: [
      "Integrasi Pesan",
      "Integrasi Call Center",
      "Integrasi Sosial Media",
      "Integrasi Sistem Lainnya",
    ],
    type: "Omnichannel",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/screenshot-social-media-monitoring-2.webp",
  },
  reporting: {
    icon: "LuChartNoAxesCombined",
    title: "Pantau KPI Setiap Sales dengan Objektif, Akurat, dan Realtime",
    description:
      "Lihat kinerja tim sales Anda dengan akurat berdasarkan laporan pekerjaan yang telah dilakukan",
    adventages: [
      "Pantau KPI Harian Staf",
      "Target Revenue Staf",
      "Ekspor Laporan Pencapaian",
      "Dashboard Pencapaian",
      "Analisis Kinerja Setiap Staf",
    ],
    type: "Reporting",
    image:
      "https://www.agorapulse.com/assets/hv2-home2/screenshot-social-media-reporting.webp",
  },
  mobile: {
    icon: "BiTachometer",
    title: "Lakukan Penjualan Di Mana Saja dan Kapan Saja",
    description:
      "Aplikasi mobile Barantum mempermudah tim ketika sedang melakukan kunjungan lapangan ke tempat pelanggan",
    adventages: [
      "Remote Sales",
      "Laporan Real Time",
      "Tersedia di IOS & Android",
      "Akses Data dari Mana Pun",
      "Notifikasi Agenda",
    ],
    type: "Mobile",
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
    icon: "FaUsers",
    title: "Customer",
    color: "orange",
    description: "Take control of your social media",
    hoverColor: "group-hover:text-orange-600",
  },
  {
    icon: "LuSend",
    title: "Sales",
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
    title: "Mobile",
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

export const resourceStrengthYourSkillNavbarOptions = [
  {
    title: "Blog",
    description: "Insight, ternds, and winning strategies",
  },
  {
    title: "Community",
    description:
      "Get inspired by your peers in discussions, sharing tips, and more",
  },
  {
    title: "Ebooks & Downloads",
    description:
      "Get fresh, actionable tips on the social media channels you use most",
  },
  {
    title: "Events & Webinars",
    description: "Insight from industry experts",
  },
  {
    title: "Free Tools",
    description: "Improve your results at no cost",
  },
  {
    title: "Resource Center",
    description: "Reports and content to shape strategy",
  },
  {
    title: "Podcast",
    description:
      "Listen to stories and strategies from social media professionals, just like you",
  },
];

export const resourceLearnConnectNavbarOptions = [
  {
    title: "Case Studies",
    description: "Loved by marketers and agencies worlwide",
  },
  {
    title: "Help Center",
    description: "Get answer about using Agorapulse",
  },
  {
    title: "Video Tutorials",
    description: "Explore all of Agorapulse's powerfull features",
  },
];

export const privacyPolicy: PrivacyPolicy = {
  title: "Kebijakan Privacy",
  contents: [
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            'Barantum.com (selanjutnya disebut "Barantum" atau "kami") merupakan lembaga yang memiliki komitmen tinggi terhadap seluruh hal yang berkaitan dengan perlindungan data yang Anda simpan pada sistem kami. Kami bertanggung jawab dan berkomitmen untuk melindungi data yang Anda percayakan kepada kami sesuai dengan prinsip-prinsip keamanan data dan peraturan yang berlaku.',
        },
      ],
    },
  ],
  sections: [
    {
      heading: "Definition",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                '"Data Pribadi" mengacu pada data apapun (baik benar ataupun tidak) tentang seseorang yang dapat diidentifikasi (i) dari data tersebut; atau (ii) dari data dan informasi lain yang kami miliki atau yang akan kami akses, termasuk data dalam catatan kami.',
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                '"Data Layanan" mengacu pada data apapun yang dibuat oleh Anda sebelum menggunakan Produk dan Layanan kami, termasuk pada data penggunaan seperti jumlah pesan yang dikirim, jumlah pengguna aktif, riwayat pengiriman pesan, log, tanggal, jenis perangkat, jenis dan versi browser, perangkat lunak, lokasi geografis, alamat IP, sumber/URL rujukan, waktu yang dihabiskan di situs web kami, dan metadata pesan lainnya. Termasuk Data Pribadi yang dimiliki orang lain dan dibagikan oleh Anda.',
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                '"Pihak Ketiga" mengacu pada setiap individu atau entitas di luar kami dan afiliasi kami, termasuk Pihak Ketiga yang menyediakan layanan dan produk yang mendukung penyediaan Produk dan Layanan kami.',
            },
          ],
        },
      ],
    },
    {
      heading: "Bagaimana kami mengumpulkan data Anda",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Aplikasi Barantum CRM adalah aplikasi bisnis yang bergerak di bidang Customer Relationship Management. Aplikasi ini dapat digunakan untuk semua jenis bisnis di Indonesia. Sehingga ketika Anda menggunakan aplikasi Barantum CRM yang dimulai dengan mengakses pendaftaran di situs kami, maka secara langsung atau tidak langsung Anda telah memberikan beberapa data pribadi Anda yang diperlukan untuk menjalankan aplikasi ini.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Beberapa data yang telah Anda berikan kepada kami akan langsung kami simpan dan dijaga dengan sistem keamanan dan penyimpanan data sesuai dengan ketentuan yang terdapat dalam Kebijakan ini. Ada beberapa data pribadi yang kami simpan pada awal penggunaan aplikasi ini, seperti nama lengkap, nama perusahaan dan jabatan Anda, nomor telepon, hingga usia Anda.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Kami berasumsi bahwa semua data yang Anda masukkan ke dalam Barantum adalah benar. Dan, segala hal yang berkaitan dengan data tersebut menjadi tanggung jawab Anda sebagai pengguna aplikasi CRM ini. Dimana kami sebagai penyedia aplikasi hanya berfungsi sebagai media penyimpanan data dan layanan pengelolaan data, tanpa adanya hak untuk menggunakan data tersebut untuk apapun.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Berbagai data yang Anda masukkan di aplikasi Barantum hanya digunakan sesuai dengan fungsi aplikasi itu sendiri, yaitu:",
            },
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Kami menggunakan data pribadi sebagai basic data yang menunjukkan jumlah pengguna (pengguna aktif Barantum CRM sesuai dengan waktu ter-update).",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Data organisasi/perusahaan adalah basic data yang kami gunakan untuk membuat analisis terkait jenis dan kategori bisnis apa saja yang tergabung menjadi anggota Barantum CRM.",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Berbagi data ke pihak ketiga: pada dasarnya kami tidak akan pernah melakukannya dalam bentuk apapun, kecuali mendapatkan persetujuan dari Anda sebagai pemilik akun. Adapun jika Anda (pengguna) karena satu dan lain hal mengajukan permintaan kepada kami untuk berbagi data dengan pihak ketiga, prosedur yang akan kami lakukan sebagai berikut:",
                },
              ],
              subItems: [
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Kami telah menerima persetujuan dari PIC (perusahaan yang bertanggung jawab).",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        'Kami mendapatkan otoritas untuk membagikan data sesuai dengan kesepakatan Anda dengan pihak ketiga setelah poin "A" terpenuhi terlebih dahulu.',
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        'Kami tidak akan mendapat sanksi apapun dari perusahaan Anda maupun dari Anda sebagai pemegang akun terkait dengan yang kami lakukan pada poin "B".',
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Kami tidak akan bertanggung jawab atas kondisi yang terjadi selanjutnya setelah poin A, B, C terpenuhi dan kami memberikan data kepada pihak ketiga.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "Bagaimana kami menggunakan data Anda",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Data dan Informasi yang Anda berikan kepada kami akan digunakan untuk tujuan berikut:",
            },
          ],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Untuk memberikan bantuan teknis kepada Anda atau untuk menyelesaikan tugas yang Anda minta. Misalnya, ketika Anda meminta bantuan dari tim Support kami, kami akan menggunakan Data Pribadi dan Layanan Anda dalam memberikan bantuan yang disesuaikan dengan kebutuhan Anda;",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Untuk memantau, memelihara, dan meningkatkan Layanan kami;",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Untuk mengelola penagihan dan pembayaran. Pembayaran Pihak Ketiga dan penyedia pemrosesan kartu kredit Pihak Ketiga terlibat dalam proses penagihan dan pembayaran kami. Pihak Ketiga tidak diizinkan untuk menyimpan atau menggunakan Informasi Penagihan selain untuk pemrosesan kartu kredit dan harus menjaga rahasia yang berkaitan dengan batasan untuk memberikan informasi yang dikumpulkan kepada Pihak Ketiga lainnya;",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Untuk menindaklanjuti atau berkomunikasi dengan Anda tentang keinginan untuk menggunakan Barantum ketika Anda menghubungi kami untuk meminta informasi lebih lanjut, melakukan pendaftaran di acara kami, mengirimkan pertanyaan, dan sebagainya;",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Untuk membagikan konten bermanfaat yang mungkin menarik bagi Anda dan memberi tahu Anda tentang Produk dan Layanan terbaru kami (“Marketing”);",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content: "Untuk mengatur dan mengelola akun Barantum Anda;",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Untuk menyediakan dan mengelola komunitas acara kami. Kami dapat menyediakan blog, grup obrolan komunitas, atau bahkan forum di situs web atau aplikasi kami (disebut “Platform Komunitas”). Setiap Data Pribadi yang Anda pilih untuk dikirimkan ke Platform Komunitas tersebut dapat dibaca, dikumpulkan, atau digunakan oleh orang lain yang mengunjungi platform ini, dan dapat digunakan untuk mengirim pesan kepada Anda. Kami tidak bertanggung jawab untuk mengelola Data Pribadi yang Anda bagikan di Platform Komunitas;",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Untuk menautkan akun Barantum Anda ke akun pihak ketiga seperti WhatsApp Business, Instagram, Google, Github, Facebook, Telegram, Instagram, LINE, email, dan sebagainya;",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Untuk menghasilkan data pelatihan yang berasal dari Data Layanan untuk penelitian, pengembangan, dan analisis bisnis;",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Untuk tujuan lain yang kami yakini perlu atau sesuai: (a) berdasarkan hukum yang berlaku, termasuk hukum di luar negara tempat tinggal Anda; (b) mematuhi proses hukum; (c) menanggapi permintaan dari otoritas publik dan pemerintah, termasuk otoritas publik dan pemerintah di luar negara tempat tinggal Anda; (d) menegakkan syarat dan ketentuan kami; (e) melindungi operasi kami atau operasi afiliasi kami; (f) melindungi hak, privasi, keamanan atau properti kami, dan/atau milik afiliasi kami, Anda atau orang lain; dan (g) untuk memungkinkan kami mengupayakan pemulihan yang tersedia atau membatasi kerusakan yang mungkin kami alami.",
                },
              ],
            },
            {
              parts: [
                {
                  type: "text",
                  content:
                    "Anda menyetujui bahwa Barantum dapat menggunakan nama dan logo perusahaan Anda dalam semua materi promosi, pemasaran, siaran pers, dan di situs web Barantum. Persetujuan ini mencakup segala bentuk atau format promosi dan pemasaran, termasuk namun tidak terbatas pada cetak, digital, dan media promosi lainnya.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "Google Ads, Google OAuth, Gmail",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                'Saat menggunakan Produk dan Layanan kami, Anda mungkin diminta untuk memberikan otoritas dan membagikan data Anda ke Google OAuth (“Google OAuth”), Google Ads ("Google Ads"), dan/atau Gmail ("Google Mail"). Anda mungkin perlu memberikan persetujuan Anda kepada Google OAuth, Google Ads, dan/atau Gmail melalui Layar Persetujuan OAuth di Google API Console. Kami menjamin bahwa setiap data yang Anda berikan ke Google OAuth, Google Ads, dan/atau Gmail hanya akan digunakan untuk tujuan penyediaan layanan.',
            },
          ],
        },
        {
          type: "paragraph",
          parts: [{ type: "text", content: "CATATAN" }],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Penggunaan Data Layanan juga diatur oleh Perjanjian Layanan yang Anda buat dengan kami sehubungan dengan layanan langganan yang Anda gunakan. Jika ada masalah yang timbul antara Kebijakan Privasi dan Perjanjian Layanan, Perjanjian Layanan akan diperbarui.",
            },
          ],
        },
      ],
    },
    {
      heading: "Mengakses, memperbaiki, dan menghapus informasi Anda",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Anda dapat mengakses, memperbaiki, atau menghapus Data Pribadi yang telah Anda berikan kepada kami dengan menggunakan tools yang tersedia di dalam Produk dan/atau Layanan (misalnya, mengedit informasi profil Anda pada Produk dan Layanan) atau dengan menghubungi support@barantum.com.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Perubahan informasi yang Anda lakukan di Produk dan Layanan kami akan segera berlaku di jaringan Anda, namun data akan tersimpan dalam penyimpanan yang aman untuk jangka waktu terbatas dan setelahnya akan menjadi bagian dari proses pencadangan data standar kami.",
            },
          ],
        },
      ],
    },
    {
      heading: "Anak-anak",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Sulit bagi kami untuk membedakan usia pengguna yang mengakses dan menggunakan situs web. Jika seseorang menurut hukum yang berlaku dikategorikan sebagai anak di bawah umur dan telah memberikan kepada kami Data Pribadi atau Data Layanan tanpa persetujuan orang tua atau wali, maka orang tua atau wali tersebut harus menghubungi kami untuk menghapus data dan menghentikan langganan anak di bawah umur tersebut.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Jika kami mengetahui bahwa seorang pengguna berusia di bawah 13 (tiga belas tahun), dia tidak boleh mendaftarkan akun atau menggunakan Layanan kami. Kami akan mengambil langkah-langkah yang tepat untuk menghapus informasi pengguna dari database dan membatasi akses pengguna di masa mendatang ke Produk dan Layanan kami.",
            },
          ],
        },
      ],
    },
    {
      heading: "Sistem keamanan",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Barantum sangat serius dalam menjaga keamanan Anda. Kami menyadari dan mengetahui bahwa Anda mempercayakan Barantum dengan informasi dan dokumen penting yang Anda miliki. Informasi Anda dienkripsi dan dilindungi dengan teknologi dan keamanan terkemuka.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Untuk melindungi data Anda, kami telah menerapkan standar SSL & HTTPS Internasional dengan enkripsi sertifikat 2048-bit. Standar ini merupakan alat untuk menerapkan sistem keamanan terkait kerahasiaan, integritas, dan ketersediaan data yang tersedia bagi kami.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Kami juga selalu berusaha untuk meningkatkan keamanan data Anda dengan menggunakan teknologi terbaru dan berusaha untuk mematuhi semua peraturan yang berlaku, terutama yang terkait dengan pihak ketiga/pihak terkait. Karena kami berkomitmen bahwa semua data klien yang tersimpan di sistem kami menjadi prioritas kami untuk melindunginya dari kondisi apapun.",
            },
          ],
        },
      ],
    },
    {
      heading:
        "Kami mengenkripsi setiap data yang dapat diketahui sebagai milik pelanggan",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Di sistem kami, semua data Anda aman tersimpan dengan sandi khusus untuk setiap pengguna. Kami mengenkripsi data apapun yang dapat diketahui sebagai milik pelanggan, termasuk nama & alamat email Anda.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Untuk keamanan kata sandi Anda, kami menggunakan teknologi Hashing untuk mengurangi risiko peretasan kata sandi. Kami menerapkan teknik yang sama untuk semua file yang Anda upload.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Seperti sistem lain, keamanan informasi Anda juga bergantung pada Anda. Pilihlah kata sandi yang kuat ",
            },
            {
              type: "bold",
              content:
                "(kami melakukan yang terbaik untuk memandu Anda melakukan ini dan melindungi Anda dari peretasan kata sandi)",
            },
            {
              type: "text",
              content:
                ", dan tidak pernah memberi tahu atau mendistribusikannya kepada orang lain.",
            },
          ],
        },
      ],
    },
    {
      heading: "Amankan data Anda saat transit",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                'Bahkan jika seseorang mencoba untuk "mendengar secara diam-diam" komunikasi Anda, mereka tetap tidak dapat mendekripsi data. Semua komunikasi antara Barantum dan Anda dienkripsi dengan SSL menggunakan sertifikat 2048-bit, dan kami memerlukan SSL untuk semua komunikasi. Teknik ini dilakukan agar bahkan jika seseorang mencoba "mendengar secara diam-diam" komunikasi Anda, mereka tetap tidak akan dapat melakukan dekripsi untuk mencuri data Anda.',
            },
          ],
        },
      ],
    },
    {
      heading: "Privasi",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                'Kebijakan privasi ini (selanjutnya disebut sebagai "Polis") dirancang untuk mengumpulkan dan mengelola data sesuai dengan apa yang menjadi kepentingan kami untuk melayani Anda. Khusus pengelolaan data yang terdapat pada: ',
            },
            {
              type: "link",
              isBold: true,
              href: "https://barantum.com",
              content: "https://barantum.com ",
            },
            {
              type: "text",
              content:
                '(selanjutnya disebut "Situs"), dan atau aplikasi CRM yang kami kembangkan di ',
            },
            {
              type: "link",
              isBold: true,
              href: "https://barantum.com",
              content: "https://barantum.com ",
            },
            {
              type: "text",
              content:
                '(selanjutnya disebut "Produk"). Dengan menggunakan produk CRM dan mengakses situs kami, Anda setuju dan terikat langsung dengan hal-hal yang tercantum dalam kebijakan.',
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Oleh karena itu, kami berharap Anda akan membaca dan memahami semua hal yang terkait dengan kebijakan privasi ini.",
            },
          ],
        },
      ],
    },
    {
      heading: "Penggunaan Cookie",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Cookie adalah file teks yang ditempatkan di komputer dan ponsel Anda. Dimana fungsi cookies adalah untuk keperluan pencatatan. Kami menggunakan cookie untuk membantu Anda mempermudah penggunaan produk. Cookie tidak dapat digunakan untuk menjalankan program atau mengirim virus ke komputer Anda. Namun, cookie akan berfungsi untuk merekam data Anda seperti data yang Anda simpan di situs atau Produk kami.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Contoh penggunaannya: Jika Anda membuat akun di Situs kami, cookie akan membantu kami mengingat data khusus untuk kunjungan Anda berikutnya. Saat Anda kembali ke Situs, data yang Anda berikan sebelumnya akan muncul kembali. Dengan kondisi seperti ini, proses kerja Anda menjadi lebih mudah dengan mengaktifkan cookie. Fungsi lain dari cookie adalah oleh pihak lain dapat menganalisis data untuk kami. Seperti yang dilakukan Google Analytics, mereka akan mengumpulkan data Anda yang tidak dapat diidentifikasi sebagai pribadi dengan semua aktivitas mereka, terutama saat menggunakan produk.",
            },
          ],
        },
      ],
    },
    {
      heading: "Kontak",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Untuk memudahkan komunikasi antara kedua belah pihak, baik dari pihak Anda maupun pihak Barantum. Jika Anda memiliki keluhan, masukkan, atau pertanyaan tentang data Anda di sistem kami, silakan menghubungi kami melalui email: support@barantum.com.",
            },
          ],
        },
      ],
    },
    {
      heading: "Perubahan kebijakan privasi",
      contents: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Dengan segala hal yang telah kami jelaskan di atas, dengan ini kami menjelaskan bahwa kami berhak untuk mengubah atau menyempurnakan Kebijakan ini setiap kali kami merasa perlu untuk merevisi atau menyempurnakannya. Di mana kami akan secara otomatis mengunggah Kebijakan terbaru ke Situs.",
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              content:
                "Pembaruan kebijakan akan mempengaruhi penggunaan Anda atas Situs dan Produk. Namun, sebelumnya kami akan berusaha untuk selalu meng-update informasi terbaru terkait dengan revisi atau perubahan Polis kami (tentunya jika kami merasa perlu menyampaikan kepada klien dalam jangka waktu yang kami sesuaikan dengan kebutuhan). Dengan membaca dan memahami semua pembahasan tentang Keamanan dan Privasi, selama Anda masih menggunakan aplikasi Barantum CRM, Anda akan langsung menyetujui semua yang termuat dalam konten di halaman Keamanan dan Privasi ini.",
            },
          ],
        },
      ],
    },
  ],
};

export const termsOfConditions: PrivacyPolicy = {
  title: "Syarat dan Ketentuan",
  contents: [
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Syarat-syarat ini mengikat dan mulai berlaku untuk Anda saat Anda mulai mengakses layanan apapun dari Barantum.com untuk kemudian selanjutnya disebut sebagai Barantum.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Layanan Barantum dapat berubah dari waktu ke waktu berdasarkan kesan & saran dari pengguna. Syarat-syarat ini tidak dimaksudkan untuk menjawab setiap pertanyaan atau menunjukkan setiap masalah yang dapat timbul dari penggunaan layanan Barantum. Barantum berhak mengubah Syarat & Ketentuan ini kapan saja, dan mulai berlaku ketika Syarat & Ketentuan yang baru atau yang telah direvisi telah di lampirkan di Website Barantum. Kami akan selalu berusaha untuk mengumumkan perubahan-perubahannya kepada Anda melalui email. Karena cukup memungkinan bahwa Syarat & Ketentuan ini akan berubah dari waktu ke waktu, maka menjadi kewajiban Anda untuk memastikan bahwa Anda sudah membaca, mengerti, dan menyetujui Syarat & Ketentuan terbaru yang tersedia pada Website Barantum.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Dengan mendaftarkan diri untuk menggunakan layanan Barantum, Anda menyatakan bahwa Anda sudah membaca dan mengerti Syarat & Ketentuan ini, dan dianggap memiliki wewenang untuk bertindak atas nama siapapun yang terdaftar untuk menggunakan layanan kami.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content: "Syarat & Ketentuan berlaku sejak 1 Maret 2024.",
        },
      ],
    },
  ],
  sections: [
    {
      contents: [
        {
          type: "list",
          ordered: true,
          items: [
            {
              parts: [{ type: "bold", content: "Syarat & Ketentuan Barantum" }],
              subItems: [
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Perjanjian ",
                    },
                    {
                      type: "text",
                      content: "– ialah Syarat & Ketentuan ini;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Biaya ",
                    },
                    {
                      type: "text",
                      content:
                        "–  ialah biaya bulanan / tahunan (belum termasuk pajak) yang harus Anda bayar sesuai daftar biaya yang dicantumkan pada Website Barantum (yang dapat berubah dari waktu ke waktu sesuai dengan ketentuan Barantum dan dengan sepengetahuan Anda);",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Informasi Rahasia ",
                    },
                    {
                      type: "text",
                      content:
                        "– mencakup semua informasi yang dikomunikasikan antara pihak Perjanjian ini, baik secara tertulis, elektronik, atau lisan, termasuk Layanan ini, tapi tidak termasuk informasi yang sudah menjadi atau akan dijadikan untuk publik, terkecuali yang sudah diungkapkan dan terbongkar tanpa hak atau oleh pihak pengguna atau lainnya secara tidak sah;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Data ",
                    },
                    {
                      type: "text",
                      content:
                        "– berarti data apapun yang Anda masukkan atau dimasukkan dengan kewenangan Anda kepada Website dan Aplikasi Barantum;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Hak Kekayaan Intelektual ",
                    },
                    {
                      type: "text",
                      content:
                        "– berarti paten, merek dagang, merek jasa atau layanan, hak cipta, hak pada disain, pengetahuan, atau hak kekayaan intelektual atau industri lainnya, maupun terdaftar atau tidak terdaftar;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Layanan ",
                    },
                    {
                      type: "text",
                      content:
                        "– berarti layanan pengelolaan data didalam produk kami, dan operasional yang disediakan (dan dapat dirubah atau diperbarui dari waktu ke waktu) melalui Website;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Website ",
                    },
                    {
                      type: "text",
                      content:
                        "– berarti situs internet di domain www.barantum.com atau situs internet lainnya yang di kelola oleh Barantum;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Barantum ",
                    },
                    {
                      type: "text",
                      content:
                        "– merupakan merek dagang dari PT Kosada Group Indonesia yang terdaftar di Indonesia dengan nomor TDP 09.02.1.46.50058;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Pengguna Diundang ",
                    },
                    {
                      type: "text",
                      content:
                        "– berarti setiap orang atau badan, selain Pelanggan, yang memakai Layanan dari waktu ke waktu atas izin dari Pelanggan;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Pelanggan ",
                    },
                    {
                      type: "text",
                      content:
                        "– berarti orang, atas nama pribadi maupun organisasi atau badan lainnya, yang mendaftar untuk menggunakan Layanan;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Anda ",
                    },
                    {
                      type: "text",
                      content: "– berarti Pelanggan atau Pengguna Diundang.",
                    },
                  ],
                },
              ],
            },
            {
              parts: [{ type: "bold", content: "Penggunaan Software" }],
              descriptions: [
                {
                  type: "paragraph",
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum memberi Anda hak untuk mengakses dan memakai Layanan Barantum CRM ataupun Barantum Call Center melalui Website kami dengan peran penggunaan yang sudah ditentukan untuk Anda, sesuai dengan jenis layanan yang Anda pilih. Hak ini non-eksklusif, tidak dapat dipindah tangankan, dan bergantung pada perjanjian ini. Anda mengakui dan menyetujui, bergantung kepada perjanjian tulis apapun yang berlaku antara Pelanggan dan Pengguna Diundang, atau hukum lainnya yang berlaku:",
                    },
                  ],
                },
              ],
              subItems: [
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Bahwa sudah menjadi tanggung jawab Pelanggan untuk menentukan siapa yang mendapat akses sebagai Pengguna Diundang dan jenis peran dan hak yang mereka punya untuk mengakses jenis data yang Anda miliki; ",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Bahwa tanggung jawab Pelanggan untuk semua penggunaan Layanan oleh Pengguna Diundang;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Bahwa tanggung jawab Pelanggan untuk mengendalikan setiap tingkat akses untuk Pengguna Diundang kepada organisasi dan Layanan yang relevan setiap saat, dan bisa menarik atau mengubah akses atau tingkat akses Pengguna Diundang kapanpun, untuk alasan apapun;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Jika terjadi konflik antara Pelanggan dan Pengguna Diundang mengenai akses ke organisasi dan/atau Layanan, maka Pelanggan yang harus mengatur akses dan/atau batasan akses yang diberikan kepada Pengguna Diundang terkait Data dan/atau Layanan tersebut.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum mencatatkan setiap detail kegiatan penambahan, perubahan, dan penghapusan Data yang dilakukan oleh Pelanggan ke dalam log perubahan (change log) yang disimpan maksimal 1 tahun sejak tanggal kegiatan.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum berhak menerapkan Fair Usage Policy (FUP) terhadap Pelanggan yang terindikasi menyalahgunakan fitur-fitur Layanan Barantum. Penyalahgunaan ini mencakup, namun tidak terbatas pada, penggunaan yang berlebihan, tidak wajar, atau tidak sesuai dengan tujuan penggunaan layanan.",
                    },
                  ],
                },
              ],
            },
            {
              parts: [{ type: "bold", content: "Penyalahgunaan Software" }],
              descriptions: [
                {
                  type: "paragraph",
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum menerapkan standar keamanan internasional, yakni ISO 27001, dan secara konsisten mematuhi kebijakan privasi, sehingga Barantum menjaga kerahasiaan data Anda dan tidak melakukan pemeriksaan mendetail terhadap setiap tindakan yang Anda lakukan sebagai pengguna sistem Barantum. Kecuali diwajibkan oleh pihak berwenang dan/atau terdapat indikasi pelanggaran terhadap peraturan hukum atau ketentuan sesuai pada Pasal ini dan Pasal VIII ayat 6, maka Barantum berhak melakukan investigasi terhadap pelanggaran tersebut dan hasil investigasi dapat digunakan Barantum melakukan penangguhan atau pembatalan akun tanpa pemberitahuan sebelumnya dengan tanpa pengembalian pembayaran yang telah dilakukan.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  parts: [
                    {
                      type: "text",
                      content:
                        "Anda memiliki tanggung jawab penuh terkait penggunaan sistem dan wajib menjalankannya sesuai dengan hukum yang berlaku, seperti namun tidak terbatas, tidak menggunakan sistem untuk melakukan penipuan, perjudian, penagihan paksa hutang, pemerasan, dan segala bentuk aktivitas lain yang bertentangan dengan peraturan hukum.",
                    },
                  ],
                },
              ],
            },
            {
              parts: [{ type: "bold", content: "Ketersediaan Pelayanan Kami" }],
              subItems: [
                {
                  parts: [{ type: "bold", content: "Layanan" }],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Layanan kami memiliki jaminan 95% uptime minimal perbulan. Jika layanan kami jatuh di bawah 95% uptime, maka pelanggan kami berhak mengajukan laporan dan mendapatkan kompensasi secara prorata sesuai dengan ketidak tersediaan layanan dari kami.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [{ type: "bold", content: "Layanan Support" }],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Pelayanan Support kami tersedia melalui 3 media:",
                        },
                      ],
                    },
                  ],
                  subItems: [
                    {
                      parts: [
                        { type: "bold", content: "Chat via Website " },
                        {
                          type: "text",
                          content: ": 08.00 – 17.00 WIB, Hari Senin – Jumat",
                        },
                      ],
                      descriptions: [
                        {
                          type: "paragraph",
                          parts: [
                            {
                              type: "text",
                              content:
                                "*Chat yang diterima di luar jam kerja akan dibalas melalui email dalam kurun waktu 24 jam hari kerja berikutnya.",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      parts: [
                        { type: "bold", content: "Telepon " },
                        {
                          type: "text",
                          content: ": 08.00 – 17.00, Hari Senin – Jumat",
                        },
                      ],
                    },
                    {
                      parts: [
                        { type: "bold", content: "Email " },
                        {
                          type: "text",
                          content: ": 08.00 – 17.00, Hari Senin – Jumat",
                        },
                      ],
                      descriptions: [
                        {
                          type: "paragraph",
                          parts: [
                            {
                              type: "text",
                              content:
                                "*Email yang diterima di luar jam kerja akan dibalas dalam kurun waktu 24 jam hari kerja berikutnya.",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  subDescriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Untuk layanan support, feedback dan komplain, Pelanggan wajib mengirimkan request ke email support@barantum.com atau WhatsApp ke nomor 0812-8188-8636, untuk mendapatkan nomor tiket antrean agar dapat dimonitor oleh Quality Service Assurance dan manajemen Barantum.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Semua komunikasi melalui WhatsApp pribadi atau grup WhatsApp tidak akan mendapatkan nomor tiket pengerjaan dan di luar dari garansi layanan resmi Barantum.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              parts: [
                {
                  type: "bold",
                  content: "Kewajiban Anda",
                },
              ],
              subItems: [
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Kewajiban Pembayaran",
                    },
                  ],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Tagihan untuk Biaya Akses akan dibuat sesuai dengan kesepakatan periode (tahunan atau per 6 bulan) dari tanggal Anda mulai berlangganan untuk Layanan Barantum. Semua tagihan merupakan Biaya Akses untuk periode pemakaian ke depan. Kami akan terus membuat tagihan untuk Anda sesuai masa jatuh tempo sampai perjanjian ini diakhiri sesuai dengan pasal 10.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Setiap transaksi pembayaran yang dilakukan hanya ke nomor rekening resmi Barantum, yaitu ke BCA dengan nomor rekening 528-0299-199 atas nama ",
                        },
                        {
                          type: "bold",
                          content: "PT Kosada Group Indonesia ",
                        },
                        {
                          type: "text",
                          content:
                            "atau melalui link rekening virtual account atas nama ",
                        },
                        {
                          type: "text",
                          content: "Barantum ",
                        },
                        {
                          type: "text",
                          content: "yang tertera pada invoice resmi Barantum.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Biaya yang berasal dari pihak ketiga seperti:",
                        },
                      ],
                    },
                  ],
                  subItems: [
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Biaya panggilan telepon keluar dan/atau masuk",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Biaya pesan masuk dan/atau keluar seperti pada channel WhatsApp Business API atau channel lainnya",
                        },
                      ],
                    },
                  ],
                  subDescriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Dapat mengalami perubahan sewaktu-waktu sesuai dengan ketentuan dari pihak ketiga penyedia layanan tersebut di atas.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Tagihan telepon dan pesan WhatsApp masuk/keluar yang ditagihkan Barantum bisa terjadi tambahan tagihan atau pengembalian tagihan apabila ada perubahan tagihan dari operator dan/atau Meta.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Informasi deposit saldo yang ditampilkan dalam Layanan Barantum bisa tidak sesuai waktu nyata (realtime) dan akan ada penyesuaian sesuai dengan tagihan terakhir dari pihak ketiga penyedia layanan. Semua rincian pemakaian saldo tersedia pada Layanan Barantum.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Deposit saldo dilakukan secara mandiri di dalam Layanan Barantum dan tagihan Layanan dari Barantum yang dikirim kepada Anda, atau kepada kontak penagihan yang telah Anda berikan, melalui email. Anda harus membuat pembayaran untuk seluruh nilai yang tertera di tagihan Anda sebelum melewati tanggal jatuh tempo untuk tagihannya, yang harus dilunaskan maksimal 15 hari dari saat tagihan dikirim oleh Barantum. Anda mempunyai tanggung jawab untuk pembayaran semua pajak dan bea yang ditambahkan kepada Biaya Akses tersebut. Anda juga diminta untuk menyimpan bukti transaksi. Jika layanan sempat terhenti sebelum pembayaran dilakukan, kami akan mengaktifkan layanan dalam waktu 2 hari kerja.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Setiap pembayaran yang Anda lakukan, baik untuk pembelian lisensi maupun pengisian saldo, bersifat final dan tidak dapat ditarik kembali (refund) dalam keadaan apapun.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Kewajiban Umum",
                    },
                  ],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Anda harus memastikan hanya memakai Layanan dan Website untuk keperluan internal bisnis Anda yang benar dan secara sah, dengan Syarat dan Ketentuan dan pemberitahuan yang diumumkan oleh Barantum atau ketentuan yang tercantum di Website. Anda boleh memakai Layanan dan Website atas nama orang atau badan lain, atau untuk memberi layanan kepada mereka, tetapi Anda harus memastikan bahwa Anda mempunyai wewenang untuk melakukannya, dan semua pihak yang menerima Layanan melalui Anda memenuhi dan menyetujui semua syarat dalam Perjanjian ini yang berlaku kepada Anda",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Syarat Akses",
                    },
                  ],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Anda harus memastikan bahwa semua username dan password yang diperlukan untuk mengakses Layanan Barantum tersimpan dengan aman dan secara rahasia. Anda harus segera memberitahu Barantum apabila ada indikasi pemakaian password Anda dari pihak yang tidak berwenang, atau pelanggaran keamanan lainnya, dan Barantum akan melakukan reset password Anda, dan Anda harus melakukan semua tindakan lainnya yang dianggap cukup penting oleh Barantum untuk mempertahankan atau meningkatkan keamanan sistem computer dan jaringan Barantum, dan juga akses Anda kepada Layanan kami.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Sebagai syarat dari Ketentuan-ketentuan ini, saat mengakses dan menggunakan Layanan Barantum, Anda harus:",
                        },
                      ],
                    },
                  ],
                  subItems: [
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Tidak mencoba untuk melemahkan keamanan atau integritas dari sistem komputer atau jaringan Barantum, atau jika Layanan-nya di host oleh pihak ketiga, sistem komputer atau jaringan pihak ketiga itu;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Tidak menggunakan atau menyalahgunakan Layanan Barantum dengan cara apapun yang dapat mengganggu kemampuan pengguna lain untuk menggunakan Layanan atau Website;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Tidak mencoba untuk mendapatkan akses yang tidak sah kepada materi apapun selain yang sudah dinyatakan dengan jelas bahwa Anda telah mendapatkan izin untuk mengakses-nya, atau untuk mengakses sistem komputer kami dimana Layanan-nya di host;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Tidak mengirimkan, atau memasukkan kedalam Website: file apapun yang dapat merusak alat komputer atau software orang lain, bahan-bahan yang menghina, atau materi atau Data yang melanggar hukum apapun (termasuk Data atau materi lainnya yang terlindungi oleh hak cipta atau rahasia dagang dimana Anda tidak memiliki hak untuk memakainya);",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Tidak mencoba untuk mengubah, menyalin, meniru, membongkar, atau melakukan reverse engineering untuk program komputer apapun yang dipakai untuk memberi Barantum, atau untuk menggunakan Barantum diluar penggunaan yang diperlukan dan atau yang dimaksudkan.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Batasan Penggunaan",
                    },
                  ],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Penggunaan Layanan Barantum mungkin dapat dibatasi, tapi tidak terbatas kepada, volume transaksi bulanan dan atau jumlah panggilan yang Anda diizinkan untuk gunakan dalam aplikasi Barantum. Bila ada, batasan-batasan tersebut akan ditentukan dan dicantumkan pada Layanan terkait.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Syarat Komunikasi",
                    },
                  ],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Sebagai syarat pada Ketentuan ini, jika Anda memakai alat komunikasi apapun yang tersedia melalui Website (seperti chat, telepon voip,dsb), Anda setuju untuk memakai alat-alat komunikasi tersebut hanya untuk tujuan yang sah. Anda tidak boleh memakai alat-alat komunikasi tersebut untuk memasang atau menyebarkan materi apapun yang tidak terkait dengan pemakaian Layanan-nya, termasuk (tapi tidak terbatas dengan): mengirimkan file yang dapat merusak alat komputer atau software orang lain, bahan-bahan yang mungkin dapat menghina pengguna Layanan atau Website yang lain, atau materi yang melanggar hukum apapun (termasuk materi yang terlindungi oleh hak cipta atau rahasia dagang dimana Anda tidak memiliki hak untuk memakainya).",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Saat Anda melakukan komunikasi dalam bentuk apapun di Website, Anda menjamin bahwa Anda diperbolehkan untuk membuat komunikasi tersebut. Barantum tidak berkewajiban untuk memastikan bahwa komunikasi pada Website adalah sah dan benar, atau bahwa mereka terkait hanya pada penggunaan Layanan. Barantum berhak untuk menghapus komunikasi apapun setiap saat atas kebijakannya sendiri sesuai dengan ketentuan dan peraturan perundang-undangan yang berlaku tanpa persetujuan tertulis dari Anda.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Tanggung Jawab Ganti Rugi",
                    },
                  ],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Barantum terbebas dari semua: tuntutan, gugatan, biaya kerugian, kerusakan, dan kehilangan yang timbul sebagai hasil dari pelanggaran Anda kepada Syarat dan Ketentuan yang tertera dalam Perjanjian ini, atau kewajiban apapun yang mungkin Anda punya kepada Barantum, termasuk (tapi tidak terbatas kepada) biaya apapun yang berkaitan kepada perolehan Biaya Akses apapun yang sudah jatuh tempo tetapi belum Anda bayar.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Kerusakan Layanan",
                    },
                  ],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Jika terjadi kerusakan atas tidak berfungsinya layanan, Anda wajib melaporkannya kepada Barantum melalui email support@barantum.com atau WhatsApp 081281888636 untuk mendapat bantuan.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              parts: [
                {
                  type: "bold",
                  content: "Kerahasiaan dan Privasi",
                },
              ],
              subItems: [
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Kerahasiaan",
                    },
                  ],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Masing-masing pihak berjanji untuk menjaga kerahasiaan semua Informasi Rahasia pihak lainnya sehubungan dengan ketentuan ini. Setiap pihak ",
                        },
                        {
                          type: "bold",
                          content: "TIDAK AKAN",
                        },
                        {
                          type: "text",
                          content:
                            ", tanpa persetujuan tertulis dari pihak yang lain, mengungkapkan atau memberi Informasi Rahasia kepada siapapun, atau menggunakannya untuk kepentingan sendiri, selain sebagaimana dimaksud oleh Ketentuan ini. Kewajiban masing-masing pihak dalam ketentuan ini akan bertahan walaupun setelah pemutusan Ketentuan ini.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Ketentuan-ketentuan pasal tidak berlaku untuk informasi yang:",
                        },
                      ],
                    },
                  ],
                  subItems: [
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Telah menjadi pengetahuan umum selain karena pelanggaran ketentuan ini;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Diterima dari pihak ketiga yang dengan secara sah memperolehnya, dan tidak mempunyai kewajiban untuk membatasi pengungkapannya;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Dikembangkan dengan sendiri tanpa akses kepada Informasi Rahasia.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "bold",
                      content: "Privasi",
                    },
                  ],
                  descriptions: [
                    {
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Barantum memiliki dan menjaga kebijakan privasi yang menjelaskan serta menetapkan kewajiban masing-masing pihak dalam merahasiakan informasi pribadi. Anda disarankan untuk membaca kebijakan privasi kami yang dapat diakses di ",
                        },
                        {
                          type: "link",
                          content: "https://www.barantum.com/id/privacy-policy",
                          href: "https://www.barantum.com/id/privacy-policy",
                        },
                        {
                          type: "text",
                          content:
                            ". Dengan menyetujui syarat dan ketentuan ini, Anda dianggap telah menyetujui kebijakan privasi tersebut.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum berhak untuk mengakses, mengumpulkan, memproses, dan menganalisis statistik jumlah data yang terbuat oleh pelanggan terkait penggunaan seluruh layanan/fitur/modul apapun di Barantum, termasuk namun tidak terbatas pada jumlah klik, interaksi, frekuensi penggunaan, dan/atau laporan pemakaian pengguna dengan tetap mematuhi kebijakan privasi sebagaimana diatur dalam pasal VI ayat 1 dan 2 di atas.",
                    },
                  ],
                },
              ],
            },
            {
              parts: [
                {
                  type: "bold",
                  content: "Kekayaan Intelektual",
                },
              ],
              descriptions: [
                {
                  type: "paragraph",
                  parts: [
                    {
                      type: "text",
                      content:
                        "Kepemilikan dan semua Hak Kekayaan Intelektual yang didapat pada Layanan, Website, dan dokumentasi apapun yang terkait dengan Layanan tetap menjadi hak milik Barantum.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  parts: [
                    {
                      type: "text",
                      content:
                        "Kepemilikan dan semua Hak Kekayaan Intelektual yang terdapat di Data tetap menjadi hak milik Anda. Akan tetapi, akses kepada Data Anda bergantung pada pelunasan Biaya Akses Barantum. Anda memberi izin kepada Barantum untuk memakai, menyalin, mengirim, menyimpan, dan melakukan back-up untuk informasi dan Data Anda dengan maksud dan tujuan memberi Anda akses dan agar dapat menggunakan Layanan Barantum, atau untuk tujuan lainnya yang terkait dengan penyediaan layanan Barantum untuk Anda.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  parts: [
                    {
                      type: "text",
                      content:
                        "Anda sangat disarankan untuk menyimpan salinan untuk semua Data yang Anda masukkan ke dalam Layanan Barantum. Barantum mematuhi kebijakan dan menjalani prosedur terbaik untuk mencegah kehilangan data, termasuk rutinitas sistem harian untuk back-up data, tetapi tidak membuat jaminan apapun bahwa tidak akan pernah adanya kehilangan Data. Barantum dengan jelas mengesampingkan tanggung jawab untuk setiap kehilangan Data dengan sebab apapun.",
                    },
                  ],
                },
              ],
            },
            {
              parts: [
                {
                  type: "bold",
                  content: "Jaminan dan Pengakuan",
                },
              ],
              subItems: [
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Anda menjamin bahwa, jika Anda mendaftar untuk menggunakan Layanan atas nama orang lain, Anda memiliki wewenang untuk menyetujui Ketentuan-ketentuan ini atas nama orang tersebut, dan menyetujui bahwa dengan mendaftar untuk memakai Layanan Barantum, Anda mengikat orang yang Anda atas namakan untuk, atau dengan niat untuk, membuat tindakan atas nama mereka kepada setiap kewajiban manapun yang telah Anda setujui dalam Ketentuan-ketentuan ini, tanpa membatasi kewajiban Anda sendiri kepada ketentuannya.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Anda mengakui bahwa: Anda memiliki wewenang untuk menggunakan Layanan dan Website, dan untuk mengakses informasi dan Data yang Anda masukkan kedalam Website, termasuk informasi atau Data apapun yang dimasukkan kedalam Website oleh siapapun yang telah Anda beri kewenangan untuk menggunakan Layanan Barantum.",
                    },
                  ],
                  descriptions: [
                    {
                      isSameLevel: true,
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Anda juga berwenang untuk mengakses informasi dan data yang sudah di proses, yang disediakan untuk Anda melalui penggunaan Anda pada Website dan Layanan kami (maupun informasi dan Data itu Anda miliki sendiri atau milik orang lain).",
                        },
                      ],
                    },
                  ],
                  subItems: [
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Barantum tidak bertanggung jawab kepada siapapun selain Anda, dan tidak ada maksud apapun dalam Perjanjian ini untuk memberi manfaat kepada siapapun selain Anda. Jika Anda memakai Layanan atau mengakses Website atas nama atau untuk manfaat seseorang selain Anda (maupun organisasi berbadan hukum atau tidak, atau lainnya), Anda menyutujui bahwa:",
                        },
                      ],
                      subItems: [
                        {
                          parts: [
                            {
                              type: "text",
                              content:
                                "Anda bertanggung jawab untuk memastikan bahwa Anda memiliki hak untuk melakukannya;",
                            },
                          ],
                        },
                        {
                          parts: [
                            {
                              type: "text",
                              content:
                                "Anda bertanggung jawab atas memberi wewenang kepada siapapun yang Anda berikan akses kepada informasi atau Data, dan Anda menyutujui bahwa Barantum tidak memiliki tanggung jawab untuk menyediakan siapapun akses kepada informasi atau Data tersebut tanpa otorisasi Anda, dan boleh menunjukan permohonan apapun untuk mendapatkan informasi kepada Anda untuk di layani;",
                            },
                          ],
                        },
                        {
                          parts: [
                            {
                              type: "text",
                              content:
                                "Anda membebaskan Barantum dari klaim apapun atau kehilangan yang terkait pada: Penolakan Barantum untuk menyediakan akses pada siapapun, kepada informasi atau Data Anda sesuai dengan ketentuan ini; Penyediaan informasi atau Data oleh Barantum kepada siapapun berdasarkan otorisasi Anda.",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Penyediaan, akses kepada, dan pemakaian Layanan Barantum tersedia sebagaimana adanya dan pada resiko Anda sendiri.",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Barantum tidak menjamin bahwa penggunaan Layanan tidak akan pernah terganggu atau bebas dari kesalahan. Di antara lain, operasi dan ketersediaan sistem yang digunakan untuk mengakses Layanan, termasuk layanan telpon umum, jaringan komputer dan internet, bisa susah diprediksi dan mungkin bisa dari waktu ke waktu mengganggu atau mencegah akses kepada Layanan. Barantum dengan bagaimanapun tidak bertanggung jawab atas gangguan tersebut, atau pencegahan akses kepada penggunaan Layanan.",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Untuk menentukan bahwa Layanan kami memenuhi keperluan bisnis Anda dan bisa digunakan sesuai dengan tujuan adalah tanggung jawab Anda sendiri.",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Anda tetap memiliki tanggung jawab untuk mematuhi semua undang-undang lainnya yang berlaku. Menjadi tanggung jawab Anda untuk memeriksa bahwa penyimpanan dan akses kepada Data Anda melalui Layanan dan Website tetap mematuhi undang-undang yang berlaku kepada Anda (termasuk undang-undang apapun yang membutuhkan Anda untuk menyimpan arsip).",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum memberikan layanan sesuai dengan kesepakatan Layanan oleh Para Pihak dan tanpa mengabaikan kesepakatan tersebut, Barantum tidak menjamin bahwa Layanan Barantum akan memenuhi semua keperluan Anda, atau bahwa akan yang sesuai untuk tujuan yang Anda niatkan sebagaimana yang ditentukan dalam Perjanjian ini. Anda bertanggung jawab memberikan masukan dan menyampaikan lebih jelas keperluan dan tujuan Anda dalam penggunaan layanan Barantum. Untuk menghindari keraguan, semua ketentuan atau jaminan yang bisa diartikan dikecualikan sejauh yang diijinkan oleh hukum, termasuk (tanpa batasan) jaminan penjualan, kesesuaian untuk tujuan, dan tanpa pelanggaran.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Anda menjamin dan menunjukkan bahwa Anda sedang memperoleh hak untuk mengakses dan menggunakan Layanan untuk tujuan bisnis dan bahwa, sampai batas maksimum yang diizinkan oleh hukum, jaminan konsumen berdasarkan hukum atau undang-undang yang dimaksudkan untuk melindungi konsumen non-bisnis di yurisdiksi manapun tidak berlaku untuk penyediaan Layanan, Website, atau ketentuan ini.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Anda menyetujui bahwa Barantum dapat menggunakan nama dan logo perusahaan Anda dalam semua materi promosi, pemasaran, siaran pers, dan di situs web Barantum. Persetujuan ini mencakup segala bentuk atau format promosi dan pemasaran, termasuk namun tidak terbatas pada cetak, digital, dan media promosi lainnya.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Anda menjamin bahwa bisnis Anda legal dan memenuhi ketentuan hukum yang berlaku di Indonesia dan ketentuan dari partner Barantum, seperti namun tidak terbatas pada, Meta, WhatsApp, Telkom, Telkomsel, Indosat, SmartFren, dan partner Barantum lainnya.",
                    },
                  ],
                  descriptions: [
                    {
                      isSameLevel: true,
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Bisnis yang terlibat dalam aktivitas ilegal atau melanggar hukum atau melanggar ketentuan dari Barantum dan partner Barantum, seperti namun tidak terbatas pada perjudian, narkoba, pencucian uang, hal-hal berhubungan dengan SARA, penjualan barang palsu, atau praktek ilegal lainnya, tidak diperbolehkan menggunakan produk Barantum.",
                        },
                      ],
                    },
                    {
                      isSameLevel: true,
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Pelanggaran terhadap ketentuan ini akan mengakibatkan penangguhan atau pembatalan akun tanpa pemberitahuan sebelumnya dengan tanpa pengembalian pembayaran yang telah dilakukan",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              parts: [
                {
                  type: "bold",
                  content: "Batasan Kewajiban",
                },
              ],
              subItems: [
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Sepanjang diperbolehkan oleh hukum yang berlaku, tidak ada pertanggungjawaban dari Barantum terhadap Pengguna (atau orang yang mengklaim hak yang berasal dari hak pihak lain) atas setiap kehilangan pendapatan, profit, kontrak atau usaha yang aktual atau dapat diantisipasi (baik secara langsung atau tidak langsung, kehilangan data, dan/atau kehilangan atau kerugian apapun yang bersifat insidentil, tidak langsung atau konsekuensial, dalam hal apapun yang timbul berdasarkan atau sehubungan dengan Syarat dan Ketentuan ini, baik dengan kontrak, perbuatan melawan hukum (termasuk kelalaian), pelanggaran atas tugas berdasarkan undang-undang atau lainnya.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Jika Anda mengalami kerugian atau kerusakan apapun karena kelalaian atau kegagalan Barantum untuk memenuhi ketentuan ini, klaim apapun dari Anda kepada Barantum yang timbul dari kelalaian atau kegagalan Barantum akan dibataskan mengenai satu kejadian, atau serangkaian kejadian yang terhubung, kepada maksimal Biaya Akses 3 bulan sebelumnya dengan menyampaikan permohonan ganti rugi kepada Barantum paling lambat 30 (tiga puluh) hari kalender sejak kerugian terjadi atau sejak Pengguna menyadari adanya kerugian yang Pengguna alami, mana yang terjadi terlebih dahulu;",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum akan menentukan jumlah penggantian kerugian yang akan dibayarkan kepada Pengguna berdasarkan pengecekan internal yang dilakukan melalui sistem Barantum. Keputusan penggantian kerugian yang diberikan oleh Barantum bersifat final dan mengikat, sehingga dengan menerima penggantian kerugian dari Barantum, Pengguna menjamin bahwa tidak ada tagihan, biaya, klaim, tuntutan atau kewajiban lain apapun yang timbul atau mungkin timbul, yang dapat ditagihkan oleh Pengguna kepada Barantum sehubungan dengan hal-hal yang diatur dalam Pasal ini.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum tidak akan bertanggung jawab terhadap segala kerugian, klaim, pengeluaran, kerusakan, kewajiban, atau biaya yang timbul akibat:",
                    },
                  ],
                  subItems: [
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Pelanggaran Pengguna terhadap ketentuan apapun dalam Syarat dan Ketentuan ini;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Penggunaan Produk oleh pihak yang tidak berwenang dan/atau diberikan akses oleh Pengguna secara tidak sah;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Jika terdapat cacat atau tanggung jawab yang disebabkan oleh Pengguna termasuk adanya modifikasi atau add-on yang dilakukan tanpa persetujuan dari Barantum;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Produk digunakan bersama-sama dengan perangkat lunak atau produk pihak ketiga manapun yang mana Pengguna tidak memiliki hak yang memadai dari vendor pihak ketiga atas penggunaan tersebut;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Penggunaan Produk yang tidak dilakukan sesuai dengan ketentuan dalam Syarat dan Ketentuan ini maupun ketentuan teknis lainnya yang berlaku bagi Pengguna, termasuk namun tidak terbatas pada panduan pengguna.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum tidak bertanggung jawab atas penggunaan akun pribadi, baik itu email, nomor HP maupun rekening, oleh staf yang terdaftar dalam sistem kami. Segala bentuk transaksi, akses, atau kegiatan yang melibatkan akun pribadi tersebut sepenuhnya menjadi tanggung jawab individu yang bersangkutan. Kami mengimbau pelanggan untuk segera melaporkan kepada Barantum apabila ada staf yang menggunakan akun pribadi untuk tujuan yang berhubungan dengan sistem atau layanan Barantum. Segala kerugian, risiko, atau konsekuensi yang timbul akibat penggunaan akun pribadi tersebut tidak akan menjadi tanggung jawab Barantum.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum tidak bertanggung jawab atas segala tindakan yang dilakukan oleh staf yang berkaitan dengan pelanggaran hukum atau tindak pidana, baik yang terjadi di dalam maupun di luar lingkungan kerja. Segala bentuk kesalahan atau pelanggaran hukum yang dilakukan oleh staf, baik yang melibatkan penyalahgunaan sistem atau layanan Barantum, adalah tanggung jawab individu yang bersangkutan. Barantum tidak dapat dimintai pertanggungjawaban atas tindakan pidana yang dilakukan oleh staf, dan pelanggan setuju untuk membebaskan Barantum dari segala klaim atau tuntutan yang timbul sebagai akibat dari tindakan pidana tersebut.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Jika Anda tidak puas dengan Layanan-nya, jalur penyelesaian tunggal dan eksklusif Anda adalah untuk mengentikan ketentuan ini sesuai dengan pasal X. Pemutusan Kontrak.",
                    },
                  ],
                },
              ],
            },
            {
              parts: [
                {
                  type: "bold",
                  content: "Pemutusan Kontrak",
                },
              ],
              subItems: [
                {
                  parts: [
                    {
                      type: "text",
                      content: "Kebijakan Masa Percobaan:",
                    },
                  ],
                  descriptions: [
                    {
                      isSameLevel: true,
                      type: "paragraph",
                      parts: [
                        {
                          type: "text",
                          content:
                            "Saat Anda pertama mendaftar untuk mengakses Layanan, Anda bisa mengevaluasi Layanan-nya dengan ketentuan untuk masa percobaan yang sudah di tentukan, tanpa kewajiban untuk melanjutkan penggunaan Layanan-nya. Jika Anda memilih untuk melanjutkan penggunaan Layanan setelah masa percobaan selesai, Anda akan mulai ditagih pada hari yang sama dimana Anda memutuskan untuk melanjutkan masa pakai Layanan.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Barantum tidak menyediakan pengembalian uang untuk periode prabayar yang tersisa pada langganan Akses Anda.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Ketentuan ini akan berlanjut secara otomatis untuk periode selanjutnya untuk jangka watu yang sama, asalkan Anda terus membayar Biaya Akses yang sudah ditentukan saat jatuh tempo, kecuali salah satu pihak mengakhiri Ketentuan ini dengan pemberitahuan kepada pihak lainnya setidaknya 30 hari sebelum akhir periode pembayaran yang bersangkutan.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content: "Pelanggaran:",
                    },
                  ],
                  subItems: [
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Jika Anda melanggar apapun dari Ketentuan ini (termasuk, tapi tidak terbatas dengan, tidak membayar Biaya Akses apapun) dan tidak menyelesaikan masalah pelanggaran dalam 14 hari setelah menerima pemberitahuan pelanggaran tersebut jika permasalahan pelanggaran tersebut bisa di selesaikan;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Jika Anda melanggar apapun dari Ketentuan ini dan pelanggaran itu tidak bisa di selesaikan (termasuk, tapi tidak terbatas dengan) atau kegagalan untuk membayar Biaya Akses yang sudah melewati tanggal jatuh tempo lebih dari 30 hari;",
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Jika Anda atau bisnis Anda bangkrut, atau sedang melewati proses untuk mengakhiri keberadaan organisasi, Barantuml bisa mengambil salah satu atau semua tindakan berikut:",
                        },
                      ],
                      subItems: [
                        {
                          parts: [
                            {
                              type: "text",
                              content:
                                "Mengakhiri Perjanjian ini dan penggunaan Anda untuk Layanan dan Website kami;",
                            },
                          ],
                        },
                        {
                          parts: [
                            {
                              type: "text",
                              content:
                                "Menunda akses Anda kepada Layanan dan Website Barantum untuk periode yang tidak menentu;",
                            },
                          ],
                        },
                        {
                          parts: [
                            {
                              type: "text",
                              content:
                                "Menunda akses atau mengakhiri akses kepada semua Data atau Data apapun;",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      parts: [
                        {
                          type: "text",
                          content:
                            "Pemutusan Ketentuan ini tidak mengurangi hak dan kewajiban para pihak yang masih harus dibayar sampai dengan tanggal terminasi. Pada pengakhiran Perjanjian ini Anda akan tetap menanggung biaya yang masih harus dibayar dan jumlah yang jatuh tempo untuk pembayaran sebelum atau setelah pengakhiran, dan segera berhenti menggunakan Layanan dan Website kami.",
                        },
                      ],
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Jika Anda memutuskan untuk berhenti berlangganan penggunaan sistem Barantum atau tidak melakukan perpanjangan pembayaran masa berlangganan, maka akses ke sistem Barantum akan tertutup setelah habis masa berlaku lisensi sistem Barantum Anda dan seluruh data penggunaan Anda yang berada pada sistem Barantum akan secara otomatis dihapus permanen dari sistem Barantum dalam kurun waktu 90 hari kalender setelah tanggal lisensi sistem Barantum Anda habis.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Terkait keamanan data Anda maka Barantum tidak dapat memberikan layanan backup data dan/atau penarikan data sebagian atau seluruh data Anda. Sangat disarankan untuk melakukan backup mandiri terlebih dahulu sebelum masa lisensi sistem Barantum Anda habis.",
                    },
                  ],
                },
              ],
            },
            {
              parts: [
                {
                  type: "bold",
                  content: "Ketentuan Umum Lainnya",
                },
              ],
              subItems: [
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Syarat dan Ketentuan ini, bersama dengan Kebijakan Privasi Barantum dan ketentuan dari pemberitahuan atau instruksi yang diberikan kepada Anda dibawah Syarat dan Ketentuan ini menggantikan dan menghapus semua perjanjian sebelumnya, representasi (baik lisan maupun tulisan), dan pemahaman, dan merupakan keseluruhan perjanjian antara Anda dan Barantum yang berhubungan dengan Layanan dan hal lainnya yang dibahas dalam Ketentuan ini.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Jika salah satu pihak melepaskan tuntutan dari pelanggaran apapun pada Ketentuan ini, ini tidak akan melepaskan mereka dari tuntutan pelanggaran lainnya. Pelepasan dari tuntuntan tidak efektif kecuali dibuat secara tulisan.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Para pihak tidak harus bertanggung jawab atas keterlambatan atau kegagalan dalam menyelesaikan kewajibannya dibawah Ketentuan ini jika keterlambatan atau kegagalannya adalah karena sebab apapun yang di luar kendali. Ayat ini tidak berlaku untuk kewajiban pembayaran uang apapun.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Anda tidak dapat mengalihkan atau mentransfer hak kepada orang lain tanpa persetujuan tertulis dari Barantum.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Apabila terjadi perselisihan antara kedua belah pihak, akan coba diselesaikan secara musyawarah terlebih dahulu untuk mencapai mufakat. Apabila dengan cara tersebut tidak tercapai kata sepakat, maka kedua belah pihak sepakat untuk menyelesaikan permasalahan tersebut dilakukan melalui prosedur hukum dengan memilih kedudukan hukum Republik Indonesia di Kantor Pengadilan Negeri Jakarta Barat.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Setiap pemberitahuan yang diberikan berdasarkan Persyaratan ini oleh satu pihak ke pihak yang lain harus dilakukan secara tertulis melalui email dan akan dianggap telah diberikan pada saat transmisi dilakukan. Pemberitahuan kepada Barantum harus dikirim ke ",
                    },
                    {
                      type: "bold",
                      content: "support@barantum.com ",
                    },
                    {
                      type: "text",
                      content:
                        "atau ke alamat email lainnya yang diberitahukan kepada Anda oleh Barantum. Pemberitahuan kepada Anda akan dikirim ke alamat email yang Anda berikan saat membuat akses Anda pada Layanan kami.",
                    },
                  ],
                },
                {
                  parts: [
                    {
                      type: "text",
                      content:
                        "Biaya langganan akses adalah pembayaran berulang yang dibayar di muka untuk mengkonsumsi jasa aplikasi CRM dan atau Sistem Call Center yang disediakan Barantum. Setelah Anda berlangganan, Anda bisa membatalkan setiap saat tanpa biaya tambahan kecuali yang sudah dibayarkan. Pembatalan membutuhkan paling lama 31 hari sebelum efektif.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const featuredFeatureCRM = {
  header:
    "Eksplor fitur unggulan Mekari Qontak CRM untuk perkembangan bisnis dan profesional",
  items: [
    {
      icon: "FaUsers",
      title: "Sales CRM",
      description: "Pengelolaan kebutuhan administratif sales secara optimal",
      href: "/crm",
    },
    {
      icon: "FaUsers",
      title: "Manajemen Pipeline",
      description: "Pengelolaan tahapan proses komersial & support",
      href: "/crm",
    },
    {
      icon: "FaUsers",
      title: "Sales GPS Tracking",
      description:
        "Lacak dan monitor progress tim sales secara real-time dan akurat",
      href: "/crm",
    },
    {
      icon: "FaUsers",
      title: "Personalisasi Laporan CRM",
      description: "Pengelolaan kebutuhan laporan data CRM",
      href: "/crm",
    },
    {
      icon: "FaUsers",
      title: "SalHirarki Akses Data",
      description: "Akses khusus untuk data pelanggan ddan penjualan",
      href: "/crm",
    },
    {
      icon: "FaUsers",
      title: "Customer Service CRM",
      description: "Kelola llayanan pelanggan secara efektif dan efisien",
      href: "/crm",
    },
  ],
};

export const reasonChoosingBusinessCRM = {
  header: "Mengapa bisnis memilih pengelolaan CRM dari Mekari Qontak",
  items: [
    {
      icon: "FaUsers",
      title: "Berbasis cloud",
      description:
        "Tidak ada beban biaya instalasi, perawatan, dan pengembangan platform.",
    },
    {
      icon: "FaUsers",
      title: "Keamanan sistem basis data",
      description:
        "Sistem keamanan yang bersertifikasi ISO 27001 dan berstandar internasional.",
    },
    {
      icon: "FaUsers",
      title: "Dukungan khusus pelanggan",
      description:
        "Dukungan konsultasi, pendampingan implementasi hingga purna jual.",
    },
    {
      icon: "FaUsers",
      title: "Mudah digunakan",
      description:
        "UI intuitif dengan pengalaman guna yang bersahabat dengan pengguna.",
    },
    {
      icon: "FaUsers",
      title: "Dukungan integrasi",
      description:
        "Sistem dengan kemudahan integrasi dan API yang fleksibel sesuai kebutuhan.",
    },
    {
      icon: "FaUsers",
      title: "Dukungan ekosistem",
      description:
        "Dukungan networking dan pemberdayaan dengan komunitas praktisi di Indonesia.",
    },
  ],
};
