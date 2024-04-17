import React from 'react'
import ProjectCard from '@/components/Card'

const Projects = () => {
  return (
    <>
      <h1 className=' text-4xl lg:text-5xl font-semibold text-center mt-5 lg:mt-10 lg:mb-7'>Projects</h1>
      <div className='lg:flex lg:flex-wrap lg:justify-between lg:mx-12 mx-3'>
      <ProjectCard 
        alt="www.e-timis.ro" 
        imageSrc="/etimis.png" 
        website="https://www.e-timis.ro"
        tags={["Next.js", "Nest.js", "Postgres", "MongoDB"]}
        />

      <ProjectCard 
        alt="www.lifedesignhub.eu" 
        imageSrc="/lifedesignhub.png" 
        website="https://www.lifedesignhub.eu"
        tags={["Next.js", "Express.js", "MongoDB"]}
        />
      <ProjectCard 
        alt="www.pamquantuminvestments.com" 
        imageSrc="/pamquantuminvestments.png" 
        website="https://www.pamquantuminvestments.com"
        tags={["React", "Flask", "MySQL"]}
        />

      {/* <ProjectCard 
        alt="TO_DO_APP" 
        imageSrc="/pamquantuminvestments.png" 
        website="/git"
        tags={["Next.js"]}
        />

      <ProjectCard 
        alt="TO_DO_APP" 
        imageSrc="/pamquantuminvestments.png" 
        website="/git"
        tags={["Kotlin", "Jetpack Compose", "Room"]}
        />

      <ProjectCard 
        alt="In progress" 
        imageSrc="/pamquantuminvestments.png" 
        website="/git"
        tags={["Next.js"]}
        /> */}
        
      </div>
    </>
    
  )
}

export default Projects