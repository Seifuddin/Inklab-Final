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
            <h1 className="header2-briefhistry h3 text-center p-3 text-primary">We're your one-stop print shop and branding source. Combining the absolutely best products in the industry with the most competitive pricing - That's a deal that can't beat!</h1>
            <h1 className="head-histry display-6 text-center fw-bold bg-white text-warning p-2 rounded">A brief history on Inklab</h1>
            <p className="par-histry h4 text-white bg-warning p-4 rounded">INKLAB GRAPHICS LTD traces its roots back to 2012 when the current directors ventured into printing business. In the year 2021, a new dream of collaboration and expanding the business got off the ground and was registered unde the business name INKLAB GRAPHICS. An assortment of modern machinery was imported to meet the demands of the current world. Along with this, the business grew from a simple paper printong shop to an expensive branding firm; adding to its core: cup branding, t-shirt printing, embroidery and paper bag printing alon with the traditional paper printing( receipt books, business cards, posters, fliers & tickets). In 2024, the business became a fully fledged company under the name: INKLAB GRAPHICS LTD. Further, the company has added more office space. In future, the company seeks to join 3D printing.</p>
        </div>
    );
};

export default History;