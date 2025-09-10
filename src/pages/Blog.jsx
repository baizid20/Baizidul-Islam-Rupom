import { useState } from "react";
import { Link } from "react-router-dom";

// Dummy blog post data with image URLs
const blogPosts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post Title ${i + 1}`,
  excerpt: "This is a short summary of the blog post. It introduces the main points in a clear way.",
  date: "2025-09-01",
  time: "5 min read",
  category: "Tech",
  image: `https://source.unsplash.com/600x400/?nature,tech&sig=${i + 1}`, // Unique image per blog
}));

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredBlogs = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const blogsToShow = showAll ? filteredBlogs : filteredBlogs.slice(0, 6);

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Read <span className="text-indigo-600">My Blogs</span>
      </h1>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <input
          type="text"
          placeholder="Search blog posts..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex gap-3">
          <select className="border px-3 py-2 rounded-md text-sm text-gray-600">
            <option>Date</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <select className="border px-3 py-2 rounded-md text-sm text-gray-600">
            <option>All Types</option>
            <option>Tech</option>
            <option>Life</option>
          </select>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsToShow.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={post.image}
              alt={`Thumbnail for ${post.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Show More Button */}
      {filteredBlogs.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </main>
  );
};

export default Blog;
