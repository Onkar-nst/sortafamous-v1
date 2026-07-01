import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sortafamous.in"),
  title: {
    default: "Sorta Famous — PR & Strategic Communications Agency in India",
    template: "%s · Sorta Famous",
  },
  description:
    "Fame is earned. We manage the rest. Insight-led PR and social media performance — visibility that lasts longer than the news cycle.",
  openGraph: {
    title: "Sorta Famous — PR & Strategic Communications Agency",
    description:
      "Visibility that lasts longer than the news cycle — no clout chasing, just status with substance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
