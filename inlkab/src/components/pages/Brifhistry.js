import React from "react";
import './Brifhistry.css';
import inklablogoh from '../images/1000040014.jpg';

const History = () => {

    return (
        <div className="container-histry p-5 bg-primary">
            <a href={inklablogoh} target="_blank" rel="noopener noreferrer">
                <img className="img-inklablogoh" src={inklablogoh} alt='inklab logo'/>
            </a>
            <h1 className="header-briefhistry display-6 fw-bold text-center">Inklab Graphics Ltd...</h1>
            <h1 className="header2-briefhistry h3 text-center p-3 text-white">We're your one-stop print shop and branding source. Combining the absolutely best products in the industry with the most competitive pricing - That's a deal that can't beat!</h1>
        </div>
    );
};

export default History;