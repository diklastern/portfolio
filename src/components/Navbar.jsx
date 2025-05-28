import { useState } from "react";
import { Link } from "react-scroll";
import Scrollspy from "react-scrollspy";
import avatar from "../assets/avatar.png";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", to: "about" },
    { label: "Education", to: "education" },
    { label: "Experience", to: "experience" },
    { label: "Military", to: "military" },
    { label: "Certifications", to: "certifications" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50 backdrop-blur-sm bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
      <Link to="hero" smooth={true} duration={500} offset={-80}>
        <img
            src={avatar}
            alt="Dikla Stern Avatar"
            className="w-8 h-8 rounded-full border-2 border-cyan-400 shadow-md"
        />
        </Link>
        <span className="text-xl font-bold tracking-wide text-cyan-300">Dikla Stern</span>
        </div>


        {/* Desktop Menu */}
        <Scrollspy
          items={navItems.map((item) => item.to)}
          currentClassName="text-cyan-400 font-semibold"
          className="hidden md:flex space-x-6 text-sm"
          offset={-100}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-300 hover:text-cyan-300 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </Scrollspy>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-900">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-300 hover:text-cyan-300 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
