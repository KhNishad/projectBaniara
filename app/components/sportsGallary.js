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
            image: `/PrimarySchool.jpg`,
            name: 'image',
            content: 'Primary School.'
        },
        {
            image: `/hightSchool.jpg`,
            name: 'image',
            content: 'High School'
        },
        {
            image: `/argentian.jpeg`,
            name: 'image',
            content: 'Football'
        },
        {
            image: `/volly.jpeg`,
            name: 'image',
            content: 'Volley Ball .'
        },
        {
            image: `/footballMatch1.jpg`,
            name: 'image',
            content: 'Sports Day'
        },
        {
            image: `/ifterAtmos.jpg`,
            name: 'image',
            content: 'Ifter At Mosque'
        },
        {
            image: `/eidNamaz.jpg`,
            name: 'image',
            content: 'Eid Jamat'
        },
        {
            image: `/kunora.jpg`,
            name: 'image',
            content: 'Football Match'
        },
        {
            image: `/jersey.jpg`,
            name: 'image',
            content: 'New Jersey'
        },
        {
            image: `/league.jpg`,
            name: 'image',
            content: 'League Final'
        },
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
