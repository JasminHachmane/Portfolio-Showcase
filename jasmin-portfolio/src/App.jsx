import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Download,
  Search,
  Pencil,
  Code2,
  Send,
  Sun,
  Moon,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Mijn Sprookje",
    category: "Gen-AI · UX/UI · Web app",
    role: "UX/UI Design · User testing · Concepting",
    tools: ["Figma", "ReplicateAPI", "User testing", "Web app"],
    text: "A playful Gen-AI storytelling web app for children aged 4 to 6, created for Efteling in collaboration with Mach8 and LiveWall.",
    color: "bg-[#d99aa0]",
    href: "#mijn-sprookje",
  },
  {
    number: "02",
    title: "Aurora Studio",
    category: "Branding · Web Design",
    role: "Brand identity · Stylescapes · Website refresh",
    tools: ["Figma", "Brand guide", "Moodboards", "Web design"],
    text: "A creative brand identity for a fictional design studio, developed from moodboards to a full brand guide and refreshed website.",
    color: "bg-[#8e9679] text-[#fff8ef]",
    href: "#projects",
  },
  {
    number: "03",
    title: "Web Design",
    category: "Frontend · Portfolio experiments",
    role: "Layouts · Interactions · Personal style",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    text: "A collection of web design experiments, including my first personal portfolio and the Aurora Studio website.",
    color: "bg-[#ead9be]",
    href: "#projects",
  },
  {
    number: "04",
    title: "iOS Concepts",
    category: "Mobile app · Swift principles",
    role: "Concept · UX flow · Testing · Product thinking",
    tools: ["Swift", "iOS design", "UX", "Testing"],
    text: "Mobile app concepts created with Swift principles, from first idea to design, testing and final product thinking.",
    color: "bg-[#3c2b25] text-[#fff8ef]",
    href: "#projects",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    text: "Research, inspiration and user goals.",
    color: "bg-[#e7b4bd]",
  },
  {
    number: "02",
    title: "Design",
    icon: Pencil,
    text: "Wireframes, visual direction and prototypes.",
    color: "bg-[#eadcc7]",
  },
  {
    number: "03",
    title: "Develop",
    icon: Code2,
    text: "Clean code, interactions and responsive design.",
    color: "bg-[#a8b39b]",
  },
  {
    number: "04",
    title: "Deliver",
    icon: Send,
    text: "Testing, feedback and final polish.",
    color: "bg-[#f0ddc4]",
  },
];

function Texture() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#3a2b28_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  );
}

function Tape({ className = "" }) {
  return (
    <div
      className={`absolute h-7 w-24 rotate-[-5deg] rounded-sm bg-[#d9c4a6]/70 shadow-sm backdrop-blur-sm ${className}`}
    />
  );
}

function Stamp({ children, className = "" }) {
  return (
    <div
      className={`inline-flex rotate-[-8deg] items-center justify-center rounded-full border border-[#b88674] px-4 py-3 text-center font-serif text-[10px] uppercase tracking-[0.18em] text-[#b88674] ${className}`}
    >
      {children}
    </div>
  );
}

