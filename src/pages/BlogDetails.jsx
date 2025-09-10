import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const postId = parseInt(id);
  const navigate = useNavigate();

  const totalPosts = 20; // Update if total blog count changes

  const handlePrevious = () => {
    if (postId > 1) navigate(`/blog/${postId - 1}`);
  };

  const handleNext = () => {
    if (postId < totalPosts) navigate(`/blog/${postId + 1}`);
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Blog Post #{postId}
      </h1>

      <p className="text-gray-700 leading-relaxed mb-16">
        Here will be the full content of the blog article #{postId}. You can
        extend this using a real CMS or markdown files later.
      </p>

      <div className="flex justify-between items-center gap-4 mb-10">
        <button
          onClick={handlePrevious}
          disabled={postId === 1}
          className={`px-5 py-2 rounded-lg font-medium transition ${
            postId === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
          aria-disabled={postId === 1}
          aria-label="Go to previous blog post"
        >
          ← Previous
        </button>

        <button
          onClick={handleNext}
          disabled={postId === totalPosts}
          className={`px-5 py-2 rounded-lg font-medium transition ${
            postId === totalPosts
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
          aria-disabled={postId === totalPosts}
          aria-label="Go to next blog post"
        >
          Next →
        </button>
      </div>

      <div className="text-center">
        <Link
          to="/blog"
          className="inline-block px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
          aria-label="Back to blog list"
        >
          ← Back to Blogs
        </Link>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        Post {postId} of {totalPosts}
      </p>
    </motion.div>
  );
};

export default BlogDetails;
