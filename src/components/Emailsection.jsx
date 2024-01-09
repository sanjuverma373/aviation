import React from "react";

const Emailsection = () => {
  return (
    <div>
      <div className="bg-[#f5f5ff] py-[32px] sm:py-[50px]">
        <div className="max-w-[1200px] px-3 mx-auto py-[50px]  ">
          <div className="flex flex-col items-center justify-center">
            <p className="text-center text-[30px] sm:text-[40px]  max-w-[534px] pb-[40px] font-bold font-ff-mon leading-[60px] tracking-[.6px] text-[#011736] not-italic capitalize">
              Subscribe Newsletter & get letest news
            </p>
            <div className="py-[11px] ps-[20px] pe-[11px] bg-[#ffffff] flex justify-between items-center rounded-[150px] w-[493px] max-w-[100%]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="font-normal leading-[24px] border-none w-full outline-none  text-xl  text-[#AEB5BF] not-italic font-ff-rub opacity-90"
              />
              <button className="text-base hidden sm:block font-ff-mon font-semibold leading-[28px] text-[#fff] not-italic text-center bg-[#313EF7] rounded-[56px] px-[25px] py-[10px]">
                Subscribe
              </button>
            </div>
            <button className="text-base block sm:hidden mt-3 font-ff-mon font-semibold leading-[28px] text-[#fff] not-italic text-center bg-[#313EF7] rounded-[56px] px-[25px] py-[10px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emailsection;