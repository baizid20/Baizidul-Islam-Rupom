import { useParams, useNavigate } from "react-router-dom";

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
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Blog Post #{postId}
      </h1>

      <p className="text-gray-700 leading-relaxed mb-16">
        Here will be the full content of the blog article #{postId}. You can
        extend this using a real CMS or markdown files later.
      </p>

      <div className="flex justify-between items-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={postId === 1}
          className={`px-5 py-2 rounded-lg font-medium transition ${
            postId === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
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
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
