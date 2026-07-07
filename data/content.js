// ============================================================
// SITE CONTENT — edit this file to update the portfolio.
// The page layout (app/page.js) reads everything from here;
// you should never need to touch the layout to add content.
// ============================================================

// Logos (only needed if an experience has a logo image —
// drop the file in assets/logos/ and import it here)
import uoft from "@/assets/logos/uoft.png";
import datapro from "@/assets/logos/321datapro.jpg";
import ops from "@/assets/logos/ops.png";
import uoftai from "@/assets/logos/uoftai.png";
import e4x from "@/assets/logos/E4X-icon.png";
import eccc from "@/assets/logos/eccc.jpeg";


// ------------------------------------------------------------
// EXPERIENCES — newest first. To add one, copy this template:
// {
//   title: "Role Title",
//   company: "Company Name",
//   period: "Month Year - Month Year",
//   description: "One or two sentences about what you did.",
//   logo: someImport,   // optional — omit it and a lettered
//                       // circle with the company initial is shown
// },
// ------------------------------------------------------------
export const experiences = [
  {
    title: "Computer Science Student",
    company: "University of Toronto",
    period: "September 2023 - Present",
    description: "Pursuing Bachelor of Science in Computer Science with a minor in Business and Mathematics.",
    logo: uoft,
  },
  {
    title: "Software Engineer Intern",
    company: "Environment Climate Change Canada (ECCC)",
    period: "May 2026 - May 2027",
    description: "Working on weather.gc.ca, developing and maintaining web applications to provide accurate weather information to Canadians.",
    logo: eccc,
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

// ------------------------------------------------------------
// PROJECTS — shown in order. To add one, copy this template:
// {
//   title: "Project Name",
//   description: "One or two sentences about the project.",
//   technologies: ["Tech", "Tech"],
//   category: "personal",              // "personal" or "school"
//   emoji: "🚀",                       // tile artwork (optional)
//   liveUrl: "https://...",            // optional — demo/devpost link
//   githubUrl: "https://...",          // optional — repo link
// }
// Tile colors are assigned automatically from the palette below.
// To force a specific color, add tint: "#hex" to the project.
// ------------------------------------------------------------
const rawProjects = [
  {
    title: "Consumer Heads Up Display",
    description: "Your deadpan AI financial advisor in your pocket. Point, scan, get a straight answer: “Should I buy this?”",
    technologies: ["React Native (with Expo)", "FastAPI", "Gemini", "Railtracks", "MediaPipe", ],
    liveUrl: "https://devpost.com/software/c-h-u-d",
    category: "personal",
    emoji: "💸",
  },
  {
    title: "QUEST",
    description: "QUEST is an AI RPG that builds your identity through real-life actions. Literally leveling up solo.",
    technologies: ["Next.js", "FastAPI", "MongoDB Atlas", "LangGraph", "Backboard.io"],
    liveUrl: "https://devpost.com/software/quest-jrow9d",
    category: "personal",
    emoji: "⚔️",
  },
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
    description: "Modern, responsive portfolio website built with Next.js. Features smooth animations and optimized performance.",
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

// Tile palette — muted tones that sit well on the cream background.
// Colors rotate in order, so neighbouring cards never match.
const TILE_TINTS = [
  "#C9C3E6", // lavender
  "#F3C6B8", // peach
  "#C6CDC0", // sage
  "#EFD27C", // amber
  "#AFC8E8", // sky
  "#F2BFD4", // pink
  "#D6CBBB", // tan
  "#E0A9A0", // clay
];

export const projects = rawProjects.map((project, i) => ({
  ...project,
  tint: project.tint ?? TILE_TINTS[i % TILE_TINTS.length],
}));

// ------------------------------------------------------------
// SKILLS — icon names come from https://devicon.dev
// ------------------------------------------------------------
export const skillCategories = [
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

// ------------------------------------------------------------
// STATS — the numbers row under the About section
// ------------------------------------------------------------
export const stats = [
  { number: "10+", label: "Projects Completed" },
  { number: "4", label: "Years Experience" },
  { number: "5+", label: "Technologies Mastered" },
  { number: "∞", label: "Cups of Matcha" },
];

// Project filter tabs — ids must match project `category` values
export const categories = [
  { id: "all", name: "All" },
  { id: "personal", name: "Personal" },
  { id: "school", name: "School" },
];
