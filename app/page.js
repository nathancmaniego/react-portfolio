"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineArrowRight, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";

import uoft from "@/assets/logos/uoft.png";
import datapro from "@/assets/logos/321datapro.jpg";
import ops from "@/assets/logos/ops.png";
import uoftai from "@/assets/logos/uoftai.png";
import e4x from "@/assets/logos/E4X-icon.png";

const experiences = [
  {
    title: "Computer Science Student",
    company: "University of Toronto",
    period: "September 2023 - Present",
    description: "Pursuing Bachelor of Science in Computer Science with a minor in Business and Mathematics.",
    logo: uoft,
  },
  {
    title: "Software Engineer Intern",
    company: "321DataPro Inc."  ,
    period: "July 2025 - August 2025",
    description: "Engineered scalable full-stack systems at 321DataPro Inc., optimizing performance across React, Express, and PostgreSQL services.",
    logo: datapro,
  },
  {
    title: "Software Developer",
    company: "Ontario Public Service (OPS Brainworks)",
    period: "May 2025 - August 2025",
    description: "Developing and maintaining software solutions for the Ontario Public Service using React, TypeScript, Express, and PostgreSQL.",
    logo: ops,
  },
  {
    title: "Partnerships Associate",
    company: "UofTAI",
    period: "September 2024 - August 2025",
    description: "Managed partnerships with universities and organizations to promote UofTAI's AI initiatives and resources.",
    logo: uoftai,
  },
  
  {
    title: "Web Developer",
    company: "Empowered4x",
    period: "February 2022 - August 2022",
    description: "Developed and maintained websites for small businesses and startups using WordPress and custom HTML/CSS/JavaScript.",
    logo: e4x,
  },
];

const projects = [
  {
    title: "Dormigo",
    description: "Find your perfect dorm with Dormigo, a platform that allows you to find your perfect dorm based on your preferences and budget.",
    technologies: ["React", "Node.js", "FastAPI", "Selenium", "BeautifulSoup"],
    githubUrl: "https://github.com/nathancmaniego/deerhacks-iv",
    featured: false,
    category: "web",
    emoji: "📝",
  },
  {
    title: "MYSH Linux Shell",
    description: "A custom Linux shell written in C that supports basic commands like cd, ls, and pwd. It also supports background processes and job control.",
    technologies: ["C", "Linux"],
    githubUrl: "null",
    liveUrl: "https://www.youtube.com/watch?v=SwGaXpNMV9M",
    featured: false,
    category: "desktop",
    emoji: "🐧",
  },
  {
    title: "Project Bleu",
    description: "Random Forest ML model for stormwater management with 80% retention rate. Won Honourable Mention Award at the University of Toronto Engineering Competition.",
    technologies: ["Python", "Pandas", "Scikit-learn", "React", "Node.js"],
    githubUrl: "https://github.com/nathancmaniego/CoMHackathon-ProjectBleu",
    featured: false,
    category: "machine-learning",
    emoji: "🌧️",
  },

  {
    title: "MS Paint Inspired Clone",
    description: "Java-based paint application with real-time feedback and Ollama API integration. Features include drawing tools, color picker, and AI-powered image generation.",
    technologies: ["Java", "JavaFX", "Ollama3", "Maven"],
    liveUrl: null,
    featured: false,
    category: "desktop",
    emoji: "🖌️",
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations, dark mode, and optimized performance.",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://nathanmaniego.com",
    featured: false,
    category: "web",
    emoji: "🖼️",
  },
  {
    title: "Raptors 2024-2025 Season Predictions",
    description: "Predicting the Raptors' 2024-2025 season performance using machine learning and historical data.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/nathancmaniego/toronto_raptors_player_consistency",
    liveUrl: null,
    featured: false,
    category: "machine-learning",
    emoji: "🏀",
  },
];

const iconMap = {
  python: "devicon-python-plain colored",
  java: "devicon-java-plain colored",
  cpp: "devicon-cplusplus-plain colored",
  typescript: "devicon-typescript-plain colored",
  javascript: "devicon-javascript-plain colored",
  sql: "devicon-mysql-plain colored",
  csharp: "devicon-csharp-plain colored",
  html: "devicon-html5-plain colored",
  css: "devicon-css3-plain colored",
  bash: "devicon-bash-plain",
  react: "devicon-react-original colored",
  nextjs: "devicon-nextjs-original",
  nodejs: "devicon-nodejs-plain colored",
  express: "devicon-express-original",
  flask: "devicon-flask-original",
  springboot: "devicon-spring-original colored",
  redux: "devicon-redux-original colored",
  tailwindcss: "devicon-tailwindcss-plain colored",
  postgresql: "devicon-postgresql-plain colored",
  mysql: "devicon-mysql-plain colored",
  firebase: "devicon-firebase-plain colored",
  mongodb: "devicon-mongodb-plain colored",
  aws: "devicon-amazonwebservices-plain colored",
  docker: "devicon-docker-plain colored",
  github: "devicon-github-original",
  linux: "devicon-linux-plain colored",
  git: "devicon-git-plain colored",
};

{/* Render example */}
<i className={`${iconMap.python} text-3xl`} title="Python"></i>



import avatar from "@/assets/IMG_8030.jpg";
import avatar2 from "@/assets/IMG_9460.JPG";


