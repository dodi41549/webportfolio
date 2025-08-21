import { useState } from "react";
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-white shadow z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-gray-800 dark:text-white">Portfolio</div>

          {/* Button Download Resume */}
          <a
            href="/public/resume.pdf"
            download
            className="px-4 py-2 text-sm font-semibold border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white rounded transition duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-gray-800 dark:text-white focus:outline-none"
          >
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium items-center">
          {["hero", "about", "services", "projects", "contact"].map((section) => (
            <li
              key={section}
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-4 text-gray-700 dark:text-gray-300 font-medium">
          {["hero", "about", "services", "projects", "contact"].map((section) => (
            <li
              key={section}
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
