import Link from "next/link";
import Typewriter from "../Typewriter";

const HomeIntro = () => {
    const techStack = [
    "Next Js Developer",
    "React JS Developer",
    "Web App Specialist",
    "Frontend Developer",
    "Quick Learner",
  ];
    return (
         <section className=" w-2/5 flex flex-col items-start justify-center md:w-1/2 ml-0 md:ml-4">
        <h3 className="absolute self-end -mt-24 p-2 bg-white/10 rounded-lg animate-bounce text-blue-400 border border-blue-500 duration-700 ease-in-out">
          Clean Code
        </h3>
        <div className="flex items-center mb-16 gap-2 bg-white/20 border border-gray-300 p-3 rounded-full text-sm text-white font-semibold my-4">
          <div
            className="animate-pulse bg-emerald-500 w-2.5 h-2.5 rounded-full"
            aria-label="online"
          ></div>
          <span>Welcome To My Universe</span>
        </div>

        <h3 className="absolute self-center ml-6 -mt-20  p-2 bg-white/10 rounded-lg animate-bounce text-violet-400 border border-violet-500 duration-700 ease-in-out">
          Maintainable
        </h3>
        <h2 className="text-4xl text-white font-medium my-3.5">
          I'm Mohammed Junaith
        </h2>
        <h3 className="absolute self-center ml-5 mt-60 p-2 bg-white/10 rounded-lg animate-bounce text-yellow-400 border border-yellow-500 duration-700">
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
}

export default HomeIntro;