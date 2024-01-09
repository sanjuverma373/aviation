import React from "react";
import big1 from '../assets/images/travel-big-1.png'
import big2 from '../assets/images/travel-big-2.png'
import big3 from '../assets/images/travel-big-3.png'
import big4 from '../assets/images/travel-big-4.png'
import people1 from '../assets/images/people1.png'
import people2 from '../assets/images/people2.png'
import people3 from '../assets/images/people3.png'
import people4 from '../assets/images/people4.png'

const Travelsection = () => {
  return (
    <div>
      <div className="max-w-[1200px] px-3 mx-auto py-[50px] sm:py-[100px]">
        <p className="text-[30px] sm:text-[40px] pb-[40px] text-center text-[#011736] ff-mon font-bold leading-[60px] tracking-[0.6px] capitalize not-italic self-stretch color">
          Best travelars of this month{" "}
        </p>
        <div className="flex flex-row justify-center  -mx-3 flex-wrap   ">
          <div className="lg:w-1/3 xl:w-1/4 px-3 pt-3">
            <div className="w-[282px] mt-5  h-[420px] pb-[40px] rounded-[213px] shadow-[0_100px_200px_0_rgba(1,23,54,0.05)] bg-[#fff] crd_sh_1 duration-500 hover:translate-y-[-3%]">
              <img className="w-full " src={big1} alt="#" />
              <div className="flex justify-center -mt-[15px]">
                <img className="w-[80px] h-[80px] " src={people1} alt="#" />
              </div>
              <p className="text-2xl pt-2 pb-1 font-semibold font-ff-mon leading-[36px] text-center not-italic text-[#011736] self-stretch">
                Raju Mullah
              </p>
              <p className="text-base font-medium font-ff-mon leading-[24px] text-center not-italic text-[#979797] self-stretch">
                @rajumulllah{" "}
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 xl:w-1/4 px-3 pt-3">
            <div className="w-[282px] shadow-[0_100px_200px_0_rgba(1,23,54,0.05)] mt-5  h-[420px] pb-[40px] rounded-[213px]  bg-[#fff] crd_sh_1 duration-500 hover:translate-y-[-3%]">
              <img className="w-full" src={big2} alt="#" />
              <div className="flex justify-center -mt-[15px]">
                <img className="w-[80px] h-[80px] " src={people2} alt="#" />
              </div>
              <p className="text-2xl pt-2 pb-1 font-semibold font-ff-mon leading-[36px] text-center not-italic text-[#011736] self-stretch">
              Zaire Vetrovs
              </p>
              <p className="text-base font-medium font-ff-mon leading-[24px] text-center not-italic text-[#979797] self-stretch">
              @zairevetrovs{" "}
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 xl:w-1/4 px-3 pt-3">
            <div className="w-[282px] mt-5  h-[420px] pb-[40px] rounded-[213px] shadow-[0_100px_200px_0_rgba(1,23,54,0.05)] bg-[#fff] crd_sh_1 duration-500 hover:translate-y-[-3%]">
              <img className="w-full " src={big3} alt="#" />
              <div className="flex justify-center -mt-[15px]">
                <img className="w-[80px] h-[80px] " src={people3} alt="#" />
              </div>
              <p className="text-2xl pt-2 pb-1 font-semibold font-ff-mon leading-[36px] text-center not-italic text-[#011736] self-stretch">
              Marcus Dias
              </p>
              <p className="text-base font-medium font-ff-mon leading-[24px] text-center not-italic text-[#979797] self-stretch">
              @marcusdias
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 xl:w-1/4 px-3 pt-3">
            <div className="w-[282px] mt-5  h-[420px] pb-[40px] rounded-[213px] shadow-[0_100px_200px_0_rgba(1,23,54,0.05)] bg-[#fff] crd_sh_1 duration-500 hover:translate-y-[-3%]">
              <img className="w-full " src={big4} alt="#" />
              <div className="flex justify-center -mt-[15px]">
                <img className="w-[80px] h-[80px] " src={people4} alt="#" />
              </div>
              <p className="text-2xl pt-2 pb-1 font-semibold font-ff-mon leading-[36px] text-center not-italic text-[#011736] self-stretch">
              Davis Schleifer
              </p>
              <p className="text-base font-medium font-ff-mon leading-[24px] text-center not-italic text-[#979797] self-stretch">
              @davisschleifer{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelsection;
