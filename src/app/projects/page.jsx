import Link from "next/link";

const projects = [
  {
    title: "Granite Website",
    url: "https://amoghstonex.com"
  },
  {
    title: "Real Estate Developer Website",
    url: "https://rddevelopers.in"
  },
  {
    title: "Dry Fruits E-Commerce Store",
    url: "https://nutri-craze.com"
  },
  {
    title:"Milk Products Website",
    url:"https://drbuddha.co"
  },
  {
    title: "Auditor Landing Page",
    url: "https://auditorthambidurai.in/"
  },
  {
    title: "Portfolio Website",
    url: "https://junaith-portfolio.vercel.app/"
  },
    {
    title: "My-Namaz PWA app",
    url: "https://my-namazs.vercel.app/"
  }

];

export default function Projects() {
  return (
    <div className="p-6 md:py-6 w-full md:w-[80vw] h-full md:h-screen bg-[#0d1117] text-white overflow-y-auto">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center mt-4">
        <span className="text-orange-400">My </span><span className="">Portfolio </span><span className="text-emerald-500">Journey</span>
      </h1>
      <h5 className="text-gray-300 md:text-gray-500 mx-12 font-medium my-4 text-center">Showcasing real-world projects as a Frontend, React.js & Next.js Web Developer from Tamil Nadu, India — building fast, scalable, and SEO-friendly websites.</h5>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link key={index} href={project.url} target="_blank">
            <div className="rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition hover:border-sky-300 hover:scale-105 duration-600">
              {/* Auto-thumbnail using wordpress mshots service */}
              <img
               src={`https://s.wordpress.com/mshots/v1/${project.url}?w=600&h=500`}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg text-white font-semibold">{project.title}</h2>
                <p className="text-sm text-blue-400 mt-1 animate-pulse">Visit Website</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
