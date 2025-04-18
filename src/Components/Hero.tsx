import React from "react";
import HeroCards from "./HeroCards";
import Image from "next/image";

function Hero() {
  return (
    <div className="text-center md:mt-20 m-4 md:m-10">
      <h1 className="text-3xl font-black font-jakarta text-primary px-10 lg:px-80 leading-10 tracking-normal">
        <span className="bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
          Embark on
        </span>{" "}
        Your Corporate Journey{" "}
        <span className="bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
          in Unparalleled Comfort
        </span>{" "}
        with Padikkal Travels.
      </h1>
      <p className="text-grey font-poppins pt-4 font-medium lg:px-80">
        Our team of highly skilled drivers, with their extensive experience and
        commitment <br />to safety, navigate the roads with precision, ensuring a
        smooth and comfortable <br /> journey.
      </p>
      <HeroCards />
      <div className="mt-10 font-poppins font-medium text-secondary">
        <h2>Our Partners</h2>
        <div className="flex items-center justify-center gap-x-14 mt-4">
          <Image src={'/chloride_logo.png'} alt="chloride logo" width={150} height={150}/>
          <Image src={'/exide_logo.png'} alt="exide logo" width={150} height={150}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
