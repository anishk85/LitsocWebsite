import React, { useEffect } from 'react';
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
            const percentage = scrollPosition / maxScroll;
            document.querySelector(".frame").style.transform = `translateX(-${percentage * 300}vw)`;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
};

export default App;
