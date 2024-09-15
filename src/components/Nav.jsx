import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="w-screen z-10 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between fixed bg-nav min-w-full p-3 ">
          {/* Logo */}
          <div className="text-blue-400 text-2xl font-bold">
            <Link to="/" className="flex items-center">
              <img src="/" alt="" className="h-8 mr-2" />
              <span>B</span>
            </Link>
          </div>

          {/* Menu */}
          <ul className="flex space-x-6 mr-2 md:mr-8 font-medium">
            <li>
              <a
                href="#home"
                className="text-blue-400 hover:text-gray-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#additional-section"
                className="text-blue-400 hover:text-gray-400 transition-colors duration-300"
              >
                Blogs
              </a>
            </li>
            <li>
              <Link
                to="#additional-section"
                className="text-blue-400 hover:text-gray-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
}

export default Nav;
