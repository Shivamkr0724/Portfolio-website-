import projectOne from "../assets/image/project1.png"
import projectTwo from "../assets/image/project2.png"
import porjectThree from "../assets/image/project3.png"
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
    title: "TastyTrove",
    stackTop: "React, Mistral AI ",
    excerpt: "Type what you have — get delicious AI-powered recipe ideas",
    image: projectTwo,
    gitHubLink: "https://github.com/Shivamkr0724/TastyTrove.git",
    LiveLink: "https://recipe-app-ebon-kappa.vercel.app/",
  },
  {
    title: "Flim-Flix",
    stackTop: "react-native, TypeScript, Appwrite, Expo, Tailwind CSS, Nativewind  ",
    excerpt: "Discover and explore movies ranked by real engagement.",
    image: porjectThree,
    gitHubLink: "https://github.com/Shivamkr0724/Movie_app",
    LiveLink: "",
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
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
