import React from "react";
import './Homepage.css';
import printer from '../images/ed5d6dc92d927a1887880b28574b0634.jpg';
import qlty1 from '../images/The-Most-Beautiful-Brand-Books-and-Brand-Guidelines-Examples-6-Brand-Book-Templates-1.webp';
import qlty2 from '../images/11x6-real-estate-eddm-postcard-direct-mail-1024x761.jpg';
import Section from "./herosection";

const Homepage = () => {
    return (
        <div className="container-homepage container-flex">
            <div className="homepage container p-3">
               
            </div>
            <div className="box-homepage container p-3">
                    <h1 className="homepage-titl display-4 fw-bold p-2">Transform Your Vision into Stunning Designs</h1>
                    <p className="second-titl h3 fw-bold p-2 text-white">Proffessional Graphic Design and High-Quality Printing Services Tailored to Your Needs</p>
                    <Section />
                </div>


        </div>

    );
};

export default Homepage;