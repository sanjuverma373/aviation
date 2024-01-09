import React from 'react'
import Navsection from './Navsection'
import aeroplane from '../assets/images/aroplane-img.webp'
import shadowa from '../assets/images/aroplane-shadow.webp'

const Headersection = () => {
        
  return (
    <div className='bg-[url(./assets/images/header-bg-img.webp)] bg-cover bg-center bg-no-repeat'> 
     <div className="max-w-[1200px] mx-auto px-3">      
      <Navsection/>
      <div className="  mx-auto px-3 min-h-[600px] md:min-h-[810px]">
        <div className="pt-[50px] relative">
          <img className="w-full" src={aeroplane} alt="abx" />
          <img className=" absolute w-full bottom-[126px] mix-blend-multiply" src={shadowa} alt="elipse" />
          <h2 className=" md:text-5xl text-[32px]  text-center pt-10 text-white font-bold  font-[Montserrat]  capitalize">
            Travel around the world
          </h2>
          <p className=" fs-[12px]  font-normal text-center pt-5 self-stretch text-[#B8B8C5] font-[Inter]">
            One of the advantages of being disorganized is that one is always
            having surprising discoveries
          </p>
        </div>
      </div>
      </div>
    </div>


  )
}

export default Headersection
