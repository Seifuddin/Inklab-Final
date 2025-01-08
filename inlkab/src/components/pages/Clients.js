import React from "react";
import './Clients.css';
import facebook from '../images/2048px-Facebook_icon_2013.svg.png';
import gok from '../images/government-of-kenya.jpg';
import lemaiyan from '../images/Untitled-design-1.png';
import kisasi from '../images/IMG_20241109_002156_654~2.jpg';
import alma from '../images/IMG_20241109_002202_122~2.jpg';
import algorithmic from '../images/IMG_20241109_002207_851~2.jpg';
import motospot from '../images/IMG_20241109_002214_619~2.jpg';
import mangu from '../images/IMG_20241109_002615_287~2.jpg';
import nima from '../images/IMG_20241109_002222_508~2.jpg';
import serene from '../images/IMG_20241109_002222_508~2.jpg';
import aggrey from '../images/IMG_20241109_002618_921~2.jpg';
import sombe from '../images/IMG_20241109_002244_764~2.jpg';
import critical from '../images/IMG_20241109_002244_764~2.jpg';

const Clients = () => {
    const images = [
        { src: facebook, name: "Facebook" },
        { src: gok, name: "Government of Kenya" },
        { src: lemaiyan, name: "Lemaiyan" },
        { src: kisasi, name: "Kisasi Secondary School" },
        { src: alma, name: "Alma Brands" },
        { src: algorithmic, name: "Algorithmic Coding School" },
        { src: motospot, name: "Motospot" },
        { src: mangu, name: "Mangu High School" },
        { src: nima, name: "NIMA East Africa" },
        { src: serene, name: "Serene Haven" },
        { src: aggrey, name: "DR. Aggrey High School" },
        { src: sombe, name: "AIC Sombe Girls School" },
        { src: critical, name: "Critical Klothing" },
    ];

    return (
        <div className="container-clients pb-5">
            <h1 className="h1-clients h1 fw-bold text-center p-2 pt-5 text-dark">Our Clients</h1>
            <p className="saying-feedback text-center h3 fw-bold pb-3 ">
            </p>
            <div className="marquee-container">
                <div className="marquee">
                    {images.concat(images).map((client, index) => (
                        <div key={index} className="marquee-item border border-2 bg-light rounded">
                            <img src={client.src} alt={client.name} className="client-logo bg-light" />
                            <h3 className="client-name text-center p-1 bg-light">{client.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;

