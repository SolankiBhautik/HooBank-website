import React from 'react'
import styles from '../style'
import { logo, gradiant } from '../assets'
import { footerLinks, socialMedia } from '../constants'


const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10 relative'>
        <div className=' absolute inset-0 top-[-300px] scale-[1.5]  pointer-events-none blur-[60px]'>
          <img src={gradiant} alt="gradiant" className='gradiant object-contain animate-spin'/>
        </div>
          <img src={logo} alt="logo"  className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px] `}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerlink) => (
            <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 xs:mx-1 ss:mx-3 mx-5 min-w-[130px]'>
              <h4 className={`${styles.paragraph} text-white text-[20px] mb-2`}>{footerlink.title}</h4>
              <ul>{footerlink.links.map((link) => (
                <li key={link.name} className={` ${styles.paragraph} text-[14px] cursor-pointer hover:text-secondary leading-7`}>{link.name}</li>
              ))}</ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className={`${styles.paragraph} text-center text-white`}>2021 HooBank. All Rights Reserved.</p>

        <div className='flex flex-row md-mt-0 mt-6'>
          {socialMedia.map((media, index) => (
            <img key={media.id} src={media.icon} className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer