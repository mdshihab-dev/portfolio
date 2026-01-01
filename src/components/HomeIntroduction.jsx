import LocationIcon from '../assets/icons/LocationIcon'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { LuGithub } from 'react-icons/lu'

const HomeIntroduction = () => {
  let fbProfile = `https://shorturl.at/mW3ap`
  let githubProfile= `https://github.com/mdshihab-dev`
  let linkedinProfile= `https://shorturl.at/Qg1p0`
  let styles = ` relative cursor-pointer w-[50px] h-[50px] bg-[rgba(0,0,0,0.1)] backdrop-blur-lg group p-0 rounded-full dark:border-2 dark:border-[rgba(238,234,234,0.2)] lg:dark:hover:border-violet-700 dark:bg-[rgba(255,255,255,0.05)] dark:backdrop-blur-sm transition-all ease-in-out flex flex-col items-center justify-center gap-3 cursor-pointer`

  return (
    <div>
            <h1 className=' font-inter text-heading dark:text-white font-bold leading-10 lg:leading-[72px] text-4xl lg:text-6xl -tracking-[2%] text-center lg:text-start'>Hi, I’m Shihab</h1>
            <p className=' text-center  lg:pr-20 lg:text-start mt-2 font-inter font-normal text-base leading-6 text-paragraph max-w-3xl dark:text-white'>
              I’m a MERN stack developer with a focus on creating fast, responsive, and user-friendly web applications with clean code and pixel-perfect design. I’ve been working with web technologies for over a year, and I still love it as if it were something new.
            </p>

            <div className=' flex justify-center lg:inline-block '>
                <p className=' flex items-center gap-2 mt-6 lg:mt-12 font-inter font-normal text-base leading-6 text-paragraph dark:text-white'>
                <LocationIcon/>
                Dhaka, Bangladesh
                </p>
            </div>

            <p className=' justify-center lg:justify-start mt-2 flex items-center gap-2 font-inter font-normal text-base leading-6 text-paragraph dark:text-white'>
                <div className=' h-6 w-6 relative flex items-center justify-center'>
                    <div className=' h-2.5 w-2.5 absolute rounded-full bg-[#3aca0e]'></div>
                    <div className='animation absolute h-2.5 w-2.5 rounded-full '></div>
                </div>
                Available for new projects
            </p>

              <div className='mt-6 lg:mt-12 flex items-center justify-center lg:justify-start  gap-2.5'>
                <Link to={fbProfile} target='_blank' className={styles}>
                  <FaFacebookF className='text-heading dark:text-white lg:dark:group-hover:text-violet-700 transition-all text-2xl'/>
                </Link>
                <Link to={githubProfile} target='_blank' className={styles}>
                  <LuGithub className='text-heading dark:text-white lg:dark:group-hover:text-violet-700 transition-all text-2xl'/>
                </Link>
                <Link to={linkedinProfile} target='_blank' className={styles}>
                  <FaLinkedinIn className='text-heading dark:text-white lg:dark:group-hover:text-violet-700 transition-all text-2xl'/>
                </Link>
            </div>
          </div>
  )
}

export default HomeIntroduction