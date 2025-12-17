import React from 'react'

const Heading = ({ title}) => {
  return (
    <div className=" flex justify-center">
          <h2 className="  bg-[#E5E7EB] font-inter font-medium text-xl lg:text-2xl leading-5  text-light-mode px-5 lg:px-[30px] py-3 lg:py-4 inline-block backdrop-blur-xl dark:border-2 dark:border-[rgba(238,234,234,0.2)] dark:bg-[rgba(255,255,255,0.1)] dark:backdrop-blur-sm dark:text-white">{title}</h2>
    </div>
  )
}

export default Heading