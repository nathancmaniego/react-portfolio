"use client";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { useInView } from "@/hooks/useInView";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: AiFillLinkedin,
      href: "https://www.linkedin.com/in/nathanmaniego/",
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: AiFillGithub,
      href: "https://github.com/nathancmaniego",
      hoverColor: "hover:text-gray-800",
    },
    {
      name: "Email",
      icon: AiOutlineMail,
      href: "mailto:nathancarlomaniego@gmail.com",
      hoverColor: "hover:text-red-500",
    },
  ];

  return (
    <footer 
      className="bg-gray-50 border-t border-gray-100"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div
          ref={ref}
          className={`fade-in ${isVisible ? "visible" : ""} flex flex-col md:flex-row justify-between items-center gap-8`}
        >
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nathan Maniego
            </h3>
            <p className="text-gray-600 max-w-sm text-sm">
              Computer Science student passionate about building innovative
              solutions and exploring emerging technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`p-2 text-gray-400 transition-colors ${link.hoverColor} icon-hover`}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Nathan Maniego. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
