import React from "react";
import { Customer, Planebook } from "./Icons";
import { Discount, Arrows } from "./Icons";
import { Lock } from "./Icons";

const myarray = [
        {
                margin: "mt-[50px]",
                Img: (<Planebook />),
                heading: 'Best Guide',
                pera: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex{,} quis finibus magna.",
                arrow: (<Arrows />),
        },
        {
                Img: <Discount />,
                heading: 'More Discount',
                pera: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex{,} quis finibus magna.",
                arrow: <Arrows />,
        },
        {
                margin: "mt-[50px]",
                Img: <Lock />,
                heading: 'Private',
                pera: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex{,} quis finibus magna.",
                arrow: <Arrows />,
        },
        {
                Img: <Customer />,
                heading: 'Online Support',
                pera: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex{,} quis finibus magna.",
                arrow: <Arrows />,
        },
]

const Featursection = () => {
        const cardcomponent = myarray.map((myarray) => (
                <div className={` ${myarray.margin} flex flex-col shadow-[0_100px_200px_0_rgba(1,23,54,0.10)] justify-center items-center max-sm:w-full md:max-w-[281px] rounded-[185px] bg-[#fff]  hover:shadow-lg px-5 py-10 hover:scale-[0.9] duration-300`}>
                        <div className=" flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] ">
                                {myarray.Img}
                        </div>
                        <p className=" pt-5 text-2xl font-extrabold font-[Montserrat] leading-[150%] text-[#030522] text-center">
                                {myarray.heading}
                        </p>
                        <p className=" text-base font-normal font-[Montserrat] leading-[150%] text-[_rgba_(_3_5_34_0.65)] text-center pt-8 ">
                                {myarray.pera}
                        </p>
                        <div className=" pt-8 flex cursor-pointer justify-center">
                                <span>{myarray.arrow}</span>
                        </div>
                </div>
        ));

        return (
                <div className="max-w-[1200px]  mx-auto px-3 my-[32px] md:my-[100px]">
                        <h2 className=" text-[30px] sm:text-[40px] font-bold leading-[150%] font-[Montserrat] text-[#030522] text-center">
                                Our Features
                        </h2>
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center justify-center gap-8    '>{cardcomponent}
                        </div>
                </div>
        );
};

export default Featursection;