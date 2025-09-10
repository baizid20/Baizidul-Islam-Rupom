import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    name: "Portfolio Website",
    tech: "React, Tailwind CSS",
    description: "A personal portfolio showcasing my skills and projects.",
    liveLink: "https://example.com",
    codeLink: "https://github.com/username/portfolio",
    img: "https://source.unsplash.com/600x400/?portfolio,website",
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(99, 102, 241, 0.3)", // Indigo-ish shadow
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.1 },
  },
};

const Projects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        My <span className="text-indigo-600">Projects</span>
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {projectsData.map(({ id, name, tech, description, liveLink, codeLink, img }, i) => (
          <motion.a
            key={id}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="group border border-gray-300 rounded-lg bg-white shadow-sm flex flex-col overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="w-full aspect-[3/2] overflow-hidden rounded-t-lg">
              <img
                src={img}
                alt={`${name} screenshot`}
                loading="lazy"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
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
                  aria-label={`Live demo of ${name}`}
                >
                  Live Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 text-gray-600 font-semibold border border-gray-400 rounded hover:bg-gray-800 hover:text-white transition"
                  aria-label={`Source code of ${name}`}
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
