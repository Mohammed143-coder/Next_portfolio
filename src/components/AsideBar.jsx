"use client"
import Link from "next/link";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdOutlineCastForEducation,
  MdOutlineWorkHistory,
} from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";
import { RiContactsBook2Line, RiMailSendLine } from "react-icons/ri";
import Image from "next/image";

const AsideBar = () => {
  const asideList = [
    { name: "Home", icon: <IoHomeOutline />, link: "/" },
    { name: "Skills", icon: <FaCode />, link: "/skills" },

    { name: "Experience", icon: <MdOutlineWorkHistory />, link: "/experience" },
    // {
    //   name: "Education",
    //   icon: <MdOutlineCastForEducation />,
    //   link: "/education",
    // },
    { name: "Projects", icon: <TbHeartRateMonitor />, link: "/projects" },
    { name: "Contact", icon: <RiContactsBook2Line />, link: "/contact" },
  ];
  const socialIcons = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mohammed-junaith-software-developer",
    },
    { icon: <FaGithub />, link: "https://github.com/Mohammed143-coder" },
    { icon: <RiMailSendLine />, link: "mailto:junaithdedhai2001@gmail.com" },
  ];

  return (
    <aside className="w-[20vw] bg-black text-white hidden md:block">
      <div className="mt-5 flex flex-col items-center gap-4">
        <div
          className="w-40 h-40 rounded-full border-2 "
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
        >
          <Image
            src="/MJ.jpeg"
            alt="Mohammed Junaith"
            width={80}
            height={20}
            className="rounded-full w-39 h-39 object-cover pointer-events-none"
          />
          {/* this line help us to prevent from touches and click for the particular div and around the div at some distance */}
          {/* <div className="absolute inset-0" aria-hidden /> */}
        </div>
        <div className="flex justify-center my-2 gap-4 w-full">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 text-2xl"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <ul className="flex flex-col mx-4 my-5 gap-2">
        {asideList.map((item, index) => (
          <li key={index} className="my-2 hover:bg-blue-400 font-medium">
            <Link
              href={item.link}
              className="bg-black flex items-center gap-3 p-3 transition-colors group text-xl rounded-lg"
            >
              <p className="group-hover:text-blue-400">{item.icon}</p>
              <p className="text-gray-400 group-hover:text-white">
                {item.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideBar;
