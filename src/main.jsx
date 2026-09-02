import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Github,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  ServerCog,
  Terminal,
  X,
  Zap
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    type: "BACKEND / CLOUD",
    title: "Cloud Budget API",
    description:
      "A production-style serverless backend for managing budgets, transactions, and spending analytics.",
    stack: ["Python", "Azure Functions", "REST APIs", "SQL", "Key Vault"],
    architecture: "Client → API Management → Functions → Service Layer → Database",
    github: "https://github.com/CarlinTheGhoul120/cloud-budget-api",
  },
  {
    number: "02",
    type: "FULL-STACK APPLICATION",
    title: "Cloud Inventory Dashboard",
    description:
      "A complete cloud-native business application built from the frontend through to backend services and deployment.",
    stack: ["React", "TypeScript", "Python", "Azure", "SQL"],
    architecture: "React → Static Web Apps → Functions → SQL Database",
    github: "https://github.com/CarlinTheGhoul120/cloud-inventory-dashboard",
  },
  {
    number: "03",
    type: "INFRASTRUCTURE / DEVOPS",
    title: "Azure Infrastructure Lab",
    description:
      "A modular Infrastructure-as-Code project demonstrating secure, repeatable Azure cloud architecture.",
    stack: ["Terraform", "Azure", "VNets", "Private Endpoints", "Managed Identity"],
    architecture: "IaC → Network → Compute → Data → Identity → Observability",
    github: "https://github.com/CarlinTheGhoul120/azure-infrastructure-lab",
  },
  {
    number: "04",
    type: "FULL-STACK / BACKEND",
    title: "Signage Ops Platform",
    description:
      "A Supabase-backed operations platform for a sign shop ready for mobile app deployment: material inventory, bills of materials, project task boards, and quote generation with PDF and email.",
    stack: ["Supabase", "PostgreSQL", "Edge Functions", "React", "TypeScript"],
    architecture: "React → Supabase (RLS + RPC) → Edge Functions → Storage",
    github: "https://github.com/CarlinTheGhoul120/signage-ops-platform",
  },
];

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    text: "Designing cloud-native architectures that turn business requirements into deployable systems.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "Building the frontend, backend, APIs, and data layer as one cohesive solution.",
  },
  {
    icon: Layers3,
    title: "Infrastructure as Code",
    text: "Provisioning repeatable environments with Terraform and Bicep instead of manual configuration.",
  },
  {
    icon: Database,
    title: "Data & Backend",
    text: "Modelling data, enforcing rules in the database, and choosing serverless functions only where they earn their place. Certified Fabric Data Engineer and Data Analyst.",
  },
  {
    icon: Zap,
    title: "DevOps & CI/CD",
    text: "Automating testing, infrastructure validation, and application deployments.",
  },
  {
    icon: LockKeyhole,
    title: "Security by Design",
    text: "Applying identity, secrets management, least privilege, and secure connectivity from the start.",
  },
  {
    icon: ServerCog,
    title: "Observability",
    text: "Building systems with monitoring, logging, and operational visibility in mind.",
  },
];

