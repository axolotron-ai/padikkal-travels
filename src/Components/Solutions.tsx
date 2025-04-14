import React from "react";
import SolutionCard from "./SolutionCard";

const solutionsData = [
  {
    name: "Eicher",
    seat: "32",
    image: "/buses/eicher.png",
  },
  {
    name: "SML",
    seat: "30",
    image: "/buses/sml.png",
  },
  {
    name: "Ashok Leyland",
    seat: "40",
    image: "/buses/leyland.png",
  },
  {
    name: "Bharat Benz",
    seat: "35",
    image: "/buses/benz.png",
  },
  {
    name: "Mahindra",
    seat: "32",
    image: "/buses/mahindra.png",
  },
  {
    name: "Tata",
    seat: "32",
    image: "/buses/tata.png",
  },
];

function Solutions() {
  return (
    <div className="font-poppins mt-20">
      <h1 className="text-3xl font-semibold text-center text-secondary">
        Solutions for you
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10 mx-10 md:mx-20 mt-10">
        {solutionsData.map((item) => (
          <SolutionCard name={item.name} image={item.image} seat={item.seat} />
        ))}
      </div>
    </div>
  );
}

export default Solutions;
