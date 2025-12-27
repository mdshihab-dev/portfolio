import Heading from "../Heading"
import image from '../../assets/images/shihab.jpg'
const About = () => {
  return (
    <div id="about" className=" bg-light-sub-main dark:bg-dark-sub-main">
      <div className=" container px-2 box-border lg:px-0 py-[50px] lg:py-24">
        <Heading title={'About me'}/>

        <div className=" mt-6 lg:mt-12 lg:flex items-center lg:gap-x-12">
          <div className=" lg:w-[50%] flex justify-center items-center">
            <div className=' scale-90 lg:scale-100 w-[350px] lg:w-[440px]  dark:border-15 dark:border-[rgba(238,234,234,0.10)] dark:outline-3 dark:outline-[rgba(238,234,234,0.3)] h-auto overflow-hidden'>
              <img src={image} alt="avatar" className=" rounded-2xl dark:rounded-none"/>
            </div>
          </div>


          <div className=" lg:w-[50%] lg:flex justify-center">
            <div>
              <h2 className=" text-center lg:text-start px-12 lg:px-0 font-inter font-semibold text-2xl lg:text-[30px] leading-8 lg:leading-9 text-heading -tracking-[2%] dark:text-white">
              Curious about me? Here you have it:
            </h2>
            <div className=" px-2 lg:px-0">
              <p className=" mt-6  lg:max-w-[584px] font-inter font-normal text-base leading-6 text-paragraph dark:text-white">
             Hello, I’m Mohammad Shihab, a MERN stack developer with 1.5 years of hands-on experience, having started my web development journey in 2024. I build scalable, high-performance web applications with clean architecture, maintainable code, and user-friendly, pixel-perfect UI. I have worked on multiple MERN projects (React.js / Next.js / Tailwind CSS / Redux / Node.js / Express / MongoDB). I have a strong problem-solving mindset and approach challenges with logical thinking. Currently, I’m seeking real-world experience to tackle new challenges and grow as a developer.
            </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About