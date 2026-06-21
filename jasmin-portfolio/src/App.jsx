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
  Menu,
  Sparkles,
  Layers,
  Heart,
  Eye,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Mijn Sprookje",
    category: "Gen-AI · UX/UI · Web app",
    text: "A playful AI storytelling concept for children, created through research, testing and visual design.",
    image: "/images/project-1.jpg",
    color: "bg-[#e8a7b2]",
    details: {
      client: "Efteling · Mach8 · LiveWall",
      role: "UX/UI design · Research · User testing · Concepting",
      tools: ["Figma", "User testing", "AI concepting", "Storytelling", "UX research"],
      problem:
        "Children are reading less, while Efteling wanted to explore how interactive storytelling and AI could make fairy tales more playful, visual and engaging.",
      goal:
        "Create a child-friendly Gen-AI storytelling experience where children aged 4 to 6 can visually create and personalize their own fairy tale.",
      process: [
        "Researched the Efteling Sprookjesbos, storytelling apps and the target audience.",
        "Interviewed children and collected insights about visuals, fantasy, humor and interaction.",
        "Created moodboards, wireframes and visual concepts based on the children’s needs.",
        "Tested the concept with young users and improved the flow based on feedback.",
      ],
      result:
        "The final concept became a playful web app where children can choose characters, settings and story elements in a simple visual way.",
      reflection:
        "This project taught me that designing for young children requires simplicity, strong visuals and constant testing.",
    },
  },
  {
    number: "02",
    title: "Aurora Studio",
    category: "Branding · Web design",
    text: "A soft, elegant brand identity translated into a visual system and website design.",
    image: "/images/project-2.jpg",
    color: "bg-[#a8b39b]",
    details: {
      client: "Aurora Studio",
      role: "Brand identity · Stylescapes · Website design",
      tools: ["Figma", "Brand guide", "Moodboards", "Web design"],
      problem: "The studio needed a clear visual identity that felt calm, elegant and professional.",
      goal: "Create a consistent brand identity and website direction.",
      process: [
        "Created moodboards and stylescapes.",
        "Explored logo directions, colors and typography.",
        "Collected feedback from teachers and team members.",
        "Translated the brand identity into a website design.",
      ],
      result: "A refined visual identity with a soft color palette, elegant typography and calm website style.",
      reflection: "I learned how important consistency is in branding.",
    },
  },
  {
    number: "03",
    title: "Dezcartes",
    category: "UX research · Prototype",
    text: "A card game platform developed through research, user testing, iterations and technical choices.",
    image: "/images/project-3.jpg",
    color: "bg-[#eadcc7]",
    details: {
      client: "Dezcartes project",
      role: "UX research · Testing · UI advice · Technical realisation",
      tools: ["Figma", "React", "User testing", "Git", "Research"],
      problem: "The project needed a digital platform that supported the physical card game experience.",
      goal: "Design and develop a user-friendly platform with cards, challenges and gameplay features.",
      process: [
        "Researched card game platforms and user needs.",
        "Created requirements and user stories.",
        "Tested card designs and platform flows.",
        "Improved the prototype based on feedback.",
      ],
      result: "A stronger digital concept with clearer navigation and better physical-digital connection.",
      reflection: "This project helped me grow in research, communication, testing and technical decision-making.",
    },
  },
  {
    number: "04",
    title: "Portfolio",
    category: "React · Tailwind · Framer Motion",
    text: "My personal showcase portfolio, designed as a layered digital scrapbook.",
    image: "/images/project-4.jpg",
    color: "bg-[#d8b08c]",
    details: {
      client: "Personal showcase portfolio",
      role: "Design · Front-end development · Reflection · Documentation",
      tools: ["React", "Tailwind CSS", "Framer Motion", "Git", "Vercel"],
      problem: "My first portfolio version felt too flat and looked like separate blocks.",
      goal: "Create a personal, responsive and layered showcase portfolio.",
      process: [
        "Created a scrapbook moodboard.",
        "Translated feedback from Chris into layered components.",
        "Built reusable React components.",
        "Tested responsiveness while developing.",
      ],
      result: "A responsive digital scrapbook portfolio with layered visuals and project case pages.",
      reflection: "I learned how to translate a visual concept into code while keeping usability in mind.",
    },
  },
];

