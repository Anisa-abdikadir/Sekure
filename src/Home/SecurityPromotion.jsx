import React from 'react'
import { asset } from '../assets/asset'
import { TiTick } from "react-icons/ti";
import Buttons from "../components/Buttons"
import { FaArrowRight } from "react-icons/fa";
import {motion} from "motion/react"



const SecurityPromotion = () => {
  return (
    <motion.div
           initial={{ opacity: 0, x:60 }}
                whileInView={{ opacity: 1, x:0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
     className="w-full lg:h-198 mt-5 bg-white px-8 py-10 shadow-black/30 shadow-2xl md:px-12 md:py-14 lg:w-1/2">

            <div className="absolute -right-1 top-20 z-20 overflow-hidden h-25 w-25">
        <div className="absolute -right-7.5 top-6 flex h-7 w-36 rotate-46 items-center justify-center bg-black text-white">
          <span>Best Value</span>
        </div>
      </div>

      <div>
       <div className=''>
         <h1 className='text-2xl'>Security Promotions</h1>
        <div className='w-100 h-px mt-10 bg-black'/>
        <p className='text-sm mt-4 text-gray-500'>Our highly trained technicians will set-up your security system so you don’t have to. They’ll show you how to work your equipment so you’re up to speed on</p>
      
      <div className='flex gap-10 mt-10'>
        <img src={asset.Home_Smart} alt=""  className='w-20 object-cover text-[#58B82A]'/>
                <img src={asset.Access} alt=""  className='w-20 object-cover text-[#58B82A]'/>
        <img src={asset.data} alt=""  className='w-20 object-cover text-[#58B82A]'/>

      </div>

      <div >
        <div   className='flex gap-3 mt-10 items-center'>
          <div className='w-5 h-5  rounded-full border-2 border-gray-500'>
          <TiTick className='text-[#58B82A]' />
        </div>
        <p className='font-semibold '>Enterprise level Network Video <br /> Recorders</p>
        </div>

        <div   className='flex gap-3 mt-4 items-center'>
          <div className='w-5 h-5  rounded-full border-2 border-gray-500'>
          <TiTick className='text-[#58B82A]' />
        </div>
        <p className='font-semibold '>Streaming video over network or Internet</p>
        </div>
        

        <div   className='flex gap-3 mt-4 items-center'>
          <div className='w-5 h-5  rounded-full border-2 border-gray-500'>
          <TiTick className='text-[#58B82A]' />
        </div>
        <p className='font-semibold'>Networked systems with distributed <br /> video</p>
        </div>

        <div   className='flex gap-3 mt-4 items-center'>
          <div className='w-5 h-5  rounded-full border-2 border-gray-500'>
          <TiTick className='text-[#58B82A]' />
        </div>
        <p className='font-semibold '>Advanced management video software</p>
        </div>

        <div   className='flex gap-3 mt-4 items-center'>
          <div className='w-5 h-5  rounded-full border-2 border-gray-500'>
          <TiTick className='text-[#58B82A]' />
        </div>
        <p className='font-semibold '>Intelligent video technology storaget</p>
        </div>
      </div>

      <div className='mt-6'>
        <h1 className='font-bold text-4xl'>$59 <span className='text-sm font-normal'>/Month</span></h1>

          </div>
          <div className='mt-6 flex'>
            <Buttons
              text="Get Start Now"
              size="large"
              variant="secondary"
              icon={<FaArrowRight />}
              
            /> 

          </div>
        </div>
      </div>
     
      
    </motion.div>
  )
}

export default SecurityPromotion
