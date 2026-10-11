import React from 'react'
import {ShieldAlert} from "lucide-react";
import { TiTick } from "react-icons/ti";
import Buttons from '../components/Buttons';
import { FaLongArrowAltRight } from "react-icons/fa";
import { asset } from '../assets/asset';
import {motion} from "motion/react"


const S5Home = () => {
  return (
    <div className=' w-full   '>
        <div className='max-w-6xl mx-auto'>

             <div className="flex flex-col gap-8   bg-white px-10 py-10 md:flex-row md:items-center md:justify-between lg:px-10">
        
        <div className="flex items-center gap-8 ">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gray-100">
            <ShieldAlert
              size={24}
              strokeWidth={2.5}
              className="text-[#5fba2b]"/>
          </div>

          {/* Text */}
          <p className="max-w-175 text-sm font-bold leading-7 text-gray-400">
            As the leader in home security, we can help you <br /> customize a home
            security system to meet your safety <br /> needs.
            <a
              href="#"
              className="text-black underline  underline-offset-2 hover:text-[#5fba2b]"
            >
              Schedule A Visit
            </a>
          </p>
        </div>

        {/* BUTTON */}
        <a
          href="#"
          className=" flex h-19 min-w-56.25 items-center justify-center
            border-2 border-gray-300
            px-8 text-base font-bold text-gray-900
            transition-all duration-300 hover:border-[#5fba2b] hover:bg-[#5fba2b] hover:text-white
          "
        >
          Get A Free Quote
        </a>
      </div>

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              
             className='text-white mt-30 text-center transition-all duration-150'>
                <p className='font-semibold  text-sm'>Find Peace Of Mind With Smart Home Security System</p>
                <h1 className='font-bold text-4xl pt-4'>Integrated Security Solutions & <br /> Remote Monitoring 24/7</h1>
            </motion.div>

            <div className='flex gap-6 justify-between'>
                <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className='w-1/2'>

                    <p className='text-green-400 pt-10 '>Total Control Over Securing Your Business</p>
                    <h1 className='text-4xl font-bold pt-6 text-white '>Providing The Best Practices for Industry Security Protocols & Standardizing Procedures.</h1>
                    <p className='text-white pt-8'>We can partner with you to design and implement a scalable integrated security solution that addresses your toughest security challenges, while gaining efficiencies across your systems and teams by standardizing platforms and implementing event-driving system automation and powerful solutions help</p>

                        <div className=' text-white pt-6 '>
                            <p className='flex gap-2 items-center'><TiTick className='text-green-500' />Access control systems - Fire detection alarms </p>
                             <p className='flex gap-2 items-center'><TiTick className='text-green-500' />Critical equipment condition monitoring systems </p>
                            <p className='flex gap-2 items-center'><TiTick className='text-green-500' />Video surveillance systems - Carbon sensors</p>

                        </div>

                        
                    <div className=' mt-10'>
                        <Buttons
                            text="Get A Quote"
                            size="large"
                            variant="green"
                            icon={<FaLongArrowAltRight />}
                            />
                    </div>

                </motion.div>

              

                     <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="relative">

                    {/* IMAGE */}
                    <img
                    src={asset.S5_H}
                    alt="Security camera"
                    className=" h-100  w-full mt-10 object-cover md:h-125 "/>


                    <div className="absolute  -bottom-16 left-0 w-65  bg-white p-7 shadow-2xl md:-left-16">

                    <p className="text-[10px] font-medium text-gray-400">
                        Protect Your Home!
                    </p>

                    <h4 className=" mt-3 text-lg font-bold leading-tight text-gray-900 ">
                        All The Essentials
                        <br />
                        To Help Give You
                        <br />
                        Peace Of Mind.
                    </h4>

                         <div className=' text-white pt-6 '>
                            <p className='flex gap-2 items-center text-gray-400'><TiTick className='text-green-500' /> Easy to setup and use </p>
                             <p className='flex gap-2 items-center text-gray-400'><TiTick className='text-green-500' /> Environmental Sensors </p>
                            <p className='flex gap-2 items-center text-gray-400'><TiTick className='text-green-500' /> Touch Screen Panel</p>

                        </div>

                    

                    </div>
                    </motion.div>
            </div>

        </div>
        
      
    </div>
  )
}

export default S5Home
