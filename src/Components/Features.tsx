import React from "react";
import FeatureCard from "./FeatureCard";

const featureData = [
  {
    name: "Diverse fleet",
    icon: "/experience_icons/diverse_fleet.png",
    paragraph:
      "We serve individuals and large groups. We understand that every traveler is unique, and we tailor our services to meet their specific needs.",
  },
  {
    name: "Comfort",
    icon: "/experience_icons/comfort.png",
    paragraph:
      "We prioritize your comfort above all else. From smooth rides to thoughtful amenities, we aim to create a truly pleasurable travel experience.",
  },
  {
    name: "Luxury",
    icon: "/experience_icons/luxury.png",
    paragraph:
      "Experience travel in our modern fleet of luxurious buses. Equipped with premium amenities, we redefine passenger comfort.",
  },
  {
    name: "Regional Focus",
    icon: "/experience_icons/regional_focus.png",
    paragraph:
      "We have a strong presence in Bengaluru and Kerala, indicating a concentration on serving these regions.",
  },
  {
    name: "Route Coverage",
    icon: "/experience_icons/route_coverage.png",
    paragraph:
      "Operate bus services, particularly between Bengaluru and Kerala, indicating a focus on intercity travel. ",
  },
  {
    name: "Service Variety",
    icon: "/experience_icons/service_variety.png",
    paragraph:
      "Our service encompass vehicle rental, Bus transportation. we also provide service for corporate events and airport transfer.",
  },
];
function Features() {
  return (
    <div className="font-poppins mt-20" id="benefit">
      <h1 className="font-semibold text-3xl text-center text-secondary">
        Experience the Difference
      </h1>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-x-10 mx-6 md:mx-20 gap-y-10 mt-10">
        {featureData.map((item) => (
          <FeatureCard
            key={item.name}
            name={item.name}
            icon={item.icon}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
