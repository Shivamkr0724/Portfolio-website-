import { FaGithub, FaFacebook, FaDiscord, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E23] text-gray-300 px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start border-t border-gray-800">
      {/* Left Section */}
      <div>
        <h3 className="font-semibold text-white text-lg mb-1">Shivam Kumar</h3>
        <a
          href="mailto:elias@elias-dev.ml"
          className="text-gray-400 hover:text-purple-400 transition text-sm"
        >
          shivamkmr0724@gmail.com
        </a>
        <p className="text-sm mt-3 text-gray-400">
          Web designer and front-end developer
        </p>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0">
        <h4 className="font-semibold text-white text-lg mb-3">Media</h4>
        <div className="flex items-center space-x-4 text-gray-400 text-xl">
          <a
            href="https://github.com/shivamkr0724"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shivamkr0724/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/Shivam0724/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
