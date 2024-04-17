'use client'
import React from 'react'
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInput = (e:any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
  
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    const mailtoLink = `mailto:banateanu.razvan1@gmail.com?subject=${"Private discussion"}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return(
    <div className="flex flex-col text-center">
      <h2 className="text-5xl lg:text-5xl font-medium mt-48 mb-12 lg:mt-32 lg:mb-8">Contact <span className=' text-stone-500'>Me</span></h2>
      <form onSubmit={handleFormSubmit} className='flex flex-col px-[4rem] lg:px-[30rem]'>
        <input type="text" name='name' placeholder="Full Name" required 
          className='border-2 mb-2 border-rose-950' />
        <input type='email' name='email' placeholder="Email address" required 
          className='border-2 mb-2 border-rose-950'/>
        <textarea name="message" id="" cols={5} rows={4} placeholder="Your message" onChange={handleInput} required  
          className='border-2 border-rose-950'/>
        <button type="submit" 
          className=" bg-orange-700 text-orange-200 rounded-md 
                      text-xl my-5 mx-24">
          Submit
        </button> 
      </form>
    </div>
  );
};

export default Contact;