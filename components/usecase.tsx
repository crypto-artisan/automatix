'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Button } from "@nextui-org/button";
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";

const usecases = [
    {
        img: "/assets/usecase (1).webp",
        title: "FOOOCUS",
        content: "High-quality text-to-image with minimal prompt engineering."
    },
    {
        img: "/assets/usecase (2).webp",
        title: "Cog",
        content: "Effortlessly deploy Docker containers built with Cog."
    },
    {
        img: "/assets/usecase (3).webp",
        title: "Llama-3 70B",
        content: "Deploy Llama 3 70B with Hugging Face Inference."
    },
    {
        img: "/assets/usecase (4).webp",
        title: "Llama-3 8B",
        content: "Deploy Llama 3 8B with Hugging Face Inference."
    },
    {
        img: "/assets/usecase (5).webp",
        title: "Axolotl",
        content: "Streamline finetuning of AI models first four images you have above and next 5 one are"
    },
    {
        img: "/assets/usecase (6).webp",
        title: "ComfyUI",
        content: "Stable Diffusion UI with nodes interface."
    },
    {
        img: "/assets/usecase (7).webp",
        title: "Kohya",
        content: "Kohya GUI sets training parameters and runs commands."
    },
    {
        img: "/assets/usecase (8).webp",
        title: "AUTOMATIC1111",
        content: "Explore generative AI with Automatic 1111."
    },
    {
        img: "/assets/usecase (9).webp",
        title: "Ollama",
        content: "Run LLMs like Llama 2 with ollama."
    },

]

export default function UseCase() {
    const swiperRef = useRef<any>(null);
    const swiper = useSwiper();

    const handlePrevClick = () => {
        // swiper.slideNext()
        if (swiperRef.current) {
            console.log("=====.")
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };
    return (
        <div data-scroll-index='3' id="UseCase" className='flex flex-col items-center justify-center gap-4 w-full xl:w-[1200px] mx-auto'>
            <div className="skill-slider flex flex-row items-center relative">
                <Button isIconOnly aria-label="Like" onClick={handlePrevClick} className="absolute z-10 left-[-15px] group rounded-full hover:bg-[#fff] bg-[#0474f1] border-1 border-[#0474f1]">
                    <svg
                        className='group-hover:fill-[#0474f1] fill-[#fff]'
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    >
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                </Button>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={3}
                    spaceBetween={6}
                    speed={1000}
                    loop={true}
                    roundLengths={true}
                    centeredSlides={true}
                    centeredSlidesBounds={false}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        992: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        435: {
                            slidesPerView: 1,
                        },
                        335: {
                            slidesPerView: 1,
                        },
                    }}
                    className="partner__slider w-[360px] md:w-[800px] lg:w-[1000px] xl:w-[1200px]"
                >
                    {
                        usecases.map((usecase: any, index) => (
                            <SwiperSlide key={index} className='self-center partner__slider-single'>
                                <div className='card flex flex-col items-start text-left gap-2 rounded-xl border-1 border-[#0474f11a] p-1 lg:w-[300px] xl:w-[350px] h-[420px]'>
                                    <Image src={usecase.img} alt='usecase-img' width={350} height={200} className="rounded-xl" style={{ maxWidth: "100%", height: "250px", width: "100%" }} />
                                    <div className='space-y-2 text-theme-dark p-4'>
                                        <h1 className='text-[24px] leading-7'>{usecase.title}</h1>
                                        <p className='text-[18px] opacity-80'>{usecase.content}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Button isIconOnly aria-label="Like" onClick={handleNextClick} className="absolute z-10 right-[-15px] group rounded-full hover:bg-[#fff] bg-[#0474f1] border-1 border-[#0474f1]">
                    <svg
                        className='group-hover:fill-[#0474f1] fill-[#fff]'
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </Button>
            </div>
        </div>
    )
}