const steps = [
  { number: "01", title: "Discover", icon: Search, text: "Research, inspiration, user goals and feedback." },
  { number: "02", title: "Design", icon: Pencil, text: "Moodboards, wireframes, visual direction and prototypes." },
  { number: "03", title: "Develop", icon: Code2, text: "React components, Tailwind styling and responsive layouts." },
  { number: "04", title: "Deliver", icon: Send, text: "Testing, polishing, documenting and presenting my growth." },
];

const services = [
  {
    title: "Digital Experiences",
    text: "I design interfaces that feel clear, personal and easy to use.",
    tag: "UX/UI",
    icon: Eye,
  },
  {
    title: "Creative Front-end",
    text: "I translate visual concepts into responsive React and Tailwind websites.",
    tag: "Code",
    icon: Code2,
  },
  {
    title: "Storytelling Concepts",
    text: "I create concepts that combine visuals, emotion and interaction.",
    tag: "Concept",
    icon: Sparkles,
  },
];

const values = ["Empathy", "Creativity", "Clarity", "Detail", "Growth", "Impact"];

const feedbackNotes = [
  "Think in layers, not blocks.",
  "Make the portfolio feel like a real scrapbook experience.",
  "Responsive design should be considered from the start.",
  "Show the process, not only the final result.",
];

function Texture() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply bg-[url('/decor/paper.jpg')] bg-cover" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,#3a2b28_1px,transparent_0)] [background-size:19px_19px]" />
    </>
  );
}

function Tape({ className = "" }) {
  return (
    <img
      src="/decor/tape-2.png"
      alt=""
      onError={(e) => (e.currentTarget.style.display = "none")}
      className={`pointer-events-none absolute z-30 w-28 drop-shadow-md ${className}`}
    />
  );
}

