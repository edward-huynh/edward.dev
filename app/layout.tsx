import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { RootLayoutPage } from "@/components/layout/RootLayout";
import LoadingRoute from "@/components/loadingRoute";
import "./globals.css";

const space_grotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Edward Huynh - Front End Developer | NextJS React TypeScript",
  description:
    "Portfolio of Edward Huynh - Experienced Front End Developer specializing in NextJS, React, TypeScript, TailwindCSS. Building modern web applications, e-commerce platforms, and AI-powered systems.",
  keywords: [
    "Edward Huynh",
    "Frontend Developer",
    "NextJS Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer Vietnam",
    "JavaScript Expert",
    "TailwindCSS",
    "NuxtJS",
    "Vue.js",
    "E-commerce Development",
    "Portfolio Website",
    "Modern Web Applications",
    "Responsive Design",
    "UI/UX Development",
    "ShadcnUI",
    "NextUI",
    "Framer Motion",
    "AI Systems",
    "PWA Development",
    "GraphQL",
    "SWR",
    "Recoil",
    "React Hook Form",
    "Zod Validation",
    "Web Performance",
    "SEO Optimization",
    "Mobile First Design",
    "Cross Browser Compatibility",
  ],
  authors: [{ name: "Edward Huynh" }],
  creator: "Edward Huynh",
  publisher: "Edward Huynh",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huynhphat.is-a.dev/",
    title: "Edward Huynh - Front End Developer | NextJS React TypeScript",
    description:
      "Portfolio of Edward Huynh - Experienced Front End Developer specializing in NextJS, React, TypeScript, TailwindCSS. Building modern web applications, e-commerce platforms, and AI-powered systems.",
    siteName: "Edward Huynh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edward Huynh - Front End Developer | NextJS React TypeScript",
    description:
      "Portfolio of Edward Huynh - Experienced Front End Developer specializing in NextJS, React, TypeScript, TailwindCSS. Building modern web applications, e-commerce platforms, and AI-powered systems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.className} antialiased `}>
        <RootLayoutPage>{children}</RootLayoutPage>
        <LoadingRoute />
      </body>
    </html>
  );
}
