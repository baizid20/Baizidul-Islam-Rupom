import SocialMediaCard from './SocialMediaCard';

const awards = [
  "Best Developer Award 2024",
  "Outstanding Project Lead 2023",
  "Top Performer of the Year 2022",
];

const jobExperience = [
  {
    role: "Frontend Developer",
    company: "Tech Company",
    period: "2023 - Present",
    description: "Developing and maintaining scalable React web applications and working closely with UI/UX teams.",
  },
  {
    role: "Junior Developer",
    company: "Startup Inc.",
    period: "2021 - 2023",
    description: "Built reusable UI components, implemented responsive layouts, and participated in agile development cycles.",
  },
];

const About = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-16">

      {/* Page Header */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
          I’m a passionate Frontend Web Developer with strong expertise in React, Tailwind CSS, and modern JavaScript. I love building clean, performant interfaces and solving real-world problems through creative coding.
        </p>
      </div>

      {/* CV Section */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 text-center shadow-sm">
        <h3 className="text-2xl font-bold text-indigo-800 mb-3">Want to know more?</h3>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          You can download my resume to learn more about my skills, education, and professional experience.
        </p>
        <a
          href="/path-to-cv.pdf"
          download
          className="inline-block bg-indigo-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
        >
          Download My CV
        </a>
      </div>

      {/* Cards stacked vertically */}
      <div className="flex flex-col space-y-8">

        {/* Social Media / Work Gallery Card */}
        {/* Awards Card */}
        <div className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Awards & Recognition</h3>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            {awards.map((award, idx) => (
              <li key={idx}>{award}</li>
            ))}
          </ul>
        </div>

        {/* Job Experience Card */}
        <div className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Job Experience</h3>
          <div className="space-y-6">
            {jobExperience.map(({ role, company, period, description }, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-gray-900">
                  {role} @ <span className="text-indigo-600">{company}</span>
                </h4>
                <p className="text-sm text-gray-500 italic mb-1">{period}</p>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <SocialMediaCard />


      </div>
    </section>
  );
};

export default About;
