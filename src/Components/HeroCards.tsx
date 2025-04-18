"use client";
import React from "react";
import HeroCard from "./HeroCard";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const data1 = [
  { id: 1, name: "Bangalore", image: "/places/bangalore.png" },
  { id: 2, name: "Hyderabad", image: "/places/hyderabad.png" },
  { id: 3, name: "Chennai", image: "/places/chennai.png" },
];

const data2 = [
  { id: 4, name: "Punjab", image: "/places/punjab.png" },
  { id: 5, name: "Kochi", image: "/places/kochi.png" },
  { id: 6, name: "Tamil Nadu", image: "/places/tamilnadu.png" },
];

function HeroCards() {
  const leftOffsets = [
    "mt-0 z-30",
    "mt-10 md:mt-16 -ml-6 md:-ml-32 z-20",
    "mt-24 md:mt-32 -ml-12 md:-ml-32 z-10",
  ];
  const rightOffsets = [
    "mt-24 md:mt-32 -mr-12 md:-mr-32 z-10",
    "mt-10 md:mt-16 -mr-6 md:-mr-32 z-20",
    "mt-0 z-30",
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div>
      <div className=" flex md:gap-x-20 justify-evenly items-start">
        {/* Left side cards */}
        {data1.map((item, index) => (
          <motion.div
            key={item.id}
            className={leftOffsets[index]}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
          >
            <HeroCard name={item.name} image={item.image} />
          </motion.div>
        ))}

        {/* Right side cards */}
        {data2.map((item, index) => (
          <motion.div
            key={item.id}
            className={rightOffsets[index]}
            custom={index + 3}
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
          >
            <HeroCard name={item.name} image={item.image} />
          </motion.div>
        ))}
      </div>
      {/* Button */}
      <motion.div
        className="mx-auto text-center w-fit flex items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <button className="bg-gradient-to-r from-secondary to-accent text-white h-fit px-4 py-2 rounded-md font-poppins font-medium mt-4 md:-mt-32">
          Book now
        </button>
      </motion.div>
    </div>
  );
}

export default HeroCards;
