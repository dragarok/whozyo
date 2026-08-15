import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

const TITLE = "WhoIsYourMechanic — तपाईंको गाडी कसले बनाउँछ, थाहा पाउनुहोस्।";
const DESCRIPTION =
  "प्रमाणित मेकानिक खोज्नुहोस्, काम भइरहेकै बेला हेर्नुहोस्, र विस्तृत बिलसहित हिसाब मिलाउनुहोस्। नेपालका लागि बनाइएको — गाडीधनी, मेकानिक र सर्भिस सेन्टरका लागि।";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ne",
    languages: { en: "/", ne: "/ne", "x-default": "/" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://whozyo.com/ne",
    siteName: "WhoIsYourMechanic",
    locale: "ne_NP",
    type: "website",
  },
};

export default function HomeNepali() {
  return <HomePage lang="ne" />;
}
