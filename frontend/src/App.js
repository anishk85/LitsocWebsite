import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Clubs from './pages/Clubs';
// import './Sixth.css';

const Sixth = () => {
    return (
        <div className="Sixth">
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 60,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                mousewheel={true}
                modules={[EffectCoverflow, Pagination, Mousewheel]}
                className="coverflow-swiper"
                speed={2000}
            >
                <SwiperSlide className="swiper-slide"><Home /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><AboutUs /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><Clubs /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Sixth;
