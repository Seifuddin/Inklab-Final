import React from "react";
import './Brifhistry.css';
import inklablogoh from '../images/1000040014.jpg';

const History = () => {

    return (
        <div className="container-histry pb-5">
            <div className="homepage"></div>
            <div className="box-homepage container">
                <img className="img-inklablogoh mt-5" src={inklablogoh} alt='inklab logo'/>
            <h1 className="homepage-titl display-4 fw-bold p-2 text-center">About Us</h1>
                <p className="second-titl h3 fw-bold p-2 text-white text-center">We're your one-stop print shop and branding source. Combining the absolutely best products in the industry with the most competitive pricing - That's a deal that can't beat!</p>
            </div>
        </div>
    );
};

export default History;