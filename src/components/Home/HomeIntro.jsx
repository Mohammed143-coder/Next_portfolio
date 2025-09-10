import Link from "next/link";
import Typewriter from "../Typewriter";
import Image from "next/image";

const HomeIntro = () => {
  const techStack = [
    "Next Js Developer",
    "React Js Developer",
    "Web App Specialist",
    "Frontend Developer",
    "Full Stack Developer",
    "Quick Learner",
  ];
  return (
    <section className="w-full flex flex-col items-start justify-center md:w-1/2 ml-0 md:ml-4 p-4 md:p-0 mt-12 md:mt-0">
      <h3 className="absolute self-end md:-mt-24 p-2 bg-white/10 rounded-lg animate-bounce text-blue-400 border border-blue-500 duration-500 ease-in-out">
        Clean Code
      </h3>

      <div className="flex items-center mb-16 gap-2 bg-white/20 border border-gray-300 p-3 rounded-full text-sm text-white font-semibold my-4">
        <div
          className="animate-pulse bg-emerald-500 w-2.5 h-2.5 rounded-full"
          aria-label="online"
        ></div>
        <span>Welcome To My Universe</span>
      </div>
      <div
        className="w-40 h-40 rounded-full border-2 md:hidden m-auto"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
      >
        <Image
          src="/MJ.jpeg"
          alt="Mohammed Junaith"
          width={80}
          height={20}
          priority
          draggable={false}
          className="rounded-full w-39 h-39 object-cover pointer-events-none"
        />
        {/* <div className="absolute inset-0" aria-hidden /> */}
      </div>
      <h3 className="absolute md:self-center md:ml-6 md:-mt-28 p-2 bg-white/10 rounded-lg animate-bounce text-violet-400 border border-violet-500 duration-700 ease-in-out">
        Maintainable
      </h3>
      <h2 className="text-4xl text-white font-medium my-3.5">
        I'm Mohammed Junaith
      </h2>
      <h3 className="absolute self-center ml-5 mt-96 md:mt-60 p-2 bg-white/10 rounded-lg animate-bounce text-yellow-400 border border-yellow-500 duration-700 ">
        Scalable
      </h3>

      <Typewriter sentences={techStack} />
      <Link
        href="/Mohammad_Junaith_updatedone_ats.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border-2 mt-4 border-gray-500 text-gray-400 font-medium text-xl rounded-lg p-2 hover:text-emerald-500 hover:border-emerald-500 transition duration-300 ease-in-out"
      >
        Get Resume
      </Link>
    </section>
  );
};

export default HomeIntro;
