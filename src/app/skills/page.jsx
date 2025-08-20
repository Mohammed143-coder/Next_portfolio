import { TechStack } from "@/components/TechStack";

const Skills = () => {
  return (
    <section className="text-2xl h-screen w-[80vw] bg-[#0d1117] text-white flex flex-col items-center justify-center">
      <p className="text-4xl my-8 ">
        <span className="text-orange-400">Tour Of </span>
        <span>My Technical </span>
        <span className="text-teal-400"> Treasure</span>
      </p>
      <TechStack />
    </section>
  );
};

export default Skills;
