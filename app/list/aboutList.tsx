import { LuBriefcase, LuCode, LuShieldCheck } from "react-icons/lu";

export interface AboutCardItem {
  icon: React.ReactNode;
  title: string;
  badge?: string;
  description: string;
}

export interface AboutData {
  heading: string;
  bio: string[];
  cards: AboutCardItem[];
}

const aboutData: AboutData = {
  heading: "About Me",
  bio: [
    "Experienced Frontend Developer with 2+ years of experience building enterprise web applications. Currently leading frontend development for a World Bank-funded Government MIS Dashboard, engineering secure and scalable systems with RBAC, AES-256 encryption, and OWASP-compliant standards.",
    "Proven track record in SSR/SSG performance optimization, multilingual applications (i18n with RTL support), Google Maps integrations, and production monitoring with Sentry. Successfully delivering core features such as permission-based dashboards, OTP/2FA authentication, and data export pipelines using Next.js and TypeScript.",
  ],
  cards: [
    {
      icon: <LuBriefcase className="text-primary" size={22} />,
      title: "Experience",
      badge: "2+ Years",
      description:
        "Leading frontend development for enterprise and government dashboard systems.",
    },
    {
      icon: <LuShieldCheck className="text-primary" size={22} />,
      title: "Security & RBAC",
      description:
        "AES-256 encryption, OWASP practices, OTP/2FA auth, and permission-based workflows.",
    },
    {
      icon: <LuCode className="text-primary" size={22} />,
      title: "Performance & Scale",
      description:
        "SSR/SSG optimization, i18n RTL, Google Maps, Sentry monitoring, and Next.js/TS.",
    },
  ],
};

export default aboutData;
