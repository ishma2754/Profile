import type { Metadata } from "next";
import { Bebas_Neue, Geist } from "next/font/google";
import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { themeCssVars } from "@/styles/theme";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: site.oneLiner,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      style={themeCssVars() as CSSProperties}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
