import js from '../assets/jayasundarraajan.pdf'

const Resume = () => {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <div className="text-center py-4 text-4xl font-bold text-purple-900">About</div>
        <div className="text-2xl">
        <p className="text-center">Hello! I&apos;m  Jayasundar Raajan, Aspiring Full stack web developer.
            Recently,Completed Mern Stack Course and also internship as a Front-end developer.Now,
            I&apos;m just expanding my skills in 
            three.js and framer motion to create 3D animating websites.
        </p>
        <div className="text-center mt-5 py-5">
       
        <a  href={js} download> <button className="text-center  text-white bg-purple-800 rounded-xl py-2 px-5">Resume</button></a>
            </div>
        </div>
        
    </div>
  )
}

export default Resume