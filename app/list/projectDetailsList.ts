// Project descriptions, joined to projectsList by project title.
//
// Keys are project titles instead of array indexes, so reordering or filtering
// projectsList does not break the join. A project is clickable only when it has
// an entry here with at least a description or feature. Titles must match
// projectsList exactly.

export interface ProjectDetails {
  description?: string;
  features?: string[];
  type?: "Internal" | "public";
}

export const projectDetailsList: Record<string, ProjectDetails> = {
  "Government IMIS Dashboard": {
    type: "Internal",
    description: 'Centralized 24-module Government MIS dashboard built to track public welfare programs, beneficiary enrollment, and cash disbursements in single platform',
    features: [
      "12-module enterprise MIS dashboard built on Next.js, React, MUI, and Tailwind CSS",
      "Dynamic RBAC with permission-based sidebar, tabs, and actions (encrypted permissions stored in IndexedDB)",
      "Complete auth flow: login, OTP, MFA, program selection, email verification, and password reset",
      "AES-256-GCM encryption, JWT lifecycle handling, force logout, and secure frontend practices",
      "i18n (Urdu, Sindhi, English) with RTL/LTR support and SSR/SSG optimization",
      "Reusable table and form infrastructure: TanStack Table, React Hook Form, Zod, Excel import/export, file uploads, and dark/light theme support",
      "Google Maps, charting libraries, and centralized API handling",
      "AI chatbot integration and notification system",
      "GIS-based beneficiary targeting with map visualization, PMT filtering, custom zones, and bulk SMS delivery",
      "Kong API gateway logs, internal/external API mapping, and social media integrations",
      "Jira-driven workflows with frontend task lifecycle, reviews, and cross-team handoffs",
      "Scalable Next.js App Router architecture with route groups, co-located feature modules, and shared actions, components, and utilities",
      "250+ screens delivered",
      "Favorable SonarQube SAST security analysis results",
    ],
  },

  "Merchant Portal": {
    type: "Internal",
    description:
      "A merchant-facing portal for a fintech platform, featuring Arabic (RTL) and multilingual UI, responsive dashboards, and data-rich visualizations.",
    features: [
      "Arabic (RTL) support and multilingual UI",
      "Responsive web pages and dashboard layouts",
      "ShadCN, Tailwind CSS, and ReCharts for UI and data visualization",
    ],
  },

  "GRC Enterprise Dashboard": {
    type: "Internal",
    description:
      "Enterprise GRC dashboard for governance, risk, and compliance management, built and migrated across SvelteKit and Nuxt 3 with a clean, scalable architecture.",
    features: [
      "Frontend built and migrated across SvelteKit and Nuxt 3 (Vuetify)",
      "Complex UI: forms, tables, lists, charts, and dynamic custom components",
      "Extensive API integration across multiple modules",
      "Clean enterprise architecture throughout",
      "Stack spanning Vue.js, Nuxt.js, Svelte, and SvelteKit",
    ],
  },
};

export const getProjectDetails = (
  title: string | null | undefined
): ProjectDetails | undefined => {
  if (!title || !Object.hasOwn(projectDetailsList, title)) return undefined;
  return projectDetailsList[title];
};
