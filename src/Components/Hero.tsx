import React from "react";
import HeroCards from "./HeroCards";

function Hero() {
  return (
    <div className="text-center m-20">
      <h1 className="text-3xl font-black font-jakarta text-primary px-80 leading-10 tracking-normal">
        <span className="bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
          Embark on
        </span>{" "}
        Your Corporate Journey{" "}
        <span className="bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
          in Unparalleled Comfort
        </span>{" "}
        with Padikkal Travels.
      </h1>
      <p className="text-grey font-poppins pt-4 font-medium px-80">
        Our team of highly skilled drivers, with their extensive experience and
        commitment <br />to safety, navigate the roads with precision, ensuring a
        smooth and comfortable <br /> journey.
      </p>
      <HeroCards />
    </div>
  );
}

export default Hero;
