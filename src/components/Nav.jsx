import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-button')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar for medium and larger screens */}
      <motion.nav
        className="w-screen z-10 items-center justify-between fixed bg-nav min-w-full p-3 hidden md:flex"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="text-blue-400 text-2xl font-bold">
          <a href="#home" className="flex items-center">
            <img src="/" alt="" className="h-8 mr-2" />
          <span className="-rotate-45">B</span>


          </a>
        </div>
        <ul className="flex space-x-6 mr-2 font-medium">
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
              Projects
            </a>
          </li>
          <li>
            <a
              href="#tech"
              className="text-blue-400 hover:text-gray-400 transition-colors duration-300"
            >
              Tech
            </a>
          </li>
        </ul>
      </motion.nav>

      {/* Hamburger Menu for small screens */}
      <div className="fixed top-0 right-0 md:hidden w-full">
        <button
          className="text-blue-400 focus:outline-none p-3 menu-button"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          ref={menuRef}
          className={`fixed top-0 right-0 mt-16 w-48 bg-nav p-6 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                className="text-blue-400 hover:text-gray-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#additional-section"
                className="text-blue-400 hover:text-gray-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="text-blue-400 hover:text-gray-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Tech
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
