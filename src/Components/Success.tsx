"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

interface TestimonialCardProps {
  video: string;
  name: string;
  place: string;
  thumbnail: string;
  image: string;
  rating: number;
}

const TestimonialCard = ({
  video,
  name,
  thumbnail,
  place,
  image,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="min-w-[300px] bg-white rounded-lg p-4 mx-4">
      {/* Video element */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <VideoPlayer
          videoSrc={video}
          thumbnailSrc={thumbnail}
          title={name}
          subtitle={place}
          rating={5}
          posterImage={thumbnail}
        />
      </div>

      {/* Profile section */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{place}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-2 flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

// Sample testimonial data
const testimonials = [
  {
    video: "/videos/interview_1.mp4",
    thumbnail: "/testimonials/tm1.png",
    name: "Venkatesh",
    place: "Burma automobiles",
    image: "/testimonials/tl1.png",
    rating: 5,
  },
  {
    video: "/videos/interview_2.mp4",
    thumbnail: "/testimonials/tm2.png",
    name: "Chettan",
    place: "Offspot",
    image: "/testimonials/tl2.png",
    rating: 5,
  },
];

function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value based on card width + margin
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-12 bg-gray-50 font-poppins" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-secondary mb-12">
          What Our Customers Say
        </h2>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex snap-x snap-mandatory touch-pan-x"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <motion.div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
