const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className=" relative w-[150px] h-[150px] bg-[rgba(0,0,0,0.1)] backdrop-blur-lg group p-6 rounded-xl dark:border-2 dark:border-[rgba(238,234,234,0.2)]  dark:bg-[rgba(255,255,255,0.05)] dark:backdrop-blur-sm transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-3 cursor-pointer overflow-hidden before:h-[180%] before:w-3/4 before:absolute before:top-36 before:-left-44 before:bg-[rgba(255,255,255,0.6)] before:blur-3xl before:transition-all before:duration-800 before:ease-out before:-rotate-45 hover:before:-top-52 hover:before:left-52">
      <div className="relative">
        <img 
          src={TechStackIcon}
          alt={`${Language} icon`} 
          className="relative h-16 w-16 transform transition-transform duration-300"
        />
      </div>
      <span className=" whitespace-nowrap text-paragraph dark:text-white font-inter font-semibold text-base leading-7 tracking-wide transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon; 
// 33344673