const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "2", label: "Years Experience" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "∞", label: "Cups of Matcha" },
  ];
  

  // Skillset data (updated for Devicon + resume alignment)
  const skillCategories = [
    {
      title: "Languages",
      items: [
        { name: "Python", icon: "python" },
        { name: "Java", icon: "java" },
        { name: "C++", icon: "cpp" },
        { name: "C#", icon: "csharp" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "HTML5", icon: "html" },
        { name: "CSS3", icon: "css" },
        { name: "SQL", icon: "sql" },
        { name: "Bash", icon: "bash" },
        { name: "Assembly (RISC-V)", icon: "assembly" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "Flask", icon: "flask" },
        { name: "Spring Boot", icon: "springboot" },
        { name: "Redux", icon: "redux" },
        { name: "TailwindCSS", icon: "tailwindcss" },
      ],
    },
    {
      title: "Databases & Cloud",
      items: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "Firebase", icon: "firebase" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "AWS", icon: "aws" },
        { name: "Docker", icon: "docker" },
        { name: "GitHub Actions", icon: "github" },
      ],
    },
  ];

  
  // Projects (full grid)
  const [filter, setFilter] = useState("all");
  
  const categories = [
    { id: "all", name: "All Projects" },
    // { id: "web", name: "Web Development" },
    // { id: "machine-learning", name: "Machine Learning" },
    // { id: "desktop", name: "Desktop Apps" },
  ];
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  // Contact state & data
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };
  const contactInfo = [
    { icon: AiOutlineMail, title: "Email", value: "nathancarlomaniego@gmail.com", href: "mailto:nathancarlomaniego@gmail.com", color: "text-red-500" },
    { icon: AiOutlinePhone, title: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567", color: "text-green-500" },
    { icon: AiOutlineEnvironment, title: "Location", value: "Toronto, Ontario, Canada", href: "#", color: "text-blue-500" },
  ];
  const socialLinks = [
    { icon: AiFillLinkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/nathanmaniego/", color: "hover:text-blue-600" },
    { icon: AiFillGithub, name: "GitHub", href: "https://github.com/nathancmaniego", color: "hover:text-gray-800" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            {/* Avatar */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="relative inline-block p-5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Image
                    src={avatar}
                    alt="Nathan Maniego"
                    width={400}
                    height={400}
                    className="border-4 border-white rounded-2xl shadow-2xl z-2"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur-xl z-1" />
                </motion.div>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
            >
              Nathan Maniego
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-600 mb-6 font-medium"
            >
              Computer Science Student & Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Passionate about building innovative solutions and exploring emerging technologies. 
              Currently studying Computer Science at the University of Toronto.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                href="#experience"
                variant="primary"
                size="lg"
                className="group"
              >
                View My Work
                <AiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/Nathan_Maniego_resume_2027.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" 
                size="lg"
              >
                View Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              <motion.a
                href="https://www.linkedin.com/in/nathanmaniego/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <AiFillLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/nathancmaniego"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-gray-800 transition-colors"
              >
                <AiFillGithub className="w-6 h-6" />
              </motion.a>
              {/* <motion.a
                href="mailto:nathancarlomaniego@gmail.com"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <AiOutlineMail className="w-6 h-6" />
              </motion.a> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div> */}
      </section>

      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle
            title="About Me"
            subtitle="Passionate developer with a love for creating meaningful solutions"
          />

          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Image */}
                            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                <div className="absolute inset-0 rounded-2xl  from-blue-400 to-purple-400 opacity-20 blur-xl z-[0] " />

                  <Image
                    src={avatar2}
                    alt="Nathan Maniego"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-2xl mx-auto"
                  />
                  


                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 lg:text-left text-center">
                  Hello! I'm Nathan
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed lg:text-left text-center">
                  <p className="lg:text-left text-center">
                    I'm a second-year Computer Science student at the University of Toronto 
                    with a passion for building innovative solutions and exploring emerging technologies.
                  </p>
                  <p className="lg:text-left text-center">
                    My journey in tech started with curiosity about how things work, and it has 
                    evolved into a love for creating applications that solve real-world problems. 
                    I enjoy the entire development process, from ideation to deployment.
                  </p>
                  <p className="lg:text-left text-center">
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open-source projects, or working on personal projects that challenge me 
                    to learn and grow.
                  </p>
                </div>
              </motion.div>


            </div>
          </div>
        </div>
      </section>




      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Experience & Education"
            subtitle="My journey in technology and education"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Image src={exp.logo} alt={exp.company} className="rounded-full w-12 h-12 object-contain" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skillset Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle title="Professional Skillset" subtitle="Frameworks, languages and tools I use" />

          <div className="mt-16 space-y-12">
            {skillCategories.map((group) => (
              <div key={group.title}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="align-center text-center text-sm uppercase tracking-widest mb-4">{group.title}</h3>
                </motion.div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {group.items.map(({ name, icon }) => {
                  const iconClass = iconMap[icon];
                  return (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 backdrop-blur-sm shadow-sm"
                    >
                      <i className={`${iconClass} text-xl`} />
                      <span className="text-sm font-medium">{name}</span>
                    </motion.div>
                  );
                })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section (full) */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle title="Projects" subtitle="Some of my recent work" />

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === category.id
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 lg:grid-cols-2  gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.05 }} viewport={{ once: true }} >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category to see more projects.</p>
            </motion.div>
          )}
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Home;
