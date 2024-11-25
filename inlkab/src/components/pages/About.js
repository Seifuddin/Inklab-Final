import React from "react";
import './About.css';
import History from "./Brifhistry";
import Values from "./Values";
import TheTeam from "./Theteam";
import Seniors from "./TeamSeniors";
import Address from "./Adress";
import Products from "./Products";
import Quality from "./Quality";
import Commitment from "./Commitment";

const About = () => {

    return (
        <div className="container-about bg-white container-flex">

            <History />
            <Values />
            <Products />
            <Quality />
            <Commitment />
            <Seniors />
            <TheTeam />
            <Address />
        </div>
    );
};

export default About;