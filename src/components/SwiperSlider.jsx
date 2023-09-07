import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from "swiper";

export default function SwiperSlider() {
  return (
    <>
      <Swiper 
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPreView={"auto"}
        coverflowEffect={
            {
                rotate:0,
                stretch: 0,
                depth: 100,
                modifier:2.5
            }
        }
        pagination={{el:'.swiper-pagination', clickable:true }}
        navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable: true
        }}
        modules={[EffectCoverflow,Pagination,Navigation]}
        className='swiper_container'
      >
        <SwiperSlide className="swiper-slide"><img src={require("../assets/img/gabriele-garanzelli-yqAk8NyqN3Y-unsplash-removebg-preview.png")} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={require("../assets/img/j-mckinney-zIo9Fbh8qJc-unsplash-removebg-preview.png")} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={require("../assets/img/jocelyn-morales-pXyNqLpNqAU-unsplash-removebg-preview.png")} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={require("../assets/img/gabriele-garanzelli-yqAk8NyqN3Y-unsplash-removebg-preview.png")} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={require("../assets/img/j-mckinney-zIo9Fbh8qJc-unsplash-removebg-preview.png")} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={require("../assets/img/jocelyn-morales-pXyNqLpNqAU-unsplash-removebg-preview.png")} alt="" /></SwiperSlide>
      
      <div className="slider-controller">
        <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
        </div>

        <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>

        <div className="swiper-pagination"></div>
      </div>
      </Swiper>
    </>
  );
}
