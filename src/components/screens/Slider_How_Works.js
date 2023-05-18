import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../assets/css/styles_slider1.css";
import '../../assets/css/home_style.css'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                // loop={true}
                // loopedSlides={10}
                // loopAdditionalSlides={10}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="how_it_works_item">
                        <div className='how_it_works_item_img'>
                            <img src={require('../../assets/img/how_it_works_img1.476262f379ba6aa4d1d9.png')}/>
                        </div>
                        <p className='how_it_works_item_info'>
                            You choose the
                            <span className='how_it_works_item_info2'>service you need</span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="how_it_works_item">
                        <div className='how_it_works_item_img'>
                            <img src={require('../../assets/img/how_it_works_img2.c7a59860b439e608b951.png')}/>
                        </div>
                        <p className='how_it_works_item_info'>
                            You choose the post for which you
                            <span className='how_it_works_item_info2'>need the service</span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="how_it_works_item">
                        <div className='how_it_works_item_img'>
                            <img src={require('../../assets/img/how_it_works_img3.1e5ac40349a9821995ab.png')}/>
                        </div>
                        <p className='how_it_works_item_info'>
                            You pay for the order,
                            <span className='how_it_works_item_info2'>and the work begins</span>
                        </p>
                    </div>
                </SwiperSlide>



            </Swiper>
        </>
    );
}
