
import React from "react";
import Buttons from "../components/Buttons";
import { asset } from "../assets/asset";
import Amingping from "../components/Amingping";
import { FaPlay, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import {motion} from "motion/react"

const Solutions = () => {
  const services = [
    "Security Systems",
    "Access Control",
    "Monitoring",
    "Fire Alarms",
    "CCTV Video",
    "Global Services",
  ];

  return (
    <section className="w-full  px-5 py-16 sm:px-8 lg:px-10">
      <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
             className="mx-auto max-w-7xl">

        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left Content */}
          <div className="space-y-7 py-6 lg:py-12">

            <h3 className="font-semibold text-green-500">
              Tailored Solutions For Your Security Priorities
            </h3>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Solutions That Reduce Cost & Increase Business Efficiency.
            </h1>

            <p className="pt-2 leading-7 text-gray-400">
              We will design, install, maintain and upgrade solutions to meet
              businesses' specific needs and budgets, from large enterprises
              to local business security platforms, from simple camera
              solutions for small offices to complex enterprise-class video
              surveillance systems for large campuses.
            </p>

            {/* Services Buttons */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service} className="min-w-0">
                  <Buttons
                    text={service}
                    size="medium"
                    variant="primary"
                    rounded="full"
                  />
                </div>
              ))}
            </div>

            <p className="max-w-175 pt-3 text-base font-semibold leading-7 text-gray-400">
              Our team can also provide security integration services for
              highly complex facilities and offer preventative maintenance
              plans.{" "}
              <a
                href="#contact"
                className="text-[#5fba2b] underline underline-offset-4 transition hover:text-white"
              >
                Contact Us Now!
              </a>
            </p>
          </div>

          {/* Right Image */}
            <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: -30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} 
            className="relative min-h-100 overflow-hidden sm:min-h-125 lg:min-h-150">
            <img
              src={asset.man}
              alt="Professional security solutions"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <Amingping
              icon={<FaPlay />}
              text="WATCH VIDEO"
              href="https://www.youtube.com/shorts/NkX303A6gvU"
              iconColor="text-green-500"
              bgColor="bg-white"
              borderColor="border-green-500"
              textColor="text-white"
              iconSize="text-xl"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
         initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        
          id="contact"
          className="mx-auto mt-20 max-w-7xl text-center text-white"
        >
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Protect Your Home Or Business With
            <br className="hidden sm:block" /> Our Unique Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400">
            From large enterprises to local business security platforms,
            from simple camera solutions for small offices to complex
            enterprise-class video systems for large campuses.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row">

            <Buttons
              text="Discover More Info"
              size="large"
              variant="green"
              icon={<FaLongArrowAltRight />}
            />

            {/* Contact Number */}
            <div className="flex items-center gap-4">
              <Amingping
                icon={<IoIosCall />}
                href="tel:02200209887432"
                iconColor="text-green-500"
                bgColor="bg-white"
                borderColor="border-green-500"
                textColor="text-white"
                iconSize="text-2xl"
                className=""
              />

              <div className="text-left">
                <p className="text-sm text-gray-400">
                  Call 24HR / 7 Days
                </p>
                <h3 className="font-semibold text-white">
                  02 200209887432
                </h3>
              </div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Solutions;
