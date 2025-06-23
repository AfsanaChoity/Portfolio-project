import React from 'react';
import { useState } from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { FaStar } from "react-icons/fa";
const offeredCourses = [
    {
        id: 1,
        title:
            "Data Science With Python",
        fundedBy: "HSTU",
        institutionLogo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhstu.ac.bd%2Fpage%2Fdownload&psig=AOvVaw30uaCVQJ-C9w6YJNbNLsgh&ust=1750575013895000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjYkKH2gY4DFQAAAAAdAAAAABAc",
        imageUrl: "/data-science.jpg",
        details:
            "Python Programming, Pandas(Python Package), Numpy, Jupyter, Data Structures,Data Analysis , Data Manipulation,Data Import/Export,Data Literacy, Programming Principles, File Management,Web Scraping,Scripting,Object Oriented Programming (OOP), Application Programming Interface (API) ",
        rating: 4.6,
        reviews: 41,
        courseType: "Beginner Course",
        courseLength: "2 - 3 months",
    },
    {
        id: 2,

        title: "Machine Learning With Python",
        fundedBy: "HSTU",
        institutionLogo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhstu.ac.bd%2Fpage%2Fdownload&psig=AOvVaw30uaCVQJ-C9w6YJNbNLsgh&ust=1750575013895000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjYkKH2gY4DFQAAAAAdAAAAABAc",
        imageUrl: "/machine-learning.jpg",
        details:
            "Python Programming, Python Packages for ML, Applied Machine Learning, Classification And Regression Tree(CART), Decision Tree Learning, Regression Analysis, Supervised Learning, Feature Engineering, Statistical Modeling, Unsupervised Learning, Scikit Learn, OpenCV, Seaborn, Deep Learning, Tensorflow, keras , Explainable AI(XAI) ",
        rating: 4.7,
        reviews: 47,
        courseType: "Beginner Course",
        courseLength: "2 - 3 months",
    },

];
const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    function truncateWords(text, maxWords) {
        const words = text.split(" ");
        if (words.length <= maxWords) {
            return text;
        }
        return words.slice(0, maxWords).join(" ") + "...";
    }

    return (
        <div>
            <div className="flex gap-2">
                <img src="/sublogo1.svg" alt="sublogo" />
                <h1 className="text-xl  lg:font-medium text-gray-900 dark:text-white">
                    My Courses
                </h1>
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl lg:text-5xl  mt-5 font-medium text-gray-800 dark:text-white">
                    Shaping Futures Through
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-6xl  mt-8 font-medium text-gray-800 dark:text-white italic ml-[16%] ">
                    Smart<span className="text-yellow-500 "> Learning</span>
                </h2>
            </div>

            {/* courses */}
            <section className=" mt-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {offeredCourses.map((course) => (

                       
                            <div
                                key={course.id}
                                onClick={() => setSelectedCourse(course)}
                                className="cursor-pointer overflow-hidden bg-base-200 dark:bg-[#26393a] hover:scale-105 transition-transform rounded-xl dark:border dark:border-[#234748] shadow-lg border border-gray-300"
                            >
                                <img
                                    src={course.imageUrl}
                                    alt="Course"
                                    className="h-55 w-full  p-2 rounded-t-2xl"
                                />
                                <div className="p-4">
                                    <div className='flex gap-1 items-center'>
                                        <img src="/hstu_logo.png" alt="HSTU" className='h-8 w-8 border rounded p-1 border-gray-500' />
                                        <h2 className='font-medium dark:text-gray-400 text-gray-500'>HSTU</h2>
                                    </div>
                                    <div className='my-4'>
                                        <h1 className='text-xl font-medium'>{course.title}</h1>
                                    </div>
                                    <h3 className=" text-gray-500 dark:text-gray-400 "> <span className='mr-1 font-medium dark:text-white text-black'>Skills you'll gain:</span>
                                        {truncateWords(course.details, 11)}
                                    </h3>
                                    {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Funded by: {project.fundedBy}
                </p> */}
                                    <div className='flex gap-4 mt-8 items-center'>
                                        <div className='flex items-center gap-1'>
                                            <FaStar />
                                            <p className='dark:text-white font-medium'>{course.rating}</p>
                                        </div>

                                        <p className='text-gray-500 dark:text-gray-400 text-[14px]'>{course.reviews}K reviews</p>
                                    </div>
                                    <div className='flex my-1 gap-2 text-gray-500 dark:text-gray-400'>
                                        <p>{course.courseType}</p>
                                        <p>{course.courseLength}</p>
                                    </div>
                                    {/* <button
                                    className="text-sm mt-2 cursor-pointer text-yellow-500"
                                    onClick={() => setSelectedCourse(course)}
                                >
                                    READ MORE
                                </button> */}
                                </div>
                            </div>
                        
                    ))}
                </div>

                {/* Modal */}
                {selectedCourse && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)] p-4 ">
                        {/* <div className="bg-base-200 dark:bg-[#26393a] rounded-xl w-3/4 h-3/4 p-8 relative dark:border dark:border-[#234748] shadow-lg border border-gray-300"> */}
                        <div className="bg-base-200 dark:bg-[#26393a] rounded-xl w-3/4 h-3/4  p-8  overflow-y-auto relative dark:border dark:border-[#234748] shadow-lg border border-gray-300">
                            <button
                                className="absolute top-0 right-2 text-gray-600 dark:text-gray-300 text-2xl font-bold hover:text-yellow-500"
                                onClick={() => setSelectedCourse(null)}
                            >
                                &times;
                            </button>
                            {/* <div className="flex items-center justify-center h-full gap-8"> */}
                            <div className="flex flex-col md:flex-row items-center justify-center  gap-8">
                                <img
                                    src={selectedCourse.imageUrl}
                                    alt={selectedCourse.title}
                                    // className="h-2/3 w-full object-cover rounded mb-4"
                                    className="w-full md:w-1/3 lg:w-1/3 object-contain rounded mb-4 "
                                />
                                {/* <div className=" flex flex-col overflow-y-auto h-80"> */}
                                <div className="flex flex-col  max-h-80">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
                                        {selectedCourse.title}
                                    </h3>

                                    <p className="mb-3 font-medium  text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {selectedCourse.details}
                                    </p>
                                    
                                    <p className=" text-gray-500 dark:text-gray-400 font-medium">
                                        <span className='dark:text-white text-gray-800'>Funded by:</span> {selectedCourse.fundedBy}
                                    </p>
                                    <div className='flex gap-4 mt-8 items-center'>
                                        <div className='flex items-center gap-1 text-gray-800 dark:text-white'>
                                            <FaStar />
                                            <p className=' font-medium'>{selectedCourse.rating}</p>
                                        </div>

                                        <p className='text-gray-500 dark:text-gray-400 text-[14px]'>{selectedCourse.reviews}K reviews</p>
                                    </div>
                                    <div className='flex my-1 gap-2 text-gray-500 dark:text-gray-400 pb-4 md:pb-0 lg:pb-0'>
                                        <p>{selectedCourse.courseType}</p>
                                        <p>{selectedCourse.courseLength}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

        </div>
    );
};

export default Courses;