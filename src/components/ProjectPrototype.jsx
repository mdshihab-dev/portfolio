import { FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ProjectPrototype = ({imageUrl,title,desc}) => {
  return (
    <div className='  w-full lg:w-[49%] shadow-md h-auto lg:my-[13px] group box-border p-4 lg:p-6 backdrop-blur-xl dark:border dark:border-[rgba(238,234,234,0.2)] dark:bg-[rgba(255,255,255,0.03)] dark:backdrop-blur-sm rounded-xl lg:dark:hover:border-violet-700 transition-all duration-500 dark:hover:shadow lg:dark:hover:shadow-violet-700'>
        <div className='rounded-lg max-h-60 overflow-hidden'>
            <img src={imageUrl} alt="project prototype" />
        </div>
        <div className=' mt-4 mb-2.5 lg:mb-5 flex items-center justify-between'>
            <h2 className=' font-inter text-lg font-semibold dark:text-white'>{title}</h2>
            <Link to='/'>
              <div className=' flex items-center justify-center text-md gap-x-2 dark:text-violet-700'>
                   Live Demo
                   <FiExternalLink />
              </div>
            </Link>
        </div>
        <p className=' font-inter font-medium text-sm leading-relaxed line-clamp-2 dark:text-white'>{desc}</p>
    </div>
  )
}

export default ProjectPrototype