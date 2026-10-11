import React from "react";
import {
  RadioTower,
  Flame,
  House,
  UserRoundCheck,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

const Cards = () => {
  const cards = [
    {
      title: "Smarter Business Security",
      description:
        "Clever security system connects your security, CCTV, lights, locks and more, for true seamless automation and control.",
      icon: RadioTower,
    },
    {
      title: "Fire Detection & Life Safety",
      description:
        "We're industry leaders in the design, installation of quality fire alarm and provide systems enhance security and ensure.",
      icon: Flame,
    },
    {
      title: "Smart Home Systems",
      description:
        "Whether you're home or away, we make smart simple, have a remote access and control everything from lights, locks, and...",
      icon: House,
    },
    {
      title: "Access Control Installation",
      description:
        "Effective and simple-to-use door access control systems, we offer a decade of experience in planning, customizing and...",
      icon: UserRoundCheck,
    },
  ];

  return (
    <section>
      {/* CARDS */}
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
           <div
            key={index}
            className="group flex min-h-117.5 flex-col border border-gray-200 bg-white
                p-10 transition-all duration-300 hover:bg-[#5fba2b]">

            <div className="mb-12">
                <Icon
                size={40}
                strokeWidth={1.7}
                className=" text-black transition-colors duration-300 group-hover:text-white"  />
            </div>

                <h2 className=" mb-3 text-2xl font-bold text-gray-900
                    transition-colors duration-300 group-hover:text-white " >
                    {card.title}
                </h2>

                <p
                    className="
                    leading-7
                    text-gray-400
                    transition-colors
                    duration-300
                    group-hover:text-white
                    "
                >
                    {card.description}
                </p>

                <a
                href="#"
                className=" mt-auto inline-flex -translate-y-9 items-center gap-2
                    font-semibold  text-gray-900 transition-all duration-300 group-hover:text-white"  >
            <span
                className=" flex h-7 w-7 shrink-0 items-center  justify-center
                rounded-full bg-[#5fba2b] text-white transition-all duration-300
                group-hover:bg-white group-hover:text-[#5fba2b] ">
                <ArrowRight size={16} />
            </span>

            Explore More
            </a>

                </div>

          );
        })}
      </div>

      {/* BOTTOM SECTION */}
      
     
    </section>
  );
};

export default Cards;
