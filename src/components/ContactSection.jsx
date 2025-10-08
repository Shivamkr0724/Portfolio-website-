import React from "react";
import { FaDiscord, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contacts" className="relative bg-[#1E1E23] text-gray-300 px-6 md:px-12 py-20 flex flex-col md:flex-row justify-between items-start gap-10">
      {/* Left Text */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold mb-6 border-b border-purple-500 inline-block">
          <span className="text-purple-400">#</span>contacts
        </h2>

        <p className="leading-relaxed">
          I'm interested in freelance opportunities. However,  
          if you have other requests or questions, don't  
          hesitate to contact me.
        </p>
      </div>

      {/* Contact Box */}
      <div className="border border-gray-700 p-5 rounded-md bg-[#1E1E23] w-full sm:w-auto md:min-w-[250px]">
        <h3 className="font-semibold text-gray-200 mb-4">
          Message me here
        </h3>
        <div className="flex items-center gap-3 mb-3">
          <FaDiscord className="text-purple-400 text-lg" />
          <span className="text-sm text-gray-300">Shivam0724</span>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-purple-400 text-lg" />
          <a
            href="mailto:shivamkmr0724@gmail.com"
            className="text-sm text-gray-300 hover:text-purple-400 transition"
          >
            shivamkmr0724@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
