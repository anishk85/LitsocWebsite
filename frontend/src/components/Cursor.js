import React, { useEffect } from 'react';
import "./Cursor.css";
const Cursor = () => {
    useEffect(() => {
        const canvas = document.getElementById("cursorCanvas");
        if (!canvas) {
            console.error("Canvas not found!");
            return;
        }

        const ctx = canvas.getContext("2d");
        if (!ctx) {
            console.error("Canvas context not found!");
            return;
        }

        // Set canvas styles
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "9999";

        // Resize canvas to fit the screen
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            console.log("Canvas dimensions:", canvas.width, canvas.height); // Debugging
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Track mouse position
        const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const handleMouseMove = (e) => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Cursor trail parameters
        const params = {
            pointsNumber: 10,
            spring: 0.45,
            friction: 0.5,
            baseWidth: 2,
            sizeMultiplier: 1.5,
        };

        // Initialize trail
        const trail = new Array(params.pointsNumber).fill().map(() => ({
            x: pointer.x,
            y: pointer.y,
            dx: 0,
            dy: 0,
        }));

        // Animation loop
        let animationFrameId;
        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            trail.forEach((p, i) => {
                const prev = i === 0 ? pointer : trail[i - 1];
                const spring = i === 0 ? 0.4 * params.spring : params.spring;

                p.dx += (prev.x - p.x) * spring;
                p.dy += (prev.y - p.y) * spring;

                p.dx *= params.friction;
                p.dy *= params.friction;

                p.x += p.dx;
                p.y += p.dy;

                ctx.beginPath();
                ctx.arc(p.x, p.y, (i + 1) * params.sizeMultiplier, 0, 2 * Math.PI);
                ctx.fillStyle = "white";
                ctx.fill();
            });

            console.log("Rendering cursor..."); // Debugging
            animationFrameId = requestAnimationFrame(update);
        }
        update();

        // Cleanup
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="cursorCanvas" className="webgl" ></canvas>;
};

export default Cursor;