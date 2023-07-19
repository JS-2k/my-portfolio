import WorkItem from "./WorkItem"

const data = [
    {
        year : "01",
        title: 'Front-end',
        duration: '-',
        details:"HTML5 ,CSS3 ,JavaScript ,Bootstrap5 ,TailwindCSS ,Typescript ,React JS ,Angular JS. "
    },
    {
        year : "02",
        title: 'Back-end',
        duration: '-',
        details:"Node Js ,Express Js"
    },
    {
        year : "03",
        title: 'DataBase',
        duration: '-',
        details:"MongoDB ,SQL "
    },
    {
        year : "04",
        title: 'Control',
        duration: '-',
        details:"Git ,Github"
    },
    
    
]

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-yellow mb-5 text-purple-800">Skills</h1>
        {data.map((item,idx)=>(
            <WorkItem 
            key={idx} 
            title={item.title}
            year={item.year} 
            duration={item.duration}  
            details={item.details} />
        ))}
    </div>
  )
}

export default Work