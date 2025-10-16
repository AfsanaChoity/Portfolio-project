import React from "react";
import { useState } from "react";

const researchProjects = [
  {
    id: 1,
    title:
      "Detection of Diabetic Retinopathy from Retinal Fundus Images using Multilayered Convolutional Neural Network",
    fundedBy: "Institute of Research and Training (IRT), HSTU",
    fundedYear: "2021-2022",
    position: "Principle Investigator (PI)",
    imageUrl: "/images/DR3.png",
    details:
      "This project focuses on developing an AI-powered system to detect diabetic retinopathy from retinal images, aiming to assist ophthalmologists with early diagnosis and improve patient outcomes.",
  },
  {
    id: 2,
    title:
      "HSTU BayannoDB: A Benchmark database of Isolated Bangla Handwritten Basic Characters and numbers",
    fundedBy: "Institute of Research and Training (IRT), HSTU",
    fundedYear: "2020-2021",
    position: "Principle Investigator (PI)",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    details:
      "The goal of this project is to build a deep learning-based system to accurately recognize isolated Bangla words, enabling voice-based interaction systems and aiding accessibility solutions.",
  },
  {
    id: 3,
    title:
      "Two Handed Bangla Sign Language Recognition Using Deep Convulutional Neural Network and support vector machine",
    fundedBy: "Institute of Research and Training (IRT), HSTU",
    fundedYear: "2019-2020",
    position: "Principle Investigator (PI)",
    imageUrl:
      "/images/banglaSign.jpg",
    details:
      "This project aims to develop a deep learning system for recognizing two-handed Bangla sign language gestures, combining CNNs and SVMs to enhance accessibility and support real-time translation tools.",
  },
];

const Research = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  function truncateWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length <= maxWords) {
      return text;
    }
    return words.slice(0, maxWords).join(" ") + "...";
  }

  return (
    <section className="">
      <div className="flex gap-2 mb-8">
        <img src="/sublogo1.svg" alt="sublogo" />
        <h1 className="md:text-2xl font-medium text-gray-900 dark:text-white">
          Research Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {researchProjects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden bg-base-200 dark:bg-[#26393a] hover:scale-105 transition-transform rounded-xl dark:border dark:border-[#234748] shadow-lg border border-gray-300 xl:p-4"
          >
            <img
              src={project.imageUrl}
              alt="project"
              className="h-55 2xl:h-65 w-full object-cover p-2 rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-lg text-gray-800 dark:text-gray-200 uppercase">
                {truncateWords(project.title, 8)}
              </h3>
              {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Funded by: {project.fundedBy}
                </p> */}
              <button
                className="text-sm mt-2 cursor-pointer text-yellow-500"
                onClick={() => setSelectedProject(project)}
              >
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)] p-4 ">
          {/* <div className="bg-base-200 dark:bg-[#26393a] rounded-xl w-3/4 h-3/4 p-8 relative dark:border dark:border-[#234748] shadow-lg border border-gray-300"> */}
          <div className="bg-base-200 dark:bg-[#26393a] rounded-xl w-3/4 h-3/4  p-8  overflow-y-auto relative dark:border dark:border-[#234748] shadow-lg border border-gray-300">

            <button
              className="absolute top-0 right-2 text-gray-600 dark:text-gray-300 text-2xl font-bold hover:text-yellow-500"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            {/* <div className="flex items-center justify-center h-full gap-8"> */}
            <div className="flex flex-col md:flex-row items-center justify-center  gap-8">

              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                //className="h-2/3 w-full object-cover rounded mb-4"
                className="w-full md:w-1/3 h-2/3 object-contain rounded mb-4"
              />
              {/* <div className=" flex flex-col overflow-y-auto h-80"> */}
              <div className="flex flex-col  space-y-2  max-h-80">

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase">
                  {selectedProject.title}
                </h3>

                <p className="mb-3 font-medium  text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.details}
                </p>
                <p className=" text-gray-700 dark:text-gray-300 mb-2">
                  Position: {selectedProject.position}
                </p>
                <p className=" text-gray-500 dark:text-gray-400">
                  Funded by: {selectedProject.fundedBy}
                </p>
                <p className=" text-gray-500 dark:text-gray-400 pb-6">
                  Funded Year: {selectedProject.fundedYear}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Research;
