"use client";

import { useState } from "react";

export default function VideoPlayer({
  videoSrc = "/placeholder.mp4",
  thumbnailSrc = "/placeholder.svg?height=80&width=80",
  title = "Jim carry",
  subtitle = "Place",
  rating = 4,
  posterImage = "/placeholder.svg?height=600&width=800",
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // In a real implementation, you would play the video here
  };

  return (
    <div className="w-full max-w-3xl min-w-[400px] rounded-xl overflow-hidden bg-white">
      {/* Video Container */}
      <div className="relative bg-gray-200 aspect-video">
        {!isPlaying ? (
          <>
            {/* Poster Image */}
            <img
              src={posterImage || "/placeholder.svg"}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button
                onClick={handlePlayClick}
                className="w-24 h-24 bg-gray-500/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-500/80 hover:scale-105 transition-all duration-300 group"
                aria-label="Play video"
              >
                <div className="w-0 h-0 border-t-[16px] border-t-transparent border-l-[24px] border-l-yellow-300 border-b-[16px] border-b-transparent ml-2 group-hover:border-l-yellow-200"></div>
              </button>
            </div>
          </>
        ) : (
          <video
            className="w-full h-full"
            controls
            autoPlay
            poster={posterImage}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-300 shadow-md aspect-square">
            <img
              src={thumbnailSrc || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div>
            <h3 className="lg:text-xl font-bold text-amber-600">{title}</h3>
            <p className="text-amber-500 text-sm">{subtitle}</p>
          </div>
        </div>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={i < rating ? "currentColor" : "none"}
              stroke={i < rating ? "none" : "currentColor"}
              className={`w-4 h-4 lg:w-6 lg:h-6 ${
                i < rating ? "text-amber-400 drop-shadow-md" : "text-gray-300"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
