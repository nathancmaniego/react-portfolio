"use client";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: AiFillLinkedin,
      href: "https://www.linkedin.com/in/nathanmaniego/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: AiFillGithub,
      href: "https://github.com/nathanmaniego",
      color: "hover:text-gray-800",
    },
    {
      name: "Email",
      icon: AiOutlineMail,
      href: "mailto:nathancarlomaniego@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-0"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Nathan Maniego
            </h3>
            <p className="text-gray-600 max-w-md">
              Computer Science student passionate about building innovative
              solutions and exploring emerging technologies.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-400 transition-colors duration-200 ${link.color}`}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Nathan Maniego. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
