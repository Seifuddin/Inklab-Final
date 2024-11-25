import React, { useEffect, useRef } from "react";
import "./Text-effect.css";

const AnimatedHeading = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const rect = headingRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if(rect.top < windowHeight && rect.bottom > 0) {
                headingRef.current.classList.add("animate");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="heading-container">
            <h1 className="animated-heading text-white" ref={headingRef}> Welcome to our Printing services </h1>
        </div>
    );
};

export default AnimatedHeading;