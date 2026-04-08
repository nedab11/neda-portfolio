"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code2,
  ExternalLink,
  Filter,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};
type IconProps = React.SVGProps<SVGSVGElement>;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className, ...props }: DivProps) {
  return <div className={cn("border", className)} {...props} />;
}

function CardContent({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

function Button({ className, variant = "default", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB8C5] disabled:pointer-events-none disabled:opacity-50",
        variant === "outline" && "border",
        className
      )}
      {...props}
    />
  );
}

const projectData = [
  {
    title: "AI User Testing + Outreach Agent",
    category: "Product",
    year: "2026",
    description:
      "As an AI Product Manager, built and launched an autonomous agent to automate user testing coordination, feedback intake, and outreach workflows, enabling faster iteration cycles and more structured user insights.",
    tags: ["AI Agents", "Automation", "User Research"],
    link: "https://retroshift.dev",
  },
  {
    title: "Website Development + Product Launch",
    category: "Engineering",
    year: "2026",
    description:
      "Worked on AI workflow systems at Praxie, translating ambiguous operational needs into structured automation and scalable web experiences, while building tools that improved visibility into usage and performance.",
    tags: ["React", "Web Development", "Product Launch"],
    link: "https://retroshift.dev",
  },
  {
    title: "Healthcare Survival Kit",
    category: "Design",
    year: "2025",
    description:
      "Designed a youth facing healthcare experience focused on clarity, education, and confidence for first time insurance users.",
    tags: ["UX Design", "Figma", "Research"],
    link: "https://github.com/nedab11/healthcare-survival-kit-repo.git",
  },
  {
    title: "Drug Interaction Intelligence System",
    category: "Data",
    year: "2025",
    description:
      "Built a data driven project around medication interactions with structured ETL, risk scoring, and visualization for decision support.",
    tags: ["Python", "SQL", "Analytics"],
    link: "https://github.com/nedab11/drug-interaction-intelligence-system",
  },
  {
    title: "Personalized EdTech Experience",
    category: "Engineering",
    year: "2024",
    description:
      "Contributed to web experiences and educational product ideas that balanced usability, storytelling, and practical implementation.",
    tags: ["React", "Frontend", "UI"],
    link: "https://knodemy.ai",
  },
];

const experienceData = [
  {
    title: "AI Product Manager",
    org: "Retroshift",
    date: "Sept 2025 to Present",
    type: "Work",
    description:
      "Leading feature execution for an AI workflow platform, from backlog priorities and technical tickets to onboarding, feedback loops, and release coordination.",
  },
  {
    title: "AI Engineer",
    org: "Praxie",
    date: "June 2025 to Sept 2025",
    type: "Work",
    description:
      "Built AI workflow templates and internal dashboards, turning business needs into structured automation that improved operations and visibility.",
  },
  
  {
    title: "AWS Cloud Technical Cohort",
    org: "Amazon Web Services",
    date: "2025",
    type: "Program",
    description:
      "Completed an intensive cohort focused on cloud infrastructure, deployment patterns, and real world system design using AWS services.",
  },
  {
    title: "Global Student Experience Program",
    org: "Schneider Electric",
    date: "Summer 2024",
    type: "Program",
    description:
      "Selected for Schneider Electric’s global virtual program focused on digital transformation, sustainability, and real world project simulation through guided learning modules and team based problem solving.",
  },
  {
    title: "B.S. in Informatics, Data Science",
    org: "University of Washington",
    date: "Sept 2022 to Dec 2025",
    type: "Education",
    description:
      "Dean’s List 2023 to 2025. Key coursework includes Data Science and Statistical Methods, Databases and Data Modeling, Product Management, and Research Methods.",
  },
];

const skillGroups = [
  {
    title: "Product + Strategy",
    skills: [
      "Product Lifecycle Management",
      "Feature Prioritization",
      "Stakeholder Communication",
      "Agile Workflows",
      "Customer Onboarding",
      "Cross Functional Collaboration"
    ],
  },
  {
    title: "AI + Automation",
    skills: [
      "AI Workflow Design",
      "Prompt Engineering",
      "Automation Systems",
      "API Integration",
      "Process Optimization",
      "Workflow Templates"
    ],
  },
  {
    title: "Data + Analytics",
    skills: [
      "Python",
      "SQL",
      "ETL Design",
      "Data Modeling",
      "Dashboards",
      "Data Driven Decision Making"
    ],
  },
  {
    title: "Cloud + Infrastructure",
    skills: [
      "AWS EC2",
      "AWS S3",
      "IAM",
      "VPC",
      "Cloud Architecture",
      "Deployment Pipelines"
    ],
  },
  {
    title: "Design + Frontend",
    skills: [
      "React",
      "Tailwind",
      "Figma",
      "Interaction Design",
      "UI Prototyping",
      "User Experience"
    ],
  },
  {
    title: "Tools",
    skills: [
      "Jira",
      "Git",
      "GitHub",
      "Tableau",
      "Power BI",
      "Excel"
    ],
  },
];

