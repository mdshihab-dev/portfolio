import Heading from '../Heading'
import TechStackIcon from '../TeckStackIcon'
import HTML5Icon from '../../assets/logos/html.svg'
import CSS3Icon from '../../assets/logos/css.svg'
import JSIcon from '../../assets/logos/javscript.svg'
import TypescriptIcon  from '../../assets/logos/typescript.svg'
import ReactIcon from '../../assets/logos/react.svg'
import BootstrapIcon from '../../assets/logos/bootstrap.svg'
import TailwindcssIcon from '../../assets/logos/tailwindcss.svg'
import Redux from '../../assets/logos/redux.svg'
import GitIcon from '../../assets/logos/git.svg'
import GithubIcon from '../../assets/logos/github.svg'
import ShadcnIcon from '../../assets/logos/shadcn.svg'
import NodejsIcon from '../../assets/logos/nodejs.svg'
import ExpressjsIcon from '../../assets/logos/expressjs.svg'
import NextjsIcon from '../../assets/logos/nextjs.svg'
import MongodbIcon from '../../assets/logos/mongodb.svg'

const Skills = () => {

  return (
    <div id='skills' className=' z-50'>
      <div className=' container px-2 lg:px-0 py-[50px] lg:py-24'>
        <Heading title={'Skills'}/>
        <div className=' flex justify-center'>
          <p className=' px-[30px] lg:px-0 mt-6 text-center font-normal font-inter text-lg leading-7 text-paragraph dark:text-white max-w-xl'>
           The skills, tools and technologies I am really good at: 
        </p>
        </div>


        <div className='mt-12 justify-center items-center flex gap-3 lg:gap-5 flex-wrap px-0 lg:px-[145px]'>
          <TechStackIcon Language={'HTML5'} TechStackIcon={HTML5Icon}/>
          <TechStackIcon Language={'CSS3'} TechStackIcon={CSS3Icon}/>
          <TechStackIcon Language={'JavaScript'} TechStackIcon={JSIcon}/>
          <TechStackIcon Language={'TypeScript'} TechStackIcon={TypescriptIcon}/>
          <TechStackIcon Language={'React JS'} TechStackIcon={ReactIcon}/>
          <TechStackIcon Language={'Bootstrap'} TechStackIcon={BootstrapIcon}/>
          <TechStackIcon Language={'Tailwind CSS'} TechStackIcon={TailwindcssIcon}/>
          <TechStackIcon Language={'Shadcn UI'} TechStackIcon={ShadcnIcon}/>
          <TechStackIcon Language={'Redux'} TechStackIcon={Redux}/>
          <TechStackIcon Language={'Next JS'} TechStackIcon={NextjsIcon}/>
          <TechStackIcon Language={'Git'} TechStackIcon={GitIcon}/>
          <TechStackIcon Language={'GitHub'} TechStackIcon={GithubIcon}/>
          <TechStackIcon Language={'Node JS'} TechStackIcon={NodejsIcon}/>
          <TechStackIcon Language={'Express JS'} TechStackIcon={ExpressjsIcon}/>
          <TechStackIcon Language={'MongoDB'} TechStackIcon={MongodbIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Skills