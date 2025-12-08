import { Link } from "react-router-dom";
import projectOne from "../assets/image/project1.png"
import projectTwo from "../assets/image/project2.png"
import porjectThree from "../assets/image/project3.png"
import TargetCursor from "./TargetCursor";

const projects = [
  {
    title: "AI resume Analyzer",
    stackTop: "React, Tailwind CSS, Puter.js, Vite, Zustand ",
    excerpt: "AI-powered resume analyzer that gives instant ATS scores and practical job feedback",
    image: projectOne,
    gitHubLink: "https://github.com/Shivamkr0724/AI_Resume_Analyzer",
    LiveLink: "https://ai-resume-analyzer-pi-livid.vercel.app/",  
  },
  {
        title: "Green Cart",
        stackTop: ["React", "Node.js", "Express.js", "MongoDB"],
        excerpt: "A full-stack grocery delivery app with real-time cart, admin management, and secure user ordering.",
        image: projectTwo,
        gitHubLink:"https://github.com/Shivamkr0724/FullStack-Green-Cart.git",
        LiveLink: "https://green-cart-jxqw.vercel.app/",
  },
  {
    
        title: "YC-Directory",
        stackTop: ["React","Next.js","Sanity","TailwindCSS","ShadCN","TypeScript"],
        excerpt: "Discover and explore movies ranked by real engagement.",
        image: porjectThree,
        gitHubLink: "https://github.com/Shivamkr0724/YC-Directory.git",
        LiveLink: "https://yc-directory-pied-one.vercel.app/",
  },
];

function ProjectCard({ p }) {
  return (
    <article className="border border-white/10 bg-slate-900/40">
      {/* thumbnail */}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      {/* meta rows with thin separators */}
      <div className="border-t border-fuchsia-400/30 bg-slate-900/30">
        <div className="px-4 py-3 font-mono text-sm text-slate-300/90">
          {p.stackTop}
        </div>
      </div>
      <div className="border-t border-white/10 bg-slate-900/30">
        <div className="px-4 py-3 font-mono text-sm text-slate-300/90">
          {p.title}
        </div>
      </div>

      {/* body */}
      <div className="border-t border-white/10 px-4 py-5">
        <p className="text-slate-300/80">{p.excerpt}</p>

        {/* bottom controls row */}
        <div className="mt-6 flex items-center gap-4">
             <TargetCursor/>
           <a
            href={p.LiveLink}
            target="_blank" 
  rel="noopener noreferrer"
            className=" inline-flex items-center gap-2 rounded-sm border border-fuchsia-400/40 px-4 py-2 font-mono text-sm text-slate-200 hover:bg-fuchsia-500/10"
          >
            Live ↗
          </a>
          <a
            href={p.gitHubLink}
            target="_blank" 
  rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-2 rounded-sm border border-fuchsia-400/40 px-4 py-2 font-mono text-sm text-slate-200 hover:bg-fuchsia-500/10"
          >
            Github ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      {/* header line like screenshot */}
      <div className="mb-8 flex items-center gap-6">
        <h2 className="font-mono  text-white text-3xl">#projects</h2>
        <div className="h-px flex-1 bg-purple-400" />
         <Link
           to="/allProjects"
               className="flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all duration-300">
             View all
          <span className="text-lg">~~{`>`}</span>
         </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
