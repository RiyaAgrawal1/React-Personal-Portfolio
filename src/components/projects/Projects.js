import React from 'react'
import Title from '../layouts/Title'
import { pdfToDoc, pizza, pragati, cafeConnect, bird, portfolio } from '../../assests/Index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      
        <ProjectsCard
          title="BIRD SONG RECOGNITION SYSTEM"
          des="An AI platform for real-time bird species identification using ML and NN models, providing names, images, and detailed information."
          src={bird}
          github="https://github.com/RiyaAgrawal1/Bird-Song-Recognition"
        />
        <ProjectsCard
          title="STUDENT PROGRESS TRACKER"
          des="An automated real-time student progress tracking system with a secure web portal for data visualization, analytics, and personalized feedback."
          src={pragati}
          github="https://github.com/RiyaAgrawal1/Student-Progress-Tracker"
        />
        <ProjectsCard
          title="PIZZA ORDERING SYSTEM"
          des="Django-powered pizza delivery with user registration, menu categories, cart, secure payments, order tracking, efficient DB, and strong authentication."
          src={pizza}
          github="https://github.com/RiyaAgrawal1/Pizza-Ordering-System"
        />
        <ProjectsCard
          title="PDF TO DOC CONVERTER"
          des="A PDF to DOC converter using Python libraries, enabling efficient document conversion, and an audio converter that transforms PDF or DOC files into spoken audio, enhancing accessibility for users."
          src={pdfToDoc}
          github="https://github.com/RiyaAgrawal1/PDF_TO_DOC_PYTHON"
        />
        <ProjectsCard
          title="Online Vegetables Shop"
          des="An online vegetable shop, elegantly crafted with HTML, CSS, and Bootstrap for a seamless shopping experience!"
          src={cafeConnect}
          github="https://github.com/RiyaAgrawal1/Vegetable-website"
        />
        <ProjectsCard
          title="Personal Portfolio"
          des="A personal portfolio using React to highlight my projects, skills, and experiences, featuring an interactive layout and responsive design for optimal user engagement."
          src={portfolio}
          github="https://github.com/RiyaAgrawal1/React-Personal-Portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;
