"use client";

import HomeIntro from "@/components/Home/HomeIntro";
import HomeProfile from "@/components/Home/HomeProfile";

export default function Home() {
  return (
    <main className="flex w-[80vw] h-screen bg-[#0d1117]">
      <HomeIntro />
      <HomeProfile />
    </main>
  );
}
