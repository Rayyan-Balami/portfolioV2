// components/header.tsx
"";

import { NavLink } from "react-router-dom";
import MobileMenu from "./mobile-menu";
import { useEffect, useState } from "react";
import { aboutInfo } from "@/data/about";

export default function Header() {
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "",
    github: ""
  });

  useEffect(() => {
    // Get social links from about.ts
    const { linkedin, github } = aboutInfo.contact;
    setSocialLinks({ linkedin, github });
  }, []);

  return (
    <>
      <header
        className="h-[var(--header-height)] px-6 md:px-16 sticky top-0 bg-[var(--primary-color)] z-50 backdrop-blur-md flex justify-between items-center"
      >
        <h1 className="text-xl font-light tracking-tight hover-target">
          RAYYAN BALAMI <span className="font-medium">.</span>
        </h1>
        <nav className="hidden lg:block">
          <ul className="flex space-x-12">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `filter-btn hover-target ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `filter-btn hover-target ${isActive ? "active" : ""}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `filter-btn hover-target ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="filter-btn hover-target"
              >
                LinkedIn
              </NavLink>
            </li>
            <li>
              <NavLink
                to={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="filter-btn hover-target"
              >
                GitHub
              </NavLink>
            </li>
          </ul>
        </nav>
        <MobileMenu />
      </header>
    </>
  );
}
