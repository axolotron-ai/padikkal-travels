import React from "react";
import Image from "next/image";
function Features() {
  return (
    <div className="mt-20 font-poppins mx-10 md:mx-40">
      <h1 className="text-secondary font-medium text-3xl mb-10">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image
          src="/about/tracking.png"
          alt="tracking"
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-cover rounded-lg "
        />
        <div>
          <h1 className="text-[#0A2538] font-medium text-3xl md:mt-20 md:mb-10">
            Live Bus Tracking
          </h1>
          <p className="text-lg text-[#A9A9A9] text-justify">
            We have integrated this great technology of live bus tracking in
            almost all of our buses. This helps the passengers to be informed
            about the live position of the bus, thus helping them in planning
            their commute to the bus stand.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 mt-10">
        <div className="md:order-1 order-2">
          <h1 className="text-[#0A2538] font-medium text-3xl md:mt-20 md:mb-10">
            Great Comfort
          </h1>
          <p className="text-lg text-[#A9A9A9] text-justify">
            Now, once a passenger boards the bus he will be surprised by the
            inner comfort of the bus. The buses have all the latest amenities
            like WiFi, charging point, water bottle and central TV. The seats
            are really very comfortable and create a feeling of a cosy bedroom.
          </p>
        </div>
        <Image
          src="/about/comfort.png"
          alt="comfort"
          width={100}
          height={100}
          className="w-[80%] md:h-[80%] object-cover rounded-lg md:order-2 order-1"
        />
      </div>
    </div>
  );
}

export default Features;
