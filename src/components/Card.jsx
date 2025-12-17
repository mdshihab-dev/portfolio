
const Card = ({imageUrl,message,name,companyName}) => {
  return (
    <div>
        <div className={` scale-95 w-full lg:w-[380px] group h-[400px] lg:h-[430px] p-6 lg:p-12 box-border pb flex flex-col items-center justify-center bg-light-main shadow-md  rounded-xl backdrop-blur-xl dark:border-2 dark:border-[rgba(238,234,234,0.2)] dark:bg-[rgba(255,255,255,0.1)] dark:backdrop-blur-sm  lg:dark:hover:border-violet-700 transition-all duration-500 dark:hover:shadow lg:dark:hover:shadow-violet-700 `}>
            <img src={imageUrl} alt="avatar" />
            <p className=' my-6 lg:max-h-[125px] transition-all duration-500 font-inter font-normal lg:overflow-hidden lg:group-hover:max-h-full text-paragraph text-base leading-6 dark:text-white'>{message}</p>
            <h3 className=' font-inter text-heading font-semibold text-xl leading-7 dark:text-white'>{name}</h3> 
            <h4 className=' mt-1 font-inter font-normal text-sm leading-5 text-paragraph dark:text-white'>{companyName}</h4>
        </div>
    </div>
  )
}

export default Card