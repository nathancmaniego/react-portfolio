"use client";
import { useState, useEffect } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`nav-animate fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-lg font-semibold text-gray-900 btn-hover"
            aria-label="Nathan Maniego - Home"
          >
            Nathan Maniego
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm link-underline"
              >
                {item.name}
              </a>
            ))}
            
            {/* Social & Resume */}
            <div className="flex items-center gap-4 pl-6 ml-2 border-l border-gray-200">
              <a
                href="https://www.linkedin.com/in/nathanmaniego/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors icon-hover"
                aria-label="LinkedIn Profile"
              >
                <AiFillLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/nathancmaniego"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors icon-hover"
                aria-label="GitHub Profile"
              >
                <AiFillGithub className="w-5 h-5" />
              </a>
              <a
                href="https://drive.google.com/file/d/1ZCCvQgkCircQr9MiddX2ouyTfzfdrwjQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 transition-colors btn-hover"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden menu-animate pb-4"
            role="menu"
          >
            <div className="flex flex-col rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                  role="menuitem"
                >
                  {item.name}
                </a>
              ))}
              <div className="h-px bg-gray-100" />
              <div className="p-3 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/nathanmaniego/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn Profile"
                  onClick={handleNavClick}
                >
                  <AiFillLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/nathancmaniego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="GitHub Profile"
                  onClick={handleNavClick}
                >
                  <AiFillGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1ZCCvQgkCircQr9MiddX2ouyTfzfdrwjQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto px-4 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                  onClick={handleNavClick}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
