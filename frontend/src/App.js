import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Clubs from './pages/Clubs';
import Cursor from './components/Cursor';
import './App.css';

const App = () => {
    const pagesRef = useRef([]);
    const isScrolling = useRef(false);
    const currentIndex = useRef(0); // Track the "focused" page index

    useEffect(() => {
        const totalPages = 3;
        const pageWidth = window.innerWidth;

        const handleWheel = (e) => {
            if (isScrolling.current) return;
            isScrolling.current = true;

            const scrollAmount = pageWidth * 0.33; // 33% of viewport width
            const maxIndex = totalPages - 1;

            if (e.deltaY > 0 && currentIndex.current < maxIndex) {
                // Scroll down = slide next page over
                currentIndex.current += 1;
            } else if (e.deltaY < 0 && currentIndex.current > 0) {
                // Scroll up = slide previous page back
                currentIndex.current -= 1;
            }

            // Animate each page individually
            pagesRef.current.forEach((page, index) => {
                const targetX = -(currentIndex.current * pageWidth) + (index * pageWidth);
                gsap.to(page, {
                    x: targetX,
                    duration: 1.2,
                    ease: 'power3.inOut',
                    onComplete: () => {
                        if (index === pagesRef.current.length - 1) {
                            isScrolling.current = false;
                        }
                    }
                });
            });
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="App">
            <Cursor />
            <div className="base-layer" />
            <div className="page-container">
                <div className="page" ref={el => pagesRef.current[0] = el}>
                    <Home />
                </div>
                <div className="page" ref={el => pagesRef.current[1] = el}>
                    <AboutUs />
                </div>
                <div className="page" ref={el => pagesRef.current[2] = el}>
                    <Clubs />
                </div>
            </div>
        </div>
    );
};

export default App;