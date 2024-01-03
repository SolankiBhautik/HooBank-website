import React from 'react'

const Buttons = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6  bg-blue-gradient font-poppins font-medium text-[18px] outline-none ${styles} rounded-[10px]`}>Get Started</button>
    )
}

export default Buttons