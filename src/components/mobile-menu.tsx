"";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { aboutInfo } from "@/data/about";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "",
    github: "",
  });

  useEffect(() => {
    // Get social links directly from about.ts
    const { linkedin, github } = aboutInfo.contact;
    setSocialLinks({ linkedin, github });
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menu = (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-white">
      <button
        className="absolute top-8 right-6 hover-target"
        onClick={toggleMenu}
        aria-label="Close menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-minimize2-icon lucide-minimize-2"
        >
          <polyline points="4 14 10 14 10 20" />
          <polyline points="20 10 14 10 14 4" />
          <line x1="14" x2="21" y1="10" y2="3" />
          <line x1="3" x2="10" y1="21" y2="14" />
        </svg>
      </button>
      <nav>
        <ul className="space-y-8 text-2xl text-center">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 hover-target hover:text-gray-500 transition-colors ${
                  isActive ? "font-medium" : ""
                }`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block py-2 hover-target hover:text-gray-500 transition-colors ${
                  isActive ? "font-medium" : ""
                }`
              }
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 hover-target hover:text-gray-500 transition-colors ${
                  isActive ? "font-medium" : ""
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href={socialLinks.linkedin}
              className="block py-2 hover-target hover:text-gray-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={socialLinks.github}
              className="block py-2 hover-target hover:text-gray-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <button
        className="lg:hidden hover-target"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-tally5-icon lucide-tally-5"
        >
          <path d="M4 4v16" />
          <path d="M9 4v16" />
          <path d="M14 4v16" />
          <path d="M19 4v16" />
          <path d="M22 6 2 18" />
        </svg>
      </button>

      {isOpen && typeof window !== "undefined"
        ? createPortal(menu, document.getElementById("modal")!)
        : null}
    </>
  );
}
