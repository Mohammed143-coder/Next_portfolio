import { TechStack } from "@/components/TechStack";

const Skills = () => {
  return (
   <section className="min-h-screen w-full md:w-[80%] bg-[#0d1117] text-white flex flex-col items-center justify-center px-4 ">
  <p className="text-3xl md:text-4xl font-semibold my-2 text-center leading-snug mt-16 md:mt-8">
  <span className=" text-orange-400">Tour Of </span>
  <span className="">My Technical </span>
  <span className="block md:inline text-teal-400">Treasure</span>
</p>

  <TechStack />
</section>

  );
};

export default Skills;
