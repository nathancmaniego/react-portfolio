"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import avatar from "../../public/IMG_9460.JPG";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      category: "Machine Learning",
      items: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "NumPy", "Matplotlib"],
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
    },
  ];

  const experiences = [
    {
      title: "Computer Science Student",
      company: "University of Toronto",
      period: "2023 - Present",
      description: "Pursuing Bachelor of Science in Computer Science with focus on software engineering and machine learning.",
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      description: "Building custom web applications and providing technical solutions for small businesses and startups.",
    },
    {
      title: "Research Assistant",
      company: "University of Toronto",
      period: "2024 - Present",
      description: "Working on machine learning research projects focused on environmental data analysis and prediction models.",
    },
  ];

  const achievements = [
    "Honourable Mention Award - University of Toronto Engineering Competition",
    "Dean's List - University of Toronto (Fall 2023, Winter 2024)",
    "First Place - Local Hackathon (2023)",
    "Published Research Paper - Environmental Data Analysis (2024)",
  ];

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
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="relative">
                  
                  <Image
                    src={avatar}
                    alt="Nathan Maniego"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-2xl z-[10]"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-xl z-[1]" />


                </div>
              </motion.div>

              {/* Content */}
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Me
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                  <p>
                    Hello! I'm Nathan Maniego, a passionate Computer Science student at the 
                    University of Toronto with a deep love for technology and innovation.
                  </p>
                  <p>
                    My journey in tech started with curiosity about how things work, and it has 
                    evolved into a passion for creating solutions that make a difference. I enjoy 
                    the entire development process, from brainstorming ideas to deploying 
                    production-ready applications.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open-source projects, or working on personal projects that challenge me 
                    to learn and grow.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="primary" size="lg">
                    Get In Touch
                  </Button>
                  <Button href="/resume.pdf" variant="outline" size="lg">
                    <AiOutlineDownload className="mr-2" />
                    Download Resume
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Technologies I work with and continue to explore"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (groupIndex * 0.1) + (index * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white px-4 py-3 rounded-lg shadow-sm text-center text-gray-700 font-medium"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
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
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {exp.company}
                    </p>
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

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Achievements & Recognition"
            subtitle="Some highlights from my academic and professional journey"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                variants={itemVariants}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle
            title="Beyond Code"
            subtitle="What I enjoy when I'm not programming"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Open Source",
                description: "Contributing to open-source projects and building tools that help the developer community.",
                icon: "🚀",
              },
              {
                title: "Learning",
                description: "Always exploring new technologies, frameworks, and programming languages to stay current.",
                icon: "📚",
              },
              {
                title: "Problem Solving",
                description: "Enjoying puzzles, coding challenges, and finding elegant solutions to complex problems.",
                icon: "🧩",
              },
            ].map((interest, index) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                className="text-center p-8 bg-white rounded-2xl shadow-sm"
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {interest.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, 
              interesting projects, or just having a chat about technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/contact" variant="secondary" size="lg">
                Send Message
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View My Work
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://www.linkedin.com/in/nathanmaniego/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <AiFillLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/nathanmaniego"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <AiFillGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:nathancarlomaniego@gmail.com"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <AiOutlineMail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
