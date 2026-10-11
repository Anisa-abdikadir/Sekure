import React from "react";
import { asset } from "../assets/asset";
import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import {motion} from "motion/react"

const Trusted_Analytics = () => {
  return (
    <section className="w-full  py-40">
      <div className="mx-auto max-w-300 px-6">
        
        <div className="relative w-full flex">
          
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          className="relative  w-full md:w-[55%]">
            <img
              src={asset.ccCame}
              alt="Security camera"
              className=" h-100 w-120 rounded-sm object-cover  md:h-125"/>

            <div className="absolute -bottom-16 ml-20 z-20 w-60 bg-[#65B530] p-7 text-white  shadow-2xl  md:-left-20">
              <p className="text-[10px] font-medium  text-white">
                        Just Don’t Worry.
                  </p>

              <h4
                className=" mt-5 text-lg  font-bold leading-tight " >
                We Take Care Of <br /> Everything For <br /> Your Home!
              </h4>

              {/* LIST */}
              <div className="mt-5 space-y-2 text-white">
                <p className="flex items-center gap-2 text-[10px] ">
                  <TiTick className="" size={16} />
                        Emergency notification
                </p>

                <p className="flex items-center gap-2 text-[10px]">
                  <TiTick className="]" size={16} />
                    Smart elevator controls
                </p>

                <p className="flex items-center gap-2 text-[10px] ">
                  <TiTick className="" size={16} />
                    And much more
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
           className="w-1/2">
          <p className="text-[#65ba2c] font-medium">Convenient System Access By Phone Or Tablet</p>
          <h1 className="text-white font-bold pt-5 text-4xl">Trusted Analytics that Give Meaning To Security Data.</h1>
          <p className="text-gray-500 pt-10 text-md">Our experts have undertaken system projects of all sizes and scopes, whether you need security system integration for your corporate office or retail store, an enterprise solution for multiple manufacturing buildings, or a complex integration for a stadium, university, hospital, or corporate campus. With over 60 offices across the World, we are leading the security system integrators with a global reach and local touch.</p>

            <div className="mt-20  ">
                <p className="text-white text-md">The peace of mind I have now is so comforting, knowing when I leave home I can still check in on my husband to make sure all is well.</p>
                    <div className="mt-5 flex gap-2 items-center">
                      <FaStar className="text-yellow-500" />
                       <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                         <FaStar className="text-yellow-500" />

                         <p className="text-white">Martin Qube Jr</p>
                
                    </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Trusted_Analytics;