function Decor({ src, className = "", float = false }) {
  if (float) {
    return (
      <motion.img
        src={src}
        alt=""
        onError={(e) => (e.currentTarget.style.display = "none")}
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className={`pointer-events-none absolute z-20 ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt=""
      onError={(e) => (e.currentTarget.style.display = "none")}
      className={`pointer-events-none absolute z-20 ${className}`}
    />
  );
}

function PaperLayer({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute bg-[#fff8ef]/70 shadow-[12px_12px_0_rgba(58,43,40,0.08)] ${className}`}
    />
  );
}

function Stamp({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ rotate: -4, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`inline-flex rotate-[-8deg] items-center justify-center border border-[#b5796d] bg-[#fff8ef]/75 px-5 py-4 text-center font-serif text-[10px] uppercase tracking-[0.18em] text-[#b5796d] shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Note({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotate: -1, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`relative rotate-[-3deg] bg-[#fff2a9] p-5 shadow-xl ${className}`}
    >
      <Tape className="left-8 top-[-18px] rotate-[-5deg]" />

      <p className="font-serif text-lg italic leading-relaxed text-[#3a2b28]">
        {children}
      </p>

      <span className="absolute bottom-3 right-4 text-2xl text-[#c47777]/70">
        ♡
      </span>
    </motion.div>
  );
}

function Polaroid({ image, caption, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`relative bg-[#fffaf3] p-3 pb-10 shadow-2xl ${className}`}
    >
      <Tape className="left-12 top-[-16px] rotate-[-6deg]" />

      <div
        className="h-72 bg-[#eadcc7] bg-cover bg-center shadow-inner sm:h-80"
        style={{ backgroundImage: `url(${image})` }}
      />

      <p className="mt-3 text-center font-serif text-lg italic text-[#3a2b28]">
        {caption}
      </p>
    </motion.div>
  );
}

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ArchiveMarquee() {
  return (
    <section className="relative z-[999] -mt-20 -mb-8 overflow-visible px-0">
      <div className="relative left-1/2 w-screen -translate-x-1/2 rotate-[-1deg] bg-[#2d211d] py-5 text-[#fff8ef] shadow-2xl">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.25em]"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10">
              <span>UX/UI Design</span>
              <span>✦</span>
              <span>Front-end Development</span>
              <span>✦</span>
              <span>Storytelling</span>
              <span>✦</span>
              <span>User Testing</span>
              <span>✦</span>
              <span>Creative Concepting</span>
              <span>✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhatICreate() {
  return (
    <section className="relative z-30 -mt-16 overflow-visible px-6 py-28 md:px-10 lg:px-14">
      <PaperLayer className="left-5 top-8 h-[90%] w-[95%] rotate-[1deg] bg-[#f7eadb]" />
      <Decor src="/decor/heart.png" float className="right-12 top-20 hidden w-14 md:block" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a06055]">
          What I create
        </p>

        <h2 className="font-serif text-5xl leading-tight text-[#2d211d] md:text-7xl">
          Design with purpose,
          <br />
          code with personality.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                whileHover={{ y: -10, rotate: 0, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`relative bg-[#fffaf3] p-7 shadow-2xl ${
                  index === 1 ? "rotate-[1deg]" : "rotate-[-1deg]"
                }`}
              >
                <Tape className="left-10 top-[-17px] rotate-[-6deg]" />

                <span className="bg-[#e8a7b2] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]">
                  {service.tag}
                </span>

                <Icon className="mt-8 text-[#b5796d]" size={36} />

                <h3 className="mt-6 font-serif text-4xl text-[#2d211d]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#4d3b35]">
                  {service.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedCasePreview() {
  return (
    <section className="relative z-30 -mt-20 overflow-visible px-6 py-28 md:px-10 lg:px-14">
      <PaperLayer className="right-5 top-10 h-[90%] w-[95%] rotate-[-1deg] bg-[#f5eadc]" />
      <Decor src="/decor/flower.png" float className="right-12 top-16 hidden w-20 md:block" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a06055]">
            Featured case
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#2d211d] md:text-7xl">
            Mijn Sprookje
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-[#4d3b35]">
            A Gen-AI storytelling concept for children aged 4 to 6. This project
            combines user research, playful UX/UI design, visual storytelling and
            testing with young users.
          </p>

          <Note className="mt-8 max-w-md">
            This was the first time I designed for children aged 4–6, so every
            choice had to be simple, visual and playful.
          </Note>
        </div>

        <Polaroid
          image="/images/project-1.jpg"
          caption="featured project · Mijn Sprookje"
          className="rotate-[3deg]"
        />
      </div>
    </section>
  );
}

function DesignValues() {
  return (
    <section className="relative z-20 -mt-16 overflow-visible px-6 py-28 md:px-10 lg:px-14">
      <PaperLayer className="left-4 top-8 h-[88%] w-[96%] rotate-[1deg] bg-[#eadcc7]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a06055]">
          Design values
        </p>

        <h2 className="font-serif text-5xl leading-tight text-[#2d211d] md:text-7xl">
          The little things
          <br />
          I design for.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {values.map((value, index) => (
            <motion.div
              key={value}
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="bg-[#fffaf3] p-5 text-center shadow-xl"
            >
              <p className="font-serif text-3xl text-[#b5796d]">
                0{index + 1}
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-[#2d211d]">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeedbackWall() {
  return (
    <section className="relative z-20 -mt-20 overflow-visible px-6 py-28 md:px-10 lg:px-14">
      <PaperLayer className="right-6 top-10 h-[90%] w-[94%] rotate-[-1deg] bg-[#f7eadb]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a06055]">
          Feedback wall
        </p>

        <h2 className="font-serif text-5xl leading-tight text-[#2d211d] md:text-7xl">
          Notes that shaped
          <br />
          this portfolio.
        </h2>

        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {feedbackNotes.map((note, index) => (
            <Note
              key={note}
              className={`${index % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"}`}
            >
              {note}
            </Note>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative z-20 -mt-16 overflow-visible px-6 py-32 md:px-10 lg:px-14">
      <PaperLayer className="left-5 top-8 h-[86%] w-[95%] rotate-[1deg] bg-[#2d211d]" />
      <Decor src="/decor/sparkle.png" float className="left-12 top-16 hidden w-14 md:block" />
      <Decor src="/decor/heart.png" float className="right-20 bottom-20 hidden w-14 lg:block" />

      <div className="relative z-10 mx-auto max-w-[1200px] text-center text-[#fff8ef]">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#e8a7b2]">
          Open for opportunities
        </p>

        <h2 className="font-serif text-5xl leading-[0.95] text-[#3a2b28] md:text-8xl">
          Looking for a creative
          <br />
          UX/UI intern?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[#3a2b28]">
          I love creating digital experiences with personality, structure and
          feeling. Let’s connect if you are looking for someone who combines
          design, storytelling and front-end development.
        </p>

        <a
          href="mailto:jhachmane@gmail.com"
          className="mt-9 inline-flex items-center gap-3 bg-[#e8a7b2] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#2d211d] shadow-xl transition hover:gap-5"
        >
          Contact me <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <section className="relative z-40 -mt-20 overflow-visible px-6 py-24 md:px-10 lg:px-14">
      <PaperLayer className="left-4 top-12 h-[92%] w-[94%] rotate-[-1deg] bg-[#f7eadb]" />
      <Decor src="/decor/sparkle.png" float className="right-12 top-12 hidden w-16 rotate-12 md:block" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 bg-[#3a2b28] px-5 py-3 text-sm font-bold text-[#fff8ef] shadow-xl transition hover:gap-4"
        >
          ← Back to all projects
        </button>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Polaroid image={project.image} caption={`${project.title} · case study`} className="rotate-[-3deg]" />
            <Note className="mt-8">{project.details.reflection}</Note>
          </div>

          <div className="relative bg-[#fffaf3] p-7 shadow-2xl md:p-10">
            <Tape className="right-16 top-[-18px] rotate-[5deg]" />

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a06055]">
              Case study {project.number}
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#2d211d] md:text-7xl">
              {project.title}
            </h2>

            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[#a06055]">
              {project.category}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="bg-[#f7eadb] p-5 shadow-md">
                <h3 className="font-serif text-3xl">Client</h3>
                <p className="mt-2 text-[#4d3b35]">{project.details.client}</p>
              </div>

              <div className="bg-[#f7eadb] p-5 shadow-md">
                <h3 className="font-serif text-3xl">My role</h3>
                <p className="mt-2 text-[#4d3b35]">{project.details.role}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.details.tools.map((tool) => (
                <span key={tool} className="bg-[#eadcc7] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-serif text-4xl text-[#2d211d]">Problem</h3>
                <p className="mt-3 leading-relaxed text-[#4d3b35]">{project.details.problem}</p>
              </div>

              <div>
                <h3 className="font-serif text-4xl text-[#2d211d]">Goal</h3>
                <p className="mt-3 leading-relaxed text-[#4d3b35]">{project.details.goal}</p>
              </div>

              <div>
                <h3 className="font-serif text-4xl text-[#2d211d]">Process</h3>
                <div className="mt-4 grid gap-3">
                  {project.details.process.map((item, index) => (
                    <div key={item} className="flex gap-3 bg-[#f7eadb] p-4 shadow-sm">
                      <span className="font-serif text-xl text-[#b5796d]">0{index + 1}</span>
                      <p className="leading-relaxed text-[#4d3b35]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-4xl text-[#2d211d]">Result</h3>
                <p className="mt-3 leading-relaxed text-[#4d3b35]">{project.details.result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[1040px] overflow-visible px-6 pb-44 pt-8 md:px-10 lg:px-14">
      <Texture />

      <PaperLayer className="left-3 top-10 h-[88%] w-[96%] rotate-[-1deg] bg-[#f5eadc]" />
      <Decor src="/decor/sparkle.png" float className="left-1/2 top-24 hidden w-14 md:block" />
      <Decor src="/decor/heart.png" float className="bottom-20 left-14 hidden w-14 -rotate-12 lg:block" />

      <header className="relative z-40 mx-auto flex max-w-[1500px] items-center justify-between gap-4">
        <div className="relative rotate-[-2deg] bg-[#fff8ef] px-7 py-4 shadow-xl">
          <p className="font-serif text-3xl italic text-[#2d211d]">Jasmin.</p>
        </div>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.16em] text-[#2d211d] md:flex">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="bg-[#3a2b28] p-4 text-[#fff8ef] md:hidden">
          <Menu size={20} />
        </button>
      </header>

      <div className="relative z-10 mx-auto mt-16 max-w-[1450px]">
        <div className="relative grid min-h-[790px] gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative bg-[#fffaf3] p-8 shadow-2xl md:p-12 lg:p-16">
            <div className="absolute right-[-1px] top-0 hidden h-full w-[2px] bg-[#d8b08c]/40 lg:block" />

            <img
              src="/decor/vintage-paper.png"
              alt=""
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="pointer-events-none absolute left-6 top-6 z-0 hidden w-[92%] opacity-25 md:block"
            />

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6 w-fit bg-[#eadcc7] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#3a2b28] shadow-md"
              >
                Vol. III · 2025–2026 Collection
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-5xl italic text-[#c47777] md:text-6xl"
              >
                The
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="mt-1 font-serif text-[4.7rem] leading-[0.78] tracking-[-0.07em] text-[#2d211d] sm:text-[6.4rem] md:text-[8rem] lg:text-[9rem]"
              >
                Jasmin
                <br />
                Archives
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.25 }}
                className="mt-8 max-w-3xl border-l-4 border-[#c47777] pl-6 font-serif text-3xl leading-[1] text-[#3a2b28] md:text-5xl"
              >
                Designing digital experiences with softness, structure and story.
              </motion.h2>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#4d3b35]">
                A romantic but powerful showcase of my projects, process, feedback,
                technical growth and personal development as an ICT Media Design student.
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                {["UX/UI", "React", "Story", "Testing"].map((item) => (
                  <span
                    key={item}
                    className="bg-[#f2d6dc] px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#3a2b28] shadow-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ y: -3, scale: 1.02 }}
                  href="#projects"
                  className="inline-flex items-center gap-3 bg-[#241916] px-6 py-4 text-sm font-bold text-[#fff8ef] shadow-xl transition hover:gap-5"
                >
                  View selected work <ArrowRight size={17} />
                </motion.a>

                <motion.a
                  whileHover={{ y: -3, scale: 1.02 }}
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-[#e8a7b2] px-6 py-4 text-sm font-bold text-[#2d211d] shadow-xl transition hover:gap-5"
                >
                  Let’s connect <ArrowRight size={17} />
                </motion.a>
              </div>

              <div className="absolute bottom-[-86px] left-0 hidden text-xs font-bold uppercase tracking-[0.25em] text-[#b5796d] md:block">
                Archive No. 03 · Jasmin Hachmane
              </div>
            </div>
          </div>

          <div className="relative min-h-[790px] overflow-hidden bg-[#e8b9bd] p-8 shadow-2xl md:p-12 lg:p-16">
            <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,#fff8ef_1px,transparent_0)] [background-size:18px_18px]" />

            <img
              src="/decor/lace-doily.png"
              alt=""
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="absolute bottom-[-50px] right-[-50px] z-10 hidden w-[330px] opacity-75 lg:block"
            />
            <img
              src="/decor/small-photo-corner.png"
              alt=""
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="absolute bottom-[-50px] right-[-50px] z-10 hidden w-[330px] opacity-75 lg:block"
            />

            <img
              src="/decor/pressed-flower.png"
              alt=""
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="absolute right-100 top-110 z-21 hidden w-[180px] rotate-12 opacity-90 lg:block"
            />
            <img
              src="/decor/washi-tape-pink-green.png"
              alt=""
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="absolute right-0 top-0 z-20 hidden w-[700px] rotate-0 opacity-90 lg:block"
            />

            <motion.img
              src="/decor/gold-heart-locket.png"
              alt=""
              animate={{ y: [0, -8, 0], rotate: [3, 7, 3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="absolute right-[-20px] top-[70px] z-[70] hidden w-[180px] xl:w-[240px] 2xl:w-[280px] lg:block"
            />

            <motion.img
              src="/decor/sticker-bow.png"
              alt=""
              animate={{ y: [0, -5, 0], rotate: [-6, -2, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="absolute left-[43%] top-6 z-[70] hidden w-24 md:block"
            />

            <div className="absolute right-10 top-8 z-30 hidden bg-[#c47777]/85 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#fff8ef] shadow-md md:block">
              Digital scrapbook
            </div>

            <div className="absolute right-28 top-20 z-30 hidden bg-[#fff8ef] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2d211d] shadow-md lg:block">
              UX/UI designer
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-10 top-14 z-30 bg-[#fff2a9] p-5 shadow-xl"
            >
              <img
                src="/decor/paperclip.png"
                alt=""
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="absolute right-3 top-[-12px] w-15"
              />

              <p className="font-serif text-2xl italic text-[#2d211d]">
                Available for
                <br />
                UX/UI internship
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#c47777]">
                2026
              </p>
            </motion.div>

            <div className="absolute left-14 top-[230px] z-30 hidden md:block">
              <img
                src="/decor/ticket.png"
                alt=""
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="w-40 rotate-[-7deg] drop-shadow-xl"
              />
            </div>

            <motion.img
              src="/decor/postcard-ict.png"
              alt=""
              initial={{ rotate: -8, opacity: 0, y: 20 }}
              animate={{ rotate: -8, opacity: 1, y: 0 }}
              whileHover={{ rotate: -4, scale: 1.03 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="absolute left-8 top-[315px] z-20 hidden w-[200px] drop-shadow-xl lg:block"
            />

            <motion.div
              initial={{ rotate: 4, opacity: 0, y: 30 }}
              animate={{ rotate: 4, opacity: 1, y: 0 }}
              whileHover={{ y: -10, rotate: 1, scale: 1.025 }}
              transition={{ duration: 0.8 }}
              className="absolute right-12 top-[165px] z-50 w-[250px] bg-[#fffaf3] p-4 pb-12 shadow-2xl sm:w-[300px]"
            >
              <img
                src="/decor/masking-tape-pink.png"
                alt=""
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="absolute left-1/2 top-[-18px] z-50 w-28 -translate-x-1/2 rotate-[3deg]"
              />

              <div className="h-[295px] bg-[#eadcc7] bg-[url('/images/me.jpg')] bg-cover bg-center shadow-inner sm:h-[330px]" />

              <p className="mt-4 text-center font-serif text-xl italic leading-tight text-[#3a2b28]">
                Soft visuals.
                <br />
                Strong ideas.
              </p>
            </motion.div>

            <motion.img
              src="/decor/sticker-star.png"
              alt=""
              animate={{ y: [0, -7, 0], rotate: [10, 15, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="absolute right-8 top-[295px] z-[75] hidden w-14 md:block"
            />

            <motion.img
              src="/decor/sticker-flower-2.png"
              alt=""
              animate={{ y: [0, -6, 0], rotate: [12, 16, 12] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="absolute right-10 top-[570px] z-[75] hidden w-20 md:block"
            />

            <motion.div
              initial={{ rotate: -7, opacity: 0, y: 20 }}
              animate={{ rotate: -7, opacity: 1, y: 0 }}
              whileHover={{ rotate: -2, scale: 1.04 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="absolute left-12 top-[580px] z-35 hidden bg-[#fffaf3] p-3 shadow-xl md:block"
            >
              <img
                src="/decor/paperclip.png"
                alt=""
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="absolute left-[-10px] top-[-10px] z-50 w-18"
              />

              <img
                src="/decor/sticker-butterfly.png"
                alt=""
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="absolute right-[-22px] top-[-22px] z-[80] w-25 rotate-[15deg]"
              />

              <div
                className="h-28 w-28 bg-[#eadcc7] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/project-1.jpg')" }}
              />

              <p className="mt-2 text-center font-serif text-sm italic text-[#3a2b28]">
                story concept
              </p>
            </motion.div>

            <div className="absolute left-[42%] bottom-[215px] z-30 hidden w-[200px] rotate-[-3deg] bg-[#fff8ef] p-5 shadow-xl lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c47777]">
                Current focus
              </p>
              <p className="mt-2 font-serif text-lg italic leading-tight text-[#2d211d]">
                Creating a portfolio that feels personal, layered and memorable.
              </p>
            </div>

            <motion.div
              initial={{ rotate: 6, opacity: 0, y: 20 }}
              animate={{ rotate: 6, opacity: 1, y: 0 }}
              whileHover={{ rotate: 2, scale: 1.04 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="absolute right-12 bottom-22 z-40 hidden bg-[#fffaf3] p-3 shadow-xl lg:block"
            >
              <img
                src="/decor/paperclip.png"
                alt=""
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="absolute right-[-8px] top-[-10px] z-50 w-15"
              />

              <div
                className="h-24 w-32 bg-[#eadcc7] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/project-2.jpg')" }}
              />

              <p className="mt-2 text-center font-serif text-sm italic text-[#3a2b28]">
                branding
              </p>
            </motion.div>

            <div className="absolute left-12 bottom-8 z-30 hidden bg-[#efc8d1] p-5 shadow-xl lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2d211d]">
                Archive Log
              </p>

              <ul className="mt-3 space-y-1 text-sm text-[#3a2b28]">
                <li>♡ UX/UI Design</li>
                <li>♡ Front-end Development</li>
                <li>♡ Storytelling</li>
                <li>♡ User Testing</li>
              </ul>
            </div>

            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-[230px] z-30 hidden md:block"
            >
              <div className="relative">
                <img
                  src="/decor/stamp.png"
                  alt=""
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="w-26 rotate-[4deg] drop-shadow-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-serif text-[8px] uppercase tracking-[0.12em] text-[#7b4d45]">
                  Creative
                  <br />
                  2026
                  <br />
                  Portfolio
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative z-20 -mt-28 overflow-visible px-6 py-28 md:px-10 lg:px-14">
      <PaperLayer className="left-6 top-10 h-[90%] w-[94%] rotate-[1deg] bg-[#f7eadb]" />
      <PaperLayer className="right-20 bottom-10 hidden h-48 w-72 rotate-[-4deg] bg-[#a8b39b]/35 lg:block" />
      <Decor src="/decor/sparkle.png" float className="right-12 top-12 hidden w-16 rotate-12 md:block" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[520px]">
          <Polaroid image="/images/about.jpg" caption="a little piece of my journey" className="absolute left-0 top-8 w-[300px] rotate-[-5deg] sm:w-[380px]" />

        </div>

        <div className="relative bg-[#fffaf3] p-7 shadow-2xl md:p-10">
          <Tape className="right-16 top-[-18px] rotate-[5deg]" />
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a06055]">About me</p>

          <h2 className="font-serif text-5xl leading-tight text-[#2d211d] md:text-6xl">
            Hi, I’m Jasmin!
          </h2>

          <p className="mt-5 leading-relaxed text-[#4d3b35]">
            I’m an ICT Media Design student with a passion for UX/UI design, front-end development and creative storytelling.
          </p>

          <p className="mt-4 leading-relaxed text-[#4d3b35]">
            My portfolio is designed as a digital scrapbook because I wanted it to feel personal, visual and layered. It shows not only final products, but also my process, feedback moments, iterations and growth.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["UX/UI", "React", "Tailwind", "Figma", "User testing", "Storytelling"].map((tag) => (
              <span key={tag} className="bg-[#eadcc7] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">
                {tag}
              </span>
            ))}
          </div>

          <Note className="mt-8 max-w-md rotate-[2deg]">
            Keep learning, stay curious and never stop creating.
          </Note>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <section id="projects" className="relative z-30 -mt-20 overflow-visible px-6 py-28 md:px-10 lg:px-14">
      <PaperLayer className="right-5 top-8 h-[92%] w-[95%] rotate-[-1deg] bg-[#f5eadc]" />
      <PaperLayer className="left-16 top-24 hidden h-40 w-72 rotate-[4deg] bg-[#e8a7b2]/35 md:block" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a06055]">Selected work</p>
            <h2 className="font-serif text-5xl leading-tight text-[#2d211d] md:text-7xl">Project Pages</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[#4d3b35]">
              Each project opens into a detailed case study with problem, goal, process, result and reflection.
            </p>
          </div>

          <Stamp className="hidden md:flex">
            Open
            <br />
            archive
          </Stamp>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className={`relative cursor-pointer bg-[#fffaf3] p-4 pb-7 shadow-2xl ${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}`}
            >
              <Tape className="left-12 top-[-17px] rotate-[-7deg]" />

              <div className="h-48 bg-[#eadcc7] bg-cover bg-center shadow-inner" style={{ backgroundImage: `url(${project.image})` }} />

              <div className={`mt-4 inline-flex px-3 py-1 text-xs font-bold ${project.color}`}>
                {project.number}
              </div>

              <h3 className="mt-3 font-serif text-3xl leading-none text-[#2d211d]">{project.title}</h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#a06055]">{project.category}</p>

              <p className="mt-4 text-sm leading-relaxed text-[#4d3b35]">{project.text}</p>

              <button className="mt-6 inline-flex items-center gap-2 border-b border-[#3a2b28] pb-1 text-sm font-bold">
                Read case <ArrowRight size={14} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative z-20 -mt-16 overflow-visible px-6 py-28 text-[#fff8ef] md:px-10 lg:px-14">
      <PaperLayer className="left-4 top-10 h-[90%] w-[96%] rotate-[1deg] bg-[#6f7a61]" />
      <Decor src="/decor/flower.png" float className="right-10 top-10 hidden w-20 opacity-80 md:block" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[280px_1fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c47777]">
  Behind the scenes
</p>
          <h2 className="font-serif text-5xl leading-tight text-[#2d211d] md:text-6xl">
    My Process
  </h2>

  <p className="mt-5 text-sm leading-relaxed text-[#4d3b35]">
    I build from research to design, from feedback to iteration, and from prototype to final product.
  </p>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="relative bg-[#fffaf3] p-6 text-[#2d211d] shadow-2xl"
              >
                <Tape className="left-8 top-[-16px] w-24" />
                <p className="font-serif text-3xl text-[#b5796d]">{step.number}</p>
                <Icon className="mt-5" size={34} />
                <h3 className="mt-5 font-serif text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4d3b35]">{step.text}</p>
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
    <section id="contact" className="relative z-10 -mt-16 overflow-visible px-6 py-28 md:px-10 lg:px-14">
      <PaperLayer className="right-6 top-8 h-[90%] w-[94%] rotate-[-1deg] bg-[#f5eadc]" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a06055]">Contact</p>
          <h2 className="font-serif text-5xl leading-tight text-[#2d211d] md:text-7xl">
            Let’s create
            <br />
            something
            <br />
            beautiful.
          </h2>

          <p className="mt-5 max-w-md leading-relaxed text-[#4d3b35]">
            I’m always open to feedback, opportunities and creative conversations.
          </p>
        </div>

        <div className="relative bg-[#fffaf3] p-7 shadow-2xl md:p-10">
          <Tape className="left-14 top-[-18px]" />

          <div className="space-y-5 text-[#3a2b28]">
            <p className="flex items-center gap-3">
              <Mail size={18} /> jhachmane@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={18} /> The Netherlands
            </p>

            <a href="https://www.linkedin.com/in/jasmin-h-2b0655338/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <span className="font-bold">in</span> LinkedIn
            </a>

            <a href="https://github.com/JasminHachmane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <span className="font-bold">⌘</span> GitHub
            </a>

            <a href="/documents/Jasmin-Hachmane-CV.pdf" download className="flex items-center gap-3">
              <Download size={18} /> Download CV
            </a>
          </div>

          <p className="mt-10 rotate-[-4deg] text-right font-serif text-2xl italic text-[#4d3b35]">
            Thanks for stopping by! ♡
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1f1715] font-sans text-[#3a2b28]">
      <div className="relative mx-auto max-w-[1600px] bg-[#f4eadf]">
        <Texture />

        <Reveal><Hero /></Reveal>
        <ArchiveMarquee />
        <Reveal><FeaturedCasePreview /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><WhatICreate /></Reveal>
        <Reveal><DesignValues /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><FeedbackWall /></Reveal>
        <Reveal><FinalCTA /></Reveal>
        <Reveal><Contact /></Reveal>

        <footer className="relative z-20 bg-[#2d211d] px-8 py-5 text-xs text-[#fff8ef]/70 md:flex md:justify-between">
          <p>© 2026 Jasmin Hachmane · Showcase Portfolio</p>
          <p>Made with React, Tailwind and lots of scrapbook layers ♡</p>
        </footer>
      </div>
    </main>
  );
}
