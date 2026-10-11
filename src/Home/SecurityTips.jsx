import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {motion} from "motion/react"

const SecurityTips = () => {
    const cards =[

        {
        category: "Home Security",
        image: "https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/1-thieves-wear-black-hats-pry-windows-steal-things-840x562.jpg",
        title:
        "Three Important Things You Must Look For While Choosing Home Security System",
        date: "September 7, 2021",
        author: "SekureAdmin",
        description:
        "It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement....",
    },
     {
    category: "IT, Solutions",
    image: "https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/2-jonathan-kemper-VgZYweqtt9s-unsplash-840x562.jpg",
    title:
      "How Non IT Roles Can Use Security Solutions to Solve All Immerged Business Problems!",
    date: "September 7, 2021",
    author: "SekureAdmin",
    description:
      "It is natural if you feel the need for improvising on your home's security system. Mostly, homes are unguarded or have security guards. Now, in the age of technology advancement....",
  },
  {
    category: "Company, Security",
    image: "https://demo.cmssuperheroes.com/themeforest/sekure/wp-content/uploads/3-spencer-davis-2WelxiZAgbA-unsplash-840x562.jpg",
    title:
      "Why Should Manufacturing & Companies Outsource Their Commercial Security?",
    date: "September 7, 2021",
    author: "SekureAdmin",
    description:
      "Businesses are benefitting from outsourced commercial security solutions like monitoring and remote security management, and discover what's possible for manufacturing....",
  },
    ]
  return (
    <motion.div 
     initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: -30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
    className='max-w-6xl mx-auto '>
      <div className='mt-10 text-center'>
        <p className='text-[#65B530] font-semibold'>Security Tips & Resources</p>
        <h1 className='text-4xl font-bold pt-4'>Recent Articles</h1>
      </div>

      {/* card */}

      <div className='grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {cards.map((card, index) => (
          <div key={index} className='group bg-white shadow-xs'>
            <div className='relative overflow-hidden h-60'>
              <img src={card.image} alt={card.title}
                className='w-full h-full object-cover '
              />
              <span className='absolute top-8 left-8 bg-[#65B530] text-white text-sm px-3 py-2'>
                {card.category}
              </span>
            </div>
            <div className='px-7 py-7'>
              <h3 className='text-sm leading-5.5 font-bold text-[#222] mb-3 hover:text-[#65B530] transition-colors duration-300'>
                {card.title}
              </h3>
              <div className='flex flex-wrap items-center gap-2 text-sm mb-6'>
                <span className='text-gray-400'>{card.date}</span>
                <span className='text-[#65B530]'>{card.author}</span>
              </div>
              <p className='text-sm leading-4.5 text-[#999] mb-7'>
                {card.description}
              </p>
              <button className='group/btn border border-[#bbb] px-5 py-3 text-sm font-bold flex items-center gap-2 hover:bg-[#1b1b1b] hover:text-white hover:border-[#1b1b1b] transition-all duration-300'>
                <FaArrowRight className='transition-transform duration-300 group-hover/btn:translate-x-1' />
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-9'>
        <button className='flex items-center gap-3 text-sm font-medium hover:text-[#65B530] transition-colors duration-300'>
          Check All Blog Posts
          <span className='w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center transition-all duration-300 hover:bg-[#65B530] hover:text-white hover:border-[#65B530]'>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </motion.div>
  )
}

export default SecurityTips
