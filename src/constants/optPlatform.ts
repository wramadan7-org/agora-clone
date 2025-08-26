import { AccordionItem } from "../components/accordions/frequently-question/AccordionComponent";
import { SectionContent } from "../types/renderTypes";

export const superiorityOtpPlatform = [
  {
    icon: "FaUsers",
    title: "Multiple Channel Integration",
    description:
      "You can quickly add, switch, and use multiple OTP channels or service providers all at once, free of charge. Get the best authentication service providers in one click!",
  },
  {
    icon: "FaUsers",
    title: "Report & Analytic Dashboard",
    description:
      "Get real-time insights on OTP delivery and success rates through the Analytic Dashboard. Quickly resolve issues for a reliable seamless authentication experience.",
  },
  {
    icon: "FaUsers",
    title: "Cost Insight & Optimization",
    description:
      "Effortlessly track OTP delivery status end-to-end and gain valuable insights for cost-effective strategies from all service providers.",
  },
];

export const comparisonOtpPlatform: {
  header: string;
  subHeaders: SectionContent[];
  regulars: { title: string; description: string }[];
  owns: { title: string; description: string }[];
} = {
  header: "Say Goodbye to Authentication Complexity",
  subHeaders: [
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "We Provide the Best Solution for Your Two-Factor Authentication Needs! Find Affordable OTP Service Providers and Ensure Reliable Delivery Rates Only on Fazpass Free Platform with ",
        },
        {
          type: "link",
          isBold: true,
          content: "Just a Few Clicks",
          href: "/product/otp-platform/#reach-out",
          isSameTab: true,
        },
        {
          type: "text",
          content: ".",
        },
      ],
    },
  ],
  regulars: [
    {
      title: "OTP Problem",
      description: "OTP Verification Problem from user",
    },
    {
      title: "Research",
      description: "UX, Product, Engineer, etc.",
    },
    {
      title: "Found Problem",
      description: "Ex. Delivery rate vendor OTP",
    },
    {
      title: "Research OTP Vendor",
      description: "Find new vendor list",
    },
    {
      title: "Present",
      description: "Present & Meet with many vendor",
    },
    {
      title: "Development",
      description: "Iterate development flow with new vendor",
    },
    {
      title: "Test",
      description: "Conduct a system testing",
    },
    {
      title: "Release",
      description: "Your application is ready to go",
    },
  ],
  owns: [
    {
      title: "Register on Fazpass",
      description: "Register your company",
    },
    {
      title: "Choose & Set",
      description:
        "Choose Channel and your agregator for your OTP on Fazpass Dashboard.",
    },
    {
      title: "Integration",
      description: "Integrating your OTP to your application.",
    },
    {
      title: "Well Done",
      description: "Integration is complete!",
    },
  ],
};

export const singleIntegrationOtpPlatform = {
  header: "Connect to Your Favorite SMS Vendor with Single Integration",
  image: "https://fazpass.com/wp-content/uploads/2023/06/Channels-otp.png",
  items: [
    {
      icon: "FaUsers",
      title: "Single API Integration",
      description:
        "Connect with any channel through a single flow integration, and try integrating any OTP channels in under 15 minutes.",
    },
    {
      icon: "FaUsers",
      title: "Easy Switch",
      description:
        "Easily switch channels and providers on our dashboard without needing technical development.",
    },
    {
      icon: "FaUsers",
      title: "Auto Generate & Verify OTP",
      description:
        "Generate OTP codes from our dashboard, save server resources, and get reliable verification results from any channel and service provider.",
    },
  ],
};

export const easyIntegrationOtpPlatform = {
  header: "Easy Integration",
  image: "https://fazpass.com/wp-content/uploads/2023/06/easy-integration.png",
  items: [
    {
      icon: "FaUsers",
      title: "Plug & Play SDK Integration",
      description:
        "Developers can easily add new features to their application or system without starting from scratch.",
    },
    {
      icon: "FaUsers",
      title: "Reduce Development Time",
      description:
        "Easily switch channels and providers on our dashboard without needing technical development.",
    },
    {
      icon: "FaUsers",
      title: "Flexible Integration with Single API",
      description:
        "Connect with any channel through a single flow integration, and try integrating any OTP channels in under 15 minutes.",
    },
  ],
};

export const autoOptimizeOtpPlatform = {
  header: "Minimize Maintenance Complexity with Auto Optimize",
  image:
    "https://fazpass.com/wp-content/uploads/2023/06/minimize-maintenance.png",
  items: [
    {
      icon: "FaUsers",
      title: "Auto Failover",
      description:
        "Automatically switches to the backup system if the provider fails, ensuring uninterrupted service in case of failure.",
    },
    {
      icon: "FaUsers",
      title: "Traffic Allocation Management",
      description:
        "Efficiently control traffic allocation, prioritize multiple channels and OTP service providers using a single platform.",
    },
    {
      icon: "FaUsers",
      title: "Auto Generate & Verify OTP",
      description:
        "Generate OTP codes from our dashboard, save server resources, and get reliable verification results from any channel and service provider.",
    },
  ],
};

