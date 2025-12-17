import Heading from "../Heading"
import ProjectPrototype from "../ProjectPrototype"
import thumbnailOne from '../../assets/images/thumbnail-1.webp'
import thumbnailTwo from '../../assets/images/thunmbnail-2.jpg'
import thumbnailThree from '../../assets/images/thumbnail-3.jpg'
import thumbnailFour from '../../assets/images/thumbnail-4.jpg'
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"
const Portfolio = () => {
  let title = 'Portfolio'
  let [showMore,setShowMore] = useState(false) 
  let projectPrototypeData = [
    {
      imageUrl: thumbnailOne,
      title: 'Project Title',
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dignissimos, facilis odit natus voluptate debitis ipsa quae dolorem rerum officiis eum similique aperiam, suscipit facere tempora non sunt molestias sit!`
    },
    {
      imageUrl: thumbnailTwo,
      title: 'Project Title',
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dignissimos, facilis odit natus voluptate debitis ipsa quae dolorem rerum officiis eum similique aperiam, suscipit facere tempora non sunt molestias sit!`
    },
    {
      imageUrl: thumbnailThree,
      title: 'Project Title',
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dignissimos, facilis odit natus voluptate debitis ipsa quae dolorem rerum officiis eum similique aperiam, suscipit facere tempora non sunt molestias sit!`
    },
    {
      imageUrl: thumbnailFour,
      title: 'Project Title',
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dignissimos, facilis odit natus voluptate debitis ipsa quae dolorem rerum officiis eum similique aperiam, suscipit facere tempora non sunt molestias sit!`
    }
  ]
  return (
    <div id="portfolio" className=" bg-light-sub-main dark:bg-dark-sub-main">
      <div className=' container py-16 lg:py-24'>
        <Heading title={title} />
        <div className=' flex justify-center'>
          <p className=' px-[52px] lg:px-0 mt-6 text-center font-normal font-inter text-lg leading-7 text-paragraph dark:text-white max-w-xl'>
           Some of the noteworthy projects I have built:
        </p>
        </div>
        <div className=" mt-6 lg:mt-12 lg:flex lg:px-20 lg:flex-wrap lg:justify-between">
            {
              projectPrototypeData.map((data,index)=>{
                return <ProjectPrototype key={index} imageUrl={data.imageUrl} title={data.title} desc={data.desc}/>
              })  
            }
            
        </div>

         <div className=" flex justify-center">
           <button onClick={()=> setShowMore(!showMore)} className=" flex items-center gap-x-1.5 justify-between cursor-pointer rounded-1.5 mt-5 bg-[#E5E7EB] font-inter font-medium text-sm leading-5  text-light-mode px-3 py-1.5 backdrop-blur-xl dark:border-2 dark:border-[rgba(238,234,234,0.2)] dark:bg-[rgba(255,255,255,0.1)] dark:backdrop-blur-sm dark:text-white">
            {
              showMore ? <p>Show Less</p> : <p>Show More</p>
            }
            <IoIosArrowDown className={` text-lg transition-all ${showMore ? ' rotate-180' : ''}`}/>
          </button>
         </div>

      </div>
    </div>
  )
}

export default Portfolio