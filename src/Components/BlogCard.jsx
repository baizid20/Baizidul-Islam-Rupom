// src/components/BlogCard.jsx
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{blog.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {blog.date} • {blog.readingTime} • {blog.category}
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{blog.excerpt}</p>

      <div className="mt-4">
        <Link
          to={`/blog/${blog.id}`}
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
