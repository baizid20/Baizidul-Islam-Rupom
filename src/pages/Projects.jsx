const projectsData = [
  {
    id: 1,
    name: "Portfolio Website",
    tech: "React, Tailwind CSS",
    description: "A personal portfolio showcasing my skills and projects.",
    liveLink: "https://example.com",
    codeLink: "https://github.com/username/portfolio",
    img: "https://source.unsplash.com/600x400/?portfolio,website", // example image URL
  },
  {
    id: 2,
    name: "Todo App",
    tech: "React, Context API",
    description: "A simple todo app with task management features.",
    liveLink: "https://example.com",
    codeLink: "https://github.com/username/todo-app",
    img: "https://source.unsplash.com/600x400/?todo,app",
  },
  {
    id: 3,
    name: "E-commerce Store",
    tech: "Next.js, Tailwind",
    description: "An online store with shopping cart and payment integration.",
    liveLink: "https://example.com",
    codeLink: "https://github.com/username/ecommerce-store",
    img: "https://source.unsplash.com/600x400/?ecommerce,shop",
  },
  // add more projects here...
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        My <span className="text-indigo-600">Projects</span>
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {projectsData.map(({ id, name, tech, description, liveLink, codeLink, img }) => (
          <a
            key={id}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="w-full aspect-[3/2] overflow-hidden rounded-t-lg">
              <img
                src={img}
                alt={`${name} screenshot`}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 mb-2">
                  {name}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">{tech}</p>
                <p className="text-gray-700 text-base leading-relaxed">{description}</p>
              </div>

              <div className="mt-6 flex space-x-4">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 text-indigo-600 font-semibold border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition"
                >
                  Live Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 text-gray-600 font-semibold border border-gray-400 rounded hover:bg-gray-800 hover:text-white transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
