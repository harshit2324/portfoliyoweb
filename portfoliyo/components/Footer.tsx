import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'


const Footer = () => {
  return (
  <footer className='w-full  mb-[100px] pb-10 md:mb-5' id='contact'>
    
<div className='flex flex-col items-center '>
  <h1 className='heading lg:max-w-[45vw]'>
  Looking for a skilled <span className='text-purple'>MERN</span> stack developer? Let’s work together! </h1>
  <p className='text-white-200 md:mt-10 my-5 text-center'>I bring strong problem-solving skills, efficient coding, and a passion for clean, scalable solutions using the MERN stack</p>
<a href="mailto:richhariyaharshit@gmail.com">
  <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position='right' />
</a>
</div>
<div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
<p className='md:text-base text-sm md:font-normal font-light'>copyright © 2024 Harshit</p>
<div className='flex items-center md:gap-3 gap-6'>
  {socialMedia.map((profile) => (
    <div className='w-10 h-10 mt-5 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
      <img src={profile.img} alt={profile.id}
      width={20} height={20} />
       </div>
  ))}
   </div>
</div>
  </footer>
  )
}

export default Footer
