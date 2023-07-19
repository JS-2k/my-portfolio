import dalle from '../assets/dalle.png';
import frigate from '../assets/frigate.jpg';
import yara from '../assets/yara.png';
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='text-center text-4xl font-bold text-purple-900 mb-5'>Projects</h1>
        <p className='text-center p-2'>Here are my projects,</p>
        <div className='grid sm:grid-cols-2 gap-12 mt-5'>
        <ProjectItem img={yara} title='E-commerce' />
        <ProjectItem img={frigate} title='Admin Panel' />
        <ProjectItem img={dalle} title='DALL-Clone' />
        </div>
    </div>
  )
}

export default Projects;