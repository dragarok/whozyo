import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
  Noto_Sans_Devanagari,
} from "next/font/google";
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

// Space Grotesk, Inter and JetBrains Mono are Latin-only, so every Devanagari
// glyph on /ne would otherwise fall through to whatever the device happens to
// have. This sits behind all three in the font stacks in globals.css: the
// browser picks per glyph, so Latin still renders in the brand faces and only
// नेपाली reaches this one.
const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-devanagari",
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
      className={`${space.variable} ${inter.variable} ${mono.variable} ${devanagari.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
