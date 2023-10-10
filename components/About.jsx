import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am an aspiring software engineer with a strong passion for technology and software development. Though I am just starting my journey in the field, I am highly motivated to learn and contribute. My dedication to mastering programming languages and problem-solving drives me to explore innovative solutions. I am eager to begin my career in software engineering and eager to make a meaningful impact.
          </p>
          <p className='py-2 text-gray-600'>
 
          </p>
          <Link href='/#projects'>
            <h3 className='py-2 text-gray-7000 cursor-pointer'>
              Check out some of my latest projects
            </h3>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
