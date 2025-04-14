import Image from "next/image";
import React from "react";

function FeatureCard({
  name,
  icon,
  paragraph,
}: {
  name: string;
  icon: string;
  paragraph: string;
}) {
  return (
    <div className="bg-gradient-to-r from-feature-primary to-feature-secondar w-fit py-8 rounded-md px-10 hover:scale-110 cursor-pointer transition-all">
      <div className="flex items-center justify-between">
        <h1 className="text-lg">{name}</h1>
        <Image src={icon} width={20} height={20} alt={name} />
      </div>
      <p className="text-justify text-[#95A5A6] mt-6">{paragraph}</p>
    </div>
  );
}

export default FeatureCard;
