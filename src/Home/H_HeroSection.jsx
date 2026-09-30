import React, { useState } from "react";

import { asset } from "../assets/asset";

const H_HeroSection = () => {
  const imges = [
    {
      image: asset.firsImage,
    },
    {
      image: asset.secondImage,
    },
  ];

  const [currentImage, setcurrentImage] = useState(0);


  // Next image
const nextImge = () => {
  setcurrentImage((prev) => {
    if (prev === imges.length - 1) {
      return prev;
    }

    return prev + 1;
  });
};

const prevImge = () => {
  setcurrentImage((prev) => {
    if (prev === 0) {
      return prev;
    }

    return prev - 1;
  });
};


  
  

  return (
    <div>


      <section className="relative w-full  min-h-screen overflow-hidden">
      <img src={imges[currentImage].image} alt=""
        className=" absolute  w-full h-full object-cover inset-0 "/>

            <div className="absolute inset-0 z-10 bg-linear-to-r from-black/60 via-black/20 to-transparent" />

      <button onClick={prevImge}
        aria-label="Previous image"
        className="  absolute  left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20   lg:w-14
           lg:h-14 flex items-center justify-center text-[#65BE25]  transition-all
          duration-300  cursor-pointer" >
        <img src={asset.back} className="text-sm lg:text-2xl" alt="" />
      </button>


      <button
        onClick={nextImge}
        aria-label="Next image"
        className="absolute right-6 lg:right-10  top-1/2 -translate-y-1/2 z-20  w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center
          text-[#65BE25] hover:text-white transition-all duration-300 cursor-pointer">
                <img src={asset.forward} className="text-sm lg:text-2xl" alt="" />

      </button>


      <div
        className=" absolute bottom-8 left-1/2  -translate-x-1/2  z-20 flex items-center gap-3">

        {imges.map((_, index) => (
          <button
            key={index}
            onClick={() => setcurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={` h-2 rounded-full transition-all duration-300

              ${
                currentImage === index
                  ? "w-10 bg-[#65BE25]"
                  : "w-2 bg-white/70"
              } `}
          />
        ))}

      </div>
            <div className="w-full h-px absolute top-25 bg-[#2E2E2E]"></div>


    </section>
    </div>
  );



}

export default H_HeroSection
