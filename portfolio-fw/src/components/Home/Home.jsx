import React from "react";
import Navbar from "../Navbar/Navbar";
import LeftFixedSection from "../LeftFixedSection/LeftFixedSection";
import HomeContent from "../HomeContent/HomeContent";
import Profile from "../Profile/Profile";
import Research from "../Research/Research";
import Publications from "../Publications/Publications";
import Courses from "../Courses/Courses";
import ContactForm from "../Contact/ContactForm";

const Home = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20 ">
      <Navbar></Navbar>
      
      {/* Home page */}
      <div className="flex flex-col md:flex-row items-center justify-center   lg:mt-10">
        {/* Left Fixed Section */}
        {/* <div className="md:fixed md:left-10 md:top-25 md:w-[28%] mt-20 md:mt-[0%]  md:mr-2 "> */}
        <div className="pt-4 md:pt-0 md:fixed md:left-10 xl:left-20 md:top-24 lg:top-34 md:w-[28%] xl:w-[22%] md:h-[calc(100vh-8rem)] lg:h-[calc(100vh-10rem)] mt-20 md:mt-0 md:mr-2 ">
          <LeftFixedSection></LeftFixedSection>
        </div>
        {/* Home Content */}
        <div className="md:ml-[36%] xl:ml-[30%]  w-full">
          
          <section id="home" className="mt-16 md:mt-26 scroll-mt-26">
            <HomeContent></HomeContent>
          </section>

          {/* Profile section */}
          <section id="profile" className="mt-16 md:mt-28 scroll-mt-26">
            <Profile></Profile>
          </section>

          {/* Courses Section */}
          <section id="courses" className="mt-16 md:mt-28 scroll-mt-26">
            <Courses></Courses>
          </section>

          {/* Research section */}
          <section id="research" className="mt-16 md:mt-28 scroll-mt-26" >
            <Research></Research>
          </section>
          
          {/* Research section */}
          <section id="publications" className="mt-16 md:mt-28 scroll-mt-26" >
            <Publications></Publications>
          </section>
          {/* Contact section */}
          <section id="contact" className="mt-16 md:mt-28 scroll-mt-26" >
            <ContactForm></ContactForm>
          </section>
        </div>
        

      </div>

      
      
    </div>
    

  );
};

export default Home;
