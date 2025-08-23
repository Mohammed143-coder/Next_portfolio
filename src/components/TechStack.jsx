import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiVercel,
  SiVite,
  SiHostinger,
  SiSpring,
  SiPostman,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { MdDesignServices } from "react-icons/md";
import { RiTeamFill, RiLightbulbFlashFill } from "react-icons/ri";
import { GiBugleCall } from "react-icons/gi";
import { FaGithub, FaJava } from "react-icons/fa6";

export const TechStack = () => {
  const skills = {
    "Frontend Development": [
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    ],
    "Backend Development": [
      { name: "Java", icon: <FaJava className="text-red-400" /> },
      {
        name: "Next.js Router Api",
        icon: <SiNextdotjs className="text-white" />,
      },
      { name: "Spring Boot", icon: <SiSpring className="text-green-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "REST APIs", icon: <TbApi className="text-yellow-400" /> },
    ],

    "Tools & Technologies": [
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-400 w-5 h-5" />,
      },
      { name: "Git hub", icon: <FaGithub /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Spring", icon: <SiSpring className="text-green-400" /> },
      { name: "Vite", icon: <SiVite className="text-yellow-400" /> },
      { name: "Hostinger", icon: <SiHostinger className="text-violet-400" /> },
    ],
    "Creative Skills": [
      {
        name: "Problem Solving",
        icon: <RiLightbulbFlashFill className="text-amber-400" />,
      },
      {
        name: "Creative UI Design",
        icon: <MdDesignServices className="text-pink-400" />,
      },
      {
        name: "Debugging & Optimization",
        icon: <GiBugleCall className="text-red-400" />,
      },
      {
        name: "Team Collaboration",
        icon: <RiTeamFill className="text-teal-400" />,
      },
      {
        name: "Building Scalable Web Apps",
        icon: <FaReact className="text-sky-400" />,
      },
    ],
    "UI/UX Design": [
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      {
        name: "Responsive Design",
        icon: <MdDesignServices className="text-purple-400" />,
      },
    ],
  };
  return (
    <div className="my-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">
      {skills &&
        Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 backdrop-blur-md shadow-lg hover:scale-105 transition-all duration-300"
          >
            {/* Light reflection effect */}
            <div className="absolute inset-0 before:absolute before:w-[150%] before:h-[200%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:rotate-12 before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-1000 before:content-['']"></div>

            <h2 className="text-lg sm:text-xl font-bold mb-4">{category}</h2>
            <ul className="flex flex-wrap gap-3">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 p-2 text-sm sm:text-base backdrop-blur-sm hover:bg-white/20 transition"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};
