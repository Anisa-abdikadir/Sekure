import React, {  useState } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { asset } from "../assets/asset";
import {motion} from "motion/react"

const CardsOurCase = () => {
  const [active, setActive] = useState(0);
  const [nexImage,setNextImage] =useState(0);



  const data = [
    {
      category: "Resources, Security",
      title: "The Comprehensive Guide To Smart Doorbell Camera",
      description:
        "Keeping your house safe even when you aren’t at home is important to many of us. Whether you have a family, pets, or important assets to secure, it can be helpful to have home security.",
      image:
      "https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/doorbell-840x562.jpg",
    },
    {
      category: "Detection, Fire Alarms",
      title: "Getting The Right Fire Alarm Detection System Online",
      description:
        "The systems feature manual call and sounder devices wirelessly linked to main panel. Whilst wireless systems are more expensive than hard wired standard versions, they negate the.",
      image:
      "https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/fire-alarm-840x562.jpg",
    },
    {
      category: "CCTV, Security",
      title: "Helping Manufacturers With Workplace Essential Safety",
      description:
        "As a key manufacturer of pharmaceutical and medical packaging, they have a workforce that has been designated as its packaging is used with a wide range of medical equipment.",
      image:
      "https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/stole-house-door-using-iron-840x562.jpg",

    },
    {
      category: "Monitoring, Security",
      title: "Vendors With Resources To Deliver Safety & Security",
      description:
        "Smaller security companies may not have adequate means to support the longevity of their projects, this generally isn’t an issue for larger companies.",
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Smart Security",
      title: "Modern Security Solutions For Every Business",
      description:
        "Protect your business with reliable and modern security systems designed to provide complete protection and peace of mind.",
      image:
      "https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/camera-2-840x562.jpg",
    },
    {
      category: "Access Control",
      title: "Advanced Access Control Systems",
      description:
        "Control who enters your property with advanced access control solutions that combine security, convenience and technology.",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
    },
  ];

 
  const nextSlide = () => {
  setActive((prev) => (prev + 1) % data.length);
};

const prevSlide = () => {
  setActive((prev) => (prev - 1 + data.length) % data.length);
};

  return (
    <section className=" mt-10  overflow-hidden">
      <div className="max-w-350 mx-auto px-5">


        {/* CARDS */}
        <div className="relative">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {Array.from({ length: 4 }).map((_, position) => {

              const item = data[(active + position) % data.length];

              return (
                <div
                  key={`${item.title}-${position}`}
                  className=" group bg-white border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                    overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.13)]">

                  <div className="relative h-55 overflow-hidden">

                    <img src={item.image}
                      alt={item.title}
                      className=" w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"/>

                     {/* DARK OVERLAY  */}
                    <div className=" absolute inset-0 group-hover:bg-black/20 transition-all duration-500"/>

                    <span
                      className="absolute bottom-0 left-0 bg-[#58B82A] text-white text-[11px] font-medium  px-4 py-2">
                      {item.category}
                    </span>

                  </div>


                  {/* CONTENT */}
                  <div className="relative p-7 min-h-67.5">

                    <h3
                      className=" text-[19px] leading-6 font-bold text-[#242F42] transition-colors duration-300
                        group-hover:text-[#58B82A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500 line-clamp-4">
                      {item.description}
                    </p>


                    {/* READ MORE */}
                    <div className=" absolute bottom-0 right-0  translate-y-0
                        group-hover:translate-y-0 transition-all duration-500" >
                    <button className="group/read flex items-center  justify-center gap-2
                        w-11 h-11 border border-gray-200 bg-white text-[#242F42] overflow-hidden
                        transition-all duration-500 group-hover:w-31.25 group-hover:bg-[#242F42]
                        group-hover:text-white">

                                {/* bofer hover */}
                        <FaArrowRightLong className=" shrink-0 transition-transform duration-300
                            group-hover:translate-x-1" />

                        {/* Text */}
                        <span
                        className=" whitespace-nowrap opacity-0 max-w-0 overflow-hidden transition-all duration-500
                            group-hover:opacity-100 group-hover:max-w-20"> Read More
                        </span>
                    </button>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>


          {/* BOTTOM CONTROLS */}
          <div className="flex items-center justify-between mt-10">

                 {/* DOT / PROGRESS */}
              <div className="flex items-center gap-2">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActive(index * 2);
                    }}
                    className={`
                      h-3 transition-all duration-300 cursor-pointer
                      ${
                        Math.floor(active / 2) % 2 === index
                          ? "w-8 bg-[#58B82A]"
                          : "w-4 bg-[#242F42]"
                      }
                    `}
                  />
                ))}
              </div>


            {/* ARROWS */}
            <div className="flex items-center gap-3">

              <button
                onClick={prevSlide}
                className="w-11  h-11 rounded-full  bg-gray-100 flex items-center justify-center
                  text-[#242F42] transition-all duration-300 hover:bg-[#58B82A] hover:text-white">
                <FaArrowLeft className="text-sm" />
              </button>

              <button
                onClick={nextSlide}
                className=" w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-[#242F42]
                  transition-all duration-300 hover:bg-[#58B82A] hover:text-white" >
                <FaArrowRight className="text-sm" />
              </button>

            </div>

          </div>

        </div>

      </div>

      <div className="w-full h-px bg-gray-200 mt-10"/>

      <div className="flex gap-5  max-w-7xl mx-auto">
        <motion.div
         initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" px-10 py-15">
          
                <p className=" text-sm font-semibold   text-gray-400">
                    Provide better security and control for residential and<br />business customers
                    <a
                    href="#"
                    className="text-[#5fba2b]  underline underline-offset-4 "
                    > <span className="text-black hover:text-[#5fba2b]">Compare Security Options!</span>
                    </a>
                </p>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
         className="flex gap-10 mt-20  ">
          <img src="https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/8.png" 
          alt="" className="w-40 h-10"/>
            <img src="https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/9.png"
              alt="" className="w-40 h-10"/> 
              <img src="https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/10.png"
               alt="" className="w-40 h-10" />            
                  <img src="https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/11.png" 
                  alt=""  className="w-40 h-10"/>
        </motion.div>
      </div>
    </section>
  );
};

export default CardsOurCase;