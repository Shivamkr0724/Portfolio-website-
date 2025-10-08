import React from "react";
import hero from "../assets/image/hero-image.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-[#1E1E23] text-gray-300 px-6 sm:px-8 md:px-12 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-6 border-b border-purple-500 inline-block">
          <span className="text-purple-400">#</span>about-me
        </h2>

        <p className="text-lg mb-3 mt-4">Hello, I'm Shivam!</p>

        <p className="mb-4 leading-relaxed text-base sm:text-lg">
          I'm Shivam Kumar, a self-taught Front-End Developer and B.Tech
          graduate in Computer Science and Engineering based in India. I
          specialize in building responsive, visually appealing, and
          user-friendly websites from scratch.
        </p>

        <p className="leading-relaxed mb-6 text-base sm:text-lg">
          For over a year, I’ve been passionate about turning ideas into
          functional and engaging web experiences. I continuously explore modern
          technologies and frameworks to stay up to date with the ever-evolving
          web development landscape. My goal is to craft clean, efficient, and
          impactful digital solutions that help businesses and individuals
          strengthen their online presence.
        </p>

        <button className="border border-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-500 hover:text-black transition">
          Read more →
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex items-center justify-center z-10">
        <div className="w-80 h-auto flex items-center justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-80 md:w-[40vw] h-auto object-cover rounded-lg border border-gray-700"
          />
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-8 right-8 md:right-32 w-12 h-12 sm:w-16 sm:h-16 grid grid-cols-4 gap-1 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-sm"></div>
        ))}
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 sm:w-16 sm:h-16 grid grid-cols-4 gap-1 opacity-20 hidden md:grid">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-sm"></div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
