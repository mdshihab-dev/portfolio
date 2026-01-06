import Heading from "../Heading"
import ProjectPrototype from "../ProjectPrototype"
import Eshop from '../../assets/images/eshop.webp'
import Scoot from '../../assets/images/scoot.webp'
import Todo from '../../assets/images/todo-app-thumbnail.webp'
import thumbnailFour from '../../assets/images/thumbnail-4.jpg'
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"
const Portfolio = () => {
  let title = 'Portfolio'
  let [showMore,setShowMore] = useState(false) 
  let projectPrototypeData = [
    {
      imageUrl: Eshop,
      live_link: 'https://eshop-cloud.vercel.app',
      github: 'https://github.com/mdshihab-dev/eshop',
      title: 'Eshop (E-Commerce)',
      desc: `Eshop is a multi-page e-commerce website with features like product searching, filtering, shopping cart, and order management. The technologies used in this project is React.js, React Router, Tailwind CSS, React Slick ,Redux for state management.`
    }, 
    {
      imageUrl: Scoot,
      github: 'https://github.com/mdshihab-dev/scoot',
      live_link: 'https://scoot-smoky.vercel.app',
      title: 'Scoot',
      desc: `A multi-page responsive website focused on pixel-perfect UI/UX and smooth navigation, The technologies used in this project is Next.js , Tailwind CSS , Context API for state management.`
    },
    {
      imageUrl: Todo,
      github: 'https://github.com/mdshihab-dev/fullstack-todo',
      live_link: 'https://todo-application-smoky.vercel.app',
      title: 'Full-Stack Todo App',
      desc: `A Full-Stack todo application with user authentication and CRUD operations. The technologies used in this project is MERN stack with JWT authentication. Additionally used Redux for state management.`
    }, 
    {
      imageUrl: thumbnailFour,
      live_link: '/',
      title: 'Project Title',
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dignissimos, facilis odit natus voluptate debitis ipsa quae dolorem rerum officiis eum similique aperiam, suscipit facere tempora non sunt molestias sit!`
    }
  ]
  return (
    <div id="portfolio" className=" bg-light-sub-main dark:bg-dark-sub-main">
      <div className=' container px-2 lg:px-0 py-[50px] lg:py-24'>
        <Heading title={title} />
        <div className=' flex justify-center'>
          <p className=' px-[52px] lg:px-0 mt-6 text-center font-normal font-inter text-lg leading-7 text-paragraph dark:text-white max-w-xl'>
           Some of the noteworthy projects I have built:
        </p>
        </div>
        <div className=" mt-6 lg:mt-12 gap-y-4 flex flex-col lg:flex-row lg:px-20 lg:flex-wrap lg:justify-between">
            {
              projectPrototypeData.map((data,index)=>{
                return <ProjectPrototype key={index} github={data.github} live_link={data.live_link} imageUrl={data.imageUrl} title={data.title} desc={data.desc}/>
              })  
            }
            
        </div>

         {
          projectPrototypeData.length > 4 &&

          <div className=" flex justify-center">
           <button onClick={()=> setShowMore(!showMore)} className=" flex items-center gap-x-1.5 justify-between cursor-pointer rounded-1.5 mt-5 bg-[#E5E7EB] font-inter font-medium text-sm leading-5  text-light-mode px-3 py-1.5 backdrop-blur-xl dark:border-2 dark:border-[rgba(238,234,234,0.2)] dark:bg-[rgba(255,255,255,0.1)] dark:backdrop-blur-sm dark:text-white">
            {
              showMore ? <p>Show Less</p> : <p>Show More</p>
            }
            <IoIosArrowDown className={` text-lg transition-all ${showMore ? ' rotate-180' : ''}`}/>
          </button>
         </div>
         }

      </div>
    </div>
  )
}

export default Portfolio