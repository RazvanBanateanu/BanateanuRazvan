import React from 'react'
import Image from 'next/image'

const MyStack = () => {
  return (
    <div className="px-10 flex flex-col lg:block lg:flex-row-reverse lg:mt-16">
      <h2 className=" text-4xl lg:text-5xl font-bold text-center mt-4 lg:mb-5">My <span className=' text-stone-500'>Stack</span></h2>
      <div className='md:flex lg:flex-row-reverse'>
        <div className=" flex justify-center my-5 lg:mx-24">
          <Image 
            width={0}
            height={0}
            sizes="80vw"
            src="/profile.jpg" 
            alt="A picture of me :D"
            className=" w-72 h-auto rounded-full lg:mx-32 "
            priority
            />
        </div>
        <div>
          <div className=' text-sm lg:text-[1.1rem] text-justify lg:w-[40rem] lg:mt-8'>
            <p><span className=' text-orange-600 font-bold'>Programming languages:</span> JavaScript, Python, Java</p> <br />
            <p><span className=' text-orange-600 font-bold'>Front-End:</span> React, Next.js</p><br/>
            <p><span className=' text-orange-600 font-bold'>Backend:</span> Express.js, Nest.js, Flask</p><br/>
            <p><span className=' text-orange-600 font-bold'>DB:</span> MongoDB, Postgress, MySQL</p><br/>
            <p><span className=' text-orange-600 font-bold'>Certifications: </span>Certifiend Cloud Practitioner, ISC2(Certified in Cyber Security) </p><br/>
            <p><span className=' text-orange-600 font-bold'>Others:</span> Docker, Kubernetes, Jenkins, C++, Rust, C#, Unity</p> <br/>
            <p><span className=' text-orange-600 font-bold'>Knowledge:</span> Certified Solution Architect Associate, CCNA, Nginx, Blockchain, Machine Learning,</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyStack