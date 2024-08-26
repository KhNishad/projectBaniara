"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
// import { imageBasePath } from "@/config";


const SportsGallary = () => {


    let contents = [
        {
            image: `/tree-736885_640.jpg`,
            name: 'image',
            content: 'Annual Sports Day.'
        },
        {
            image: `/banner-1050629_640.webp`,
            name: 'image',
            content: 'Cultural Program.'
        },
        {
            image: `/tree-736885_640.jpg`,
            name: 'image',
            content: 'Educational SportsGallary'
        },
        {
            image: `/banner-1050629_640.webp`,
            name: 'image',
            content: 'Annual Sports Day.'
        },
        {
            image: `/banner-1050629_640.webp`,
            name: 'image',
            content: 'Annual Sports Day.'
        },
        {
            image: `/tree-736885_640.jpg`,
            name: 'image',
            content: 'Educational Events'
        },
        {
            image: `/banner-1050629_640.webp`,
            name: 'image',
            content: 'Annual Sports Day.'
        }
    ]

    return (
        <div className="mt-5">
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
                        <div className="flex flex-col items-center max-w-[250px]">
                            <div>
                                <Image
                                    width={200}
                                    height={600}
                                    src={item?.image}
                                    className="w-[250px] h-[250px] rounded-md object-cover"
                                    alt={`slider-image`}
                                />
                            </div>
                            <div className="mt-2">
                                <p className="text-[12px] text-center">{item?.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default SportsGallary;
