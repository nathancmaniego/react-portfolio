# Nathan Maniego - Portfolio Specification

This document captures all details about my current portfolio website for reference when building a new site.

---

## Personal Information

- **Name:** Nathan Maniego
- **Title:** Computer Science Student & Developer
- **Location:** Toronto, Ontario, Canada
- **Email:** nathancarlomaniego@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/nathanmaniego/
- **GitHub:** https://github.com/nathancmaniego
- **Live Site:** https://nathanmaniego.com
- **Resume:** [Google Drive Link](https://drive.google.com/file/d/1ZCCvQgkCircQr9MiddX2ouyTfzfdrwjQ/view?usp=sharing)

---

## Bio / About Me

> I'm a third-year Computer Science student at the University of Toronto with a passion for building innovative solutions and exploring emerging technologies.
>
> My journey in tech started with curiosity about how things work, and it has evolved into a love for creating applications that solve real-world problems. I enjoy the entire development process, from ideation to deployment.
>
> When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge me to learn and grow. Sometimes I'm also found playing basketball, lifting weights, or eating.

---

## Stats / Quick Facts

| Stat | Value |
|------|-------|
| Projects Completed | 10+ |
| Years Experience | 2 |
| Technologies Mastered | 5+ |
| Cups of Matcha | ∞ |

---

## Experience & Education

### 1. University of Toronto
- **Role:** Computer Science Student
- **Period:** September 2023 - Present
- **Description:** Pursuing Bachelor of Science in Computer Science with a minor in Business and Mathematics.

### 2. 321DataPro Inc.
- **Role:** Software Engineer Intern
- **Period:** July 2025 - August 2025
- **Description:** Engineered scalable full-stack systems at 321DataPro Inc., optimizing performance across React, Express, and PostgreSQL services.

### 3. Ontario Public Service (OPS Brainworks)
- **Role:** Software Developer
- **Period:** May 2025 - August 2025
- **Description:** Developing and maintaining software solutions for the Ontario Public Service using React, TypeScript, Express, and PostgreSQL.

### 4. UofTAI
- **Role:** Partnerships Associate
- **Period:** September 2024 - August 2025
- **Description:** Managed partnerships with universities and organizations to promote UofTAI's AI initiatives and resources.

### 5. Empowered4x
- **Role:** Web Developer
- **Period:** February 2022 - August 2022
- **Description:** Developed and maintained websites for small businesses and startups using WordPress and custom HTML/CSS/JavaScript.

---

## Technical Skills

### Languages
- Python
- Java
- C++
- C#
- TypeScript
- JavaScript
- HTML5
- CSS3
- SQL
- Bash
- Assembly (RISC-V)

### Frameworks & Libraries
- React
- Next.js
- Node.js
- Express
- Flask
- Spring Boot
- Redux
- TailwindCSS

### Databases & Cloud
- PostgreSQL
- MySQL
- Firebase
- MongoDB
- AWS
- Docker
- GitHub Actions

---

## Projects

### 1. Dormigo
- **Category:** Personal
- **Description:** Find your perfect dorm with Dormigo, a platform that allows you to find your perfect dorm based on your preferences and budget.
- **Technologies:** React, Node.js, FastAPI, Selenium, BeautifulSoup
- **GitHub:** https://github.com/nathancmaniego/deerhacks-iv

### 2. MYSH Linux Shell
- **Category:** School
- **Description:** A custom Linux shell written in C that supports basic commands like cd, ls, and pwd. It also supports background processes and job control.
- **Technologies:** C, Linux
- **Demo:** https://www.youtube.com/watch?v=SwGaXpNMV9M

### 3. Connect4 AI Agent
- **Category:** School
- **Description:** A Connect4 AI agent that uses a minimax algorithm to find the best move. It also supports a GUI that allows you to play against the AI.
- **Technologies:** Python, Minimax

### 4. Project Bleu
- **Category:** Personal
- **Description:** Random Forest ML model for stormwater management with 80% retention rate. Won Honourable Mention Award at the University of Toronto Engineering Competition.
- **Technologies:** Python, Pandas, Scikit-learn, React, Node.js
- **GitHub:** https://github.com/nathancmaniego/CoMHackathon-ProjectBleu

### 5. MS Paint Inspired Clone
- **Category:** School
- **Description:** Java-based paint application with real-time feedback and Ollama API integration. Features include drawing tools, color picker, and AI-powered image generation.
- **Technologies:** Java, JavaFX, Ollama3, Maven

### 6. Personal Portfolio Website
- **Category:** Personal
- **Description:** Modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations, dark mode, and optimized performance.
- **Technologies:** Next.js, React, Framer Motion, Tailwind CSS, TypeScript
- **Live:** https://nathanmaniego.com

### 7. Raptors 2024-2025 Season Predictions
- **Category:** Personal
- **Description:** Predicting the Raptors' 2024-2025 season performance using machine learning and historical data.
- **Technologies:** Python, Pandas, Scikit-learn, Matplotlib
- **GitHub:** https://github.com/nathancmaniego/toronto_raptors_player_consistency

---

## Current Site Structure

### Sections (in order)
1. **Hero** - Full-screen intro with avatar, name, title, tagline, CTA buttons, and social links
2. **About** - Two-column layout with image and bio text
3. **Stats** - 4-column grid showing quick stats
4. **Experience** - Timeline/card list of work and education
5. **Skills** - Grouped skill badges with icons (Languages, Frameworks, Databases & Cloud)
6. **Projects** - Filterable grid (All / Personal / School) with project cards
7. **Footer** - Logo, description, social links, copyright

### Navigation Items
- Home
- About
- Experience
- Skills
- Projects

---

## Current Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12
- **Icons:** React Icons, Devicon
- **Fonts:** Inter (Google Fonts), Geist (local)
- **Deployment:** Vercel

---

## Design System

### Colors
- **Background:** White (#ffffff)
- **Text Primary:** Gray-900 (#111827)
- **Text Secondary:** Gray-600 (#4b5563)
- **Text Muted:** Gray-500 (#6b7280)
- **Borders:** Gray-100, Gray-200
- **Accent on hover:** Blue-600 (LinkedIn), Red-500 (Email), Gray-800 (GitHub)

### Typography
- **Font Family:** Inter
- **Hero Title:** 5xl-7xl, bold
- **Section Titles:** Centered with subtitle
- **Body Text:** Base-xl, relaxed line-height

### Components
- **Navbar:** Fixed, transparent → white/blur on scroll, mobile hamburger menu
- **Buttons:** Primary (dark bg) and Outline variants, rounded-full or rounded-xl
- **Cards:** White bg, rounded-2xl, subtle shadow, hover lift effect
- **Skill Badges:** Rounded-full pills with icon + text
- **Project Cards:** Image/emoji header, title, description, tech tags, hover reveals GitHub/Live links

### Animations
- **Page Load:** Staggered fade-in from bottom
- **Scroll:** Elements animate in when entering viewport
- **Hover:** Scale, lift (translateY), color transitions
- **Mobile:** Reduced motion for performance

---

## Assets

### Images
- `IMG_8030.JPG` - Hero avatar
- `IMG_9460.JPG` - About section photo

### Logos (for experience section)
- `uoft.png` - University of Toronto
- `321datapro.jpg` - 321DataPro Inc.
- `ops.png` - Ontario Public Service
- `uoftai.png` - UofTAI
- `E4X-icon.png` - Empowered4x

### Other Assets
- `Nathan_Maniego_resume_2027.pdf` - Resume file
- Favicon set in `assets/logos/favicon_io/`

---

## Features to Keep

- Smooth scroll navigation
- Responsive design (mobile-first)
- Animated section reveals on scroll
- Project filtering by category
- Skill icons with Devicon
- Resume button in navbar
- Social links (LinkedIn, GitHub, Email)
- Clean, minimal aesthetic

---

## Potential Improvements for New Site

- Add dark mode toggle
- Add a dedicated Contact section/form
- Add blog/writing section
- Improve project images (screenshots instead of emojis)
- Add testimonials section
- Add more interactive elements
- Improve SEO with proper meta tags
- Add page transitions between routes
- Consider adding a "Currently working on" or "Now" section
- Add downloadable resume (not just Google Drive link)

---

## Prompt Template for New Site

Use this as a starting point when prompting for a new portfolio:

```
Build me a personal portfolio website with the following requirements:

**Personal Info:**
- Name: Nathan Maniego
- Title: Computer Science Student & Developer at University of Toronto
- Location: Toronto, Canada
- Email: nathancarlomaniego@gmail.com
- LinkedIn: linkedin.com/in/nathanmaniego
- GitHub: github.com/nathancmaniego

**Sections needed:**
1. Hero with avatar, name, title, and CTA buttons
2. About me with bio
3. Experience timeline (5 positions - see PORTFOLIO_SPEC.md)
4. Skills grouped by category (Languages, Frameworks, Databases/Cloud)
5. Projects grid with filtering (7 projects - see PORTFOLIO_SPEC.md)
6. Contact section
7. Footer with social links

**Tech preferences:**
- [Your preferred framework]
- [Your preferred styling solution]
- Smooth animations
- Fully responsive
- Fast performance

**Design preferences:**
- [Minimal/Bold/Playful/etc.]
- [Light/Dark/Both]
- [Specific inspiration sites if any]
```

---

*Last updated: January 2026*
