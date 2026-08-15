import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { en: "/", ne: "/ne", "x-default": "/" },
  },
};

export default function Home() {
  return <HomePage lang="en" />;
}
