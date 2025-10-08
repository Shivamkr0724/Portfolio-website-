import { images } from "../constants/image";

const Hero = () => {
  return (
    <>
     <section
      id="hero"
      className="min-h-screen flex flex-col mt-10 md:flex-row items-center justify-center px-6 md:px-20 bg-[#1E1E23] text-gray-200"
    >
      {/* Left Content */}
      <div className="flex-1 pt-15 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Shivam{" "}
          <span className="text-purple-400">web designer</span> and{" "}
          <span className="text-purple-400">front-end developer</span>
        </h1>
        <p className="text-gray-400 max-w-lg">
          I crafts responsive websites where technologies meet creativity
        </p>
        <a
          href="#contacts"
          className="inline-block px-6 py-3 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-400 hover:text-white transition duration-300"
        >
          Contact me!!
        </a>
      </div>

      {/* Right Content */}
      <div className="flex-1 mt-0 md:mt-0 flex flex-col items-center relative">
        <img
          src={images.hero}
          alt="Hero"
          className="w-80 h-auto object-cover z-1"
        />

        {/* Decorative purple squares (placeholder) */}
        <div className="absolute top-50 right-12 w-64 h-64 border-2 border-purple-400 z-0">#</div>

        {/* Status Bar */}
        <div className="mt-6 mx-auto bg-[#2A2A35] text-sm text-gray-300 px-4 py-2 rounded-md flex items-center gap-2 shadow">
          <span className="w-3 h-3 bg-purple-400 inline-block rounded-sm"></span>
          Open to work <span className="font-bold">Portfolio</span>
        </div>
      </div>
      
    </section>
    <div className="flex mt-10 items-center justify-center">
          <div className={`relative ml-10 bg-[#282C33] text-slate-100 border-2 `}>
      {/* top-left opening quote */}
      <span
        aria-hidden
        className="absolute -top-2 left-2 text-4xl font-black text-slate-400/50 select-none"
      >
        &ldquo;
      </span>
       <div className="relative inline-block w-full">
        <div className="min-h-[72px] px-6 py-5 font-mono tracking-wide text-lg">
          With great power comes great responsibility
        </div>

        {/* notch and closing badge on the right */}
        <span
        aria-hidden
        className="absolute right-0 bottom-0 translate-y-5 text-4xl font-black text-slate-400/50 select-none">
        &ldquo;
      </span>
      </div>
    </div>
    </div>
    
    </>
   
  );
};

export default Hero;
