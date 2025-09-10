import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Dummy blog post data with image URLs
const blogPosts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post Title ${i + 1}`,
  excerpt: "This is a short summary of the blog post. It introduces the main points in a clear way.",
  date: new Date(2025, 8, 1 - i).toISOString().slice(0, 10), // Different dates
  time: "5 min read",
  category: i % 2 === 0 ? "Tech" : "Life",
  image: `https://source.unsplash.com/600x400/?nature,tech&sig=${i + 1}`, // Unique image per blog
}));

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
];

const categories = ["All", "Tech", "Life"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [category, setCategory] = useState("All");

  // Filter by search & category
  const filteredBlogs = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  // Sort filtered blogs
  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
    else return new Date(a.date) - new Date(b.date);
  });

  const blogsToShow = showAll ? sortedBlogs : sortedBlogs.slice(0, 6);

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
          aria-label="Search blog posts"
        />

        <div className="flex gap-3">
          <select
            aria-label="Sort blog posts"
            className="border px-3 py-2 rounded-md text-sm text-gray-600"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          <select
            aria-label="Filter blog posts by category"
            className="border px-3 py-2 rounded-md text-sm text-gray-600"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {blogsToShow.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col cursor-pointer"
            >
              <Link to={`/blog/${post.id}`} className="flex flex-col flex-grow">
                <img
                  src={post.image}
                  alt={`Thumbnail for ${post.title}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.time}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More Button */}
      {sortedBlogs.length > 6 && (
        <div className="text-center mt-12">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      )}
    </main>
  );
};

export default Blog;
