const Projects = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Example project card */}
        <div className="border p-4 rounded shadow-sm">
          <h3 className="text-xl font-bold mb-2">Project Name</h3>
          <p className="text-sm text-gray-600 mb-2">React, Tailwind</p>
          <p className="text-gray-700 mb-4">Short project description goes here.</p>
          <div className="space-x-2">
            <a href="#" className="text-indigo-600 underline">Live</a>
            <a href="#" className="text-gray-600 underline">Code</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
