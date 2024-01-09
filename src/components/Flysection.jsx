import React from "react";
import flyimg from "../Assets/images/fly_1.png";

const Flysection = () => {
  return (
    <div>
      <div className="max-w-[1200px] px-3 mx-auto py-[50px]">
        <div className="flex flex-row items-center justify-center flex-wrap  -mx-3 ">
          <div className="md:w-1/2 lg:w-1/2 px-3">
            <img className="w-full" src={flyimg} alt="#" />
          </div>
          <div className="md:w-1/2 lg:w-1/2 px-3">
            <p className="font-ff-mon font-black leading-[24px] self-stretch text-[#313EF7] text-xl not-italic text-center md:text-start pb-2">
              Let’s Fly
            </p>
            <p className="font-ff-mon font-bold leading-[45px] self-stretch text-[#030303] text-[32px] not-italic text-center md:text-start pt-2 pb-[20px]">
              It’s one of the leading online flight booking platforms in the
              world{" "}
            </p>
            <div className="pt-[15px] ps-5 relative">
              <p className="font-medium text-base font-ff-mon text-[#030303] leading-[28px] not-italic py-[5px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text
              </p>
              <p className="font-medium text-base font-ff-mon text-[#030303] leading-[28px] not-italic py-[5px]">
                If you are going to use a passage of Lorem Ipsum
              </p>
              <p className="font-medium text-base font-ff-mon text-[#030303] leading-[28px] not-italic py-[5px]">
                Lorem Ipsum is therefore always free from repetition, injected
                humour, or non-characteristic words etc.
              </p>
              <p className="font-medium text-base font-ff-mon text-[#030303] leading-[28px] not-italic py-[5px] pb-[40px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <button className="px-[45px] py-[14px] text-base text-[#fff] rounded-[56px] text-center font-ff-mon font-semibold leading-[28px]  shadow-[inset_0_0_0_2em_#313EF7] hover:text-[#313EF7] hover:border-[#313EF7] hover:border-2 hover:border-solid   hover:shadow-inherit">
                Book Now
              </button>
              <span className="bg-[#313EF7] w-[10px] h-[10px] z-10 rounded-full absolute left-0 top-[9%]"></span>
              <span className="bg-[#313EF7] w-[10px] h-[10px] z-10 rounded-full absolute left-0 top-[21%]"></span>
              <span className="bg-[#313EF7] w-[10px] h-[10px] z-10 rounded-full absolute left-0 top-[33%]"></span>
              <span className="bg-[#313EF7] w-[10px] h-[10px] z-10 rounded-full absolute left-0 bottom-[42%]"></span>
              <span className="border-dashed bg-[#ffff4d] w-[2px] hidden sm:block md:hidden  lg:block h-[150px] absolute top-[10%] left-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flysection