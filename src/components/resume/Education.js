import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className='w-[1/2]'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[650px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech In CSE"
            subTitle="YCCE , Nagpur(2020 - 2024)"
            result="9.14/10"
            // des="The  provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="G.H.Raisoni Vidyaniketan ,Nagpur (2018 - 2020)"
            result="74%"
            // des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Carmel Academy , Nagpur(2018)"
            result="80%"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[650px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Trainee Software Engineer"
            subTitle="Amla Commerce  (Jul 2024 - Present)"
            result="Nagpur"
            des="Embarking on developing proficiency in software development methodologies and technologies, actively learning, and contributing to project tasks under mentorship."
          />
          <ResumeCard
            title="Intern"
            subTitle="Amla Commerce  (Jan 2024 - June 2024)"
            result="Nagpur"
            des="Completed 6-month internship gaining proficiency in ASP.NET MVC , C#, with hands-on experience on projects."
          />
          <ResumeCard
            title="Trainee"
            subTitle="PWC CAREERLAUNCHPAD - (2023)"
            result="Nagpur"
            des="Completed intensive 6-month training encompassing Java fundamentals, web development, and cloud SQL proficiency."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education