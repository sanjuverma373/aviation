import React from "react";
import worldairplane from "../assets/images/earthimg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card from "../assets/images/flight-card.png";
import cardlayer from "../assets/images/slider-layar.png";
import { Plane, Arrowleft ,Arrowright ,Cardline, Barcode, Card1, Card2, Card3 } from "./Icons";
const Flight = () => {
        const first = React.useRef(null);
        const settings = {
                dots: true,
                arrows: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,

                responsive: [
                        {
                                breakpoint: 1024,
                                settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                },
                        },
                        {
                                breakpoint: 640,
                                settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        fade: false,
                                },
                        },
                ],
        };
        return (
                <div className="bg-[#010223] overflow-hidden">
                        <div className=" max-w-[1040px] mx-auto px-3 py-[50px]">
                                <div className=" flex flex-wrap flex-row -mx-3">
                                        <div className="lg:w-1/2 w-full px-3">
                                                <h2 className=" text-white sm:text-[40px] text-[30px]  font-bold sm:leading-[60px] leading-[30px] tracking-[0.6px]  uppercase lg:max-w-[496px]">
                                                        Book Popular Flight Tickets
                                                </h2>
                                                <p className="text-[#A6A7B2]  text-base font-normal leading-[24px] lg:max-w-[496px]">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's
                                                </p>
                                                <img
                                                        src={worldairplane}
                                                        alt="worldairplane"
                                                        className=" flex justify-center  w-full max-w-[315px] h-[315px]"
                                                />
                                        </div>
                                        <div className="lg:w-1/2 w-full px-3 relative ">
                                                <Slider {...settings} ref={first}>
                                                        
                                                        <div className=' w-full relative md:w-1/2 px-3 flex flex-col lgg:flex-row lgg:justify-between gap-4  md:gap-[80px] lgg:gap-[unset] pt-5 '>
                                                                <div className=' bg-[#FFFFFF] px-[12px] xs:px-[17px] py-[20px] xs:py-[30px] rounded-[30px] max-w-[390px] border-[unset]  overflow-hidden relative xxs:mx-auto md:mx-0 -mt-4' data-aos="fade-left">
                                                                        <div className=' flex flex-wrap flex-row -mx-3 px-[13px]'>
                                                                                <div className=' w-1/2 px-3'>
                                                                                        <button className='text-[#313EF7] font-ff-mont text-[10px] xxs:text-[14px] lgg:text-[16px] font-medium p-[8px_10px] rounded-[49px] bg-[#313ef71a] cursor-pointer hover:shadow-[#313ef71a]'>Economy Saver</button>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-base font-bold font-ff-mont leading-[normal] xss:leading-[150%] mt-[24px]'>6 Flight Tickets</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[24px]'>Passenger</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Raju Mullah</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Flight</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>#5486626661</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Class</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Economy</p>
                                                                                </div>
                                                                                <div className=' w-1/2 px-3'>
                                                                                        <div className=' flex items-center gap-[7.5px] justify-end'><p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>UK</p>
                                                                                                <Plane />
                                                                                                <p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>BD</p>
                                                                                        </div>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[60px] xxs:pt-[80px]'>Date</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 Nov 2022</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Gate</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 A</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Seats</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>5B - 11B</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className='pt-[25px] xxs:pt-[38px]'> <Cardline /></div>
                                                                        <div className='pt-[20px] xxs:pt-[47px] max-w-[356px] overflow-hidden'><Barcode /></div>
                                                                        <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] left-[-5%]'></div>
                                                                        <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] right-[-5%]'></div>
                                                                </div>
                                                                
                                                                <div className=' absolute z-0 top-[60px] left-[70px] hidden lg:block' data-aos="fade-left"> <Card1 /></div>
                                                                <div className=' absolute z-1 top-[40px] left-[50px] hidden lg:block' data-aos="fade-left"> <Card2 /></div>
                                                                <div className=' absolute z-1 top-[20px] left-[30px] hidden lg:block' data-aos="fade-left"> <Card3 /></div>
                                                        </div>
                                                        <div className=' w-full relative md:w-1/2 px-3 flex flex-col lgg:flex-row lgg:justify-between gap-4  md:gap-[80px] lgg:gap-[unset] pt-5 '>
                                                                <div className=' bg-[#FFFFFF] px-[12px] xs:px-[17px] py-[20px] xs:py-[30px] rounded-[30px] max-w-[390px] border-[unset]  overflow-hidden relative xxs:mx-auto md:mx-0 -mt-4' data-aos="fade-left">
                                                                        <div className=' flex flex-wrap flex-row -mx-3 px-[13px]'>
                                                                                <div className=' w-1/2 px-3'>
                                                                                        <button className='text-[#313EF7] font-ff-mont text-[10px] xxs:text-[14px] lgg:text-[16px] font-medium p-[8px_10px] rounded-[49px] bg-[#313ef71a] cursor-pointer hover:shadow-[#313ef71a]'>Economy Saver</button>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-base font-bold font-ff-mont leading-[normal] xss:leading-[150%] mt-[24px]'>6 Flight Tickets</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[24px]'>Passenger</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Ram</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Flight</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>#5486626661</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Class</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Economy</p>
                                                                                </div>
                                                                                <div className=' w-1/2 px-3'>
                                                                                        <div className=' flex items-center gap-[7.5px] justify-end'><p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>UK</p>
                                                                                                <Plane />
                                                                                                <p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>BD</p>
                                                                                        </div>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[60px] xxs:pt-[80px]'>Date</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 Nov 2022</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Gate</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 A</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Seats</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>5B - 11B</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className='pt-[25px] xxs:pt-[38px]'> <Cardline /></div>
                                                                        <div className='pt-[20px] xxs:pt-[47px] max-w-[356px] overflow-hidden'><Barcode /></div>
                                                                        <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] left-[-5%]'></div>
                                                                        <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] right-[-5%]'></div>
                                                                </div>
                                                                
                                                                <div className=' absolute z-0 top-[60px] left-[70px] hidden lg:block' data-aos="fade-left"> <Card1 /></div>
                                                                <div className=' absolute z-1 top-[40px] left-[50px] hidden lg:block' data-aos="fade-left"> <Card2 /></div>
                                                                <div className=' absolute z-1 top-[20px] left-[30px] hidden lg:block' data-aos="fade-left"> <Card3 /></div>
                                                        </div>
                                                        <div className=' w-full relative md:w-1/2 px-3 flex flex-col lgg:flex-row lgg:justify-between gap-4  md:gap-[80px] lgg:gap-[unset] pt-5 '>
                                                                <div className=' bg-[#FFFFFF] px-[12px] xs:px-[17px] py-[20px] xs:py-[30px] rounded-[30px] max-w-[390px] border-[unset]  overflow-hidden relative xxs:mx-auto md:mx-0 -mt-4' data-aos="fade-left">
                                                                        <div className=' flex flex-wrap flex-row -mx-3 px-[13px]'>
                                                                                <div className=' w-1/2 px-3'>
                                                                                        <button className='text-[#313EF7] font-ff-mont text-[10px] xxs:text-[14px] lgg:text-[16px] font-medium p-[8px_10px] rounded-[49px] bg-[#313ef71a] cursor-pointer hover:shadow-[#313ef71a]'>Economy Saver</button>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-base font-bold font-ff-mont leading-[normal] xss:leading-[150%] mt-[24px]'>6 Flight Tickets</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[24px]'>Passenger</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Suresh</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Flight</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>#5486626661</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Class</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Economy</p>
                                                                                </div>
                                                                                <div className=' w-1/2 px-3'>
                                                                                        <div className=' flex items-center gap-[7.5px] justify-end'><p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>UK</p>
                                                                                                <Plane />
                                                                                                <p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>BD</p>
                                                                                        </div>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[60px] xxs:pt-[80px]'>Date</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 Nov 2022</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Gate</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 A</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Seats</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>5B - 11B</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className='pt-[25px] xxs:pt-[38px]'> <Cardline /></div>
                                                                        <div className='pt-[20px] xxs:pt-[47px] max-w-[356px] overflow-hidden'><Barcode /></div>
                                                                        <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] left-[-5%]'></div>
                                                                        <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] right-[-5%]'></div>
                                                                </div>
                                                                
                                                                <div className=' absolute z-0 top-[60px] left-[70px] hidden lg:block' data-aos="fade-left"> <Card1 /></div>
                                                                <div className=' absolute z-1 top-[40px] left-[50px] hidden lg:block' data-aos="fade-left"> <Card2 /></div>
                                                                <div className=' absolute z-1 top-[20px] left-[30px] hidden lg:block' data-aos="fade-left"> <Card3 /></div>
                                                        </div>
                                                        <div className=' w-full relative md:w-1/2 px-3 flex flex-col lgg:flex-row lgg:justify-between gap-4  md:gap-[80px] lgg:gap-[unset] pt-5 '>
                                                                <div className=' bg-[#FFFFFF] px-[12px] xs:px-[17px] py-[20px] xs:py-[30px] rounded-[30px] max-w-[390px] border-[unset]  overflow-hidden relative xxs:mx-auto md:mx-0 -mt-4' data-aos="fade-left">
                                                                        <div className=' flex flex-wrap flex-row -mx-3 px-[13px]'>
                                                                                <div className=' w-1/2 px-3'>
                                                                                        <button className='text-[#313EF7] font-ff-mont text-[10px] xxs:text-[14px] lgg:text-[16px] font-medium p-[8px_10px] rounded-[49px] bg-[#313ef71a] cursor-pointer hover:shadow-[#313ef71a]'>Economy Saver</button>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-base font-bold font-ff-mont leading-[normal] xss:leading-[150%] mt-[24px]'>6 Flight Tickets</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[24px]'>Passenger</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Rohan kumar</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Flight</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>#5486626661</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Class</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Economy</p>
                                                                                </div>
                                                                                <div className=' w-1/2 px-3'>
                                                                                        <div className=' flex items-center gap-[7.5px] justify-end'><p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>UK</p>
                                                                                                <Plane />
                                                                                                <p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>BD</p>
                                                                                        </div>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[60px] xxs:pt-[80px]'>Date</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 Nov 2022</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Gate</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 A</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Seats</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>5B - 11B</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className='pt-[25px] xxs:pt-[38px]'> <Cardline /></div>
                                                                        <div className='pt-[20px] xxs:pt-[47px] max-w-[356px] overflow-hidden'><Barcode /></div>
                                                                        <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] left-[-5%]'></div>
                                                                        <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] right-[-5%]'></div>
                                                                </div>
                                                                
                                                                <div className=' absolute z-0 top-[60px] left-[70px] hidden lg:block' data-aos="fade-left"> <Card1 /></div>
                                                                <div className=' absolute z-1 top-[40px] left-[50px] hidden lg:block' data-aos="fade-left"> <Card2 /></div>
                                                                <div className=' absolute z-1 top-[20px] left-[30px] hidden lg:block' data-aos="fade-left"> <Card3 /></div>
                                                        </div>
                                                        <div className=' w-full relative md:w-1/2 px-3 flex flex-col lgg:flex-row lgg:justify-between gap-4  md:gap-[80px] lgg:gap-[unset] pt-5 '>
                                                                <div className=' bg-[#FFFFFF] px-[12px] xs:px-[17px] py-[20px] xs:py-[30px] rounded-[30px] max-w-[390px] border-[unset]  overflow-hidden relative xxs:mx-auto md:mx-0 -mt-4' data-aos="fade-left">
                                                                        <div className=' flex flex-wrap flex-row -mx-3 px-[13px]'>
                                                                                <div className=' w-1/2 px-3'>
                                                                                        <button className='text-[#313EF7] font-ff-mont text-[10px] xxs:text-[14px] lgg:text-[16px] font-medium p-[8px_10px] rounded-[49px] bg-[#313ef71a] cursor-pointer hover:shadow-[#313ef71a]'>Economy Saver</button>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-base font-bold font-ff-mont leading-[normal] xss:leading-[150%] mt-[24px]'>6 Flight Tickets</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[24px]'>Passenger</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Sameer Sharma</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Flight</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>#5486626661</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Class</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Economy</p>
                                                                                </div>
                                                                                <div className=' w-1/2 px-3'>
                                                                                        <div className=' flex items-center gap-[7.5px] justify-end'><p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>UK</p>
                                                                                                <Plane />
                                                                                                <p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>BD</p>
                                                                                        </div>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[60px] xxs:pt-[80px]'>Date</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 Nov 2022</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Gate</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 A</p>
                                                                                        <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Seats</p>
                                                                                        <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>5B - 11B</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className='pt-[25px] xxs:pt-[38px]'> <Cardline /></div>
                                                                        <div className='pt-[20px] xxs:pt-[47px] max-w-[356px] overflow-hidden'><Barcode /></div>
                                                                        <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] left-[-5%]'></div>
                                                                        <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] right-[-5%]'></div>
                                                                </div>
                                                                
                                                                <div className=' absolute z-0 top-[60px] left-[70px] hidden lg:block' data-aos="fade-left"> <Card1 /></div>
                                                                <div className=' absolute z-1 top-[40px] left-[50px] hidden lg:block' data-aos="fade-left"> <Card2 /></div>
                                                                <div className=' absolute z-1 top-[20px] left-[30px] hidden lg:block' data-aos="fade-left"> <Card3 /></div>
                                                        </div>                                                  


                                                </Slider>
                                                <div className=" flight flex gap-[11px] absolute xl:right-[-12%] right-[1%] bottom-[0%] align-items-center   flex-col text-end justify-content-end">
                                                        <button
                                                                className=" hidden sm:block bg-[#1A1B39] hover:bg-[#313EF7] duration-300 hover:shadow-[0_10px_14px_0px_#0B0F50;]  py-[12px] px-[16px] rounded-full"
                                                                onClick={() => first?.current?.slickPrev()}
                                                        >
                                                                <svg
                                                                        width="11"
                                                                        height="18"
                                                                        viewBox="0 0 11 18"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                        <path d="M10 1L2 9L10 17" stroke="white" stroke-width="2" />
                                                                </svg>
                                                        </button>
                                                        <button
                                                                className=" hidden sm:block bg-[#1A1B39] hover:bg-[#313EF7] duration-300 hover:shadow-[0_10px_14px_0px_#0B0F50;]  py-[12px] px-[16px] rounded-full"
                                                                onClick={() => first?.current?.slickNext()}
                                                        >
                                                                <svg
                                                                        width="11"
                                                                        height="18"
                                                                        viewBox="0 0 11 18"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                        <path
                                                                                d="M1 17L9 9L1 0.999999"
                                                                                stroke="white"
                                                                                stroke-width="2"
                                                                        />
                                                                </svg>
                                                        </button>
                                                </div>
                                                
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Flight;