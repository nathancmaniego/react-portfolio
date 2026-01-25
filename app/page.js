"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { useInView } from "@/hooks/useInView";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";

// Images
import avatar from "@/assets/IMG_8030.JPG";
import avatar2 from "@/assets/IMG_9460.JPG";
import uoft from "@/assets/logos/uoft.png";
import datapro from "@/assets/logos/321datapro.jpg";
import ops from "@/assets/logos/ops.png";
import uoftai from "@/assets/logos/uoftai.png";
import e4x from "@/assets/logos/E4X-icon.png";

// Data
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
    company: "321DataPro Inc.",
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
    category: "personal",
    emoji: "🏠",
  },
  {
    title: "MYSH Linux Shell",
    description: "A custom Linux shell written in C that supports basic commands like cd, ls, and pwd. It also supports background processes and job control.",
    technologies: ["C", "Linux"],
    liveUrl: "https://www.youtube.com/watch?v=SwGaXpNMV9M",
    category: "school",
    emoji: "🐧",
  },
  {
    title: "Connect4 AI Agent",
    description: "A Connect4 AI agent that uses a minimax algorithm to find the best move. It also supports a GUI that allows you to play against the AI.",
    technologies: ["Python", "Minimax"],
    category: "school",
    emoji: "🎮",
  },
  {
    title: "Project Bleu",
    description: "Random Forest ML model for stormwater management with 80% retention rate. Won Honourable Mention Award at the University of Toronto Engineering Competition.",
    technologies: ["Python", "Pandas", "Scikit-learn", "React", "Node.js"],
    githubUrl: "https://github.com/nathancmaniego/CoMHackathon-ProjectBleu",
    category: "personal",
    emoji: "🌧️",
  },
  {
    title: "MS Paint Inspired Clone",
    description: "Java-based paint application with real-time feedback and Ollama API integration. Features include drawing tools, color picker, and AI-powered image generation.",
    technologies: ["Java", "JavaFX", "Ollama3", "Maven"],
    category: "school",
    emoji: "🎨",
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations, dark mode, and optimized performance.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://nathanmaniego.com",
    category: "personal",
    emoji: "💼",
  },
  {
    title: "Raptors 2024-2025 Season Predictions",
    description: "Predicting the Raptors' 2024-2025 season performance using machine learning and historical data.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/nathancmaniego/toronto_raptors_player_consistency",
    category: "personal",
    emoji: "🏀",
  },
];

const skillCategories = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "SQL", icon: "devicon-mysql-plain colored" },
      { name: "Bash", icon: "devicon-bash-plain" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
      { name: "Redux", icon: "devicon-redux-original colored" },
      { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
    ],
  },
  {
    title: "Databases & Cloud",
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "GitHub Actions", icon: "devicon-github-original" },
    ],
  },
];

const stats = [
  { number: "10+", label: "Projects Completed" },
  { number: "2", label: "Years Experience" },
  { number: "5+", label: "Technologies Mastered" },
  { number: "∞", label: "Cups of Matcha" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "personal", name: "Personal" },
  { id: "school", name: "School" },
];