const technologies = {
  Cloud: ["Azure", "Azure Functions", "Container Apps", "Static Web Apps", "Certified Azure Solutions Architect Expert", "Certified Azure Developer Associate", "Certified Azure DevOps Engineer Expert"],
  Languages: ["Python", "TypeScript", "SQL", "Bicep", "Terraform"],
  Frontend: ["React", "Ionic React", "Vite"],
  "Data & Backend": ["Supabase", "PostgreSQL", "Edge Functions", "Deno"],
  Infrastructure: ["Terraform", "Bicep", "Docker"],
  DevOps: ["GitHub Actions", "Azure DevOps", "CI/CD"],
  Security: ["Key Vault", "Managed Identity", "Private Endpoints", "Row-Level Security"],
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <div className="noise" />

      <header className="nav">
        <button className="brand" onClick={() => scrollTo("top")}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>NILRAC<span className="muted">.DEV</span></span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("capabilities")}>Capabilities</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("stack")}>Stack</button>
          <a href="https://github.com/CarlinTheGhoul120" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
        </nav>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> CLOUD SOLUTIONS ENGINEER | FULL STACK</div>
            <h1>I build systems<br /><span>from the ground up.</span></h1>
            <p className="hero-text">
              I design and build complete cloud-native solutions — from architecture and infrastructure to APIs, applications, deployment, and operations.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollTo("projects")}>
                Explore projects <ArrowUpRight size={17} />
              </button>
              <a className="button secondary" href="https://github.com/CarlinTheGhoul120" target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="terminal-window">
              <div className="terminal-bar">
                <span className="terminal-dots"><i /><i /><i /></span>
                <span>solution-architecture.sh</span>
                <span>●</span>
              </div>
              <div className="terminal-body">
                <div><span className="terminal-prompt">$</span> ./build-solution.sh</div>
                <div className="terminal-line"><span className="green">✓</span> Understanding the problem</div>
                <div className="terminal-line"><span className="green">✓</span> Designing the architecture</div>
                <div className="terminal-line"><span className="green">✓</span> Building the application</div>
                <div className="terminal-line"><span className="green">✓</span> Automating infrastructure</div>
                <div className="terminal-line"><span className="green">✓</span> Securing the platform</div>
                <div className="terminal-line"><span className="green">✓</span> Deploying to production</div>
                <div className="terminal-output">Solution deployed successfully<span className="cursor">_</span></div>
              </div>
            </div>
            <div className="architecture-orbit orbit-one" />
            <div className="architecture-orbit orbit-two" />
          </div>
        </section>

        <div className="scroll-cue"><ChevronDown size={16} /> SCROLL TO EXPLORE</div>

        <section id="about" className="section split-section">
          <div className="section-label">01 / ABOUT</div>
          <div className="section-content">
            <h2>More than writing code.<br /><span>I build the solution.</span></h2>
            <p>
              My focus is the complete solution lifecycle. I enjoy taking a business problem, translating it into an architecture, building the software, provisioning the cloud environment, and making the deployment repeatable.
            </p>
            <p>
              That means working across the boundaries between application development and cloud engineering — because the best solutions require an understanding of both.
            </p>
          </div>
        </section>

        <section id="capabilities" className="section">
          <div className="section-label">02 / CAPABILITIES</div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article className="capability-card" key={title}>
                <Icon size={22} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <div className="section-label">03 / FEATURED PROJECTS</div>
            <h2>Proof through<br /><span>what I build.</span></h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="architecture-line"><Network size={15} /> {project.architecture}</div>
                  <div className="tag-list">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                  <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="section">
            <div className="section-label">04 / ENGINEERING APPROACH</div>
            <h2>From problem<br /><span>to production.</span></h2>
            <div className="process-grid">
              {[
                ["01", "Understand", "Start with the problem, users, and constraints."],
                ["02", "Architect", "Design the system and make the important trade-offs explicit."],
                ["03", "Build", "Create the application, APIs, data layer, and integrations."],
                ["04", "Operate", "Automate, secure, monitor, and continuously improve the solution."],
              ].map(([number, title, text]) => (
                <div className="process-item" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="section-label">05 / TECHNOLOGY STACK</div>
          <div className="stack-grid">
            {Object.entries(technologies).map(([category, items]) => (
              <div className="stack-group" key={category}>
                <h3>{category}</h3>
                <div className="stack-items">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section section">
          <div className="cta-inner">
            <Terminal size={28} />
            <h2>Have a problem worth<br /><span>building a solution for?</span></h2>
            <p>Explore the code, the architecture, and the systems behind the work.</p>
            <a className="button primary" href="https://github.com/CarlinTheGhoul120" target="_blank" rel="noreferrer">
              Visit my GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} CARLIN P</span>
        <span>BUILDING SYSTEMS FROM THE GROUND UP.</span>
        <a href="https://github.com/CarlinTheGhoul120" target="_blank" rel="noreferrer"><Github size={16} /></a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
