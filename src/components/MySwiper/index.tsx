'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export default function MySwiper() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={24}
            grabCursor={true}
            loop={true}
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                500: {
                    slidesPerView: 1
                },
                300: {
                    slidesPerView: 1
                }
            }}
            className="mySwiper"
        >
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/dep/depo1.png"
                        alt="Depoimentos"
                        width={512}
                        height={443}
                        className="rounded-lg"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/dep/depo2.png"
                        alt="Depoimentos"
                        width={512}
                        height={219}
                        className="rounded-lg"
                    />
                </div>

            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/dep/depo3.png"
                        alt="Depoimentos"
                        width={512}
                        height={328}
                        className="rounded-lg"
                    />
                </div>

            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="">
                    <Image
                        src="/images/dep/depo4.png"
                        alt="Depoimentos"
                        width={512}
                        height={402}
                        className="rounded-lg"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}