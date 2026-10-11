import React from 'react'
import {motion} from "motion/react"
import CardsOurCase from './CardsOurCase'

const OurCase = () => {
  return (
    <motion.div 
     initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: -30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='max-w-7xl mx-auto py-40'>
        <div className='flex gap-2'>
            <div className='w-1/2 px-10'>
            <h1 className='font-bold text-4xl'>Explore Our Case Studies & Latest Sucess Stories.</h1>
        </div>
        <div className='w-1/2 px-10'>
            <div className='text-gray-500 space-y-10'>
            <p>For the Security and IT directors ensuring our places of work and leisure are safe. For the Chief Technology Officers shaping the smart businesses of tomorrow. We delivers powerful and insightful security solutions that enable protectors to drive forward.</p>
            <p>We understand that in a complex world, it is not enough to solve the challenges of today, we need to be ready for the opportunities of tomorrow.</p>
            </div>
        </div>
        </div>
        <CardsOurCase/>
    </motion.div>
  )
}

export default OurCase
