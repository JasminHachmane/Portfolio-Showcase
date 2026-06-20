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

function Texture() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply bg-[url('/textures/paper.jpg')] bg-cover" />
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

function Decor({ src, className = "" }) {
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
    <div
      className={`inline-flex rotate-[-8deg] items-center justify-center border border-[#b5796d] bg-[#fff8ef]/75 px-5 py-4 text-center font-serif text-[10px] uppercase tracking-[0.18em] text-[#b5796d] shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function Note({ children, className = "" }) {
  return (
    <div className={`relative rotate-[-3deg] bg-[#fff2a9] p-5 shadow-xl ${className}`}>
      <Tape className="left-8 top-[-18px] rotate-[-5deg]" />
      <p className="font-serif text-lg italic leading-relaxed text-[#3a2b28]">{children}</p>
    </div>
  );
}

function Polaroid({ image, caption, className = "" }) {
  return (
    <div className={`relative bg-[#fffaf3] p-3 pb-10 shadow-2xl ${className}`}>
      <Tape className="left-12 top-[-16px] rotate-[-6deg]" />
      <div
        className="h-72 bg-[#eadcc7] bg-cover bg-center shadow-inner sm:h-80"
        style={{ backgroundImage: `url(${image})` }}
      />
      <p className="mt-3 text-center font-serif text-lg italic text-[#3a2b28]">{caption}</p>
    </div>
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

function ProjectDetail({ project, onBack }) {
  return (
    <section className="relative z-40 -mt-20 overflow-visible px-6 py-24 md:px-10 lg:px-14">
      <PaperLayer className="left-4 top-12 h-[92%] w-[94%] rotate-[-1deg] bg-[#f7eadb]" />
      <Decor src="/decor/sparkle.png" className="right-12 top-12 hidden w-16 rotate-12 md:block" />

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
    <section id="home" className="relative min-h-[760px] overflow-visible px-6 pb-36 pt-8 md:px-10 lg:px-14">
      <Texture />

      <PaperLayer className="left-3 top-10 h-[88%] w-[96%] rotate-[-1deg] bg-[#f5eadc]" />
      <PaperLayer className="right-8 top-24 hidden h-72 w-56 rotate-[7deg] bg-[#e8a7b2]/50 md:block" />
      <PaperLayer className="left-10 bottom-16 hidden h-56 w-80 rotate-[-5deg] bg-[#d8c49f]/60 lg:block" />

      <Decor src="/decor/flower.png" className="right-10 top-24 hidden w-20 rotate-12 md:block" />
      <Decor src="/decor/sparkle.png" className="left-1/2 top-28 hidden w-14 md:block" />
      <Decor src="/decor/heart.png" className="bottom-24 left-16 hidden w-14 -rotate-12 lg:block" />

      <header className="relative z-40 mx-auto flex max-w-[1500px] items-center justify-between gap-4">
        <div className="relative rotate-[-2deg] bg-[#fff8ef] px-7 py-4 shadow-xl">
          <Tape className="left-3 top-[-17px] w-24 rotate-[-8deg]" />
          <p className="font-serif text-3xl italic text-[#2d211d]">Jasmin.</p>
        </div>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.16em] text-[#2d211d] md:flex">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="bg-[#3a2b28] p-4 text-[#fff8ef] md:hidden">
          <Menu size={20} />
        </button>
      </header>

      <div className="relative z-10 mx-auto mt-16 grid max-w-[1500px] items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="font-serif text-5xl italic text-[#c47777] md:text-6xl">The</p>

          <h1 className="mt-1 font-serif text-6xl leading-[0.88] tracking-[-0.05em] text-[#2d211d] sm:text-7xl md:text-8xl lg:text-9xl">
            Jasmin
            <br />
            Archives
          </h1>

          <p className="mt-6 max-w-md text-xs font-bold uppercase tracking-[0.22em] text-[#a06055]">
            ICT Media Design · Showcase Portfolio
          </p>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#4d3b35]">
            A layered digital scrapbook about my projects, process, feedback, technical growth and personal development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-3 bg-[#241916] px-6 py-4 text-sm font-bold text-[#fff8ef] shadow-xl transition hover:gap-5">
              Explore my work <ArrowRight size={17} />
            </a>

            <a href="#process" className="inline-flex items-center gap-3 bg-[#fff8ef] px-6 py-4 text-sm font-bold text-[#3a2b28] shadow-xl transition hover:gap-5">
              View process <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <PaperLayer className="left-4 top-12 hidden h-[410px] w-[300px] rotate-[-8deg] bg-[#d8c49f]/70 sm:block" />
          <PaperLayer className="right-2 top-2 h-[430px] w-[285px] rotate-[6deg] bg-[#e7b4bd]/60 sm:w-[350px]" />

          <motion.div
            initial={{ rotate: 5, opacity: 0, y: 30 }}
            animate={{ rotate: 5, opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute right-3 top-8 w-[285px] bg-[#fffaf3] p-4 pb-12 shadow-2xl sm:w-[360px]"
          >
            <Tape className="left-20 top-[-18px] rotate-[-6deg]" />
            <div className="h-[320px] bg-[#eadcc7] bg-[url('/images/me.jpg')] bg-cover bg-center shadow-inner sm:h-[370px]" />
            <p className="mt-4 text-center font-serif text-xl italic text-[#3a2b28]">Designing with feeling ♡</p>
          </motion.div>

          <Note className="absolute bottom-8 left-0 max-w-[230px] sm:left-10">
            Chris told me to think in layers, not blocks.
          </Note>

          <Stamp className="absolute bottom-28 right-1 hidden md:flex">
            Creative
            <br />
            2026
            <br />
            Portfolio
          </Stamp>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative z-20 -mt-28 overflow-visible px-6 py-24 md:px-10 lg:px-14">
      <PaperLayer className="left-6 top-10 h-[90%] w-[94%] rotate-[1deg] bg-[#f7eadb]" />
      <PaperLayer className="right-20 bottom-10 hidden h-48 w-72 rotate-[-4deg] bg-[#a8b39b]/35 lg:block" />
      <Decor src="/decor/sparkle.png" className="right-12 top-12 hidden w-16 rotate-12 md:block" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[470px]">
          <Polaroid image="/images/about.jpg" caption="a little piece of my journey" className="absolute left-0 top-8 w-[300px] rotate-[-5deg] sm:w-[380px]" />
          <div className="absolute bottom-4 right-4 hidden rotate-[5deg] bg-[#a8b39b] p-6 text-[#2d211d] shadow-xl md:block">
            <p className="font-serif text-2xl italic">UX/UI</p>
            <p className="text-sm">Front-end · Storytelling · Research</p>
          </div>
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
    <section id="projects" className="relative z-30 -mt-20 overflow-visible px-6 py-24 md:px-10 lg:px-14">
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
              whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
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
    <section id="process" className="relative z-20 -mt-16 overflow-visible px-6 py-24 text-[#fff8ef] md:px-10 lg:px-14">
      <PaperLayer className="left-4 top-10 h-[90%] w-[96%] rotate-[1deg] bg-[#6f7a61]" />
      <Decor src="/decor/flower.png" className="right-10 top-10 hidden w-20 opacity-80 md:block" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[280px_1fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f1d1c7]">Behind the scenes</p>
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">My Process</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            I build from research to design, from feedback to iteration, and from prototype to final product.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative bg-[#fffaf3] p-6 text-[#2d211d] shadow-2xl">
                <Tape className="left-8 top-[-16px] w-24" />
                <p className="font-serif text-3xl text-[#b5796d]">{step.number}</p>
                <Icon className="mt-5" size={34} />
                <h3 className="mt-5 font-serif text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4d3b35]">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative z-10 -mt-16 overflow-visible px-6 py-24 md:px-10 lg:px-14">
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
        <Reveal><About /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><Contact /></Reveal>

        <footer className="relative z-20 bg-[#2d211d] px-8 py-5 text-xs text-[#fff8ef]/70 md:flex md:justify-between">
          <p>© 2026 Jasmin Hachmane · Showcase Portfolio</p>
          <p>Made with React, Tailwind and lots of scrapbook layers ♡</p>
        </footer>
      </div>
    </main>
  );
}