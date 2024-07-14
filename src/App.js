import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";
import Resume from "./components/resume/Resume";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto px-16">
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
     
      {/* <Footer/> */}
      </div>
      
    </div>
  );
}

export default App;
