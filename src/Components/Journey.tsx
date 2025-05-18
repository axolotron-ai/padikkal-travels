import Image from "next/image";
import React from "react";

function Journey() {
  return (
    <div className="mt-20 font-poppins">
      <h1 className="text-center text-3xl text-secondary font-medium">
        Our Journey
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-10 md:mx-20">
        <img
          src={"/buses/journey_bus.png"}
          alt="bus"
          width={100}
          height={100}
          className="w-[90%] md:w-[80%] mx-auto"
        />
        <div>
          <h1 className="text-2xl my-6 font-medium">Padikkal</h1>
          <p className="font-light text-[#A9A9A9] text-lg leading-8 text-justify">
            Padikkal Travels Private Limited is a renowned brand in the bus
            operating industry. Our vision is to give a new face to the bus
            industry. Since our inception passenger comfort has been our top
            priority. We have frequently added luxury buses to our huge fleet of
            buses. The only thing we focus on is that the comfort quotient of
            our passengers should never be compromised. We have always tried our
            best to push our limits in order to develop our travel experience.
            Read further to understand what we offer that enhances our
            reputation in the market.
          </p>
          <button className="border-2 border-secondary px-4 py-2 text-secondary rounded-md mt-8">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Journey;
