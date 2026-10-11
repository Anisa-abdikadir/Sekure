import React, { useState } from "react";
import { asset } from "../assets/asset";
import Buttons from "../components/Buttons";
import { motion ,AnimatePresence } from "framer-motion";

const H_HeroSection = () => {
 const imges = [
  {
    image: asset.firsImage,
    smallTitle: "Home Security products Everyone can install, Afford And Use!",
    title: "Smart Security System For the Modern World",
    description:
      "Protect your home and family with smart security products that are easy to install, affordable, and reliable.",
    button1: "Explore Our Services",
    button2: "More About Us",
  },
  {
    image: asset.secondImage,
    smallTitle: "Advanced Security Solutions",
    title: "Protect What Matters Most With Smart Technology",
    description:
      "Discover modern security solutions designed to keep your home, business, and loved ones safe every day.",
    button1: "View Solutions",
    button2: "Learn More",
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

  // Previous image
  const prevImge = () => {
    setcurrentImage((prev) => {
      if (prev === 0) {
        return prev;
      }

      return prev - 1;
    });
  };

  return (
    <div id="hero">
    <section className="relative  overflow-hidden">
     <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={imges[currentImage].image}
          alt="Security system"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover" />
        </AnimatePresence>

      <div className=" absolute  inset-0  z-10 bg-linear-to-r from-black/70 via-black/45 to-black/10" />

        <div className="mx-auto max-w-7xl ">
           <div className=" relative  z-30 min-h-screen flex items-start pt-32 sm:pt-36 lg:pt-50 px-6 sm:px-10 lg:px-20 ">

        <AnimatePresence mode="wait">
      <motion.div
        key={currentImage}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="text-white"
      >
        

         <h3 className="text-sm sm:text-lg lg:text-md font-bold leading-tight">
          {imges[currentImage].smallTitle}
        </h3>

        <h1 className="font-bold pt-4 text-5xl sm:text-6xl md:text-7xl lg:text-7xl max-w-2xl">
          {imges[currentImage].title}
        </h1>

        <p className="mt-10 max-w-2xl text-sm sm:text-sm lg:text-xl font-medium  text-white">
          {imges[currentImage].description}
        </p>

          <div className=" relative bottom-5 z-50 mt-15 flex flex-wrap items-center gap-4" >
            <Buttons
              text="Explore Our Services"
              size="large"
              variant="secondary"
            />

            <Buttons
              text="More About Us"
              size="medium"
              variant="primary"
            />
          </div>

        </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevImge}
        className=" absolute left-4 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12
          sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center cursor-pointer transition-all duration-300" >
        <img src={asset.back} alt="Previous" className="w-full h-full object-contain"/>
      </button>

      <button
        onClick={nextImge}
        className=" absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 w-10 h-10
          sm:w-12  sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center cursor-pointer transition-all duration-300 " >
       
        <img src={asset.forward} alt="Next" className="w-full h-full object-contain"/>
      </button>

      <div className=" absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">

        {imges.map((_, index) => (
          <button
            key={index}
            onClick={() => setcurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-2 w-5 transition-all duration-300 cursor-pointer

              ${
                currentImage === index
                  ? "w-10 bg-[#65BE25]"
                  : "w-2 bg-white/70"
              }
            `}
          />
        ))}
      </div>
        </div>
     
      
    </section>
    </div>
  );
};

export default H_HeroSection;