import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../feature/appSlice'
import ToggleDarkMode from './ToggleDarkMode'
const Sidebar = () => {
    let showSidebar = useSelector((state)=> state.app.showSidebar)
    let dispatch = useDispatch()
  return (
    <div  className={` lg:hidden py-8 w-full absolute top-[65px] transition-all duration-500 shadow-md z-100  rounded-xl bg-[#ddd] dark:bg-dark-main dark:border-2 dark:border-[rgba(255,255,255,0.1)] ${showSidebar ? '[clip-path:circle(72.0%_at_50%_48%)]' : '[clip-path:circle(0.0%_at_50%_0)]'}`}>
        <div>
           <ul className=' px-3 flex flex-col gap-3 [&>li]:text-lg [&>li]:font-inter [&>li]:font-medium dark:[&>li]:font-medium [&>li]:leading-6  [&>li]:text-paragraph dark:[&>li]:text-white [&>li]:cursor-pointer [&>li]:px-4 [&>li]:py-1.5'>
                <li onClick={()=> dispatch(toggleSidebar(false))}>
                    <a href="#home">Home</a>
                </li>
                <li onClick={()=> dispatch(toggleSidebar(false))}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=> dispatch(toggleSidebar(false))}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={()=> dispatch(toggleSidebar(false))}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=> dispatch(toggleSidebar(false))}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=> dispatch(toggleSidebar(false))}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>

        <hr className=' my-3 border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]'/>
        <div className=' my-5 flex items-center justify-between px-3'>
          <p className=' px-3 text-lg font-inter font-medium dark:font-medium leading-6  text-paragraph dark:text-white cursor-pointer'>Switch Theme</p>
          <ToggleDarkMode/>
        </div>
        <div className=' mt-6 text-center px-4'>
          <button className='w-full cursor-pointer font-inter font-semibold text-xl leading-6 text-white bg-dark-main  py-3 rounded-xl dark:text-dark-main dark:bg-white'>Download CV</button>
        </div>
    </div>
  )
}

export default Sidebar