const navItems = ["About", "Projects", "Experience", "Skills", "Contact"];

function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
      <rect x="2" y="9" width="4" height="12" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
      <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3 0 6-1.8 6-6a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.5 11.5 0 0 0-6 0C7 3 6 3.3 6 3.3a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4.6 9.7c0 4.2 3 6 6 6a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  );
}

function runPortfolioTests() {
  console.assert(Array.isArray(projectData) && projectData.length > 0, "Expected projectData to contain at least one project.");
  console.assert(Array.isArray(skillGroups) && skillGroups.length > 0, "Expected skillGroups to contain at least one skill group.");
  console.assert(navItems.includes("Projects"), "Expected navItems to include Projects.");
  console.assert(projectData.some((project) => project.category === "Product"), "Expected at least one Product project.");
  console.assert(
    skillGroups.every((group) => Array.isArray(group.skills) && group.skills.length > 0),
    "Expected every skill group to include at least one skill."
  );
}

export default function InteractivePersonalWebsite() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSkillGroup, setActiveSkillGroup] = useState(skillGroups[0].title);

  const filters = useMemo(() => ["All", ...new Set(projectData.map((p) => p.category))], []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projectData;
    return projectData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const currentSkillGroup = skillGroups.find((group) => group.title === activeSkillGroup) || skillGroups[0];

  useEffect(() => {
    runPortfolioTests();
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#F8F4F6] text-[#4B2E2E] selection:bg-white/20 selection:text-[#4B2E2E]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_25%),linear-gradient(to_bottom,rgba(10,10,10,1),rgba(10,10,10,0.98))]" />
        <motion.div
          className="absolute left-[10%] top-24 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl"
          animate={{ x: [0, 40, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[8%] top-[28rem] h-80 w-80 rounded-full bg-violet-400/10 blur-3xl"
          animate={{ x: [0, -35, 20, 0], y: [0, 35, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#F1D6DC] bg-[#F8F4F6]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="text-sm uppercase tracking-[0.35em] text-[#4B2E2E]/80">
            Neda
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-[#4B2E2E]/70 transition hover:text-[#4B2E2E]">
                {item}
              </a>
            ))}
          </nav>
          <Button className="rounded-full bg-white text-neutral-950 hover:bg-white/90">Resume</Button>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-5 lg:px-8">
        <section className="relative flex min-h-[92vh] items-center py-16 lg:py-24">
          <div className="grid items-center gap-12 overflow-hidden lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="min-w-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#FFF7FA] px-4 py-2 text-sm text-[#4B2E2E]/80"
              >
                <Sparkles className="h-4 w-4" />
                Data, product, design, and thoughtful storytelling
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="max-w-[11ch] text-4xl font-semibold leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl xl:text-[6.5rem]"
              >
                I ship useful products
                <span className="mt-2 block bg-gradient-to-r from-[#F6C1CC] via-[#FFEFF5] to-[#C084FC] bg-clip-text text-transparent">
                  End to end.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 max-w-xl text-base leading-8 text-[#4B2E2E]/70 sm:text-lg lg:text-xl"
              >
                I am a recent graduate blending product thinking, data fluency, and creative execution. This site is designed to help recruiters, collaborators, and founders quickly understand what I bring and what I care about.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="rounded-full bg-white px-6 text-neutral-950 hover:bg-white/90"
                >
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="rounded-full border-white/20 bg-[#FFF7FA] px-6 text-[#4B2E2E] hover:bg-white/10"
                >
                  Let’s Connect
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-10 grid max-w-3xl grid-cols-2 items-stretch gap-4 xl:grid-cols-4"
              >
                {[
                  ["Product", "Strategy to launch"],
                  ["Data", "Insight to action"],
                  ["Design", "Meaningful interaction"],
                  ["People", "Clear communication"],
                ].map(([label, value]) => (
                  <Card key={label} className="h-full rounded-3xl border-[#F1D6DC] bg-[#FFF7FA] backdrop-blur-md">
                    <CardContent className="flex h-full min-h-[150px] flex-col justify-between p-5">
                      <div className="text-sm text-[#4B2E2E]/50">{label}</div>
                      <div className="mt-4 text-[1.05rem] font-medium leading-8 text-[#4B2E2E] [text-wrap:balance]">{value}</div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative min-w-0 xl:pl-2"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-[#F1D6DC] bg-[#FFF7FA] p-4 shadow-2xl shadow-pink-500/10 backdrop-blur-2xl">
                <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-[#F1D6DC] bg-[#FDF0F4] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm text-[#4B2E2E]/50">Currently focused on</div>
                    <div className="text-lg font-medium">AI, product, data storytelling</div>
                  </div>
                  <div className="w-fit rounded-full border border-[#EAB8C5] bg-[#FFF7FA] px-3 py-1 text-xs text-[#B25D7B]">
                    Open to opportunities
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="rounded-3xl border-[#F1D6DC] bg-gradient-to-br from-[#FFFDFE] to-[#FCEEF3]">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-[#4B2E2E]/60">
                        <Briefcase className="h-4 w-4" /> Experience
                      </div>
                      <div className="mt-4 max-w-[10ch] text-2xl font-semibold leading-tight [text-wrap:balance] xl:text-[2rem]">Multi disciplinary</div>
                      <p className="mt-2 text-sm leading-6 text-[#4B2E2E]/60">
                        Product, data, design, engineering, and client facing work presented in one cohesive story.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-3xl border-[#F1D6DC] bg-gradient-to-br from-[#FCE9F0] to-[#F4E9FF]">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-[#4B2E2E]/60">
                        <Star className="h-4 w-4" /> Strength
                      </div>
                      <div className="mt-4 max-w-[9ch] text-2xl font-semibold leading-tight [text-wrap:balance] xl:text-[2rem]">Fast learner</div>
                      <p className="mt-2 text-sm leading-6 text-[#4B2E2E]/60">
                        Comfortable moving from ambiguity to polished execution in fast paced environments.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-3xl border-[#F1D6DC] bg-gradient-to-br from-[#F6ECFB] to-[#FFF7FA] sm:col-span-2">
                    <CardContent className="p-5">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <div className="text-sm text-[#4B2E2E]/50">Signature style</div>
                          <div className="mt-2 max-w-[16ch] text-[1.65rem] font-semibold leading-tight [text-wrap:balance] xl:max-w-[18ch] xl:text-[2rem]">Thoughtful systems with strong visual presence</div>
                        </div>
                        <motion.div
                          animate={{ rotate: [0, 6, -4, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          className="rounded-2xl border border-[#F1D6DC] bg-[#FFF7FA] p-4"
                        >
                          <Code2 className="h-8 w-8 text-pink-200" />
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[2rem] border border-[#F1D6DC] bg-[#FFF7FA] p-8 backdrop-blur-xl"
            >
              <div className="text-sm uppercase tracking-[0.3em] text-[#4B2E2E]/45">About</div>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">More than a resume, this is how I think.</h2>
              <p className="mt-5 text-base leading-8 text-[#4B2E2E]/70">
                I am drawn to building technology that solves real problems for real people. Whether designing workflows, products, or data systems, I focus on clarity, usability, and trust. Based in San Francisco, I enjoy working with teams that care about thoughtful execution and meaningful outcomes.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: <GraduationCap className="h-5 w-5" />,
                  title: "Education",
                  text: "B.S. Informatics, University of Washington. Dean’s List 2023–2025. Key coursework includes Data Science and Statistical Methods, Databases and Data Modeling, Product Management, and Research Methods.",
                },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  title: "Based in",
                  text: "San Francisco, CA. Open to product, AI, and technology roles in fast moving teams where I can contribute to building and scaling real products.",
                },
                {
                  icon: <Sparkles className="h-5 w-5" />,
                  title: "What I enjoy",
                  text: "Fast moving teams, thoughtful product work, elegant interfaces, and solving ambiguous problems with structure.",
                },
                {
                  icon: <Briefcase className="h-5 w-5" />,
                  title: "Certifications",
                  text: "AWS Cloud Practitioner and continued coursework in cloud infrastructure, data systems, and applied technology.",
                },
                {
                  icon: <Briefcase className="h-5 w-5" />,
                  title: "What I bring",
                  text: "A blend of curiosity, ownership, visual taste, analytical thinking, and comfort operating across functions.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full rounded-[2rem] border-[#F1D6DC] bg-[#FFF7FA] transition duration-300 hover:-translate-y-1 hover:bg-white/7">
                    <CardContent className="p-7">
                      <div className="mb-4 inline-flex rounded-2xl border border-[#F1D6DC] bg-[#FFF7FA] p-3 text-pink-200">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#4B2E2E]/65">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-24">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-[#4B2E2E]/45">Projects</div>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Selected work, filtered your way.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activeFilter === filter
                      ? "border-white bg-white text-neutral-950"
                      : "border-white/15 bg-[#FFF7FA] text-[#4B2E2E]/70 hover:bg-white/10"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Filter className="h-3.5 w-3.5" /> {filter}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="group h-full overflow-hidden rounded-[2rem] border-[#F1D6DC] bg-[#FFF7FA] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/7">
                  <CardContent className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm text-[#4B2E2E]/45">
                          {project.category} • {project.year}
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold leading-tight [text-wrap:balance]">{project.title}</h3>
                      </div>
                      <a href={project.link} className="rounded-full border border-[#F1D6DC] bg-[#FFF7FA] p-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-[#4B2E2E]/70">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-[#F1D6DC] bg-black/20 px-3 py-1 text-xs text-[#4B2E2E]/65">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-24">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.3em] text-[#4B2E2E]/45">Experience</div>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A timeline with shape, not just dates.</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-pink-300/50 via-white/20 to-transparent sm:left-1/2" />
            <div className="space-y-10">
              {experienceData.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="relative grid gap-4 sm:grid-cols-2"
                >
                  <div className={`${index % 2 === 0 ? "sm:pr-10" : "sm:order-2 sm:pl-10"}`}>
                    <Card className="rounded-[2rem] border-[#F1D6DC] bg-[#FFF7FA]">
                      <CardContent className="p-6">
                        <div className="text-sm text-[#4B2E2E]/45">
                          {item.date} • {item.type}
                        </div>
                        <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                        <p className="mt-1 text-[#4B2E2E]/70">{item.org}</p>
                        <p className="mt-4 text-sm leading-7 text-[#4B2E2E]/65">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`${index % 2 === 0 ? "sm:order-2" : ""}`} />
                  <div className="absolute left-4 top-8 h-3 w-3 -translate-x-1/2 rounded-full border border-white/40 bg-pink-200 shadow-[0_0_20px_rgba(244,114,182,0.5)] sm:left-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-[#4B2E2E]/45">Skills</div>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Tap into the way I work.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#4B2E2E]/70">
                Instead of a flat list, this section makes your skillset feel dynamic. Click between categories and customize the descriptions based on your strongest experiences once your resume is added.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {skillGroups.map((group) => (
                  <button
                    key={group.title}
                    onClick={() => setActiveSkillGroup(group.title)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      activeSkillGroup === group.title
                        ? "border-white bg-white text-neutral-950"
                        : "border-white/15 bg-[#FFF7FA] text-[#4B2E2E]/70 hover:bg-white/10"
                    }`}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
            </div>

            <Card className="rounded-[2rem] border-[#F1D6DC] bg-[#FFF7FA] backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm text-[#4B2E2E]/45">Active category</div>
                    <div className="mt-1 text-2xl font-semibold">{currentSkillGroup.title}</div>
                  </div>
                  <div className="rounded-2xl border border-[#F1D6DC] bg-[#FFF7FA] p-3">
                    <Sparkles className="h-5 w-5 text-pink-200" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {currentSkillGroup.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="rounded-3xl border border-[#F1D6DC] bg-black/20 p-5 transition hover:bg-[#FFF7FA]"
                    >
                      <div className="text-lg font-medium">{skill}</div>
                      <p className="mt-2 text-sm leading-7 text-[#4B2E2E]/60">
                        Add a one line proof point here tied to your resume so each skill feels earned and specific.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-24">
          <Card className="overflow-hidden rounded-[2rem] border-[#F1D6DC] bg-[#FFF7FA]">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-[#4B2E2E]/45">Contact</div>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let’s connect</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#4B2E2E]/70">
                  Open to product, AI, and data opportunities. The easiest way to reach me is through LinkedIn or email.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href="https://www.linkedin.com/in/neda-bokhari/"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.5rem] border border-[#F1D6DC] bg-white/70 p-5 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <div className="flex items-center gap-3 text-[#4B2E2E]/55">
                    <LinkedInIcon className="h-4 w-4" /> LinkedIn
                  </div>
                  <div className="mt-3 text-lg font-medium text-[#4B2E2E]">neda-bokhari</div>
                  <div className="mt-1 text-sm text-[#4B2E2E]/60">linkedin.com/in/neda-bokhari/</div>
                </a>

                <a
                  href="mailto:nedab@uw.edu"
                  className="group rounded-[1.5rem] border border-[#F1D6DC] bg-white/70 p-5 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <div className="flex items-center gap-3 text-[#4B2E2E]/55">
                    <Mail className="h-4 w-4" /> Email
                  </div>
                  <div className="mt-3 text-lg font-medium text-[#4B2E2E]">nedab@uw.edu</div>
                  <div className="mt-1 text-sm text-[#4B2E2E]/60">Best for recruiter outreach and opportunities</div>
                </a>

                <a
                  href="https://github.com/nedab11"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.5rem] border border-[#F1D6DC] bg-white/70 p-5 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <div className="flex items-center gap-3 text-[#4B2E2E]/55">
                    <GitHubIcon className="h-4 w-4" /> GitHub
                  </div>
                  <div className="mt-3 text-lg font-medium text-[#4B2E2E]">nedab11</div>
                  <div className="mt-1 text-sm text-[#4B2E2E]/60">github.com/nedab11</div>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
