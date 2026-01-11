import { useState } from "react";
import dashboard from "../assets/dashboard-app.webp";
import RevealOnScroll from "../Ui/RevealOnScroll";
import Nael from "../assets/nael.png";
import Cosmicnode from "../assets/cosmicnode.png";
import NaelMulti from "../assets/nael-multi.png";

function Projects() {
  const [projects] = useState([
    {
      image: dashboard,
      name: "Time Entry App",
      brief:
        "Time Entry is a project management application designed to streamline project tracking, employee activity monitoring, and billing management within a company. It enables efficient handling of multiple projects while ensuring seamless time logging and availability tracking for employees in assigned project slots ",
      tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Vercel", "GitHub"],
    },
    {
      image: Nael,
      name: "Nael Construction - Management App",
      brief:
        "A custom construction management application that helps track ongoing projects, employee activities, and payments. It streamlines project progress monitoring, manages leave, appraisals, and attendance, and oversees financial aspects like payments and expenditures, ensuring efficient operations and decision-making. ",
      tech: ["React.js", "MUI", "Express", "PostgreSQL"],
    },
    {
      image:Cosmicnode ,
      name: "Cosmicnode",
      brief:
        "Cosmicnode is a wireless lighting and building management solution powered by the Infinity IoT platform. It enables smart automation, energy optimization, and real-time monitoring, helping businesses create efficient and sustainable environments. ",
      tech: ["React.js", "Bootstrap", "Redux", "Node.js", "MySQL"],
    },
    {
      image: NaelMulti,
      name: "Nael Webiste - Multi Lingual",
      brief:
        "A multilingual, SEO-optimized website designed to enhance global reach and brand visibility, delivering localized content, improved search rankings, fast performance, and a seamless user experience across devices.",
      tech: ["Next.js","Tailwind CSS" ,"Stroyblok CMS", "GraphQL", "Vercel" ,"i18n" ],
    },
  ]);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="max-w-7xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Features Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                    <p className="text-gray-200">View Project</p>
                    <a
                      href="https://github.com/ISHAQ98"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
