import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Title from '../layouts/Title';

const About = () => {
  return (
    <section id='about' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="About Me"
        />
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[80%] 2xl:w-[50%] mx-auto flex justify-center items-center text-center bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 pr-8 pl-8 rounded-lg shadow-shadowOne">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <div className="w-full lgl:w-[50%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
            <div className="flex justify-end">
              <div className="flex flex-col gap-2">
                <p className="text-base text-gray-400 flex items-center gap-2 text-3xl text-right">
                  FirstName: <span className="text-lightText font-bold">Riya</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2 text-3xl text-right">
                  LastName: <span className="text-lightText font-bold">Agrawal</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2 text-3xl text-right">
                  Phone: <span className="text-lightText font-bold">+91 9881448576</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2 text-3xl text-right">
                  Email: <span className="text-lightText font-bold">riyajagrawal@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lgl:w-[50%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-400 flex items-center gap-2 text-3xl">
                Address: <span className="text-lightText font-bold">Nagpur, Maharashtra-440023</span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2 text-3xl">
                Age: <span className="text-lightText font-bold">21 Years</span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2 text-3xl">
                Languages: <span className="text-lightText font-bold">Hindi, English, Marathi</span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2 text-3xl">
                Email: <span className="text-lightText font-bold">riyajagrawal@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <a
          href={`${process.env.PUBLIC_URL}/RiyaAgrawal-9881448576.pdf`}
          className="flex items-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-center"
          download="RiyaAgrawal-9881448576.pdf"
        >
          <FaDownload className="mr-2" /> Download CV
        </a>
      </div>
    </section>
  );
}

export default About;
