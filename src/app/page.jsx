"use client";

import ChatBox from "@/components/ChatBox";
import HomeIntro from "@/components/Home/HomeIntro";
import HomeProfile from "@/components/Home/HomeProfile";

export default function Home() {
  return (
   <main className="w-full block md:flex md:w-[80vw] h-full md:h-screen bg-[#0d1117]">
  <HomeIntro />
  <HomeProfile />
  <ChatBox/>
</main>

  );
}
