import { useState } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import logo from "../../assets/logo.png"; // Importing Logo
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section>
      <div className="flex justify-center mt-7 fixed right-0 left-0 bg-gray-400 mx-3 sm:mx-0 rounded-lg md:bg-transparent z-50 md:rounded-none sm:bg-transparent">
        <nav className="mx-auto w-full max-w-xl">
          {/* Navbar for larger screens */}
          <ul className="items-center shadow-xl p-2 nav-bg rounded-full w-full sm:flex hidden">
            {/* Left Side - Name */}
            <li className="flex-1 text-center  justify-center items-center  font-bold">
              <a href="#home" className="hover:text-gray-200 transition">
                George
              </a>
            </li>

            {/* Middle - Navigation Items */}
            <li className="flex-1 text-center hover:bg-gray-500 hover:text-white p-2 rounded-lg transition">
              <a href="#about">About</a>
            </li>
            <li className="flex-1 text-center hover:bg-gray-500 hover:text-white p-2 rounded-lg transition">
              <a href="#skills">Skills</a>
            </li>
            <li className="flex-1 text-center hover:bg-gray-500 hover:text-white p-2 rounded-lg transition">
              <a href="#projects">Projects</a>
            </li>
            {/* Added Certificates link */}
            <li className="flex-1 text-center hover:bg-gray-500 hover:text-white p-2 rounded-lg transition">
              <a href="#cert">Certificates</a>
            </li>

            {/* Right Side - Contact Button */}
            <li className="flex-1 text-center">
              <a href="#contact">
                <button className="bg-cyan-700 text-white px-6 py-2 rounded-xl hover:bg-black cursor-pointer transition-all duration-200 ease-in-out">
                  Contact
                </button>
              </a>
            </li>
          </ul>

          {/* Hamburger for mobile */}
          <div className="sm:hidden flex justify-between items-center p-4">
            <a href="#home" className="font-bold">
              George
            </a>
            <button onClick={toggleMenu} className="focus:outline-none">
              {/* Hamburger icon */}
              <motion.svg
                className="w-6 h-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            </button>
          </div>

          {/* Mobile menu - Dropdown */}
          <motion.div
            className={`${
              isOpen ? "block" : "hidden"
            } sm:hidden flex flex-col  items-center space-y-4 p-4 bg-gray-800 rounded-lg shadow-lg`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#about"
              className="text-white hover:bg-gray-500 w-full text-center p-2 rounded-lg"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white hover:bg-gray-500 w-full text-center p-2 rounded-lg"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white hover:bg-gray-500 w-full text-center p-2 rounded-lg"
            >
              Projects
            </a>
            {/* Added Certificates link in mobile menu */}
            <a
              href="#cert"
              className="text-white hover:bg-gray-500 w-full text-center p-2 rounded-lg"
            >
              Certificates
            </a>
            <a href="#contact">
              <button className="bg-cyan-700 text-white px-6 py-3 rounded-xl hover:bg-black transition-all duration-200 ease-in-out">
                Contact
              </button>
            </a>
          </motion.div>
        </nav>
      </div>
    </section>
  );
}
