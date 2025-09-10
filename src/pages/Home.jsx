import { useEffect } from 'react';
import SocialSidebar from './SocialSidebar'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from '../assets/baizidul-islam-rupom.jpeg';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      summary: 'A beginner-friendly guide to using hooks in React for better state and lifecycle management.',
      image: 'https://source.unsplash.com/600x400/?react,code&sig=1',
      link: '/blog/1',
    },
    {
      id: 2,
      title: 'Tailwind CSS Tips',
      summary: 'Learn how to rapidly build modern, responsive UIs with Tailwind CSS utilities.',
      image: 'https://source.unsplash.com/600x400/?css,design&sig=2',
      link: '/blog/2',
    },
    {
      id: 3,
      title: 'JavaScript ES6 Features',
      summary: 'An overview of essential ES6 features to write cleaner and more efficient JavaScript code.',
      image: 'https://source.unsplash.com/600x400/?javascript,programming&sig=3',
      link: '/blog/3',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description:
        'A responsive portfolio built with React and Tailwind CSS, showcasing projects and skills.',
      image: 'https://source.unsplash.com/random/400x200?portfolio&sig=1',
      link: '/projects/1',
    },
    {
      id: 2,
      title: 'E-commerce Store',
      description:
        'A sleek e-commerce platform with product filtering, cart functionality, and smooth UI animations.',
      image: 'https://source.unsplash.com/random/400x200?ecommerce&sig=2',
      link: '/projects/2',
    },
    {
      id: 3,
      title: 'Blog CMS',
      description:
        'A content management system for blogs built with React and integrated with a headless CMS.',
      image: 'https://source.unsplash.com/random/400x200?blog,technology&sig=3',
      link: '/projects/3',
    },
  ];

  return (
   <>
    <SocialSidebar/>
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-28">

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12" data-aos="fade-up">
        {/* Text */}
        <div className="flex-1 text-center md:text-left space-y-6" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Baizidul Islam Rupom
            </span>
          </h1>

          <p className="text-md md:text-lg text-gray-700 dark:text-gray-500 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I’m a frontend developer who loves turning designs into pixel-perfect, accessible, and performant user interfaces.
            Currently exploring advanced React patterns and motion-based UI.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="/projects"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition duration-300"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-800 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end" data-aos="zoom-in">
          <img
            src={profilePic}
            alt="Profile picture of Baizidul Islam Rupom"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section
        className="bg-gray-50 dark:bg-gray-800 rounded-2xl px-8 py-12 shadow-lg flex flex-col md:flex-row items-center gap-10"
        data-aos="fade-up"
      >
        {/* Icon */}
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-white rounded-full flex items-center justify-center text-4xl font-bold shadow-md">
          👨‍💻
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            I'm a self-motivated frontend web developer with a passion for clean code and modern design. I enjoy transforming complex ideas into seamless user experiences.
          </p>

          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 text-base">
            <li>🔧 Skilled in React.js, Tailwind CSS, and JavaScript ES6+</li>
            <li>📱 Focused on mobile-first and responsive design</li>
            <li>🚀 Strong understanding of performance and accessibility</li>
            <li>🎯 Familiar with Git, GitHub, and deployment workflows</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section data-aos="fade-up" className="py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My <span className="text-indigo-600">Skills</span>
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {/* Frontend */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>⚛️ React.js</li>
              <li>🧠 JavaScript (ES6+)</li>
              <li>💅 Tailwind CSS</li>
              <li>🧱 HTML5 & CSS3</li>
              <li>📱 Responsive Design</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>🧰 Git & GitHub</li>
              <li>🧩 NPM / Yarn</li>
              <li>🧪 VS Code</li>
              <li>🚀 Netlify / Vercel</li>
            </ul>
          </div>

          {/* Design */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Design</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>🎨 Figma</li>
              <li>🧠 UI/UX Basics</li>
              <li>📐 Wireframing</li>
              <li>📄 Prototyping</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section
        className="py-20 bg-gradient-to-tr from-indigo-100 via-purple-100 to-indigo-50 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-800 rounded-3xl shadow-xl max-w-7xl mx-auto px-6"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          Latest <span className="text-indigo-600">Blog Posts</span>
        </h2>

        <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          {blogPosts.map(({ id, title, summary, image, link }) => (
            <article
              key={id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={id * 100}
            >
              <img
                src={image}
                alt={`Thumbnail for blog post titled ${title}`}
                className="rounded-t-xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{summary}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          My <span className="text-indigo-600">Projects</span>
        </h2>

        <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6">
          {projects.map(({ id, title, description, image, link }) => (
            <article
              key={id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={id * 100}
            >
              <img
                src={image}
                alt={`Screenshot of project titled ${title}`}
                className="rounded-t-xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  View Details →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
    </>
  );
};

export default Home;
