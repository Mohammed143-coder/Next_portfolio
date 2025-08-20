import React from "react";
import { FaCode } from "react-icons/fa6";

const ExperienceBlock = () => {
  const experience = [
    // {
    //   company: "Freelance / Practice Work",
    //   title: "Frontend Developer",
    //   duration: "2024 – Present",
    //   description:
    //     "Built 20+ React projects including e-commerce, clones, and dynamic UIs with clean, reusable components.",
    // },
    {
      company: "SKY X Digi Solutions",
      title: "Jr Web Developer",
      duration: "May 2024 – July 2025",
      description:
        "Developed 6+ Next.js websites with SSR/SSG, boosting SEO and load speed by 35–40%. Built reusable components, integrated REST APIs/GraphQL, optimized performance for whatsApp api product development and collaborated with designers for accessible UI.",
    },
    {
  company: "Open to Opportunities 🚀",
  title: "Open to contribute in modern web technologies",
  duration: "Present 2025 ",
  description:
    "Currently working on practice projects while actively seeking a professional Frontend Developer role || Full Stack Developer . Built 06+ different types of React projects. Passionate about crafting scalable and high-performance web applications.",
}

  ];

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 text-white">
      {experience.map((exp, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg group"
        >
          {/* Floating gradient icon in top-left */}
          <div className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-md">
            <FaCode />
          </div>

          {/* Role */}
          <h3 className="text-2xl font-bold mt-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {exp.title}
          </h3>

          {/* Company & Duration */}
          <div className="flex justify-between items-center mt-3 text-sm">
            <span className="text-blue-400 font-medium">{exp.company}</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-gray-300 text-xs">
              {exp.duration}
            </span>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-300 text-base leading-relaxed border-l-2 border-purple-500 pl-4">
            {exp.description}
          </p>

          {/* Light sweep effect on hover */}
          <div className="absolute inset-0 before:absolute before:w-[150%] before:h-[200%] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:rotate-12 before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-1000 before:content-['']"></div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceBlock;
