import projectOne from "../assets/image/project1.png"
import projectTwo from "../assets/image/project2.png"
import porjectThree from "../assets/image/project3.png"
import porjectFour from "../assets/image/project4.png"
import porjectFive from "../assets/image/project5.png"
import porjectSix from "../assets/image/project6.png"
import TargetCursor from "../components/TargetCursor";


function Tag({ children }) {
  return (
    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
      {children}
    </span>
  );
}

const projects = [
  {
    id: 1,
    title: "AI resume Analyzer",
    stack: ["React", "Tailwind css", "Puter.js", "vite", "Zustand"],
    img: projectOne,
    desc: "AI-powered resume analyzer that gives instant ATS scores and practical job feedback",
    github: "https://github.com/Shivamkr0724/AI_Resume_Analyzer",
    live:  "https://ai-resume-analyzer-pi-livid.vercel.app/",
  },
  {
    id: 2,
    title: "TastyTrove",
    stack: ["React", "CSS", "Mistral AI"],
    img: projectTwo,
    desc: "Type what you have — get delicious AI-powered recipe ideas",
    github:"https://github.com/Shivamkr0724/TastyTrove.git",
    live: "https://recipe-app-ebon-kappa.vercel.app/",
  },
  {
    id: 3,
    title: "Flim-Flix",
    stack: ["React-Native", "TypeScript", "Appwrite", "Expo", "Tailwind CSS", "NativeWind"],
    img: porjectThree,
    desc: "Discover and explore movies ranked by real engagement.",
    github: "https://github.com/Shivamkr0724/Movie_app",
    live: "https://github.com/Shivamkr0724/Movie_app",
  },
  {
    id: 4,
    title: "Tenzies",
    stack: ["React", "CSS", "nanoid"],
    img: porjectFour,
    desc: "A fast-paced dice game built with React where players roll dice to match all numbers and win",
    github: "https://github.com/Shivamkr0724/Tenzies-Game",
    live: "https://tenzies-game-nine-flax.vercel.app/",
  },
  {
    id: 5,
    title: "Assembly-Endgame",
    stack: ["React", "CSS", "clsx"],
    img: porjectFive,
    desc: "A fun and interactive word guessing game built with React.js that challenges players to guess hidden words within limited attempts.",
    github: "https://github.com/Shivamkr0724/JSON-Tree-Visualizer",
    live: "https://json-tree-visualizer-nine.vercel.app/",
  },
  {
    id: 6,
    title: "JSON-Tree-Visualizer",
    stack: ["React", "Tailwind Css", "React Flow"],
    img: porjectSix,
    desc: "It allows users to easily visualize, explore, and search through complex JSON data in an interactive tree format.",
    github: "https://json-tree-visualizer-nine.vercel.app/",
    live: "https://assembly-endgame-amber.vercel.app/",
  },
];

function Card({ p }) {
  return (
    <article className="group border border-white/10 bg-slate-900/40 rounded shadow-sm hover:shadow-md transition">
      {/* thumbnail */}
      <div className="aspect-[16/9] overflow-hidden rounded-t">
        <img
          src={p.img}
          alt={p.title}
          className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* stack strip */}
      <div className="border-t border-fuchsia-400/30 bg-slate-900/30 px-3 py-2 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      {/* description + buttons */}
      <div className="border-t border-white/10 px-3 py-4">
        <p className="text-slate-300/80 text-sm min-h-[40px]">{p.desc}</p>

        <div className="mt-4 flex items-center gap-3">
            <TargetCursor/>
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-fuchsia-400/40 px-4 py-2 font-mono text-sm text-slate-200 hover:bg-fuchsia-500/10 transition"
          >
            Live ↗
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-2 rounded-sm border border-fuchsia-400/40 px-4 py-2 font-mono text-sm text-slate-200 hover:bg-fuchsia-500/10 transition"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}


const AllProjects = () => {
  return (
    <>
      <div className="text-white py-20">
        <div className="flex items-start gap-3 mb-6">
          <span
            aria-hidden="true"
            className="inline-block h-8 w-[3px] bg-gradient-to-b from-purple-400/80 to-purple-400/0 rotate-[24deg] origin-top-left"
          />
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Projects
          </h2>
        </div>

        <p className="text-gray-400">List of my projects</p>
      </div>

      <section className="mx-auto max-w-6xl px-4">
        {/* title mark + heading */}
        <div className="mb-6 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="text-purple-400 font-bold text-xl sm:text-2xl"
          >
            #
          </span>
          <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
            Completed Projects
          </h2>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProjects;
