import React from "react";
import Image from "next/image";
function HeroCard({ name, image }: { name: string; image: string }) {
  return (
    <div className=" bg-card-color drop-shadow-xl/50 drop-shadow-[#C9C9C91A] rounded-lg md:w-[120px] md:h-[140px]">
      <Image
        src={image}
        alt="Hero Card"
        width={100}
        height={100}
        className="h-[60px] w-full md:h-[100px] md:w-[120px]"
      />
      <p className="uppercase font-poppins font-medium text-sm text-center md:pt-2">
        {name}
      </p>
    </div>
  );
}

export default HeroCard;
