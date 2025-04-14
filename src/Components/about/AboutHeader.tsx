import React from "react";
import Image from "next/image";

function AboutHeader() {
  return (
    <div className="relative">
      <Image
        src="/about_bus.png"
        alt="about-header"
        width={100}
        height={100}
        className="w-full h-[60vh] object-cover z-0"
      />
      <h1 className="absolute inset-0  text-[#0A2538] text-4xl md:top-40 top-10 md:w-[700px] md:left-10 font-bold font-poppins z-10">
        Our <span className="text-secondary">passion for travel {" "}</span> drives us
        to <span className="text-secondary">create unforgettable</span>{" "}
        <br />experiences.
      </h1>
      <div className="absolute bg-white text-[#0A2538] font-poppins font-bold w-fit h-fit px-8 py-4 -bottom-4 rounded-lg right-0 md:right-10">
        <h1>12 Years of Travelling</h1>
      </div>
    </div>
  );
}

export default AboutHeader;
