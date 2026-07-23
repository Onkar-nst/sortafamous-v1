import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2ece0",
};

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
    default: "Sorta Famous · 360° Marketing & PR Agency in India",
    template: "%s · Sorta Famous",
  },
  description:
    "Fame is earned. We manage the rest. Insight led 360° marketing, PR, brand, social and content, visibility that lasts longer than the news cycle.",
  openGraph: {
    title: "Sorta Famous · 360° Marketing & PR Agency",
    description:
      "Visibility that lasts longer than the news cycle, no clout chasing, just status with substance.",
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
