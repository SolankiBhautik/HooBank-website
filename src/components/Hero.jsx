import React from 'react'
import styles from '../style'
import { discount, robot, gradiant } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={` flex md:flex-row  flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32] h-[32] '/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white '>20%</span> Discount For {" "}
            <span className='text-white'>1 Month</span> Amount
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden '/>{" "} 
            <span className='text-gradient'>Generation</span>{" "}
            
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>
        <h1  className='text-white font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full'>
        Payment Mathod.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.
        </p>
      </div>
      <div className=' relative'>
        <img src={robot} alt="robot pic" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className=' absolute inset-0 top-[-300px] scale-[1.5]  pointer-events-none blur-[60px]'>
          <img src={gradiant} alt="gradiant" className='gradiant object-contain animate-spin'/>
        </div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero