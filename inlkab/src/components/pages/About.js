import React from "react";
import './About.css';
import History from "./Brifhistry";
import Values from "./Values";
import TheTeam from "./Theteam";

const About = () => {

    return (
        <div className="container-about container-flex">
            <h1 className="header-about display-2 fw-bold text-center">About Us</h1>

            <History />
            <Values />
            <TheTeam />
        </div>
    );
};

export default About;