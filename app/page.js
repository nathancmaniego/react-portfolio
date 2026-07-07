"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { useInView } from "@/hooks/useInView";
import { AiFillLinkedin, AiOutlineMail, AiOutlinePaperClip} from "react-icons/ai";

// Images
import avatar from "@/assets/IMG_8030.JPG";
import avatar2 from "@/assets/IMG_9460.JPG";

// Site content — edit data/content.js to update the portfolio
import {
  experiences,
  projects,
  skillCategories,
  stats,
  categories,
} from "@/data/content";

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

// Rotating badge sticker (desktop: over the headline's O; mobile: on the photo)
// `id` must be unique per instance — SVG textPath resolves ids document-wide
function BadgeSticker({ id, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="49" fill="var(--background)" />
      <g className="spin-slow" style={{ transformOrigin: "50px 50px" }}>
        <defs>
          <path
            id={id}
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
          />
        </defs>
        <text fontSize="9.5" fontWeight="600" letterSpacing="1">
          <textPath href={`#${id}`} textLength="236">
            SOFTWARE DEVELOPER • TORONTO • UOFT CS •
          </textPath>
        </text>
      </g>
      <path d="M50 43c.5 3.7 3 6.2 6.7 6.7-3.7.5-6.2 3-6.7 6.7-.5-3.7-3-6.2-6.7-6.7 3.7-.5 6.2-3 6.7-6.7z" />
    </svg>
  );
}

