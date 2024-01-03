import React from 'react'
import { apple, bill, google, gradiant } from '../assets'
import styles, { layout } from '../style'

const Billings = () => {
  return (
    <section id='peoduct' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-100% h-100%  relative z-[5]' />
        <div className=' absolute z-[3] -left-1/2  top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className=' absolute z-[0] -left-1/2  bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sn:block hidden' />billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[460px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex flex-wrap flex-row sm:mt-10 mt-6 relative">
          <img src={apple} alt="Apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="Google_play" className='w-[128px] h-[42px] object-contain  cursor-pointer' />
          <div className=' absolute inset-0 top-[-300px] scale-[1.5]  pointer-events-none blur-[60px]'>
            <img src={gradiant} alt="gradiant" className='gradiant object-contain animate-spin' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Billings