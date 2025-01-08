import React from "react";
import './About.css';
import History from "./Brifhistry";
import Values from "./Values";
import TheTeam from "./Theteam";
import Address from "./Adress";
import Products from "./Products";

const About = () => {

    return (
        <div className="container-about bg-white container-flex">

            <History />
            <Values />
            <Products />
            <TheTeam />
            <Address />
        </div>
    );
};

export default About;