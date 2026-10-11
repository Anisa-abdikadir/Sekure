import React from 'react'
import Buttons from '../components/Buttons'
import { FaLongArrowAltRight } from "react-icons/fa";
import Cards from './Cards';
import {motion} from "motion/react"


const S4Home = () => {
  return (
    <motion.div 
     initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: -30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
    className='max-w-6xl   mx-auto mt-20'>
        <div className='flex gap-6'>
            <div className='mt-10 ml-10 w-1/2'>
                <p className='font-bold text-ml'>Find peace of mind with 24/7 monitoring</p>
                <h1 className='text-4xl font-bold leading-15'>Smart Security Systems <br /> That Fits Your Business!</h1>

            </div>

            <div className='mt-15 w-1/2'>
                <p className='text-gray-500 text-sm'>Because a commercial security camera system has to produce results,
                     we offer what most security camera companies can’t. For CCTV installation companies, it’s important to treat cctv camera installation with a modern approach. Our security camera system installation department is just passionate about security installation and software.How Does It Work? Check All Services</p>

                 <div className=" bottom-5 z-50 mt-15 flex flex-wrap items-center gap-4" >
            <Buttons
              text="How Does It Work ? "
              size="large"
              variant="third"
              icon={<FaLongArrowAltRight />}
            />

            <div className="group flex items-center gap-2 font-semibold text-sm cursor-pointer">
                <span className="transition-colors group-hover:text-green-400">
                    Check All Services
                </span>

                <div
                    className="
                    flex h-6 w-6 items-center justify-center
                    rounded-full border-2 border-gray-400
                    text-black
                    transition-all
                   
                    group-hover:text-white
                    sm:h-8 sm:w-8
                    "
                >
                    <FaLongArrowAltRight className='group-hover:text-green-400' />
                </div>
                </div>
                        </div>
            </div>

        </div>
        <Cards/>
      
    </motion.div>
  )
}

export default S4Home
