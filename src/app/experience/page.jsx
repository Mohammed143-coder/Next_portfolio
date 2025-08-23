import ExperienceBlock from "@/components/ExperienceBlock";
import React from "react";

const Experience = () => {
  return (
    <section className="flex flex-col text-2xl w-full md:w-[80vw] h-full md:h-screen bg-[#0d1117] text-white">
      <section className="mt-20 text-center ">
        <h1 className="text-3xl mtx-2 font-semibold text-blue-400">Professional Journey</h1>
        <h2 className="text-xl mt-2 text-gray-500 font-medium">
          Transforming ideas into reality to the digital world
        </h2>
      </section>
     <ExperienceBlock/>
    </section>
  );
};

export default Experience;
