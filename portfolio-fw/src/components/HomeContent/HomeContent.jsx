import React from "react";

const HomeContent = () => {
  return (
    <div className="">
      {/* <section className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-gradient-to-b from-[#87bebe] via-[#305c5c] to-[#87bebe] dark:from-[#264444] dark:to-[#264444] "> */}
      <section className="flex flex-col w-full">
        <div className="flex gap-2">
          <img src="/sublogo1.svg" alt="sublogo" />
          <h1 className="text-[16px] md:text-2xl  font-medium text-gray-900 dark:text-white">

            Hi, I’m <span className="">Md. Ferdous Wahid</span>
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-5xl  mt-5 font-medium text-gray-800 dark:text-white">
          Assistant Professor
        </h2>
        <h2 className="text-3xl md:text-4xl lg:text-6xl mt-4  md:mt-8 font-medium text-gray-800 dark:text-white italic ml-[10%] ">
          Dept. Of <span className="text-yellow-500 ">EEE</span>
        </h2>
        {/* <h2 className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
          Hajee Mohammad Danesh Science and Technology University, Dinajpur, Bangladesh
        </h2> */}
        <p className="max-w-2xl mt-12  font-medium  text-gray-600 dark:text-gray-300 leading-relaxed md:ml-[25%] text-justify">
          Exploring the intersection of <span className="font-semibold text-yellow-500">AI</span>, <span className="font-semibold text-yellow-500">IoT</span>, and <span className="font-semibold text-yellow-500">healthcare</span>
          . I design intelligent systems that make differences. Passionate
          about teaching, research, and building solutions that matter.
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-center gap-2 justify-end mr-5">
          {/* <img src="/elements1.png" alt="image" /> */}
          <img src="/others1.png" alt="reviews" />
          <div className="font-medium text-gray-500 dark:text-gray-400">
            <p>2k+ reviews</p>
            <p>(4.50 of 5)</p>
          </div>
        </div>

        {/* <div className="flex items-center gap-4 mt-6">
          <span className="text-yellow-500 font-semibold">2k+ Reviews</span>
          <span className="text-gray-500 dark:text-gray-300">|</span>
          <span className="text-gray-600 dark:text-gray-200">
            Rated 4.90 / 5
          </span>
        </div>

        <a
          href="#contact"
          className="mt-8 inline-block px-6 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-full transition"
        >
          Let’s Work Together
        </a> */}
      </section>
    </div>
  );
};

export default HomeContent;
