import React from "react";

import {Swiper,SwiperSilder} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation} from 'swiper';



export default function SwiperSlider() {
  return (
    <>
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPreView={'auto'}
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
        <SwiperSilder><img src={require("img1")} alt="" /></SwiperSilder>
        <SwiperSilder><img src={require("img2")} alt="" /></SwiperSilder>
        <SwiperSilder><img src={require("img3")} alt="" /></SwiperSilder>
        <SwiperSilder><img src={require("img4")} alt="" /></SwiperSilder>
        <SwiperSilder><img src={require("img5")} alt="" /></SwiperSilder>
        <SwiperSilder><img src={require("img6")} alt="" /></SwiperSilder>
      
      
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
