import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { asset } from "../assets/asset";
import Amingping from "../components/Amingping";

const S_Three_Home = () => {
  const [active, setActive] = useState(0);

  const data = [
    {
      number: "01",
      title: "Pharmaceutic & Biotech",
    },
    {
      number: "02",
      title: "Manufacturing & Logistics",
    },
    {
      number: "03",
      title: "Commercial Buildings",
    },
    {
      number: "04",
      title: "Educational Buildings",
    },
    {
      number: "05",
      title: "Healthcare Buildings",
    },
    {
      number: "06",
      title: "Residential Buildings",
    },
    {
      number: "07",
      title: "Industrial Buildings",
    },
  ];

  const visibleData = data.slice(active, active + 5);

  return (
    <div className="w-full mt-20  ">
      <div className=" relative min-h-175  w-full overflow-hidden lg:min-h-205">

        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          src={asset.SThreeHome}
          className="absolute inset-0 h-full w-full object-cover"
          alt=""/>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute inset-0 bg-black/80" />


          <div className="max-w-7xl mx-auto">
            <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className=" relative z-10   px-5 py-10 sm:px-8 sm:py-12 lg:px-20">
         
          <div className="max-w-150 text-white mt-15">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className=" text-2xl font-bold leading-tight  text-white sm:text-3xl lg:text-4xl">
              Protect What Matters Most!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className=" mt-4 max-w-140  text-ml font-bold leading-6  text-white sm:mt-6">
              Not only will this reduce the probability of crime happening on
              your property, it will reduce or eliminate any liability that
              falls on you if you can show you have solid, well-designed
              commercial building security systems in place.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards */}
        <div
          className=" relative z-10  mt-8 grid  grid-cols-1 gap-0 px-5 sm:mt-12
            sm:grid-cols-2 sm:px-8 md:grid-cols-3 lg:mt-24 lg:grid-cols-5 lg:px-20">
          {visibleData.map((items, index) => (
            <motion.div
              key={items.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className=" relative min-h-48 border  border-white/20 sm:min-h-55  lg:min-h-62.5" >
              
              <motion.div
                whileHover={{
                  scale: 1.05,
                  zIndex: 20,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="group absolute inset-0 cursor-pointer p-5
                  transition-all duration-500 ease-out  hover:scale-110 hover:bg-[#65B530] sm:p-6 lg:p-7"  >              
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-white sm:text-3xl">
                    {items.number}
                  </span>

                </div>

                <h3 className=" mt-3  text-sm font-bold leading-6 text-white sm:mt-12 sm:text-sm lg:mt-10">
                  {items.title}
                </h3>

                <div className=" translate-y-6 opacity-0 transition-all duration-500 ease-out
                    group-hover:translate-y-0 group-hover:opacity-100" >
                  <p className="flex items-center gap-2 pt-6 text-white">
                    <span
                      className=" flex h-5 w-5 items-center justify-center rounded-full bg-white text-green-600
                        transition-all duration-500 group-hover:h-5 group-hover:w-5">
                      <FaArrowRight className="text-xs" />
                    </span>

                    <span>Get Started</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="relative z-10  mt-8  flex flex-col  gap-6 px-5 pb-8 sm:mt-10 sm:px-8 lg:mt-12
            lg:flex-row lg:items-center lg:justify-between lg:px-10" >
          
          <div className="flex gap-3 ml-8 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setActive((prev) => Math.max(0, prev - 2))
              }
              // disabled={active === 0}
              aria-label="Previous"
              className=" flex h-10 w-10 items-center justify-center rounded-full  bg-white
                text-black transition hover:bg-green-500 hover:text-white disabled:cursor-not-allowed
                disabled:opacity-40 sm:h-12 sm:w-12" >
              <FaArrowLeft />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setActive((prev) =>
                  Math.min(data.length - 5, prev + 2)
                )
              }
              // disabled={active >= data.length - 5}
              aria-label="Next"
              className=" flex h-10  w-10 items-center  justify-center rounded-full bg-white text-black transition hover:bg-green-500
                hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12">
              <FaArrowRight />
            </motion.button>
          </div>

          {/* Brochure */}
          <div
            className=" flex items-center justify-between gap-3 sm:gap-4 lg:justify-end">
            <div className="text-right">
              <p className="text-[10px] text-white/60 sm:text-xs">
                Just everything you need
              </p>

              <p className="text-xs font-bold text-white sm:text-sm">
                Download Brochure
              </p>
            </div>

           
            <Amingping
            icon={<FaDownload />}
             iconColor="text-white"
            bgColor="bg-green-500"
            borderColor="none"
            iconSize="text-2xl"
            circleSize="h-10 w-10"
            
            />
          </div>
        </motion.div>
          </div>
        
      </div>

     
    </div>
  );
};

export default S_Three_Home;
