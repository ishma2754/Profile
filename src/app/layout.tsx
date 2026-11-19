import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import type { CSSProperties } from "react";
import { SiteNav } from "@/components/SiteNav";
import { site } from "@/content/site";
import { themeColorCss, themeCssVars } from "@/styles/theme";
import "./globals.css";

const display = Source_Serif_4({
  weight: "600",
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
  title: site.name,
  description: site.oneLiner,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      style={themeCssVars() as CSSProperties}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeColorCss() }} />
        <Script id="theme" strategy="beforeInteractive">
          {`try{if(localStorage.getItem("theme")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`}
        </Script>
      </head>
      <body className="ruled-sides min-h-full font-body text-ink">
        <div className="mx-auto min-h-svh max-w-layout border-x border-t border-line bg-bg">
          <SiteNav />
          {children}
        </div>
      </body>
    </html>
  );
}
