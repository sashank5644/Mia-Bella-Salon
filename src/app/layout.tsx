import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mia Bella Salon & Spa | Best of Salem",
  description: "Mia Bella Salon & Spa in Salem, OR. 24 years of excellence. Winner of Best of Salem for 2 years in a row. Hair, Nails, and Spa services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-neutral-900 text-neutral-100`}
      >
        {children}
        <GoogleAnalytics gaId="G-KP8KVV7TKB" />
      </body>
    </html>
  );
}
