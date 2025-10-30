"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Project Bleu",
      description: "Random Forest ML model for stormwater management with 80% retention rate. Won Honourable Mention Award at the University of Toronto Engineering Competition.",
      technologies: ["Python", "Pandas", "Scikit-learn", "React", "Node.js"],
      githubUrl: "https://github.com/nathanmaniego/project-bleu",
      liveUrl: "https://project-bleu.vercel.app",
      featured: true,
      category: "machine-learning",
    },
    {
      title: "S&P 500 Stock Predictor",
      description: "Advanced machine learning model to predict S&P 500 index movements using historical data and technical indicators. Achieved 54% precision with advanced feature engineering.",
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "NumPy"],
      githubUrl: "https://github.com/nathanmaniego/sp500-predictor",
      liveUrl: null,
      featured: true,
      category: "machine-learning",
    },
    {
      title: "MS Paint Inspired Clone",
      description: "Java-based paint application with real-time feedback and Ollama API integration. Features include drawing tools, color picker, and AI-powered image generation.",
      technologies: ["Java", "JavaFX", "Ollama3", "Maven"],
      githubUrl: "https://github.com/nathanmaniego/ms-paint-clone",
      liveUrl: null,
      featured: false,
      category: "desktop",
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations, dark mode, and optimized performance.",
      technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/nathanmaniego/portfolio",
      liveUrl: "https://nathanmaniego.dev",
      featured: false,
      category: "web",
    },
    {
      title: "Task Management App",
      description: "Full-stack task management application with real-time updates, user authentication, and collaborative features. Built with modern web technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      githubUrl: "https://github.com/nathanmaniego/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      featured: false,
      category: "web",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, charts, and historical data visualization. Integrates with multiple weather APIs.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
      githubUrl: "https://github.com/nathanmaniego/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      featured: false,
      category: "web",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "machine-learning", name: "Machine Learning" },
    { id: "desktop", name: "Desktop Apps" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A collection of projects that showcase my skills in web development, 
              machine learning, and software engineering. Each project represents 
              a learning journey and a solution to real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={project.featured ? "md:col-span-2" : ""}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on 
              innovative projects. Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get In Touch
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Learn More About Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
