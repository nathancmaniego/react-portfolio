"use client";
import { useState, useEffect } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-5 inset-x-0 z-50 flex justify-center px-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-animate w-full max-w-[300px]">
        {/* Pill */}
        <div className="flex items-center justify-between rounded-full bg-ink text-cream pl-5 pr-2 py-2 shadow-lg shadow-ink/10">
          <a
            href="#home"
            className="text-sm font-semibold tracking-tight"
            aria-label="Nathan Maniego - Home"
            onClick={handleNavClick}
          >
            Nathan
          </a>
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-cream text-ink flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            id="nav-menu"
            className="menu-animate mt-2 rounded-3xl bg-ink text-cream p-2 shadow-xl shadow-ink/15"
            role="menu"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="block px-4 py-2.5 rounded-2xl font-medium text-sm hover:bg-cream/10 transition-colors"
                role="menuitem"
              >
                {item.name}
              </a>
            ))}
            <div className="h-px bg-cream/15 my-2 mx-2" />
            <div className="flex items-center gap-1 px-2 pb-1">
              <a
                href="https://www.linkedin.com/in/nathanmaniego/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-cream/10 transition-colors"
                aria-label="LinkedIn Profile"
                onClick={handleNavClick}
              >
                <AiFillLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/nathancmaniego"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-cream/10 transition-colors"
                aria-label="GitHub Profile"
                onClick={handleNavClick}
              >
                <AiFillGithub className="w-5 h-5" />
              </a>
              <a
                href="https://drive.google.com/file/d/1ZCCvQgkCircQr9MiddX2ouyTfzfdrwjQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-2 text-xs font-semibold rounded-full bg-cream text-ink hover:bg-white transition-colors"
                onClick={handleNavClick}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
