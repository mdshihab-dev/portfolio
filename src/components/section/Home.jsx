
import image from '../../assets/images/shihab.jpg'
import HomeIntroduction from '../HomeIntroduction'

  

const Home = () => {
  return (
      <div id='home' className=' container px-2 lg:px-0 py-16 lg:py-24 z-50 lg:flex lg:justify-between lg:items-center'>
          
          <div className='hidden lg:flex'>
            <HomeIntroduction/>
          </div>

          <div className=' flex items-center justify-center lg:flex-none'>
            <div className=' scale-90 lg:scale-100 w-[330px] h-[330px] lg:w-[360px] lg:h-[360px] flex items-center justify-center overflow-hidden rounded-full border-14 dark:border-12 border-dark-main dark:border-[rgba(238,234,234,0.10)] dark:outline-3 dark:outline-[rgba(238,234,234,0.3)]'>
              <img src={image} alt="avatar" />
            </div>
          </div>

          <div className=' mt-5 flex lg:hidden'>
            <HomeIntroduction/>
          </div>
      </div>
  )
}
// [#360961]
export default Home