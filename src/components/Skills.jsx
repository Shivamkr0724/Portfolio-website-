import skillDedsign from "../assets/image/Group36.png"
/* compact glass-neon card */
function MiniCard({ title, lines = [] }) {
  return (
    <section className="rounded-md overflow-hidden border border-slate-600/70 bg-slate-900/60 backdrop-blur-md ring-1 ring-inset ring-purple-400/10 shadow-[0_0_0_1px_rgba(167,139,250,0.12),0_10px_24px_-12px_rgba(0,0,0,0.5)]">
      <header className="px-3 py-1.5 text-[13px] font-mono font-semibold tracking-wide border-b border-slate-700/60 text-slate-100">
        {title}
      </header>
      <ul className="px-3 py-2 text-[13px] leading-6 font-mono text-slate-300 space-y-1">
        {lines.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </section>
  );
}

/* small ladder from bottom center with two arms */
function MiniLadder({ className = "" }) {
  return (
    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${className}`} aria-hidden>
      <div className="h-40 w-[2px] bg-gradient-to-t from-purple-400/60 via-purple-400/20 to-transparent" />
      <div className="absolute bottom-16 -left-40 h-[2px] w-40 bg-gradient-to-r from-purple-400/60 to-transparent" />
      <div className="absolute bottom-28 -right-40 h-[2px] w-40 bg-gradient-to-l from-purple-400/60 to-transparent" />
    </div>
  );
}


const Skills = () => {
  return (
    <section id="skills">
         <div className="flex items-center gap-3 mb-6">
        <h2 className="font-mono text-3xl text-slate-100">#skills</h2>
        <div className="h-[2px] bg-purple-500/60 flex-1" />
      </div>
      <div className="flex gap-5">
        <div className=" p-10 w-2/5]">
            <img src={skillDedsign} alt="art" />
        </div>
        <div className="w-2/3">
            <aside className=" max-w-[640px] relative" /* 50% width */>
      {/* title row */}
      {/* ladder */}
      <MiniLadder className="hidden md:block" />

      {/* compact grid that mirrors Figma spacing */}
      <div className="grid grid-cols-2 gap-3 relative z-10">
        {/* left column */}
        <div className="space-y-3">
          <MiniCard
            title="Languages"
            lines={["JavaScript c++", "Java"]}
          />
          <MiniCard
            title="Web Technoloiges"
            lines={["HTML  CSS  Tailwind CSS", "Appwrite"]}
          />
        </div>

        {/* right column */}
        <div className="space-y-3">
          <MiniCard
            title="Databases"
            lines={["MySql"]}
          />
          <MiniCard
            title="Tools"
            lines={["WebStrome  Intellij", "VScode", "Git GitHub"]}
          />
          <MiniCard
            title="Frameworks"
            lines={["React  ", "React Native"]}
          />
        </div>
      </div>
    </aside>
        </div>
      </div>
    </section>
    
  )
}

export default Skills