import React from "react";
import { asset } from "../assets/asset";
import Request_A_Quote from "./Request_A_Quote";
import {motion} from "motion/react"


const QuoteSection = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: -30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
     className="relative w-full h-full">

      {/* Green Background */}
      <img
        src={asset.bg_green}
        className="absolute left-0 top-0 h-full w-full object-cover"
        alt=""
      />

      {/* White Box */}
      <div className="relative z-10 mx-auto flex gap-[-10]   max-w-6xl  py-16">
        <Request_A_Quote  />
      </div>
    </motion.div>
  );
};

export default QuoteSection;