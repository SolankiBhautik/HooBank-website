import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:animate-pulse `}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[104%] rounded-full`}>
        <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
          <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[110%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
              <p className='mr-2 font-poppind font-medium text-[18px] leading-[23px] text-gradient'>
                <span>Get</span>
              </p> 
                <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain '/>
            </div>
            <p className='font-poppind font-medium text-[18px] leading-[23px] text-gradient'>
                <span>Started</span>
              </p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted