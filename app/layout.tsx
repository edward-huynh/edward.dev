import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { RootLayoutPage } from "@/components/layout/RootLayout";
import LoadingRoute from "@/components/loadingRoute";

const space_grotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Edward Huynh",
  description: "Portfolio of Edward Huynh",
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
