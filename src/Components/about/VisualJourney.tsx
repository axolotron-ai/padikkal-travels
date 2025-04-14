"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

function VisualJourney() {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVideoOpacity = () => {
      if (!videoContainerRef.current) return;

      const container = videoContainerRef.current;
      const videos = container.getElementsByClassName("video-item");
      const containerCenter = container.offsetLeft + container.offsetWidth / 2;

      Array.from(videos).forEach((video: Element) => {
        const videoElement = video as HTMLElement;
        const videoCenter =
          videoElement.offsetLeft + videoElement.offsetWidth / 2;
        const distance = Math.abs(containerCenter - videoCenter);
        const maxDistance = container.offsetWidth / 2;
        const opacity = Math.max(0.3, 1 - (distance / maxDistance) * 0.7);
        videoElement.style.opacity = opacity.toString();
      });
    };

    const container = videoContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateVideoOpacity);
      updateVideoOpacity(); // Initial update
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateVideoOpacity);
      }
    };
  }, []);

  return (
    <div className="mt-20 mx-40">
      <h1 className="text-secondary font-bold text-3xl mb-10">
        Our Visual Journey
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        <Image
          src="/about/visual_journey.png"
          alt="journey"
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-cover rounded-lg"
        />
        <Image
          src="/about/visual_journey.png"
          alt="journey"
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-cover rounded-lg"
        />
        <Image
          src="/about/visual_journey.png"
          alt="journey"
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-cover rounded-lg"
        />
        <Image
          src="/about/visual_journey.png"
          alt="journey"
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-cover rounded-lg"
        />
        <Image
          src="/about/visual_journey.png"
          alt="journey"
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-cover rounded-lg"
        />
        <Image
          src="/about/visual_journey.png"
          alt="journey"
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-cover rounded-lg"
        />
      </div>

      <h2 className="text-secondary font-bold text-2xl mb-6">
        Journey Through Videos
      </h2>
      <div
        ref={videoContainerRef}
        className="relative w-full overflow-x-auto pb-8 hide-scrollbar"
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex space-x-8 px-[40%]">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="video-item flex-shrink-0 w-[600px] rounded-xl overflow-hidden transition-opacity duration-300"
              style={{ scrollSnapAlign: "center" }}
            >
              <video
                className="w-full h-full object-cover"
                controls
                poster="/about/video-thumbnail.jpg"
              >
                <source src={`/videos/journey-${index}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="my-20 mx-40 font-poppins flex flex-col items-center">
        <h1 className="text-[#0A2538] font-medium text-xl text-center">
          Ready to embark on a journey with a great comfort for you?
        </h1>
        <button className="bg-gradient-to-r from-secondary to-accent text-white rounded-md px-4 py-3 mt-4">
          Let's connect
        </button>
      </div>
    </div>
  );
}

export default VisualJourney;