// Reusable animated section wrapper
function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("all");
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <>

      
      <Navbar />
      
      <main id="main-content" className="min-h-screen bg-white">
        {/* ==================== HERO SECTION ==================== */}
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center pt-16 pb-20"
          aria-label="Introduction"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Avatar */}
            <div className="hero-animate hero-animate-delay-1 mb-8">
              <div className="relative inline-block">
                <Image
                  src={avatar}
                  alt="Nathan Maniego"
                  width={180}
                  height={180}
                  className="rounded-2xl shadow-xl border-4 border-white"
                  priority
                />
              </div>
            </div>

            {/* Name */}
            <h1 className="hero-animate hero-animate-delay-2 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Nathan Maniego
            </h1>

            {/* Title */}
            <p className="hero-animate hero-animate-delay-3 text-xl sm:text-2xl text-gray-600 mb-6 font-medium">
              Computer Science Student & Developer
            </p>

            {/* Description */}
            <p className="hero-animate hero-animate-delay-4 text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about building innovative solutions and exploring emerging technologies. 
              Currently studying Computer Science at the University of Toronto.
            </p>

            {/* CTA Buttons */}
            <div className="hero-animate hero-animate-delay-5 flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Button href="#projects" variant="primary" size="lg">
                View My Work
                <AiOutlineArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
              <Button 
                href="https://drive.google.com/file/d/1ZCCvQgkCircQr9MiddX2ouyTfzfdrwjQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" 
                size="lg"
              >
                View Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="hero-animate hero-animate-delay-5 flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/nathanmaniego/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors icon-hover"
                aria-label="LinkedIn Profile"
              >
                <AiFillLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/nathancmaniego"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-900 transition-colors icon-hover"
                aria-label="GitHub Profile"
              >
                <AiFillGithub className="w-6 h-6" />
              </a>
              <a
                href="mailto:nathancarlomaniego@gmail.com"
                className="p-2 text-gray-400 hover:text-red-500 transition-colors icon-hover"
                aria-label="Send Email"
              >
                <AiOutlineMail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section 
          id="about" 
          className="py-20 bg-gray-50 section-offset"
          aria-labelledby="about-title"
        >
          <div className="max-w-5xl mx-auto px-6">
            <SectionTitle
              title="About Me"
              subtitle="Passionate developer with a love for creating meaningful solutions"
            />

            <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <AnimatedSection className="order-2 md:order-1">
                <Image
                  src={avatar2}
                  alt="Nathan Maniego"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg mx-auto"
                />
              </AnimatedSection>

              {/* Text Content */}
              <AnimatedSection className="order-1 md:order-2" delay={100}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-5 text-center md:text-left">
                  Hello! I'm Nathan
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-center md:text-left">
                  <p>
                    I'm a third-year Computer Science student at the University of Toronto 
                    with a passion for building innovative solutions and exploring emerging technologies.
                  </p>
                  <p>
                    My journey in tech started with curiosity about how things work, and it has 
                    evolved into a love for creating applications that solve real-world problems. 
                    I enjoy the entire development process, from ideation to deployment.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open-source projects, or working on personal projects that challenge me 
                    to learn and grow. Sometimes I'm also found playing basketball, lifting weights, or eating.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ==================== STATS SECTION ==================== */}
        <section className="py-16 bg-white" aria-label="Quick stats">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className={`text-center stagger-${index + 1}`}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== EXPERIENCE SECTION ==================== */}
        <section 
          id="experience" 
          className="py-20 bg-gray-50 section-offset"
          aria-labelledby="experience-title"
        >
          <div className="max-w-4xl mx-auto px-6">
            <SectionTitle
              title="Experience & Education"
              subtitle="My journey in technology and education"
            />

            <div className="mt-12 space-y-5">
              {experiences.map((exp, index) => (
                <AnimatedSection key={exp.company} delay={index * 50}>
                  <article className="bg-white rounded-xl p-6 border border-gray-100 card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Image 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="rounded-full object-contain flex-shrink-0"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {exp.title}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <time className="text-sm text-gray-500 font-medium sm:text-right">
                        {exp.period}
                      </time>
                    </div>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== SKILLS SECTION ==================== */}
        <section 
          id="skills" 
          className="py-20 bg-white section-offset"
          aria-labelledby="skills-title"
        >
          <div className="max-w-5xl mx-auto px-6">
            <SectionTitle 
              title="Technical Skills" 
              subtitle="Languages, frameworks and tools I work with" 
            />

            <div className="mt-12 space-y-10">
              {skillCategories.map((group, groupIndex) => (
                <AnimatedSection key={group.title} delay={groupIndex * 100}>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold text-center mb-5">
                      {group.title}
                    </h3>
                    <div 
                      className="flex flex-wrap gap-2 justify-center"
                      role="list"
                      aria-label={group.title}
                    >
                      {group.items.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 skill-hover"
                          role="listitem"
                        >
                          <i className={`${skill.icon} text-lg`} aria-hidden="true" />
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PROJECTS SECTION ==================== */}
        <section 
          id="projects" 
          className="py-20 bg-gray-50 section-offset"
          aria-labelledby="projects-title"
        >
          <div className="max-w-5xl mx-auto px-6">
            <SectionTitle 
              title="Projects" 
              subtitle="Some of my recent work" 
            />

            {/* Filter Buttons */}
            <AnimatedSection className="mt-10">
              <div 
                className="flex flex-wrap justify-center gap-2"
                role="tablist"
                aria-label="Filter projects by category"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-5 py-2 rounded-full font-medium text-sm transition-colors btn-hover ${
                      filter === category.id
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                    }`}
                    role="tab"
                    aria-selected={filter === category.id}
                    aria-controls="projects-grid"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Projects Grid */}
            <div 
              id="projects-grid"
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
              role="tabpanel"
            >
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.title} delay={index * 50}>
                  <ProjectCard project={project} />
                </AnimatedSection>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-4xl mb-3" role="img" aria-label="Magnifying glass">🔍</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

        {/* ==================== CONTACT CTA SECTION ==================== */}
        <section className="py-20 bg-white" aria-label="Contact">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                I'm always open to new opportunities, collaborations, and conversations. 
                Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  href="mailto:nathancarlomaniego@gmail.com"
                  variant="primary"
                  size="lg"
                >
                  <AiOutlineMail className="mr-2 w-5 h-5" aria-hidden="true" />
                  Get In Touch
                </Button>
                <Button 
                  href="https://www.linkedin.com/in/nathanmaniego/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  <AiFillLinkedin className="mr-2 w-5 h-5" aria-hidden="true" />
                  Connect on LinkedIn
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
