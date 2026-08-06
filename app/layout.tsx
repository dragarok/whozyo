import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WhoIsYourMechanic — Know who fixes your vehicle.",
  description:
    "Find verified mechanics, watch the work, settle up with an itemised receipt. Built for Nepal — for clients, mechanics, and service centres.",
  metadataBase: new URL("https://whozyo.com"),
  openGraph: {
    title: "WhoIsYourMechanic — Know who fixes your vehicle.",
    description:
      "Find verified mechanics, watch the work, settle up with an itemised receipt.",
    url: "https://whozyo.com",
    siteName: "WhoIsYourMechanic",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${space.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
