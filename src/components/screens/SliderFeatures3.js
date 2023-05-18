import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../assets/css/styles_slider2.css";
import '../../assets/css/home_style.css'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import work_methods_icon1 from "../../assets/svg/work_methods_icon1.274f5902d1942992e5f4db91f03e56f3.svg";
import work_methods_icon2 from "../../assets/svg/work_methods_icon2.bb34d05222ab942819bcd94ac0cbc5e9.svg";
import {Link} from "react-router-dom";

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
                    <div className="features_wrapper_child_item">
                        <p className='features_wrapper_child_item_title'>Personal</p>
                        <div className='features_wrapper_child_item_price_info_box'>
                            <p className='features_wrapper_child_item_price_info'>$19</p>
                            <p className='features_wrapper_child_item_price_info2'>/ month</p>
                        </div>
                        <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                        <div className='features_wrapper_child_item_line'></div>
                        <div className='features_wrapper_child_item_details_box'>
                            <div className='features_wrapper_child_item_detail'>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon1}/>
                                </div>
                                <p className='features_wrapper_child_item_detail_info'>
                                    Full Access to Landingfolio
                                </p>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon2}/>
                                </div>
                            </div>
                            <div className='features_wrapper_child_item_detail'>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon1}/>
                                </div>
                                <p className='features_wrapper_child_item_detail_info'>
                                    100 GB Free Storage
                                </p>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon2}/>
                                </div>
                            </div>
                            <div className='features_wrapper_child_item_detail'>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon1}/>
                                </div>
                                <p className='features_wrapper_child_item_detail_info'>
                                    Unlimited Visitors
                                </p>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon2}/>
                                </div>
                            </div>
                            <div className='features_wrapper_child_item_detail'>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon1}/>
                                </div>
                                <p className='features_wrapper_child_item_detail_info'>
                                    10 Agents
                                </p>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon2}/>
                                </div>
                            </div>
                            <div className='features_wrapper_child_item_detail'>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon1}/>
                                </div>
                                <p className='features_wrapper_child_item_detail_info'>
                                    Live Chat Support
                                </p>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon2}/>
                                </div>
                            </div>
                        </div>
                        <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn'>Order</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='features_wrapper_child_item_parent'>
                        <div className="features_wrapper_child_item2">
                            <p className='features_wrapper_child_item_title'>Professional</p>
                            <div className='features_wrapper_child_item_price_info_box'>
                                <p className='features_wrapper_child_item_price_info'>$49</p>
                                <p className='features_wrapper_child_item_price_info2'>/ month</p>
                            </div>
                            <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                            <div className='features_wrapper_child_item_line'></div>
                            <div className='features_wrapper_child_item_details_box'>
                                <div className='features_wrapper_child_item_detail'>
                                    <div className='features_wrapper_child_item_detail_icon'>
                                        <img src={work_methods_icon1}/>
                                    </div>
                                    <p className='features_wrapper_child_item_detail_info'>
                                        Full Access to Landingfolio
                                    </p>
                                    <div className='features_wrapper_child_item_detail_icon'>
                                        <img src={work_methods_icon2}/>
                                    </div>
                                </div>
                                <div className='features_wrapper_child_item_detail'>
                                    <div className='features_wrapper_child_item_detail_icon'>
                                        <img src={work_methods_icon1}/>
                                    </div>
                                    <p className='features_wrapper_child_item_detail_info'>
                                        100 GB Free Storage
                                    </p>
                                    <div className='features_wrapper_child_item_detail_icon'>
                                        <img src={work_methods_icon2}/>
                                    </div>
                                </div>
                                <div className='features_wrapper_child_item_detail'>
                                    <div className='features_wrapper_child_item_detail_icon'>
                                        <img src={work_methods_icon1}/>
                                    </div>
                                    <p className='features_wrapper_child_item_detail_info'>
                                        Unlimited Visitors
                                    </p>
                                    <div className='features_wrapper_child_item_detail_icon'>
                                        <img src={work_methods_icon2}/>
                                    </div>
                                </div>
                                <div className='features_wrapper_child_item_detail'>
                                    <div className='features_wrapper_child_item_detail_icon'>
                                        <img src={work_methods_icon1}/>
                                    </div>
                                    <p className='features_wrapper_child_item_detail_info'>
                                        10 Agents                                                   </p>
                                    <div className='features_wrapper_child_item_detail_icon'>
                                        <img src={work_methods_icon2}/>
                                    </div>
                                </div>
                                <div className='features_wrapper_child_item_detail'>
                                    <div className='features_wrapper_child_item_detail_icon'>
                                        <img src={work_methods_icon1}/>
                                    </div>
                                    <p className='features_wrapper_child_item_detail_info'>
                                        Live Chat Support
                                    </p>
                                    <div className='features_wrapper_child_item_detail_icon'>
                                        <img src={work_methods_icon2}/>
                                    </div>
                                </div>
                            </div>
                            <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn2'>Order</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="features_wrapper_child_item">
                        <p className='features_wrapper_child_item_title'>Business</p>
                        <div className='features_wrapper_child_item_price_info_box'>
                            <p className='features_wrapper_child_item_price_info'>$99</p>
                            <p className='features_wrapper_child_item_price_info2'>/ month</p>
                        </div>
                        <p className='features_wrapper_child_item_info2'>All the basic features to boost your freelance career</p>
                        <div className='features_wrapper_child_item_line'></div>
                        <div className='features_wrapper_child_item_details_box'>
                            <div className='features_wrapper_child_item_detail'>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon1}/>
                                </div>
                                <p className='features_wrapper_child_item_detail_info'>
                                    Full Access to Landingfolio
                                </p>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon2}/>
                                </div>
                            </div>
                            <div className='features_wrapper_child_item_detail'>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon1}/>
                                </div>
                                <p className='features_wrapper_child_item_detail_info'>
                                    100 GB Free Storage
                                </p>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon2}/>
                                </div>
                            </div>
                            <div className='features_wrapper_child_item_detail'>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon1}/>
                                </div>
                                <p className='features_wrapper_child_item_detail_info'>
                                    Unlimited Visitors
                                </p>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon2}/>
                                </div>
                            </div>
                            <div className='features_wrapper_child_item_detail'>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon1}/>
                                </div>
                                <p className='features_wrapper_child_item_detail_info'>
                                    10 Agents</p>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon2}/>
                                </div>
                            </div>
                            <div className='features_wrapper_child_item_detail'>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon1}/>
                                </div>
                                <p className='features_wrapper_child_item_detail_info'>
                                    Live Chat Support
                                </p>
                                <div className='features_wrapper_child_item_detail_icon'>
                                    <img src={work_methods_icon2}/>
                                </div>
                            </div>
                        </div>
                        <Link to={'/select-account'} className='features_wrapper_child_item_get_started_btn'>Order</Link>
                    </div>
                </SwiperSlide>



            </Swiper>
        </>
    );
}
