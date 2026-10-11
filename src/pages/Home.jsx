import React from 'react'
import Navbar from '../components/Navbar'
import H_HeroSection from '../Home/H_HeroSection'
import S_T_H from '../Home/S_T_H'
import S_Three_Home from '../Home/S_Three_Home'
import S4Home from '../Home/S4Home'
import S5Home from '../Home/S5Home'
import Trusted_Analytics from "../Home/Trusted_Analytics";
import Solutions from "../Home/Solutions";
import OurCase from '../Home/OurCase'
import QuoteSection from "../Home/QuoteSection"
import SecurityTips from '../Home/SecurityTips'
import Footer from '../Home/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <H_HeroSection/>
        <S_T_H/>
        <S_Three_Home/>
        <S4Home/>
        <div className='bg-black px-10  h-full w-full'>
            <S5Home/>
        <Trusted_Analytics/>
        <Solutions/>

        </div>
        <OurCase/>
        <QuoteSection/>
        <SecurityTips/>
        <Footer/>
        
      
      
    </div>
  )
}

export default Home
