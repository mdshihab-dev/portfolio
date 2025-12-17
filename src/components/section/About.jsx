import Heading from "../Heading"
import image from '../../assets/images/shihab.jpg'
const About = () => {
  return (
    <div id="about" className=" bg-light-sub-main dark:bg-dark-sub-main">
      <div className=" container px-2 box-border lg:px-0 py-16 lg:py-24">
        <Heading title={'About me'}/>

        <div className=" mt-6 lg:mt-12 lg:flex items-center lg:gap-x-12">
          <div className=" lg:w-[50%] flex justify-center items-center">
            <div className=' scale-90 lg:scale-100 w-[350px] lg:w-[440px]  dark:border-15 dark:border-[rgba(238,234,234,0.10)] dark:outline-3 dark:outline-[rgba(238,234,234,0.3)] h-auto overflow-hidden'>
              <img src={image} alt="avatar" className=" rounded-2xl dark:rounded-none"/>
            </div>
          </div>


          <div className=" w-screen lg:w-[50%] lg:flex justify-center">
            <div>
              <h2 className=" text-center lg:text-start px-12 lg:px-0 font-inter font-semibold text-2xl lg:text-[30px] leading-8 lg:leading-9 text-heading -tracking-[2%] dark:text-white">
              Curious about me? Here you have it:
            </h2>
            <div className=" px-2 lg:px-0">
              <p className=" mt-6  lg:max-w-[584px] font-inter font-normal text-base leading-6 text-paragraph dark:text-white">
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </p>
            <p className=" mt-4 lg:max-w-[584px] font-inter font-normal text-base leading-6 text-paragraph dark:text-white">
              I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
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