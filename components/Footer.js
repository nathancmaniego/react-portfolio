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
      className="border-t border-ink/10"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div
          ref={ref}
          className={`fade-in ${isVisible ? "visible" : ""} flex flex-col md:flex-row justify-between items-center gap-8`}
        >
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="display-heading text-2xl text-ink mb-2">
              Nathan Maniego
            </h3>
            <p className="text-gray-600 max-w-sm text-sm">
              Computer Science student passionate about building innovative
              solutions and exploring emerging technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-2.5 rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-cream transition-colors icon-hover"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {currentYear} Nathan Maniego. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            /Powered by matcha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
