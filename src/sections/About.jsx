import RevealOnScroll from "../Ui/RevealOnScroll";
function About() {
  const skills = [
    "React.js",
    "Next.js",
    "Html",
    "Css",
    "Javascript",
    "TypeScript ",
    "TailwindCSS",
    "Redux State Management",
    "React Hooks",
    "Storyblok CMS",
    "Prismic CMS",
    "Context API",
    "RESTful APIs",
    "Node Js",
    "SQL",
    "MongoDB",
    "GraphQL",
    "JEST",
    "React Testing Library",
    "Git & GitHub",
    "Responsive Design",
    "Agile Methodologies",
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="text-center p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-5 text-xl">
             As a frontend developer, I specialize in crafting responsive and interactive web applications using modern frontend technologies. I focus on performance optimization, reusable component architecture, and accessibility to ensure seamless experiences across devices. I continuously explore new tools and best practices to deliver efficient and scalable solutions.
            </p>
          </div>
          <div className="">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>


          </div>
          <div className="p-6 hover:-translate-y-1 transition-all lg:pt-20">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Software Development Enginner - Toobler Technologies</em>
                </strong>
                <br /><p className="mt-5">March 2022 - Present</p>
                <ul className="mt-5 list-disc list-inside">
                  <li className="mb-4">Frontend Developer skilled in building responsive, high-performance web applications using React.js, Next.js, JavaScript (ES6+), and TypeScript.</li>
                  <li className="mb-4">Experienced in creating modular UI with React Hooks, Redux, and Context API, ensuring scalable and maintainable front-end architecture.</li>
                  <li className="mb-4">Proficient in Next.js App Router and Page Router, SSR/SSG, dynamic routing, and deploying multilingual platforms using i18n.</li>
                  <li className="mb-4">Strong in API integration with REST and GraphQL, and familiar with backend technologies like Node.js, SQL, and MongoDB.</li>
                  <li className="mb-4">Skilled in HTML, CSS, Tailwind CSS, Bootstrap, MUI, and building consistent, cross-browser responsive interfaces.</li>
                  <li className="mb-4">Experienced with Storyblok CMS and Prismic CMS for developing flexible, content-driven platforms.</li>
                  <li className="mb-4">Knowledgeable in performance optimization techniques such as lazy loading, code splitting, and reducing render overhead.</li>
                  <li className="mb-4">Familiar with modern SDLC, Agile/Scrum, Git workflows, debugging, and contributing effectively to cross-functional teams.</li>
                  <li className="mb-4">Strong problem-solving, analytical, and communication skills with a focus on clean, maintainable code.</li>
                </ul>
               
              </li>
              <li>
                CS50 , Data Structures, Web Development, Cloud Computing...
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
