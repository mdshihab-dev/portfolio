import Heading from "../Heading"
import ProjectPrototype from "../ProjectPrototype"
import Eshop from '../../assets/images/eshop.webp'
import Scoot from '../../assets/images/scoot.webp'
import thumbnailThree from '../../assets/images/thumbnail-3.jpg'
import thumbnailFour from '../../assets/images/thumbnail-4.jpg'
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"
const Portfolio = () => {
  let title = 'Portfolio'
  let [showMore,setShowMore] = useState(false) 
  let projectPrototypeData = [
    {
      imageUrl: Eshop,
      live_link: 'https://eshop-rosy-seven.vercel.app',
      title: 'Eshop',
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dignissimos, facilis odit natus voluptate debitis ipsa quae dolorem rerum officiis eum similique aperiam, suscipit facere tempora non sunt molestias sit!`
    },
    {
      imageUrl: Scoot,
      live_link: 'https://scoot-six-smoky.vercel.app',
      title: 'Scoot',
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dignissimos, facilis odit natus voluptate debitis ipsa quae dolorem rerum officiis eum similique aperiam, suscipit facere tempora non sunt molestias sit!`
    },
    {
      imageUrl: thumbnailThree,
      live_link: '/',
      title: 'Project Title',
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dignissimos, facilis odit natus voluptate debitis ipsa quae dolorem rerum officiis eum similique aperiam, suscipit facere tempora non sunt molestias sit!`
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
                return <ProjectPrototype key={index} live_link={data.live_link} imageUrl={data.imageUrl} title={data.title} desc={data.desc}/>
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