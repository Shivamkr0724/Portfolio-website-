import { Route, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AllProjects from "./pages/AllProjects.jsx";
import ScrollToHash from "./ScrollToHash.jsx";

export default function App(){
  return (
    <div className="bg-[#1E1E23]">
        <Navbar/>
        <ScrollToHash/>
        <div className="max-w-[1180px] mx-auto px-[20px]">
          <Routes>
            <Route 
               path="/"
               element={
                <>
                 <Hero/>
                 <Projects/>
                 <Skills/>
                 <AboutSection/>
                 <ContactSection/>
                </>
               }
            />
            
            <Route path="/allProjects" element={<AllProjects/>}/>
          </Routes>
           </div>  
          <Footer/>
    </div> 
   
  )
}