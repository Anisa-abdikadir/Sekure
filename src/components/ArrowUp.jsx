import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";

const ArrowUp = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");

      const isPastHero = window.scrollY > 300;

      const isFooterVisible = footer
        ? footer.getBoundingClientRect().top < window.innerHeight
        : false;

      setShowArrow(isPastHero && !isFooterVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToNavbar = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showArrow) return null;

  return (
    <motion.button
      onClick={goToNavbar}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
      className="fixed right-5 bottom-5 z-50 flex h-11 w-11
      items-center justify-center bg-[#63BE2B] text-white
      shadow-lg sm:right-5 sm:bottom-8 sm:h-15 sm:w-15"
    >
      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaLongArrowAltUp size={22} />
      </motion.span>
    </motion.button>
  );
};

export default ArrowUp;