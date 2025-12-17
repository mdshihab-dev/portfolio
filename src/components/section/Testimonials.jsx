import Heading from '../Heading'
import Card from '../Card'
import avatar from '../../assets/images/avatar.svg'
const Testimonials = () => {
  let title = 'Testimonials'
  let client_info = [
    {
      imageUrl: avatar,
      name: 'John Doe',
      companyName: 'Founder - xyz.com',
      message: `“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”`,
    },
    {
      imageUrl: avatar,
      name: 'John Doe',
      companyName: 'Founder - abc.com',
      message: `“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”`,
    },
    {
      imageUrl: avatar,
      name: 'John Doe',
      companyName: 'Freelancer',
      message: `“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”`,
    },
  ]
  return (
      <div id='testimonials' className=' container px-2 lg:px-0 py-[50px] lg:py-24'>
          <Heading title={title}/>
          <div className=' flex justify-center'>
            <p className=' text-wrap px-7 lg:px-0 mt-6 text-center font-normal font-inter text-lg leading-7 text-paragraph dark:text-white max-w-xl'>
            The skills, tools and technologies I am really good at: 
            </p>
          </div>
          <div className=' mt-6 lg:mt-12 flex flex-col lg:flex-row justify-between lg:gap-x-12 items-center'>
            {
              client_info.map((client,index)=>{
                return <Card keu={index} imageUrl={client.imageUrl} name={client.name} companyName={client.companyName} message={client.message}/>
              })
            }
          </div>
      </div>
  )
}

export default Testimonials