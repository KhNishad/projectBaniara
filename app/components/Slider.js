"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
// import { imageBasePath } from "@/config";


const Slider = () => {


  let contents = [
    {
      image :`/BANIARA high school.png`,
      name : 'image'
    },
    {
      image :`/PrimarySchool.jpg`,
      name : 'image'
    },
    {
      image :`/BANIARa_mos.png`,
      name : 'image'
    },
   
  ]

  return (
    <div class="2xl:container 2xl:mx-auto">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
      >
        <div>
        {contents?.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <Image
                  width={1800}
                  height={600}
                  src={item?.image}
                  className="w-full h-[500px] object-center"
                  alt={`slider-image`}
                  priority={true}
                  quality={100}
                  unoptimized={true}
                 
                />
              </div>
            </SwiperSlide>
            ))}
         
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
