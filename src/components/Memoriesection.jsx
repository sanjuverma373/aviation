import React from "react";
import memories1 from '../assets/images/memories-img1.png'
import memories2 from '../assets/images/memories-img2.png'
import memories3 from '../assets/images/memories-img3.png'
import memories4 from '../assets/images/memories-img4.png'

const Memoriesection = () => {
  return (
    <div>
      <div className="max-w-[1200px] px-3 mx-auto py-[50px]">
        <p className="text-[30px] sm:text-[40px] pb-[40px] text-center text-[#011736] ff-mon font-bold leading-[60px] tracking-[0.6px] capitalize not-italic self-stretch color">
          Make memories with us
        </p>
        <div className="flex flex-row justify-center my-[50px] -mx-3 flex-wrap  pt-[50px]">
          {" "}
          <div className=" md:w-1/3 lg:w-1/4 px-3  -mt-[50px]  relative overflow-hidden">
            <img
              className="w-full rounded-[200px] hover:scale-[0.9] duration-300"
              src={memories1}
              alt="#"
            />
          </div>
          <div className=" md:w-1/3 lg:w-1/4 px-3    relative overflow-hidden">
            <img
              className="w-full h-full  rounded-[200px] hover:scale-[0.9] duration-300"
              src={memories2}
              alt="#"
            />
          </div>
          <div className=" md:w-1/3 lg:w-1/4 px-3 sm:-mt-[50px]  relative overflow-hidden">
            <div>
              <img
                className="w-full h-full rounded-[200px] hover:scale-[0.9] duration-300"
                src={memories3}
                alt="#"
              />
            </div>
          </div>
          <div className=" md:w-1/3 lg:w-1/4 px-3  relative overflow-hidden">
            <img
              className="w-full h-full rounded-[200px] hover:scale-[0.9] duration-300"
              src={memories4}
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memoriesection;
