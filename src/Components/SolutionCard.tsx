import React from "react";

function SolutionCard({
  name,
  image,
  seat,
}: {
  name: string;
  image: string;
  seat: string;
}) {
  return (
    <div className="group relative w-full h-64 rounded-xl overflow-hidden drop-shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-md text-white px-4 py-2 z-10">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{seat} Seater</p>
      </div>
    </div>
  );
}

export default SolutionCard;
