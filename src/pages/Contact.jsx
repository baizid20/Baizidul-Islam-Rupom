const Contact = () => {
  return (
    <section className="py-12 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Your Message" rows="4" className="w-full border p-2 rounded"></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
