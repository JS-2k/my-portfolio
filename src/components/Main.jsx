import {TypeAnimation} from 'react-type-animation';
import {FaTwitter  , FaInstagram , FaLinkedinIn } from 'react-icons/fa';
import bg from '../assets/program.png'
import {AiFillYoutube} from 'react-icons/ai'

const Main = () => {
  return (
    <div id="main">
        <div className="w-full h-screen object-cover object-left scale-x-[1] flex" src='#' alt="bg_img" >
          
          <img src={bg} className="w-full h-screen object-cover" alt='/'/>
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-8xl text-5xl font-bold text-purple-900 '>I&apos;m Jayasundar</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-900 font-bold'>I&apos;m a&nbsp;
            <TypeAnimation
                 sequence={[
                   // Same substring at the start will only be typed out once, initially
                   'Full Stack Developer',
                   2000, // wait 1s before replacing "Mice" with "Hamsters"
                   'Coder',
                   2000,
                   'Freelancer',
                   2000,
                   'Music Producer',
                   2000
                 ]}
                 wrapper="div"
                 cursor={true}
                 speed={50}
                 style={{ fontSize: '1em', paddingLeft: '5px' }}
                 repeat={Infinity}
                 />
                 </h2>
                 <div className='flex justify-between pt-5 max-w-[200px] w-full'>
                    <a href="https://twitter.com/jayasundarjs001/" target='blank'><FaTwitter className='cursor-pointer  hover:text-purple-800' href="#" size={20} /></a>
                    <a href="https://youtube.com/@Vishnuh" target='blank'><AiFillYoutube className='cursor-pointer  hover:text-purple-800' size={20}/></a>
                    <a href="https://instagram.com/js_jayasundar?igshid=OGQ5ZDc2ODk2ZA==" target='blank'><FaInstagram className='cursor-pointer  hover:text-purple-800' href="#" size={20}/></a>
                    <a href="https://www.linkedin.com/in/jayasundar-raajan-42475b204" target='blank'><FaLinkedinIn className='cursor-pointer  hover:text-purple-800' href="#" size={20}/></a>
                   
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main;