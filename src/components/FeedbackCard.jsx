import React from 'react'
import { quotes } from '../assets'
import styles from '../style'

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between  flex-col px-10 py-12 rounded-[20px] max-w-[370px]  md:mr-10 sm:mr-5 mr-0 my-5  feedback-card'>
      <img src={quotes} alt="quotes" className='w-[42px] h-[27px]  object-contain'/>
      <p className={`${styles.paragraph} my-10`}>{content}</p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full'/>
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className={`${styles.paragraph}`}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard