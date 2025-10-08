import skillDedsign from "../assets/image/Group36.png";

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
    <section id="skills" className="px-6 md:px-12 py-16 text-slate-300">
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="font-mono text-2xl md:text-3xl text-slate-100">#skills</h2>
        <div className="h-[2px] bg-purple-500/60 flex-1" />
      </div>

      {/* Responsive layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={skillDedsign}
            alt="art"
            className="w-4/5 max-w-[350px] md:max-w-[500px] object-contain"
          />
        </div>

        {/* Right cards section */}
        <div className="w-full md:w-1/2">
          <aside className="max-w-[640px] mx-auto relative">
            <MiniLadder className="hidden md:block" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
              {/* Left column */}
              <div className="space-y-3">
                <MiniCard title="Languages" lines={["JavaScript", "C++", "Java"]} />
                <MiniCard
                  title="Web Technologies"
                  lines={["HTML", "CSS", "Tailwind CSS", "Appwrite"]}
                />
              </div>

              {/* Right column */}
              <div className="space-y-3">
                <MiniCard title="Databases" lines={["MySQL"]} />
                <MiniCard
                  title="Tools"
                  lines={["WebStorm", "IntelliJ", "VS Code", "Git", "GitHub"]}
                />
                <MiniCard title="Frameworks" lines={["React", "React Native"]} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Skills;
