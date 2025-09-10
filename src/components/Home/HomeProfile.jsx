import React from "react";

const HomeProfile = () => {
  const profile = {
    name: "Mohammed Junaith",
    title:
      "React & Next Js Developer| Web Developer| Frontend Developer| Full Stack Developer| Java DSA Practitioner",
    skills: [
      "Next Js",
      "React JS",
      "Redux",
      "Next Js API Route",
      "Next Auth",
      "Mongo DB",
      "Java",
      "JavaScript",
      "Langchain",
      "Langgraph",
      "HTML5",
      "Tailwind CSS",
      "DSA Leaner",
      "AI Implementation & intraction",
      "Postman",
      "Git",
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 1.2, // Assuming 1 year of experience,
    hireable: function () {
      return (
        this.hardWorker &&
        this.problemSolver &&
        this.skills.length >= 5 &&
        this.yearsOfExperience >= 1
      );
    },
  };
  return (
    <section className="w-full md:w-3/5 flex min-h-screen items-center justify-center p-6">
      {/* Outer Gradient Border */}
      <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-xl">
        {/* Inner Code Box */}

        <div className="bg-[#0d1117] text-gray-200 font-mono rounded-xl p-4 md:p-6 w-full">
          <div className="flex items-start justify-start h-10 md:h-18 gap-2">
            <div className="rounded-full w-4 h-4 bg-red-400"></div>
            <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
            <div className="rounded-full w-4 h-4 bg-green-400"></div>
          </div>
          <p>
            <span className="text-pink-500">const</span>{" "}
            <span className="text-purple-400">profile</span> = {"{"}
          </p>

          <div className="ml-6 space-y-1">
            <p>
              <span className="text-yellow-400">name</span>: '
              <span className="text-green-400">{profile.name}</span>',
            </p>
            <p>
              <span className="text-yellow-400">title</span>: '
              <span className="text-green-400">{profile.title}</span>',
            </p>

            <p>
              <span className="text-yellow-400">skills</span>: [
              {profile.skills.map((skill, i) => (
                <span key={i} className="text-green-400">
                  '{skill}'{i < profile.skills.length - 1 ? ", " : ""}
                </span>
              ))}
              ],
            </p>

            <p>
              <span className="text-yellow-400">hardWorker</span>:{" "}
              <span className="text-orange-400">
                {profile.hardWorker ? "true" : "false"}
              </span>
              ,
            </p>
            <p>
              <span className="text-yellow-400">quickLearner</span>:{" "}
              <span className="text-orange-400">
                {profile.quickLearner ? "true" : "false"}
              </span>
              ,
            </p>
            <p>
              <span className="text-yellow-400">problemSolver</span>:{" "}
              <span className="text-orange-400">
                {profile.problemSolver ? "true" : "false"}
              </span>
              ,
            </p>
            <p>
              <span className="text-yellow-400">yearsOfExperience</span>:{" "}
              <span className="text-purple-400">
                {profile.yearsOfExperience}
              </span>
              ,
            </p>

            <p>
              <span className="text-yellow-400">hireable</span>:{" "}
              <span className="text-pink-500">function</span>() {"{"}
            </p>
            <div className="ml-6">
              <p>
                <span className="text-pink-500">return</span> (
              </p>
              <p className="ml-6">
                <span className="text-purple-400">this</span>.
                <span className="text-yellow-400">hardWorker</span> &&
              </p>
              <p className="ml-6">
                <span className="text-purple-400">this</span>.
                <span className="text-yellow-400">problemSolver</span> &&
              </p>
              <p className="ml-6">
                <span className="text-purple-400">this</span>.
                <span className="text-yellow-400">skills</span>.
                <span className="text-purple-400">length</span> {" >= "}{" "}
                <span className="text-purple-400">5</span> &&
              </p>
              <p className="ml-6">
                <span className="text-purple-400">this</span>.
                <span className="text-yellow-400">yearsOfExperience</span>{" "}
                {" >= "} <span className="text-purple-400">1</span>
              </p>
              <p>);</p>
            </div>
            <p>{"}"}</p>
          </div>

          <p>{"};"}</p>
        </div>
      </div>
    </section>
  );
};

export default HomeProfile;
