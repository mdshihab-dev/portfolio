import Heading from '../Heading'
import { FiMail } from 'react-icons/fi'
import { MdContentCopy, MdOutlineCopyright } from 'react-icons/md'
import { LuGithub, LuPhoneCall } from 'react-icons/lu'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'
const Contact = () => {
  let title = 'Get in touch'
  let styles = ` relative cursor-pointer w-[50px] h-[50px] bg-[rgba(0,0,0,0.1)] backdrop-blur-lg group p-0 rounded-full dark:border-2 dark:border-[rgba(238,234,234,0.2)] lg:dark:hover:border-violet-700 dark:bg-[rgba(255,255,255,0.05)] dark:backdrop-blur-sm transition-all ease-in-out flex flex-col items-center justify-center gap-3 cursor-pointer`
  let fbProfile = `https://shorturl.at/mW3ap`
  let githubProfile= `https://github.com/mdshihab-dev`
  let linkedinProfile= `https://shorturl.at/Qg1p0`
  let [isCopyOne,setCopyOne] = useState(false)
  let [isCopyTwo,setCopyTwo] = useState(false)

  let handleCopy = async (copy)=>{
    if (copy === 'email') {
      navigator.clipboard.writeText('sheikhmdsihab1@gmail.com')
      setCopyOne(true)
    }
    else if (copy === 'number') {
      navigator.clipboard.writeText('+8801754481055')
      setCopyTwo(true)
    }
     setTimeout(()=> {
      setCopyOne(false)
      setCopyTwo(false)
     }, 1500)
  }
  return (
   <>
    <div id='contact' className=' bg-light-sub-main dark:bg-dark-sub-main'>
      <div className=' container px-[7px] py-[50px] lg:py-24'>
        <Heading title={title} />
        <div className=' flex justify-center'>
          <p className=' lg:px-0 mt-6 text-center font-normal font-inter text-lg leading-7 text-paragraph dark:text-white max-w-xl'>
           What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </p>
        </div>

        <div className=' py-6 lg:my-12'>
          <div className=' -ml-4.5 lg:ml-0 flex text-heading items-center justify-center text-xl lg:text-3xl dark:text-white'>
            <FiMail />
            <h2 className='lg:mx-5 mx-2 -tracking-[2%] font-inter font-semibold leading-[30px] lg:leading-10'>sheikhmdsihab1@gmail.com</h2>
            
          <span className=' left-2.5 lg:left-4 relative flex items-center justify-center'>
            <IoCheckmarkSharp  className={` text-xl lg:text-3xl absolute transition-all ${isCopyOne ? 'scale-100': ' scale-0 '}`}/>
            <MdContentCopy onClick={()=> handleCopy('email')} className={`${isCopyOne ? ' scale-0' : ' scale-100'} absolute cursor-pointer transition-all lg:dark:hover:text-violet-700`}/>
          </span>

          </div>

          <div className=' mt-4 flex items-center justify-center text-xl lg:text-3xl text-heading dark:text-white'>
            <LuPhoneCall />
            <h2 className='lg:mx-5 mx-2 -tracking-[2%] font-inter font-semibold leading-[30px] lg:leading-10'>+8801754481055</h2>
            <span className=' left-4 relative flex items-center justify-center'>
              <MdContentCopy onClick={()=> handleCopy('number')} className={`${isCopyTwo ? ' scale-0' : ' scale-100'} absolute cursor-pointer transition-all lg:dark:hover:text-violet-700`}/>
              <IoCheckmarkSharp  className={`text-xl lg:text-3xl absolute transition-all ${isCopyTwo ? 'scale-100': ' scale-0 '}`}/>
            </span>
          </div>
        </div>

        <div>
          <p className=' text-center font-inter font-normal leading-6 text-base text-paragraph dark:text-white'>You may also find me on these platforms!</p>
          <div className=' text-center mt-4 '>
            <div className=' flex items-center justify-center  gap-2.5  text-2xl'>
              <Link to={fbProfile} target='_blank' className={styles}>
                <FaFacebookF className='text-heading dark:text-white lg:dark:group-hover:text-violet-700 transition-all'/>
              </Link>
              <Link to={githubProfile} target='_blank' className={styles}>
                <LuGithub className='text-heading dark:text-white lg:dark:group-hover:text-violet-700 transition-all'/>
              </Link>
              <Link to={linkedinProfile} target='_blank' className={styles}>
                <FaLinkedinIn className='text-heading dark:text-white lg:dark:group-hover:text-violet-700 transition-all'/>
              </Link>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div className=' py-6 flex justify-center'>
        <div  className='  flex items-center justify-center gap-x-1 text-paragraph font-inter font-normal text-sm leading-5 transition-all  dark:text-white'>
          <MdOutlineCopyright className=' text-base'/>
          <p>2025 All Rights Resereved by Shihab</p>
        </div>
    </div>

   </>
  )
}

export default Contact