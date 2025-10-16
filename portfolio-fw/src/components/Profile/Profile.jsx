import React from "react";

const Profile = () => {
    return (
        <div className=''>
            <div className="flex gap-2">
                <img src="/sublogo1.svg" alt="sublogo" />
                <h1 className="md:text-2xl  font-medium text-gray-900 dark:text-white">

                    About Me
                </h1>
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl lg:text-5xl  mt-5 font-medium text-gray-800 dark:text-white">
                    Where Learning
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-6xl mt-4 md:mt-8 font-medium text-gray-800 dark:text-white italic pl-[10%] ">
                    Sparks<span className="text-yellow-500 "> Innovation</span>
                </h2>
            </div>
            <div className=' mt-12 bg-base-200 dark:bg-[#26393a] p-5  rounded-xl dark:border dark:border-[#234748] shadow-lg border border-gray-300'>
                <h2 className='lg:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-4'>Md. Ferdous Wahid</h2>
                <p className=" font-medium  text-gray-600 dark:text-gray-300 text-justify">
                    Hi, I’m M.F. Wahid ― an Assistant Professor in EEE at HSTU with over 10 years of experience in teaching and research. My work focuses on AI, IoT, and machine learning for applications in healthcare, energy, and automation. I design and teach courses on Python, deep learning, and signal processing, aiming to connect theory with real-world impact. With 35+ publications and multiple funded projects, I’m dedicated to advancing intelligent systems and guiding students toward meaningful innovation.
                </p>
            </div>

            {/* work experience  & Education*/}
            {/* <div className='mt-10 lg:flex lg:gap-8 border'> */}
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 '>
                {/* work experience */}
                <div className=" flex flex-col">
                    <h2 className='lg:text-2xl text-xl  font-medium text-gray-900 dark:text-white mb-4 '>Work Experience</h2>
                    <div className='flex-1 bg-base-200 dark:bg-[#26393a] p-5  rounded-xl dark:border dark:border-[#234748] shadow-lg border border-gray-300 '>
                        <div>
                        <p className='font-medium  text-gray-600 dark:text-gray-300 mb-2'>2018 - Present</p>
                        <p className='text-xl  font-medium text-gray-900 dark:text-white mb-2'>Assistant Professor</p>
                        <p className='font-medium  text-gray-600 dark:text-gray-300 mb-1'>Dept of EEE</p>
                        <p className='font-medium text-xs text-gray-600 dark:text-gray-300'>Hajee Mohammad Danesh Science And Technology University, Dinajpur</p>
                        </div>

                        <div className='mt-10'>
                        <p className='font-medium  text-gray-600 dark:text-gray-300 mb-2'>2015 - 2018</p>
                        <p className='text-xl  font-medium text-gray-900 dark:text-white mb-2'>Lecturer</p>
                        <p className='font-medium  text-gray-600 dark:text-gray-300 mb-1'>Dept of EEE</p>
                        <p className='font-medium text-xs text-gray-600 dark:text-gray-300'>Hajee Mohammad Danesh Science And Technology University, Dinajpur</p>
                        </div>

                        <div className='mt-10'>
                        <p className='font-medium  text-gray-600 dark:text-gray-300 mb-2'>2013 - 2015</p>
                        <p className='text-xl  font-medium text-gray-900 dark:text-white mb-2'>Lecturer</p>
                        <p className='font-medium  text-gray-600 dark:text-gray-300 mb-1'>Dept of ECE</p>
                        <p className='font-medium text-xs text-gray-600 dark:text-gray-300'>Sylhet International University, Sylhet</p>
                        </div>

                    </div>

                    
                </div>

                {/* education */}
                <div className="">
                    <h2 className='lg:text-2xl text-xl  font-medium text-gray-900 dark:text-white mb-4 mt-4 lg:mt-0'>Education</h2>
                    <div className='bg-base-200 dark:bg-[#26393a] p-5  rounded-xl dark:border dark:border-[#234748] shadow-lg border border-gray-300'>
                        <div>
                        <p className='font-medium  text-gray-600 dark:text-gray-300 mb-2'>2022 - Present</p>
                        <p className='text-xl  font-medium text-gray-900 dark:text-white mb-2'>MSc (Engg.) in ECE</p>
                        <p className='font-medium text-xs text-gray-600 dark:text-gray-300'>Khulna University of Engineering and Technology</p>

                        </div>
                        
                        <div className='mt-8'>
                        <p className='font-medium  text-gray-600 dark:text-gray-300 mb-2'>2008 - 2012</p>
                        <p className='text-xl  font-medium text-gray-900 dark:text-white mb-2'>BSc (Engg.) in ECE</p>
                        <p className='font-medium text-xs text-gray-600 dark:text-gray-300'>Khulna University of Engineering and Technology</p>

                        </div>
                    </div>

                    {/* Expertise */}
                    <div className='mt-4'>
                        <h2 className='lg:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-4'>Expertise</h2>

                        <div className='bg-base-200 dark:bg-[#26393a] p-5  rounded-xl dark:border dark:border-[#234748] shadow-lg border border-gray-300'>
                        <div>
                            <h3 className='text-xl  font-medium text-gray-900 dark:text-white mb-2'>Programming:</h3>
                            <p className='font-medium text-sm text-gray-600 dark:text-gray-300 '>C, Python, Machine Learning algorithms</p>

                        </div>
                        
                        <div className='mt-6'>
                            <h3  className='text-xl  font-medium text-gray-900 dark:text-white mb-2'>Application Software:</h3>
                            <p className='font-medium text-sm text-gray-600 dark:text-gray-300'>Origin, MultiSim, Proteus, CASTEP, MS Office, LATEX</p>
                        </div>

                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;
