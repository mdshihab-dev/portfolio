import ToggleDarkMode from '../ToggleDarkMode'
import LogoLight from '../../assets/logos/logolight.svg'
import LogoDark from '../../assets/logos/logodark.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar'
import MenuIcon from '../../assets/icons/MenuIcon'
import { LuFileText } from 'react-icons/lu'
const Header = () => {

    let theme = useSelector((state)=> state.app.theme)
    let resume = `https://drive.google.com/file/d/1RBSKHjns0NI_FozW_QkxLVYAUk2VMNSy/view?usp=sharing`
  return (
    <div className=' px-2 lg:px-0 bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] backdrop-blur-lg sticky top-0 z-50'>
        <div className=' relative container py-4 flex items-center justify-between text-2xl '>
          <div>
            <Link to={'/'}>
              <img src={theme === 'light' ? LogoLight : LogoDark} alt="Logo"/>
            </Link>      
          </div>

          <div className=' hidden lg:flex items-center'>
            <ul className=' flex items-center gap-x-4 [&>li]:text-base [&>li]:font-inter [&>li]:font-medium dark:[&>li]:font-medium [&>li]:leading-6  [&>li]:text-paragraph dark:[&>li]:hover:text-violet-700 [&>li]:transition-all [&>li]:duration-400 dark:[&>li]:text-white [&>li]:cursor-pointer [&>li]:px-2 [&>li]:py-1.5 [&>li]:relative [&>li]:before:absolute [&>li]:before:bottom-0 [&>li]:before:left-0 [&>li]:before:w-full [&>li]:before:scale-0 [&>li]:before:h-0.5 [&>li]:before:bg-paragraph [&>li]:before:transition-all [&>li]:before:duration-400 [&>li]:before:ease-in-out [&>li]:hover:before:scale-100 [&>li]:dark:before:bg-violet-700 '>
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
            
            <span className=' mx-6 h-6 w-px bg-paragraph dark:bg-white'></span>
            <ToggleDarkMode/>
            <a href={resume} target="_blank" rel="noopener noreferrer" className=' flex items-center justify-center gap-x-1.5 ml-4 cursor-pointer font-inter font-medium text-base leading-6 text-white bg-dark-main px-4 py-1.5 rounded-lg dark:text-paragraph dark:bg-white'>
               Resume
              <LuFileText className='text-lg'/>
            </a>
          </div>

          <div className=' flex lg:hidden'>
            <MenuIcon/>
          </div>
        <Sidebar/>
        </div>
    </div>
  )
}

export default Header