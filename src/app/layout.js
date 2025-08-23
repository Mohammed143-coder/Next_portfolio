import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AsideBar from "@/components/AsideBar";
import MobileNavbar from "@/components/MobileNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohammed Junaith | Portfolio",
  description: "A Passionate Developer skilled in React, Next.js, and modern web technologies. I build scalable, responsive, and SEO-friendly websites with clean UI/UX. Open to global opportunities and ready to contribute as a creative web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex w-full h-full bg-black  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AsideBar/>
        <MobileNavbar />
        {children}
      </body>
    </html>
  );
}
