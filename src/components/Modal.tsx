'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

import '@/styles/Navbar.css'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <button onClick={() => setIsOpen(!isOpen)} className={`hamburger ${isOpen ? 'active' : 'null'} lg:hidden md:hidden w-20 h-10 top-0 absolute cursor-pointer right-0 mt-5`}>
        <span className="bar block w-10 h-[0.30rem] bg-black mb-1"></span>
        <span className="bar block w-10 h-[0.35rem] bg-black mb-1"></span>
        <span className="bar block w-10 h-[0.30rem] bg-black"></span>
    </button>

    {isOpen && 
        <div className='lg:hidden md:hidden flex flex-col absolute mt-0 w-[100vw] items-center text-2xl font-medium bg-gray-300 bg-opacity-90'>
            <Link className='mb-1' href="/"><button onClick={() => setIsOpen(false)}>Home</button></Link>
            <Link className='mb-1' href="/mystack"><button onClick={() => setIsOpen(false)}>My Stack</button></Link>
            <Link className='mb-1'href="/projects"><button onClick={() => setIsOpen(false)}>Projects</button></Link>
            <Link className='mb-1'href="/contact"><button onClick={() => setIsOpen(false)}>Contact</button></Link>
        </div>
        } 
    </>
  )
}

export default Modal