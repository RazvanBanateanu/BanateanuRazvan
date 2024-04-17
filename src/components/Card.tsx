import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
    imageSrc: string
    alt:string
    website:string
    tags:string[]
  }

const ProjectCard = ({tags, website, imageSrc, alt}:CardProps) => {
    return (
    <div className=' relative my-5 mx-5 lg:w-[29%]'>
        <Link href={website}>
            <h1 className='text-xl lg:text-sm font-semibold absolute inset-x-0 text-center bg-slate-600 rounded-md px-1 bg-opacity-70 text-gray-200 overflow-hidden '>
              {alt}
            </h1>
            <Image
                width={0}
                height={0}
                sizes="500vw"
                alt={alt}
                src={imageSrc}
                className="w-auto  h-auto shadow-2xl object-cover rounded-xl "
                />

            <div className='flex absolute bottom-0 mb-1'>
            {tags.map( (tag) => 
              <div key='tag' className=' bg-purple-500 rounded-lg w-auto ml-2 text-gray-50 px-[0.3rem] text-sm lg:text-xs'>
                {tag}
              </div> )
              }
            </div>
           
        </Link>
    </div>
  )
}

export default ProjectCard