// Circle-arrow link ("View All Work" style)
function ArrowLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      className="arrow-link inline-flex items-center gap-3 text-sm font-semibold text-ink"
      {...props}
    >
      <span>{children}</span>
      <span className="arrow-circle w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center">
        <svg className="arrow-icon w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
        </svg>
      </span>
    </a>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("all");
  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);
  const year = new Date().getFullYear();

  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-screen">
        {/* ==================== HERO SECTION ==================== */}
        <section
          id="home"
          className="relative min-h-[100svh] flex flex-col px-6 pt-32 pb-10"
          aria-label="Introduction"
        >
          {/* Giant display headline */}
          <div className="flex-1 flex items-center justify-center">
            <div className="hero-animate hero-animate-delay-1 relative text-center">
              {/* Basketball accent */}
              <svg
                className="float-slow absolute -top-6 -left-3 sm:-top-12 sm:-left-14 w-9 sm:w-14 h-auto text-ink"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2v20" />
                <path d="M5 4.6c3.8 3.4 3.8 11.4 0 14.8M19 4.6c-3.8 3.4-3.8 11.4 0 14.8" />
              </svg>

              <h1 className="display-heading text-[clamp(2.5rem,13vw,10rem)] text-ink">
                <span className="block">Nathan</span>
                <span className="block sm:translate-x-12">Maniego</span>
              </h1>

              <BadgeSticker
                id="badge-circle-desktop"
                className="hidden sm:block absolute bottom-6 -right-20 w-28 h-auto text-ink"
              />

              <p className="hero-animate hero-animate-delay-3 mt-8 text-[11px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.25em] text-gray-500 text-balance">
                Computer Science @ University of Toronto
              </p>
            </div>
          </div>

          {/* Bottom strip: ©year / portrait / tagline (flex-1 sides keep the photo centered) */}
          <div className="hero-animate hero-animate-delay-4 w-full max-w-6xl mx-auto flex items-end justify-between gap-4">
            <p className="flex-1 text-2xl sm:text-4xl font-extrabold tracking-tight text-ink">
              ©{year}
            </p>
            <div className="relative shrink-0">
              <Image
                src={avatar}
                alt="Nathan Maniego"
                className="w-40 sm:w-60 h-auto rounded-xl border-4 border-white shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-300 my-4"
                priority
              />
              <BadgeSticker
                id="badge-circle-mobile"
                className="sm:hidden absolute -top-5 -right-5 w-16 h-auto text-ink"
              />
            </div>
            <p className="flex-1 text-right text-[10px] sm:text-sm uppercase tracking-[0.2em] text-gray-500">
              /Based in Toronto
            </p>
          </div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section
          id="about"
          className="py-24 section-offset"
          aria-labelledby="about-title"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 md:gap-10 items-stretch">
            {/* Left: greeting + intro */}
            <AnimatedSection className="flex flex-col justify-between gap-10">
              <h2 id="about-title" className="text-6xl md:text-7xl font-extrabold tracking-tight text-ink">
                Hey!
              </h2>
              <p className="text-lg font-medium leading-snug text-ink max-w-xs">
                I'm Nathan, a fourth-year Computer Science student at the
                University of Toronto, currently building full-stack products
                and exploring machine learning.
              </p>
            </AnimatedSection>

            {/* Center: portrait */}
            <AnimatedSection delay={100} className="flex items-center justify-center">
              <Image
                src={avatar2}
                alt="Nathan Maniego"
                className="rounded-2xl w-full max-w-sm h-auto"
              />
            </AnimatedSection>

            {/* Right: bio + CTA */}
            <AnimatedSection delay={200} className="flex flex-col justify-center gap-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                My journey in tech started with curiosity about how things
                work, and it has evolved into a love for creating applications
                that solve real-world problems. I enjoy the entire development
                process, from ideation to deployment.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new
                technologies, contributing to open source, playing basketball,
                lifting weights, or eating.
              </p>
              <div className="mt-2">
                <ArrowLink href="mailto:nathancarlomaniego@gmail.com">
                  Get in Touch
                </ArrowLink>
              </div>
              <Button
                href="https://drive.google.com/file/d/1ZCCvQgkCircQr9MiddX2ouyTfzfdrwjQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <AiOutlinePaperClip className="mr-2 w-5 h-5" aria-hidden="true" />
                  Resume
                </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== STATS SECTION ==================== */}
        <section className="py-16" aria-label="Quick stats">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-ink/10 pt-12">
                {stats.map((stat, index) => (
                  <div key={stat.label} className={`stagger-${index + 1}`}>
                    <div className="display-heading text-4xl md:text-5xl text-ink mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500">
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
          className="py-24 section-offset"
          aria-labelledby="experience-title"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionTitle title="Experience" />

            <div className="mt-14 border-t border-ink/10">
              {experiences.map((exp, index) => (
                <AnimatedSection key={exp.company} delay={index * 50}>
                  <article className="py-7 border-b border-ink/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center gap-4">
                        {exp.logo ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={44}
                            height={44}
                            className="rounded-full object-contain flex-shrink-0"
                          />
                        ) : (
                          <div
                            className="w-11 h-11 rounded-full bg-ink text-cream flex items-center justify-center font-bold flex-shrink-0"
                            aria-hidden="true"
                          >
                            {exp.company.charAt(0)}
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-bold tracking-tight text-ink">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-gray-600 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <time className="text-xs uppercase tracking-[0.15em] text-gray-500 sm:text-right shrink-0">
                        {exp.period}
                      </time>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-2xl sm:pl-[60px]">
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
          className="py-24 section-offset"
          aria-labelledby="skills-title"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionTitle title="Skills" />

            <div className="mt-14 space-y-12">
              {skillCategories.map((group, groupIndex) => (
                <AnimatedSection key={group.title} delay={groupIndex * 100}>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-5">
                      {group.title}
                    </h3>
                    <div
                      className="flex flex-wrap gap-2"
                      role="list"
                      aria-label={group.title}
                    >
                      {group.items.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/15 skill-hover"
                          role="listitem"
                        >
                          <i className={`${skill.icon} text-lg`} aria-hidden="true" />
                          <span className="text-sm font-medium text-ink">
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
          className="py-24 section-offset"
          aria-labelledby="projects-title"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionTitle
              title={<>Featured<br />Projects</>}
              action={
                <ArrowLink
                  href="https://github.com/nathancmaniego"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Work
                </ArrowLink>
              }
            />

            {/* Filter Buttons */}
            <AnimatedSection className="mt-10">
              <div
                className="flex flex-wrap gap-2"
                role="tablist"
                aria-label="Filter projects by category"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-5 py-2 rounded-full font-medium text-sm transition-colors btn-hover ${
                      filter === category.id
                        ? "bg-ink text-cream"
                        : "border border-ink/20 text-gray-600 hover:bg-ink/5"
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
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-14"
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
                <h3 className="text-xl font-bold text-ink mb-2">No projects found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

        {/* ==================== CONTACT CTA SECTION ==================== */}
        <section className="py-28" aria-label="Contact">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="display-heading text-[clamp(2.75rem,8vw,6rem)] text-ink mb-6">
                Let's Connect
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                I'm always open to new opportunities, collaborations, and
                conversations. Feel free to reach out!
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