export const compareChannelsOtpPlatform = {
  header: "Compare & Find the Right Channel",
  headers: [
    {
      title: "Channel",
    },
    {
      icon: "FaUsers",
      title: "Cost",
    },
    {
      icon: "FaUsers",
      title: "Delivery Success",
    },
    {
      icon: "FaUsers",
      title: "User Experience",
    },
    {
      icon: "FaUsers",
      title: "Security",
    },
    {
      icon: "FaUsers",
      title: "Verification Success",
    },
  ],
  rows: [
    ["Password/PIN", "Free", "100%", "Very Easy", "Very Low", "90%"],
    ["Token Device", "High Cost", "100%", "Very Hard", "Very High", "90%"],
    ["SMS OTP", "Moderate", "95%", "Easy", "Moderate", "60% - 70%"],
    ["WhatsApp OTP", "Moderate", "99%", "Hard", "Low", "80%"],
    ["Voice OTP", "Moderate", "80%", "Hard", "Moderate", "20%"],
    ["Missed Call OTP", "Low Cost", "85%", "Easy", "Moderate", "70% - 80%"],
    [
      "SIM Based Verification",
      "High Cost",
      "85%",
      "Very Easy",
      "Moderate",
      "80% - 85%",
    ],
    [
      "Seamless Authentication",
      "Low Cost",
      "100%",
      "Very Easy",
      "High",
      "100%",
    ],
  ],
};

export const connectChannelOtpPlatform = {
  header: "Discover, Choose and Connect to Your Favorite channel",
  description:
    "Simply connect and integrate your favorite OTP service providers across multiple channels in 1 platform without repetitive integrations. Expand your verification effortlessly!",
  channels: [
    {
      icon: "FaUsers",
      text: "SMS",
      href: "https://fazpass.com/product/otp-platform/sms-otp/",
    },
    {
      icon: "FaUsers",
      text: "Missed Call",
      href: "https://fazpass.com/product/otp-platform/missed-call-otp/",
    },
    {
      icon: "FaUsers",
      text: "Email",
      href: "https://fazpass.com/product/otp-platform/email-otp/",
    },
    {
      icon: "FaUsers",
      text: "Official WhatsApp",
      href: "https://fazpass.com/product/otp-platform/whatsapp-otp/",
    },
    {
      icon: "FaUsers",
      text: "Unofficial WhatsApp",
      href: "https://fazpass.com/product/otp-platform/unofficial-whatsapp-otp/",
    },
    {
      icon: "FaUsers",
      text: "SIM Based Verification",
      href: "https://fazpass.com/product/otp-platform/header-enrichment/",
    },
  ],
  otpProviderPartner: {
    header: "Our OTP Provider Partners",
    partners: [
      "https://fazpass.com/wp-content/uploads/2023/04/image-47.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-48.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-51.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-50.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-49.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-52.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-8.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-42-1.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-10.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-12-1.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-11.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-33-1.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image0.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-43.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-44.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-45.png",
      "https://fazpass.com/wp-content/uploads/2023/04/6304ef7725d6dc4dd1612d6e-1.png",
      "https://fazpass.com/wp-content/uploads/2023/04/image-46.png",
    ],
  },
};

export const trustedOtpPlatform = {
  header: "Trusted by Startups and Large Companies",
  comment: {
    icon: "LuSettings",
    title: "flock",
    text: `“Fazpass solution really simplifies the integration requirements while saving us tremendous time and cost, beyond just being another communications channel vendor.”`,
    from: "Andre Gunawan",
    position: "Chief Production Officer",
  },
};

export const securityOtpPlatform = {
  image: "https://fazpass.com/wp-content/uploads/2023/06/Are-you-sure-OTP.png",
  header: "Are You Sure OTP is Enough?",
  subHeader: "Recheck the Security Level of Your Application Again!",
  description:
    "Are you confident in the safety of your app? Double-check your application's security level. Don't underestimate the threat of hackers. Upgrade your security now, before it's too late. Take action today!",
};

export const reachOutOtpPlatform = {
  header: "Reach Out to Fazpass Team",
  description:
    "Tell us a little about yourself and we'll connect you with Fazpass team who can share more about the product and answer any questions you have.",
};

