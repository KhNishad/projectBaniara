"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
// import { imageBasePath } from "@/config";


const Events = () => {


    let contents = [
        {
            image: `/mosque3.jpg`,
            name: 'image',
            content: 'Annual Sports Day.'
        },
        {
            image: `/PrimarySchool.jpg`,
            name: 'image',
            content: 'Cultural Program.'
        },
        {
            image:`/mosque3.jpg`,
            name: 'image',
            content: 'Educational Events'
        },
        {
            image: `/hightSchool.jpg`,
            name: 'image',
            content: 'Annual Sports Day.'
        },
       
        {
            image:`/mosque3.jpg`,
            name: 'image',
            content: 'Educational Events'
        },
        {
            image: `/primarySchool.jpg`,
            name: 'image',
            content: 'Primary School'
        }
    ]

    return (
        <div className="mt-10">
            <Swiper
                slidesPerView={4}
                autoplay={{
                    delay: 2500,
                    // disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="flex items-center justify-center"
            >
                {contents?.map((item, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                       
                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-5 max-w-[300px]">
                            <Image
                                width={500}
                                height={500}
                                src={item?.image}
                                className="w-[300px] h-[300px] rounded-md object-cover"
                                alt={`slider-image`}
                            />
                            <div className="p-5">
                                <h5 className="mb-2 text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Events;
