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
    <div className="mx-10">
      <Navbar></Navbar>
      
      {/* Home page */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Left Fixed Section */}
        {/* <div className="md:fixed md:left-10 md:top-25 md:w-[28%] mt-20 md:mt-[0%]  md:mr-2 "> */}
        <div className="md:fixed md:left-10 md:top-24 md:w-[28%] md:h-screen mt-20 md:mt-0 md:mr-2">
          <LeftFixedSection></LeftFixedSection>
        </div>
        {/* Home Content */}
        <div className="md:ml-[36%] w-full">
          
          <section id="home" className="mt-26 scroll-mt-26">
            <HomeContent></HomeContent>
          </section>

          {/* Profile section */}
          <section id="profile" className="mt-28 scroll-mt-26">
            <Profile></Profile>
          </section>

          {/* Courses Section */}
          <section id="courses" className="mt-28 scroll-mt-26">
            <Courses></Courses>
          </section>

          {/* Research section */}
          <section id="research" className="mt-28 scroll-mt-26" >
            <Research></Research>
          </section>
          
          {/* Research section */}
          <section id="publications" className="mt-28 scroll-mt-26" >
            <Publications></Publications>
          </section>
          {/* Contact section */}
          <section id="contact" className="mt-28 scroll-mt-26 mb-8" >
            <ContactForm></ContactForm>
          </section>
        </div>
        

      </div>

      
      
    </div>
    

  );
};

export default Home;
