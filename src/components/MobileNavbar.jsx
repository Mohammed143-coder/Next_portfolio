"use client";

import { useState } from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";
import { RiContactsBook2Line, RiMailSendLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const asideList = [
    { name: "Home", icon: IoHomeOutline, link: "/" },
    { name: "Skills", icon: FaCode, link: "/skills" },
    { name: "Experience", icon: MdOutlineWorkHistory, link: "/experience" },
    { name: "Projects", icon: TbHeartRateMonitor, link: "/projects" },
    { name: "Contact", icon: RiContactsBook2Line, link: "/contact" },
  ];

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-50">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-[#0d1117] to-[#1e293b] text-white shadow-lg">
        <h1 className="text-lg font-bold">Portfolio</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl p-2 border rounded-md"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <nav className="absolute top-[60px] left-0 w-full bg-gradient-to-r from-[#0d1117] to-[#1e293b] text-white px-6 py-6 shadow-lg border border-white/60 rounded-lg">
          <ul className="space-y-4">
            {asideList.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="my-2 hover:bg-blue-400 font-medium">
                  <Link
                    href={item.link}
                     onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 transition-colors group text-xl rounded-lg"
                  >
                    <Icon className="group-hover:text-blue-400" />
                    <span className="text-gray-400 group-hover:text-white">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/mohammed-junaith-software-developer"
              target="_blank"
            >
              <FaLinkedin className="text-2xl hover:text-blue-500" />
            </a>
            <a href="https://github.com/Mohammed143-coder" target="_blank">
              <FaGithub className="text-2xl hover:text-gray-300" />
            </a>
            <a href="mailto:junaithdedhai2001@gmail.com">
              <RiMailSendLine className="text-2xl hover:text-red-400" />
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