function ScrollReveal({ children, delay = 0, rotate = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 55, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[620px] overflow-hidden rounded-[2rem] bg-[#241916] text-[#fff8ef] shadow-[0_25px_70px_rgba(58,43,40,0.2)] lg:grid-cols-[250px_1fr]"
    >
      <aside className="relative hidden bg-[#2d211d] p-8 lg:block">
        <p className="font-serif text-3xl italic text-[#f2c3c9]">Jasmin.</p>

        <div className="absolute left-8 top-44 space-y-3 text-[11px] uppercase tracking-[0.18em] text-white/65">
          <p>Creative</p>
          <p>ICT Media</p>
          <p>Student</p>
          <div className="my-6 h-px w-12 bg-white/25" />
          <p>Based in</p>
          <p>The Netherlands</p>
        </div>

        <p className="absolute bottom-8 left-8 text-xs uppercase tracking-[0.12em] text-white/70">
          ↓ Scroll to explore
        </p>
      </aside>

      <div className="relative min-h-[620px] p-7 sm:p-10 lg:p-14">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,25,22,.95),rgba(36,25,22,.55)),url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        <Texture />

        <nav className="relative z-20 mb-16 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-white/80">
          <div className="hidden gap-9 md:flex">
            <a href="#home" className="border-b border-white pb-1">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="ml-auto rounded-full border border-white/25 px-5 py-3">
            Open diary
          </button>
        </nav>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="max-w-xl pt-10">
            <p className="mb-2 font-serif text-4xl italic text-[#e8a7b2]">
              The
            </p>

            <h1 className="font-serif text-7xl leading-[0.86] tracking-[-0.05em] sm:text-8xl">
              Jasmin
              <br />
              Archives
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/84">
              Creative ICT Media student crafting digital experiences with
              purpose, personality and feeling.
            </p>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f1bdc8] px-6 py-4 text-sm font-bold uppercase tracking-[0.13em] text-[#3a2b28] shadow-xl"
            >
              Explore my world <ArrowRight size={18} />
            </motion.a>
          </div>

          <div className="relative min-h-[390px]">
            <motion.div
              initial={{ rotate: 4, y: 20, opacity: 0 }}
              animate={{ rotate: 4, y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute right-2 top-0 w-[260px] rounded-xl bg-[#fff8ef] p-4 text-[#3a2b28] shadow-2xl sm:w-[310px]"
            >
              <Tape className="left-20 top-[-12px]" />

              <div className="h-72 rounded-lg bg-[url('/images/me.jpg')] bg-cover bg-center" />

              <p className="mt-4 font-serif text-lg italic">
                Designing tomorrow’s digital experiences ♡
              </p>
            </motion.div>

            <div className="absolute bottom-20 left-6 rotate-[-10deg] rounded-xl bg-[#d99aa0] p-5 text-sm font-bold uppercase tracking-[0.16em] text-[#fff8ef] shadow-xl">
              Good ideas
              <br />
              start here
            </div>

            <Stamp className="absolute right-4 top-2 hidden text-[#e9b6bf] sm:flex">
              Creative
              <br />
              2026
              <br />
              Stories
            </Stamp>

            <p className="absolute bottom-2 right-10 font-serif text-4xl italic text-[#e8a7b2]">
              Paris, France ♡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden rounded-[2rem] bg-[#fff5ec] p-8 shadow-[0_15px_45px_rgba(58,43,40,0.1)] lg:p-12"
    >
      <Texture />

      <div className="relative z-10">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d08491]">
              About me
            </p>

            <h2 className="max-w-4xl font-serif text-5xl leading-tight text-[#2d211d] md:text-7xl">
              Jasmin
            </h2>
          </div>

          <Stamp className="hidden md:flex">
            Journey
            <br />
            in progress
          </Stamp>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative rounded-[1.5rem] bg-[#e8d7c3] p-4 shadow-inner">
            <div className="relative rounded-[1.2rem] bg-[#fffaf3] p-5 shadow-sm">
              <Tape className="left-16 top-[-8px]" />

              <div className="mb-5 h-[420px] rounded-xl bg-[url('public/images/about.jpg')] bg-cover bg-center" />

              <div className="flex flex-wrap gap-2">
                {["UX/UI", "Front-end", "Storytelling", "Figma", "React"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f1bdc8]/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#3a2b28]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative rounded-[1.5rem] bg-[#fffaf3] p-8 shadow-sm">
              <Tape className="right-20 top-[-8px]" />

              <p className="font-serif text-2xl leading-relaxed text-[#3a2b28]">
                Hi, I’m Jasmin! 20 years old, born in Roermond and living in
                Limburg.
              </p>

              <div className="mt-6 space-y-5 leading-relaxed text-[#5b4741]">
                <p>
                  I’m studying ICT Media Design at Fontys University of Applied
                  Sciences in Eindhoven, where I’m discovering my passion for
                  UX/UI design and front-end development.
                </p>

                <p>
                  I love bringing ideas to life through clean design and
                  thoughtful interaction.
                </p>

                <p>
                  Whether it’s a playful concept, a sleek interface, or a tiny
                  hover effect, I’m all about creating digital things that
                  people enjoy using and looking at.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#3a2b28] p-7 text-[#fff8ef] shadow-sm">
                <p className="mb-5 font-serif text-3xl">Background</p>

                <div className="space-y-5 text-sm leading-relaxed text-white/80">
                  <div>
                    <p className="font-bold text-white">Havo Degree</p>
                    <p>Senior general secondary education</p>
                    <p className="text-white/55">Sep 2018 - 2023</p>
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      Propedeuse Certificate - HBO ICT
                    </p>
                    <p>Fontys University of Applied Sciences - Eindhoven</p>
                    <p className="text-white/55">Sep 2023 - May 2024</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-[#9ba78f] p-7 text-[#2d211d] shadow-sm">
                <p className="mb-5 font-serif text-3xl">Expertise</p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "UX/UI design",
                    "Wireframes",
                    "Prototyping",
                    "HTML/CSS/JS",
                    "React",
                    "Node basics",
                    "Component-based design",
                    "Figma",
                    "Adobe XD",
                    "Canva",
                    "Creative storytelling",
                    "User research",
                    "Agile/Scrum",
                    "Swift",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#fff8ef]/55 px-3 py-2 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectLetterModal({ project, onClose }) {
  if (!project) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const goToCase = () => {
    onClose();

    if (project.href) {
      setTimeout(() => {
        document.querySelector(project.href)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1715]/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 80, rotate: -2, scale: 0.92, opacity: 0 }}
        animate={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 130, damping: 18 }}
        className="relative max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-[#fff8ef] p-6 text-[#3a2b28] shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:p-10"
      >
        <Texture />
        <Tape className="left-16 top-[-10px]" />
        <Tape className="right-20 top-[-8px] rotate-[5deg]" />

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#3a2b28] text-lg font-bold text-[#fff8ef] shadow-md"
          aria-label="Close project letter"
        >
          ×
        </button>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[1.5rem] bg-[#f7eadb] p-6 shadow-inner">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d08491]">
              Case file {project.number}
            </p>

            <h3 className="font-serif text-5xl leading-none md:text-6xl">
              {project.title}
            </h3>

            <p className="mt-4 w-fit rounded-full bg-[#f1bdc8]/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em]">
              {project.category}
            </p>

            <div className="mt-8 rounded-2xl bg-[#fffaf3] p-5 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9a7b6a]">
                My role
              </p>
              <p className="leading-relaxed text-[#5b4741]">{project.role}</p>
            </div>

            <div className="mt-5 rounded-2xl bg-[#fffaf3] p-5 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#9a7b6a]">
                Tools & skills
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-[#eadcc7] px-3 py-2 text-xs font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <section className="relative rounded-[1.5rem] bg-[#fffaf3] p-6 shadow-sm md:p-8">
            <div className="mb-8 flex items-start justify-between gap-5 border-b border-[#e3cbbb] pb-6">
              <div>
                <p className="font-serif text-3xl italic text-[#d08491]">
                  Dear visitor,
                </p>
                <p className="mt-2 max-w-2xl leading-relaxed text-[#5b4741]">
                  Here is the story behind this project, written like a little
                  letter from my creative archive.
                </p>
              </div>
              <Stamp className="hidden md:flex">
                Opened
                <br />
                case
              </Stamp>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-serif text-3xl">Overview</h4>
                <p className="mt-3 leading-relaxed text-[#5b4741]">
                  {project.text}
                </p>
              </div>

              <div>
                <h4 className="font-serif text-3xl">Why it matters</h4>
                <p className="mt-3 leading-relaxed text-[#5b4741]">
                  This project shows how I combine concept thinking, visual
                  design and interaction to create something that feels clear,
                  playful and meaningful for the user.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-3xl">Process</h4>
                <p className="mt-3 leading-relaxed text-[#5b4741]">
                  I moved from research and moodboards to wireframes,
                  prototypes, visual design and testing. This helped me make
                  choices based on the target audience instead of only my own
                  taste.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-3xl">What I learned</h4>
                <p className="mt-3 leading-relaxed text-[#5b4741]">
                  I learned that strong design is not only about aesthetics. It
                  is about creating a flow that people understand, enjoy and can
                  use without friction.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-[#e8d7c3]/70 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-[#5b4741]">
                Want to see the full detailed case? This can later become a
                separate case page.
              </p>

              <button
                onClick={goToCase}
                className="flex w-fit items-center gap-2 rounded-full bg-[#3a2b28] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#fff8ef] transition hover:gap-4"
              >
                Go to case <ArrowRight size={14} />
              </button>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      onClick={() => onOpen(project)}
      whileHover={{ y: -8, rotate: -1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`group relative min-h-[285px] cursor-pointer overflow-hidden rounded-2xl p-7 shadow-[0_18px_45px_rgba(58,43,40,0.14)] ${project.color}`}
    >
      <Texture />

      <div className="absolute inset-x-0 bottom-0 h-[72%] bg-inherit" />
      <div className="absolute inset-x-0 top-0 h-28 origin-top bg-black/5 [clip-path:polygon(0_0,50%_72%,100%_0,100%_100%,0_100%)]" />
      <div className="absolute left-0 right-0 top-0 h-20 border-b border-black/10 bg-white/10" />
      <div className="absolute right-5 top-5 h-9 w-9 rounded-full border border-black/25 bg-white/30" />
      <div className="absolute right-8 top-12 h-16 w-px bg-black/20" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-10">
        <div>
          <p className="mb-3 font-serif text-xl opacity-80">{project.number}</p>

          <h3 className="font-serif text-4xl leading-none">{project.title}</h3>

          <p className="mt-5 max-w-lg text-sm leading-relaxed opacity-80">
            {project.text}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-full bg-[#fff8ef] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#3a2b28] shadow-sm transition group-hover:gap-4"
          >
            Open letter <ArrowRight size={13} />
          </button>

          <p className="hidden text-xs uppercase tracking-[0.14em] opacity-60 sm:block">
            Click envelope
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 right-5 font-serif text-5xl opacity-10">
        ✉
      </div>m 
    </motion.article>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden rounded-[2rem] bg-[#fff5ec] p-8 shadow-[0_15px_45px_rgba(58,43,40,0.1)] lg:p-12"
      >
        <Texture />

        <div className="relative z-10">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d08491]">
                Work
              </p>
              <h2 className="font-serif text-5xl text-[#2d211d] md:text-7xl">
                My Projects
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-[#5b4741]">
                A selection of projects where creativity, interaction and
                digital design come together. Click an envelope to open the
                project letter.
              </p>.
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em]">
              {["All", "Web Design", "UI/UX", "Branding", "Interactive"].map(
                (filter, index) => (
                  <button
                    key={filter}
                    className={`rounded-full px-4 py-2 ${
                      index === 0
                        ? "bg-[#3a2b28] text-[#fff8ef]"
                        : "bg-[#eadcc7] text-[#3a2b28]"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectLetterModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

function CaseStudy() {
  return (
    <section
      id="mijn-sprookje"
      className="relative scroll-mt-6 overflow-hidden rounded-[2rem] bg-[#f7eadb] p-6 shadow-[0_15px_45px_rgba(58,43,40,0.1)] lg:p-10"
    >
      <Texture />

      <div className="relative z-10">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d08491]">
              Featured case
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#3a2b28] md:text-7xl">
              Gen-AI Storytelling
              <br />
              for Efteling
            </h2>
          </div>

          <Stamp className="hidden md:flex">
            Case
            <br />
            01
          </Stamp>
        </div>

        <div className="grid gap-6 lg:grid-cols-[230px_1fr]">
          <div className="hidden rounded-2xl bg-[#6d4e3e] p-4 text-[#fff8ef] lg:block">
            {["Overview", "Challenge", "Research", "Design", "Testing", "Result"].map(
              (tab, index) => (
                <div
                  key={tab}
                  className={`mb-3 rounded-xl px-4 py-3 text-xs uppercase tracking-[0.12em] ${
                    index === 0
                      ? "bg-[#2d211d]"
                      : "bg-[#fff8ef]/75 text-[#3a2b28]"
                  }`}
                >
                  {tab}
                </div>
              )
            )}
          </div>

          <div className="relative rounded-[1.5rem] bg-[#fffaf3] p-8 shadow-sm">
            <Tape className="right-24 top-[-10px]" />

            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="font-serif text-xl italic text-[#d08491]">Work</p>

                <h3 className="mt-3 font-serif text-5xl leading-none text-[#3a2b28]">
                  Mijn
                  <br />
                  Sprookje
                </h3>

                <p className="mt-5 w-fit rounded-full bg-[#f1bdc8]/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#3a2b28]">
                  Gen-AI · UX/UI · Web app
                </p>

                <div className="mt-8 space-y-5 leading-relaxed text-[#5b4741]">
                  <p>
                    I worked on a playful and interactive web app for children
                    aged 4 to 6, where they can dream up and personalize their
                    own fairy tales.
                  </p>

                  <p>
                    Developed in collaboration with Mach8 and LiveWall for
                    Efteling, I used ReplicateAPI models to spark imagination
                    and creativity.
                  </p>

                  <p>
                    The design was created from a child’s perspective and tested
                    with young users to make sure it fits their world.
                  </p>
                </div>
              </div>

              <div className="relative pb-10">
                <div className="rounded-xl bg-white p-3 shadow-xl">
                  <div className="flex h-[390px] items-center justify-center rounded-lg bg-[#e7b4bd] p-8 text-center">
                    <div>
                      <p className="font-serif text-5xl leading-tight text-[#3a2b28]">
                        Project visual
                        <br />
                        is coming soon 
                      </p>
                      <p className="mt-4 text-[#5b4741]">
                        Replace this block with screenshots from Mijn Sprookje.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-6 rotate-[-3deg] rounded-xl bg-[#a8b39b] p-5 text-sm text-[#2d211d] shadow-lg">
                  <p className="mb-2 font-serif text-2xl">Highlights</p>
                  <p>✓ Designed for children aged 4 to 6</p>
                  <p>✓ Tested with young users</p>
                  <p>✓ AI-powered storytelling</p>
                  <p>✓ Simple and intuitive interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden rounded-[2rem] bg-[#fff5ec] p-8 shadow-[0_15px_45px_rgba(58,43,40,0.1)] lg:p-12"
    >
      <Texture />

      <div className="relative z-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d08491]">
          Behind the scenes
        </p>
        <h2 className="font-serif text-5xl text-[#2d211d] md:text-7xl">
          My Process
        </h2>

        <p className="mt-3 max-w-2xl leading-relaxed text-[#5b4741]">
          How I turn ideas into impactful digital experiences.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                whileHover={{ y: -6 }}
                key={step.number}
                className={`relative rounded-xl p-5 shadow-lg ${step.color}`}
              >
                <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-[#d9c4a6] shadow" />

                <p className="font-serif text-xl opacity-70">{step.number}</p>

                <Icon className="my-4" size={30} />

                <h3 className="font-serif text-2xl">{step.title}</h3>

                <p className="mt-3 text-sm opacity-75">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative grid overflow-hidden rounded-[2rem] bg-[#67725f] p-8 text-[#fff8ef] shadow-[0_15px_45px_rgba(58,43,40,0.1)] lg:grid-cols-[.85fr_1.15fr] lg:p-12"
    >
      <Texture />

      <div className="relative z-10 flex flex-col justify-center">
        <h2 className="font-serif text-5xl leading-tight md:text-7xl">
          Let’s create
          <br />
          something beautiful
          <br />
          together.
        </h2>

        <p className="mt-5 max-w-sm text-white/80">
          I’m always open to internship opportunities, collaborations and
          creative conversations.
        </p>

        <div className="mt-9 space-y-4 text-sm">
          <p className="flex items-center gap-3">
            <Mail size={18} /> jhachmane@gmail.com
          </p>
          <p className="flex items-center gap-3">
            <MapPin size={18} /> Netherlands
          </p>
          <p className="flex items-center gap-3">
            <span className="text-lg">in</span> https://www.linkedin.com/in/jasmin-h-2b0655338/
          </p>
          <p className="flex items-center gap-3">
            <span className="text-lg">⌘</span> https://github.com/JasminHachmane
          </p>
          <p className="flex items-center gap-3">
            <Download size={18} /> Download CV
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-10 lg:mt-0">
        <div className="relative mx-auto max-w-md rotate-2 rounded-2xl bg-[#fff8ef] p-8 text-[#3a2b28] shadow-2xl">
          <Tape className="right-12 top-[-10px]" />

          <div className="mb-6 flex items-center justify-between">
            <p className="font-serif text-3xl italic">Postcard</p>
            <div className="rounded-lg border border-[#d08491] p-3 text-[#d08491]">
              ♡
            </div>
          </div>

          <p className="mb-6 font-serif text-xl italic">
            I’d love to hear from you!
          </p>

          <form className="space-y-4">
            <input
              className="w-full border-b border-[#c7a996] bg-transparent py-3 outline-none"
              placeholder="Your name"
            />
            <input
              className="w-full border-b border-[#c7a996] bg-transparent py-3 outline-none"
              placeholder="Your email"
            />
            <textarea
              className="h-28 w-full resize-none border-b border-[#c7a996] bg-transparent py-3 outline-none"
              placeholder="Your message"
            />
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#d99aa0] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white"
            >
              Send message <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InteractionStrip({ darkMode, setDarkMode }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[#fff5ec] p-6 shadow-[0_15px_45px_rgba(58,43,40,0.1)] lg:p-8">
      <Texture />

      <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_1.2fr_1.2fr_1.1fr]">
        <div>
          <h2 className="font-serif text-3xl text-[#2d211d]">
            Little details, big experience
          </h2>
          <p className="mt-2 text-sm text-[#5b4741]">
            Crafted interactions that make exploring feel personal.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 border-l border-[#decabb] px-6">
          <span className="text-xs uppercase tracking-[0.12em] text-[#5b4741]">
            Hover effect
          </span>
          <motion.div
            whileHover={{ rotate: 4, y: -4 }}
            className="h-16 w-28 rounded-xl bg-[#e8a7b2] shadow-md"
          />
        </div>

        <div className="flex items-center justify-center gap-4 border-l border-[#decabb] px-6">
          <span className="text-xs uppercase tracking-[0.12em] text-[#5b4741]">
            Envelope opening
          </span>
          <div className="h-16 w-28 rounded-xl bg-[#e8a7b2] shadow-md before:block before:h-8 before:rounded-t-xl before:border-b before:border-black/10 before:bg-white/20" />
        </div>

        <div className="flex items-center justify-center gap-3 border-l border-[#decabb] px-6">
          <button
            onClick={() => setDarkMode(false)}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 ${
              !darkMode
                ? "bg-white text-[#d08491]"
                : "bg-[#eadcc7] text-[#3a2b28]"
            }`}
          >
            Light <Sun size={16} />
          </button>

          <button
            onClick={() => setDarkMode(true)}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 ${
              darkMode
                ? "bg-[#3a2b28] text-white"
                : "bg-[#eadcc7] text-[#3a2b28]"
            }`}
          >
            Dark <Moon size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`relative overflow-hidden ${
        darkMode ? "bg-[#1f1715]" : "bg-[#f4ddd9]"
      } min-h-screen p-3 font-sans text-[#3a2b28] transition-colors duration-500 sm:p-5`}
    >
      <div className="pointer-events-none fixed -left-24 top-20 h-72 w-72 rounded-full bg-[#f1bdc8]/25 blur-3xl" />
      <div className="pointer-events-none fixed -right-24 bottom-24 h-96 w-96 rounded-full bg-[#8e9679]/20 blur-3xl" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,#3a2b28_1px,transparent_0)] [background-size:22px_22px]" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-8">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal delay={0.05} rotate={-0.4}>
          <About />
        </ScrollReveal>

        <ScrollReveal delay={0.08} rotate={0.4}>
          <Projects />
        </ScrollReveal>

        <ScrollReveal delay={0.08} rotate={-0.35}>
          <CaseStudy />
        </ScrollReveal>

        <ScrollReveal delay={0.08} rotate={0.35}>
          <Process />
        </ScrollReveal>

        <ScrollReveal delay={0.08} rotate={-0.25}>
          <Contact />
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <InteractionStrip darkMode={darkMode} setDarkMode={setDarkMode} />
        </ScrollReveal>

        <footer className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-[#5b4741] md:flex-row">
          <p className="font-serif text-2xl italic">Jasmin.</p>
          <p>A digital scrapbook of design, storytelling and code.</p>
        </footer>
      </div>
    </main>
  );
}
