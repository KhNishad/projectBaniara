// src/components/NewsTicker.js

import React, { useState, useEffect } from 'react';

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample news items
  const newsItems = [
    'Breaking News: There Will be a meeting on friday! About the construction of the club building',
  ];

  // Change the news item every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [newsItems.length]);

  return (
    <div className="w-full bg-[#bed0f5] text-[#2b2216] py-2 overflow-hidden 2xl:container 2xl:mx-auto">
      <div className="w-full flex justify-center">
        <span className="animate-marquee text-center">
          {newsItems[currentIndex]}
        </span>
      </div>
    </div>
  );
};

export default NewsTicker;
