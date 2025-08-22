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
          href: "https://fazpass.com/product/otp-platform/#section-914-3615",
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
