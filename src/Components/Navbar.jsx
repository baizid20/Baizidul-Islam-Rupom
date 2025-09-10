import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-indigo-600">YourName</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/projects" className="hover:text-indigo-600">Projects</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
