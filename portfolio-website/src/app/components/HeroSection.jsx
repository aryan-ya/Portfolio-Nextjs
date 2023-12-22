import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl   font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
            Hello,  I'm {" "}
                  
        </span>
      </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
      voluptuous.</p>
      <div>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500  bg-white  hover:bg-slate-200 text-black">Hire me</button>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent  hover:bg-slate-800  text-white border border-white mt-3">Download Resume</button>
      </div>

      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className=" w-500 h-400 lg:w-[400px]  relative">
        <Image src="/image/hero-img.gif"
        alt="Hero image"
        className=" transform "
        width={400}
        height={400}       
        
        />
        </div>
      
      </div>
        </div>
    </section>
  )
}

export default HeroSection