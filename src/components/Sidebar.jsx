import React from 'react'
import logoLight from '../assets/logos/logolight.svg'
import logoDark from '../assets/logos/logodark.svg'
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../feature/appSlice'
import ToggleDarkMode from './ToggleDarkMode'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    let showSidebar = useSelector((state)=> state.app.showSidebar)
    let theme = useSelector((state)=> state.app.theme)
    let dispatch = useDispatch()
  return (
    <div  className={` lg:hidden absolute transition-all h-screen top-0 ${showSidebar ? 'left-0' : '-left-full'} z-100 bg-white dark:bg-dark-sub-main w-screen`}>
        <div className=' px-2 py-4 flex justify-between items-center'>
            <Link to='/'>
              <img src={theme === 'light' ?  logoLight : logoDark} alt="logo"  />
            </Link>
            <MdOutlineClose onClick={()=> dispatch(toggleSidebar(false))} className=' text-3xl dark:text-white text-dark-main'/>
        </div>
        <hr className=' border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)]'/>

        <div className='my-5'>
           <ul className=' flex flex-col gap-4 [&>li]:text-xl [&>li]:font-inter [&>li]:font-medium dark:[&>li]:font-medium [&>li]:leading-6  [&>li]:text-paragraph dark:[&>li]:text-white [&>li]:cursor-pointer [&>li]:px-4 [&>li]:py-1.5'>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>

        <hr className=' border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)]'/>
        <div className=' my-5 flex items-center justify-between px-4'>
          <p className='text-xl font-inter font-medium dark:font-medium leading-6  text-paragraph dark:text-white cursor-pointer'>Switch Theme</p>
          <ToggleDarkMode/>
        </div>
        <div className=' mt-6 text-center px-4'>
          <button className='w-full cursor-pointer font-inter font-semibold text-xl leading-6 text-white bg-dark-main  py-3 rounded-xl dark:text-dark-main dark:bg-white'>Download CV</button>
        </div>
    </div>
  )
}

export default Sidebar