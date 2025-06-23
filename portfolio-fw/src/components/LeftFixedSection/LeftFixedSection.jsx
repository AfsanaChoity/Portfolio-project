import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaLaptop } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaPhoneAlt } from 'react-icons/fa';
import { LuDownload } from "react-icons/lu";


const LeftFixedSection = () => {
  return (
    // <div className="bg-base-200 dark:bg-[#26393a] p-3 flex flex-col gap-4  rounded-xl dark:border dark:border-[#234748] shadow-lg border border-gray-300">
    <div className="md:max-h-screen bg-base-200 dark:bg-[#26393a] p-3 flex flex-col gap-4  rounded-xl dark:border dark:border-[#234748] shadow-lg border border-gray-300">
      <div className="flex flex-col justify-center items-center  object-contain ">
        <img className="lg:w-3/5 h-full rounded-xl" src="\ProfileImage.jpg" alt="" />
      </div>
      <div className=" flex flex-col justify-center items-center gap-2 ">
        <div className="flex justify-center items-center text-2xl font-bold text-primary dark:text-primary-content">
          
          <h1>Md. Ferdous Wahid</h1>
        </div>
        <div className="flex justify-center items-center text-justify p-1">
          <p className="text-center text-xs w-[75%] lg:w-[98%]">
              Assistant Professor in Electrical and Electronic Engineering at <a href="https://hstu.ac.bd/" target="blank">HSTU</a> , specializing in biomedical image processing, machine learning, and renewable energy research.
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          {[
            { icon: <BsTelephone className="text-xs"/>, href: "tel:+8801718844106" },
            { icon: <MdAlternateEmail className="text-xs"/>, href: "mailto:mfwahid26@gmail.com" },
            { icon: <FaLaptop className="text-xs"/>, href: "https://hstu.ac.bd/teacher/ferdous" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-400 rounded-full p-3 text-black dark:text-white hover:text-yellow-400 hover:border-yellow-400 transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div>
          <a href="/MFW_CV.pdf" download className="btn dark:bg-yellow-500 bg-gray-300 rounded-full text-black flex items-center gap-2">
          Download CV <LuDownload />
          </a>
        </div>
      </div>
      {/* <div></div>
      <div></div> */}
    </div>
  );
};

export default LeftFixedSection;
