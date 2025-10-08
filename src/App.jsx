import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App(){
  return (
    <div className="bg-[#1E1E23]">
        <Navbar/>
        <div className="max-w-[1180px] mx-auto px-[20px]">
          <Hero/>
          <Projects/>
          <Skills/>
          <AboutSection/>
          <ContactSection/>
          <Footer/>
        </div>
    </div>
    
    
   
  )
}