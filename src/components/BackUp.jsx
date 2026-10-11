import React from "react";
import { ArrowUp } from "lucide-react";
import { div } from "framer-motion/client";

const BackUp = () => {
  const handleBackToTop = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    
    <div>
        <div className="relative flex h-26 w-full items-start justify-center bg-[#262626] ">
      <a
        href="#top"
        onClick={handleBackToTop}
        aria-label="Back to top"
        className="absolute -top-6.5 z-20 flex h-32.5 w-32.5 flex-col items-center justify-start bg-[#262626] hover:bg-[#63b32e] pt-4 text-white transition-colors duration-300 "
      >
        <ArrowUp size={30} strokeWidth={2.5}
        className="mb-2 animate-bounce"/>

        <span className="text-lg font-bold">
          Back To Top
        </span>
      </a>
    </div>
     <div className="flex min-h-27 flex-col items-center justify-center gap-3 bg-white px-5 py-6 text-center md:flex-row md:justify-center md:gap-10">
        <p className="text-base text-gray-500 md:text-lg">
          ©2026 Sekure. All Rights Reserved. With Love by{" "}
          <a
            href="https://cmssuperheroes.com/"
            className="text-[#63b32e] transition-colors hover:text-black">
            CMSSuperHeroes
          </a>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-black md:gap-5 md:text-base">
          <a href="#" className="hover:text-[#63b32e]">
            Terms & Conditions
          </a>

          <span className="text-gray-500">-</span>

          <a href="#" className="hover:text-[#63b32e]">
            Privacy Policy
          </a>

          <span className="text-gray-500">-</span>

          <a href="#" className="hover:text-[#63b32e]">
            Sitemap
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackUp;
