import React from "react";
import "./Marquee.css";

const Marquee = ({ images, speed = 20 }) => {
    
  return (
    <div className="marquee-container">
      <div className="marquee">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="marquee-image" />
        ))}
        {images.map((image, index) => (
          <img key={index + images.length} src={image} alt={`Slide ${index}`} className="marquee-image" />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
