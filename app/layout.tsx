import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const roboto = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "GRAYL | OnePress® Global Protection - Purify water. Anywhere on earth. - GRAYL®",
  description:
    "GRAYL® Water Bottle Filters & Purifiers make clean drinking water anywhere on earth! Unrivaled ease, speed and versatility – simply Fill. Press. Drink.® OnePress® Virus Global Protection empowers international travelers, outdoor adventurers and survivalists to drink from the world's sketchiest water sources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-700 ${roboto.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
