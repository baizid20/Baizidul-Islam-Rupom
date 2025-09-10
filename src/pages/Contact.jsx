import { motion } from "framer-motion";
import SocialSidebar from "./SocialSidebar";

const Contact = () => {
  return (
    <>
      <SocialSidebar />
      <section className="bg-white min-h-screen flex items-center justify-center px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-2xl shadow-xl rounded-3xl p-10 bg-white dark:bg-gray-800 transition-all duration-500"
        >
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 leading-snug">
            Get in Touch
          </h2>

          <form className="space-y-8">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-5 py-4 text-base bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-5 py-4 text-base bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                className="w-full px-5 py-4 text-base bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
