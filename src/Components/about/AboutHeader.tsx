import React from "react";

function AboutHeader() {
  return (
    <div className="relative">
      <img
        src="/buses/journey_bus.jpg"
        alt="about-header"
        className="object-cover w-full h-[60vh] z-0"
      />
      <div className="absolute inset-0 flex flex-col justify-start items-start px-4 sm:px-6 md:px-10 pt-10 md:pt-40 z-10">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-poppins max-w-[90%] md:max-w-[700px] leading-snug">
          Our <span className="text-secondary">passion for travel </span>
          drives us to{" "}
          <span className="text-secondary">create unforgettable</span>
          <br className="hidden md:block" /> experiences.
        </h1>
      </div>
      <div className="absolute bg-white text-[#0A2538] font-poppins font-bold px-5 py-3 rounded-lg right-4 bottom-4 md:right-10">
        <h1 className="text-sm sm:text-base">20+ Years of Travelling</h1>
      </div>
    </div>
  );
}

export default AboutHeader;
