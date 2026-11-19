export type StoreLink = {
  label: string;
  href: string;
};

export type WorkProject = {
  title: string;
  overview: string;
  stack: string[];
  points: string[];
  storeLinks?: StoreLink[];
};

export const experience = {
  company: "EmerTech Innovations",
  role: "Software Engineer",
  dates: "Nov 2024 – Present",
  summary:
    "Web and mobile products across a wallet, two marketplaces, tyre traceability, gold tokenisation, and battery passports.",
  projects: [
    {
      title: "Q2Q Wallet, Marketplace & Carbon Marketplace",
      overview: "Three connected apps for the wallet and both marketplaces.",
      stack: ["React Native", "Kotlin", "MetaMask"],
      storeLinks: [
        {
          label: "Wallet on Google Play",
          href: "https://play.google.com/store/apps/details?id=com.q2qwalletapp",
        },
        {
          label: "Marketplace on Google Play",
          href: "https://play.google.com/store/apps/details?id=com.quettaqmarketplaceapp",
        },
      ],
      points: [
        "Implemented Google sign-in and deep links across 3 apps, giving users seamless movement between the wallet and both marketplaces.",
        "Wrote separate native Kotlin modules and services for deep linking, background actions, and in-app updates, keeping each capability independent and reusable.",
        "Integrated MetaMask and smart contracts for NFT-based carbon asset workflows.",
        "Owned Android build, testing, and release, including every Google Play update and post-release fix.",
      ],
    },
    {
      title: "Trace-App",
      overview: "Map-based field workflows for industrial tyre traceability.",
      stack: ["React Native", "MMKV"],
      points: [
        "Built map-based field workflows using polygon-area and point-in-polygon calculations for industrial operations.",
        "Implemented offline-first GIS storage with MMKV and E6-encoded coordinates, reducing polygon storage by up to 60%.",
        "Contributed to QR printing, scanning, and compound mapping that handles 40,000+ QR prints and scans daily and cut manual logging by about 30%.",
      ],
    },
    {
      title: "Gold Tokenisation Platform",
      overview: "KYC, payments, and a gasless crypto wallet for a UAE fintech product.",
      stack: ["Node.js", "Ethers.js", "Turborepo"],
      points: [
        "Integrated third-party KYC APIs on the backend with matching frontend verification flows, enabling compliant, real-time identity validation.",
        "Integrated payment gateway APIs with secure backend handling and frontend checkout flows for the UAE market.",
        "Built a custom crypto wallet that lets users send funds securely through EIP-712 signed messages, enabling gasless transactions with Ethers.js.",
        "Structured a Turborepo monorepo to share frontend UI components, the design system, and reusable backend and Web3 logic across all services.",
      ],
    },
    {
      title: "Digital Product Passport Platform",
      overview: "Battery passports shaped around the EU Battery Regulation.",
      stack: ["Node.js", "PostgreSQL", "Prisma"],
      points: [
        "Designed the platform around EU regulations, studying the EU Battery Regulation and digital product passport requirements to shape data models, templates, and access rules.",
        "Built backend authentication and role-based access control, with role-aware configuration and sharing controls across 4 core modules.",
        "Integrated REST APIs with battery manufacturers' BMS to ingest live battery data into passports on a PostgreSQL and Prisma backend.",
        "Created a template engine for regulation-aligned passports and implemented verifiable credentials to prove the authenticity of passport data.",
        "Implemented access logs and event logs for a full audit trail of who viewed or changed passport data.",
      ],
    },
  ] satisfies WorkProject[],
};
