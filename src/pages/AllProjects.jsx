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
    title: "Green Cart",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    img: projectTwo,
    desc: "A full-stack grocery delivery app with real-time cart, admin management, and secure user ordering.",
    github:"https://github.com/Shivamkr0724/FullStack-Green-Cart.git",
    live: "https://green-cart-jxqw.vercel.app/",
  },
  {
    id: 3,
    title: "YC-Directory",
    stack: ["React","Next.js","Sanity","TailwindCSS","ShadCN","TypeScript"],
    img: porjectThree,
    desc: "Discover and explore movies ranked by real engagement.",
    github: "https://github.com/Shivamkr0724/YC-Directory.git",
    live: "https://yc-directory-pied-one.vercel.app/",
  },
  {
    id: 4,
    title: "Flim-Flix",
    stack: ["React-Native", "TypeScript", "Appwrite", "Expo", "Tailwind CSS", "NativeWind"],
    img: porjectFour,
    desc: "Discover and explore movies ranked by real engagement.",
    github: "https://github.com/Shivamkr0724/Movie_app",
    live: "https://github.com/Shivamkr0724/Movie_app",
  },
  // {
  //   id: 5,
  //   title: "Assembly-Endgame",
  //   stack: ["React", "CSS", "clsx"],
  //   img: porjectFive,
  //   desc: "A fun and interactive word guessing game built with React.js that challenges players to guess hidden words within limited attempts.",
  //   github: "https://github.com/Shivamkr0724/JSON-Tree-Visualizer",
  //   live: "https://json-tree-visualizer-nine.vercel.app/",
  // },
  // {
  //   id: 6,
  //   title: "JSON-Tree-Visualizer",
  //   stack: ["React", "Tailwind Css", "React Flow"],
  //   img: porjectSix,
  //   desc: "It allows users to easily visualize, explore, and search through complex JSON data in an interactive tree format.",
  //   github: "https://json-tree-visualizer-nine.vercel.app/",
  //   live: "https://assembly-endgame-amber.vercel.app/",
  // },
];

const smallProjects = [
  {
    id: 1,
    tag: "React CSS Mistral AI",
    title: "TastyTrove 🧑‍🍳",
    desc: "Type what you have — get delicious AI-powered recipe ideas",
    live: "https://recipe-app-ebon-kappa.vercel.app/",
    github:"https://github.com/Shivamkr0724/TastyTrove.git"
  },
  {
    id: 2,
    tag: "React CSS nanoid",
    title: "Tenzies 🎲",
    desc: "A fast-paced dice game built with React where players roll dice to match all numbers and win",
    live: "https://tenzies-game-nine-flax.vercel.app/",
    github: "https://github.com/Shivamkr0724/Tenzies-Game"
  },
  {
    id: 3,
    stack: "React CSS clsx",
    title: "Assembly-Endgame 👾",
    desc: "A fun and interactive word guessing game built with React.js that challenges players to guess hidden words within limited attempts.",
    live: "https://assembly-endgame-amber.vercel.app/",
    github: "https://github.com/Shivamkr0724/Assembly-Endgame.git"
  },
  {
    id: 4,
    tag: "React Tailwind Css React Flow",
    title: "JSON-Tree-Visualizer 🌲",
    desc: "It allows users to easily visualize, explore, and search through complex JSON data in an interactive tree format.",
    live: "https://json-tree-visualizer-nine.vercel.app/",
    github: "https://json-tree-visualizer-nine.vercel.app/"
  },
  {
    id: 5,
    tag: "React Appwrite Tailwind-CSS",
    title: "Movies IQ 🎬",
    desc: "Discover and explore movies ranked by real engagement.",
    live: "https://react-movie-app-sigma-two.vercel.app/",
    github: "https://github.com/Shivamkr0724/React_movie-app.git"
  },
  {
    id: 6,
    tag: "React, Node.js , Express.js, MongoDB",
    title: "Full Stack Todo (TypeScript) 📋",
    desc: "A full-stack Todo application built MERN STACK and JWT Authentication.",
    live: "https://to-do-pi-fawn.vercel.app",
    github: "https://github.com/Shivamkr0724/ToDo.git"
  },
  {
    id: 7,
    tag: "React Tailwind-CSS",
    title: "Weather App 🌥️",
    desc: "Lightweight weather application displaying live weather data powered by the Open-Meteo API.",
    live: "https://weather-app-five-lake-27.vercel.app/",
    github: "https://github.com/Shivamkr0724/Weather-App.git"
  },
  {
    id: 8,
    tag: "React, Node.js , Express.js, MongoDB",
    title: "From The Other Side 👻",
    desc: "Full-stack web app for posting and discovering supernatural stories with user authentication and blog-style entries.",
    live: "https://github.com/Shivamkr0724/FromTheOtherSide.git",
    github: "https://github.com/Shivamkr0724/FromTheOtherSide.git"
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

function SmallCard({ data }) {
  return (
    <article className="border border-white/10 bg-slate-900/40 p-4 rounded flex flex-col gap-4 hover:border-purple-400/40 transition">
      
      {/* tag */}
      <span className="text-xs text-purple-300 font-mono opacity-80">
        {data.tag}
      </span>

      {/* title */}
      <h3 className="text-white text-lg font-semibold tracking-tight">
        {data.title}
      </h3>

      {/* desc */}
      <p className="text-slate-300/70 text-sm min-h-[45px]">
        {data.desc}
      </p>

      {/* buttons */}
      <div className="mt-auto flex items-center gap-3">
        
        {/* LIVE */}
        <a
          href={data.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm border border-fuchsia-400/40 px-4 py-2 font-mono text-sm text-slate-200 hover:bg-fuchsia-500/10 transition"
        >
          Live ↗
        </a>

        {/* GitHub */}
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-2 rounded-sm border border-fuchsia-400/40 px-4 py-2 font-mono text-sm text-slate-200 hover:bg-fuchsia-500/10 transition"
        >
          GitHub ↗
        </a>

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

        {/* === SMALL PROJECTS SECTION === */}
    <section className="mx-auto max-w-6xl px-4 mt-20">

        <div className="mb-6 flex items-center gap-3">
        <span className="text-purple-400 font-bold text-2xl">#</span>
         <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
          small-projects
         </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-4">
          {smallProjects.map((p) => (
            <SmallCard key={p.id} data={p} />
          ))}
        </div>
  
     </section>

    </section>
    </>
  );
};

export default AllProjects;
