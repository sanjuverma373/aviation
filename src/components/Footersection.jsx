import React from "react";
import { Facebook,Linkden, Twiter } from "./Icons";

const Footersection = () => {
  return (
    <div>
      <div className=" bg-[url(./assets/images/footer-bg-img.png)] bg-no-repeat bg-cover bg-center ]">
        <div className="max-w-[1200px] px-3 mx-auto pt-[50px] ">
          <div className="flex flex-row items-center justify-center flex-wrap  -mx-3 pb-[40px] pt-[32px] sm:pt-[50px]">
            <div className=" w-full lg:w-5/12  px-3">
              <div className="flex items-center  gap-2 pb-6">
                <a href="">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.76555 0C9.82456 0 11.7992 0.81789 13.2552 2.27374C14.7111 3.72959 15.5291 5.70415 15.5291 7.76304C15.5291 9.82193 14.7111 11.7965 13.2552 13.2523C11.7992 14.7082 9.82456 15.5261 7.76555 15.5261C5.70654 15.5261 3.73186 14.7082 2.27592 13.2523C0.81998 11.7965 0.00204287 9.82193 0.00204287 7.76304C0.00204287 5.70415 0.81998 3.72959 2.27592 2.27374C3.73186 0.81789 5.70654 0 7.76555 0ZM15.527 26.237C15.527 27.7723 15.0717 29.2732 14.2186 30.5499C13.3656 31.8265 12.1531 32.8215 10.7345 33.4091C9.31588 33.9966 7.7549 34.1504 6.24892 33.8508C4.74295 33.5513 3.35963 32.8119 2.27388 31.7263C1.18814 30.6406 0.448734 29.2573 0.149177 27.7514C-0.15038 26.2456 0.00336405 24.6847 0.590965 23.2662C1.17857 21.8477 2.17364 20.6352 3.45034 19.7822C4.72704 18.9292 6.22803 18.4739 7.76351 18.4739C10.6038 18.4739 13.3278 17.3457 15.3363 15.3374C17.3447 13.3291 18.473 10.6052 18.473 7.76508C18.473 6.22969 18.9283 4.72879 19.7814 3.45216C20.6344 2.17554 21.8469 1.18053 23.2655 0.592965C24.6841 0.00539897 26.2451 -0.148334 27.7511 0.151204C29.257 0.450743 30.6404 1.1901 31.7261 2.27578C32.8119 3.36146 33.5513 4.7447 33.8508 6.25058C34.1504 7.75647 33.9966 9.31736 33.409 10.7359C32.8214 12.1544 31.8264 13.3668 30.5497 14.2198C29.273 15.0728 27.772 15.5281 26.2365 15.5281C23.3965 15.5287 20.673 16.6571 18.6651 18.6654C16.6571 20.6736 15.5291 23.3971 15.5291 26.237H15.527ZM26.2365 34C24.1775 34 22.2028 33.1821 20.7469 31.7263C19.2909 30.2704 18.473 28.2958 18.473 26.237C18.473 24.1781 19.2909 22.2035 20.7469 20.7477C22.2028 19.2918 24.1775 18.4739 26.2365 18.4739C28.2955 18.4739 30.2702 19.2918 31.7261 20.7477C33.1821 22.2035 34 24.1781 34 26.237C34 28.2958 33.1821 30.2704 31.7261 31.7263C30.2702 33.1821 28.2955 34 26.2365 34ZM26.2365 28.5773C26.8572 28.5773 27.4525 28.3307 27.8915 27.8918C28.3304 27.4529 28.577 26.8576 28.577 26.237C28.577 25.6163 28.3304 25.021 27.8915 24.5821C27.4525 24.1432 26.8572 23.8966 26.2365 23.8966C25.6158 23.8966 25.0205 24.1432 24.5815 24.5821C24.1426 25.021 23.896 25.6163 23.896 26.237C23.896 26.8576 24.1426 27.4529 24.5815 27.8918C25.0205 28.3307 25.6158 28.5773 26.2365 28.5773ZM7.76555 28.5773C8.38628 28.5773 8.98158 28.3307 9.42051 27.8918C9.85943 27.4529 10.106 26.8576 10.106 26.237C10.106 25.6163 9.85943 25.021 9.42051 24.5821C8.98158 24.1432 8.38628 23.8966 7.76555 23.8966C7.14482 23.8966 6.54951 24.1432 6.11059 24.5821C5.67166 25.021 5.42508 25.6163 5.42508 26.237C5.42508 26.8576 5.67166 27.4529 6.11059 27.8918C6.54951 28.3307 7.14482 28.5773 7.76555 28.5773ZM26.2365 10.1034C26.8572 10.1034 27.4525 9.8568 27.8915 9.4179C28.3304 8.97901 28.577 8.38373 28.577 7.76304C28.577 7.14235 28.3304 6.54708 27.8915 6.10818C27.4525 5.66928 26.8572 5.42271 26.2365 5.42271C25.6158 5.42271 25.0205 5.66928 24.5815 6.10818C24.1426 6.54708 23.896 7.14235 23.896 7.76304C23.896 8.38373 24.1426 8.97901 24.5815 9.4179C25.0205 9.8568 25.6158 10.1034 26.2365 10.1034ZM7.76555 10.1034C8.38628 10.1034 8.98158 9.8568 9.42051 9.4179C9.85943 8.97901 10.106 8.38373 10.106 7.76304C10.106 7.14235 9.85943 6.54708 9.42051 6.10818C8.98158 5.66928 8.38628 5.42271 7.76555 5.42271C7.14482 5.42271 6.54951 5.66928 6.11059 6.10818C5.67166 6.54708 5.42508 7.14235 5.42508 7.76304C5.42508 8.38373 5.67166 8.97901 6.11059 9.4179C6.54951 9.8568 7.14482 10.1034 7.76555 10.1034Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <p className="font-ff-mon font-extrabold text-white tracking-[1.1px] text-[22px] leading-7 not-italic">
                  FT PLANE
                </p>
              </div>
              <p className="font-ff-mon text-base max-w-[300px] font-normal pb-6 leading-[24px] not-italic text-[#A7A7A7] mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <div className="flex items-center  gap-5">
                <a
                  href="https://www.facebook.com/login/"
                  target="_blank"
                  className="rounded-full bg-white w-[42px] h-[42px] flex items-center justify-center duration-500 hover:translate-y-[-20%]"
                >
                 <Facebook/>
                </a>
                <a
                  href="https://www.linkedin.com/company/login"
                  target="_blank"
                  className="rounded-full bg-white w-[42px] h-[42px] flex items-center justify-center duration-500 hover:translate-y-[-20%]"
                >
                 <Linkden/>
                </a>
                <a
                  href="https://twitter.com/i/flow/login?lang=en"
                  target="_blank"
                  className="rounded-full bg-white w-[42px] h-[42px] flex items-center justify-center duration-500 hover:translate-y-[-20%]"
                >
                 <Twiter/>
                </a>
              </div>
            </div>
            <div className=" w-full lg:w-7/12  px-3 pt-3">
              <div className="flex flex-row  justify-between flex-wrap  -mx-3 pt-3 ">
                <div className=" lg:w-1/3 xl:w-1/4 px-3">
                  <p className="text-2xl font-bold text-white pb-[10px] font-ff-mon leading-[150%] not-italic capitalize">
                    Address
                  </p>
                  <ul>
                    <li className="pb-[15px] ">
                      <a
                        href=""
                        className="text-base font-normal relative font-ff-mon leading-[24px] not-italic text-[#A7A7A7]  before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Integrations{" "}
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Hello{" "}
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Intercom
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Customer
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" lg:w-1/3 xl:w-1/4 px-3">
                  <p className="text-2xl font-bold text-white pb-[10px] font-ff-mon leading-[150%] not-italic capitalize">
                    About
                  </p>
                  <ul>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0  "
                      >
                        Our Blog
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0  "
                      >
                        Customers
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0  "
                      >
                        Our Team
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0  "
                      >
                        Careers
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0  "
                      >
                        Integrations{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" lg:w-1/3 xl:w-1/4 px-3">
                  <p className="text-2xl font-bold text-white pb-[10px] font-ff-mon leading-[150%] not-italic capitalize">
                    Support
                  </p>
                  <ul>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Test Zoom
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Account{" "}
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Support Center
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Live Training
                      </a>
                    </li>
                    <li className="pb-[15px]">
                      <a
                        href=""
                        className="text-base font-normal font-ff-mon leading-[24px] not-italic text-[#A7A7A7] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                      >
                        Accessibility{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className=' w-full rounded-[10px] h-[3px] stroke-[#43ff64d9] my-[40px]' />
          <p className="text-[14px] font-normal font-ff-mon text-[#FFF] tracking-[.8px] not-italic text-center pt-[0] pb-[30px] sm:pt-[40]">
            Copyright FT PLANE 2022 All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footersection;