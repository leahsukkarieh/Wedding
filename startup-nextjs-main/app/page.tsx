import ScrollUp from "@/components/Common/ScrollUp";
import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad & Tala's Wedding",
  description: "Home Page",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Countdown />
    </>
  );
}
