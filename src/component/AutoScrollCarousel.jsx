import React, { useEffect, useRef } from "react";

const AutoScrollCarousel = () => {
  const images = [
    "/src/assets/Flip01-139.jpg",
    "/src/assets/Flip01-35.jpg",
    "/src/assets/Flip01-40.jpg",
    "/src/assets/Flip01-42.jpg",
    "/src/assets/Flip01-57.jpg",
    "/src/assets/Flip01-177.jpg",
    "/src/assets/Flip01-179.jpg",
    "/src/assets/Flip01-184.jpg",
    "/src/assets/Flip-99.jpg",
    "/src/assets/Flip01-202.jpg",
    "/src/assets/Flip01-203.jpg",
    "/src/assets/Flip01-204.jpg",
    "/src/assets/Flip01-206.jpg",
    "/src/assets/Flip01-211.jpg",
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if(!scrollContainer) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1;
      if(scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      };
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll)
    };
    requestAnimationFrame(scroll)
  }, [])
  return (
    <div className="overflow-hidden bg-white py-5 px-10">
      <div className="relative flex w-full">
        <div
         ref={scrollRef}
         className="flex space-x-10 whitespace-nowrap"
         style={{display: "flex"}}>
          {[...images, ...images].map((src, index) => (
            <img key={index} src={src} alt={`Images ${index + 1}`} className=" h-50 md:h-80 rounded-xl w-auto object-contain" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollCarousel;