import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import './App.css'; // Import the CSS file
import Clubs from './pages/Clubs';

const App = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = document.querySelector(".track").offsetHeight - window.innerHeight;
            const totalPages = document.querySelectorAll(".item").length;
            const percentage = scrollPosition / maxScroll;
            
            document.querySelector(".frame").style.transform = `translateX(-${percentage * (totalPages - 1) * 100}vw)`;
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

const Sixth = () => {
    return (
        <div className="App">
            <div className="track">
                <div className="camera">
                    <div className="frame">
                        <div className="item"><Home /></div>
                        <div className="item"><AboutUs /></div>
                        <div className="item"><Clubs /></div>
                        <div className="item"><AboutUs /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};}

export default App;