export const accordionOtpPlatform: AccordionItem[] = [
  {
    title: "What is the Authentication Platform Solution?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "It is a platform to ",
          },
          {
            type: "bold",
            text: "discover the best OTP vendors or service providers worldwide",
          },
          {
            type: "text",
            text: ", all in one dashboard. It offers you greater options and flexibility when choosing the best global and local vendors.",
          },
        ],
      },
    ],
  },
  {
    title:
      "Let’s be honest, Is fazpass platform truly free? Are there any hidden costs? Are there any subscription/monthly costs?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "bold",
            text: "Great news! ",
          },
          {
            type: "text",
            text: "You can use ",
          },
          {
            type: "bold",
            text: "all of the basic features and our platform for free",
          },
          {
            type: "text",
            text: ", 100% No Hidden Cost.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "bold",
            text: "However",
          },
          {
            type: "text",
            text: ", if you're interested in our enterprise services with additional and amazing features such as automatic OTP cost optimization, fraud detection service, and seamless authentication to go passwordless, there will be a cost. But don't worry, you'll only be charged if you decide to use these services. Discover the difference in pricing and options here!",
          },
        ],
      },
    ],
  },
  {
    title: "Does Fazpass provide OTP services?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "First of all, we want to clarify that we’re not an ",
          },
          {
            type: "bold",
            text: "OTP Vendor or Service provider",
          },
          {
            type: "text",
            text: ". We simply want to help you connect and find the best and most affordable OTP authentication prices from all channels and vendors at once in the Fazpass platform without any conditions. ",
          },
          {
            type: "link",
            text: "Try it now!",
            url: "https://dashboard.fazpass.com/register/",
          },
        ],
      },
    ],
  },
  {
    title:
      "Can I connect to multiple channels from different OTP providers simultaneously?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "bold",
            text: "Of course! ",
          },
          {
            type: "text",
            text: "You can choose the best channel and OTP provider options from the fazpass dashboard without any development required on your application side.",
          },
        ],
      },
    ],
  },
  {
    title:
      "Why Should We Use Fazpass, If We Can or Have Already Connected Directly To The Vendor/Provider?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Connecting directly to a vendor is easy, but if we encounter issues like expensive OTP costs or unreliable delivery, we'll have to switch providers and integrate everything again.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "With fazpass, ",
          },
          {
            type: "bold",
            text: "you only need to integrate once, and you can easily transfer between channels or vendors ",
          },
          {
            type: "text",
            text: "using the Fazpass dashboard. You can also analyze and compare services for free with the analysis dashboard. So why wait? Fazpass simplifies maintaining OTP services for your business with no hidden cost at all. ",
          },
          {
            type: "link",
            text: "Contact us now",
            url: "/product/otp-platform/#reach-out",
            isSameTab: true,
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
    title: "What if the OTP service fails to deliver?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Fazpass has an automatic failover to backup vendors, allowing you to automatically switch to backup vendors, and easily prioritize vendors using Fazpass Optimize, product optimization link feature.",
          },
        ],
      },
    ],
  },
  {
    title:
      "If my desired vendor or provider isn’t available in fazpass, can it be added?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "bold",
            text: "Absolutely! ",
          },
          {
            type: "text",
            text: "You can connect with a new vendor or provider that hasn't registered in fazpass. We'll help you connect to them within 2 weeks. Contact ",
          },
          {
            type: "link",
            text: "our team ",
            url: "/product/otp-platform/#reach-out",
            isSameTab: true,
          },
          {
            type: "text",
            text: "for further assistance.",
          },
        ],
      },
    ],
  },
  {
    title: "How can I do integration if I already have a fazpass account?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "bold",
            text: "Easy peasy ",
          },
          {
            type: "text",
            text: ", you can easily integrate using the following documentation by ",
          },
          {
            type: "link",
            text: "click HERE",
            url: "https://doc.fazpass.com/",
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
    title: "How is the OTP Service Payment process in fazpass?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Managing payments becomes easier with our central balance feature, you can conveniently make payments to all vendors or service providers. ",
          },
          {
            type: "bold",
            text: "Simplify payment management with a single central balance for all OTP vendors and channels",
          },
          {
            type: "text",
            text: ". You also can make direct payments to the related vendor, we won’t charge you anything.",
          },
        ],
      },
    ],
  },
  {
    title: "I have many channels and vendors, can you help manage them?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "bold",
            text: "Yes",
          },
          {
            type: "text",
            text: ", you can combine all the bills into one invoice by using fazpass central balance feature. For your invoice and tax requirements, you can reach out to our ",
          },
          {
            type: "link",
            text: "sales team ",
            url: "/product/otp-platform/#reach-out",
            isSameTab: true,
          },
          {
            type: "text",
            text: "for further assistance.",
          },
        ],
      },
    ],
  },
  {
    title: "What if my balance runs out, will my OTP service stop?",
    contents: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "To anticipate that, ",
          },
          {
            type: "bold",
            text: "you can set up balance reminder notifications in the Fazpass dashboard",
          },
          {
            type: "text",
            text: ". You will receive email notifications and reminders when your balance reaches the specified limit. Save your budget, Save your application.",
          },
        ],
      },
    ],
  },
];
