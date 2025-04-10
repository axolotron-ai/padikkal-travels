import React from "react";
import HeroCard from "./HeroCard";

const data = [
  {
    id: 1,
    name: "Bangalore",
    image: "/places/bangalore.png",
  },
  {
    id: 2,
    name: "Hyderabad",
    image: "/places/hyderabad.png",
  },
  {
    id: 3,
    name: "Chennai",
    image: "/places/chennai.png",
  },
  {
    id: 4,
    name: "Punjab",
    image: "/places/punjab.png",
  },
  {
    id: 5,
    name: "Kochi",
    image: "/places/kochi.png",
  },
  {
    id: 6,
    name: "Tamil Nadu",
    image: "/places/tamilnadu.png",
  },
];
function HeroCards() {
  return (
    <div className="">
      {data.map((item) => (
        <HeroCard key={item.id} name={item.name} image={item.image} />
      ))}
    </div>
  );
}

export default HeroCards;
