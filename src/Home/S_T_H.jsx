import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { asset } from "../assets/asset";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";
// import ArrowUp from "../components/ArrowUp";
import { FaPlay } from "react-icons/fa";

import Amingping from "../components/Amingping" 


const S_T_H = () => {
  const data = [
    {
      icon: <FaRegCircle className="text-[#35da23] text-sm" />,
      text: "Smart Home Security",
    },
    {
      icon: <FaRegCircle className="text-[#35da23] text-sm" />,
      text: "Doorbell Video Cameras",
    },
    {
      icon: <FaRegCircle className="text-[#35da23] text-sm" />,
      text: "Professional Installation",
    },
    {
      icon: <FaRegCircle className="text-[#35da23] text-sm" />,
      text: "Burglary Sensor Detection",
    },
    {
      icon: <FaRegCircle className="text-[#35da23] text-sm" />,
      text: "In Home Consultation",
    },
    {
      icon: <FaRegCircle className="text-[#35da23] text-sm" />,
      text: "Smart Home Security",
    },
  ];

  return (
    <section className="w-full max-w-7xl mt-20 mx-auto overflow-hidden">

      {/* <motion.div className="grid grid-cols-1 lg:grid-cols-2 min-h-full lg:h-full"> */}
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 items-start">

           <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex  items-center  px-8 sm:px-12 lg:px-16 xl:px-10 py-16"
        >


          <div className="w-full ">

            <h1 className="text-3xl sm:text-5xl xl:text-4xl font-bold text-gray-800 leading-tight">
              Protection Against Intruders, Fires, Water & More For Every
              Window, Room And Door.
            </h1>

            <div className="flex gap-4 ml-0 sm:ml-10 lg:ml-16 mt-8">

              <div className="bg-[#EAEAEA] w-1 h-24 mt-1 rounded-full shrink-0" />

              <p className="text-[#9B9B9B] leading-7 text-sm sm:text-base">
                Helping families live intelligently means we’re always working
                to bring our customers the latest technology. As one of the
                premier providers of smart home technology, we are recognized
                throughout the industry for our products, innovation &
                customer satisfaction.
              </p>

            </div>

            <p className="mt-6 ml-0 sm:ml-14 lg:ml-20 text-[#9B9B9B] leading-7 text-sm sm:text-base">
              Don’t worry about anything, our security experts will install
              your new system, activate it, and show you how to use it.
            </p>

            <div className="ml-0 sm:ml-10 lg:ml-16 mt-10">

              <h3 className="text-xl font-bold text-gray-800">
                More Protection With Monitoring:
              </h3>

              {/* ICON + TEXT LIST */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mt-6">

                {data.map((item, index) => (
                  <div key={index}>

                    <div className="flex items-center gap-3 whitespace-nowrap">

                      <div className="bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>

                      <p className="text-black font-bold text-sm sm:text-base">
                        {item.text}
                      </p>

                    </div>

                    <div className="bg-[#EAEAEA] w-60 h-px mt-3" />

                  </div>
                ))}

              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                <Buttons
                  text="Products And Solutions"
                  size="large"
                  variant="secondary"
                  icon={<FaArrowRight />}
                />

                <Buttons
                  text="Contact Us"
                  size="large"
                  variant="third"
                  icon={<FaArrowRight />}
                />

              </div>

            </div>

          </div>

        </motion.div>


       <div className="relative min-h-100 lg:min-h-full self-stretch">
        <motion.img
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          src={asset.ST_Image}
          alt="Smart Home Security"
          className="absolute inset-0 w-full h-160 mt-15 object-cover"
        />

        <Amingping
    icon={<FaPlay />}
    text="WATCH VIDEO"
    href="https://www.youtube.com/shorts/NkX303A6gvU"
    iconColor="text-green-500"
    bgColor="bg-white"
    borderColor="border-green-500"
    textColor="text-white"
    iconSize="text-xl"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  />
</div>

      </motion.div>
      

    </section>
  );
};

export default S_T_H;
