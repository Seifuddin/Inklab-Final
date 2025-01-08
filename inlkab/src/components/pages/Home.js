import React from "react";
import Mission from "./Mission";
import Ourservices from "./Ourservices";
import Questions from "./Questions";
import Clients from "./Clients";
import Awards from "./Awards";
import Slider from "./Slider";
import Promotional from "./Promotional";
import Homepage from "./Homepage";

const Home = () => {
    return (
        <div className="container-home container-flex bg-white">
            <Homepage />
            <Mission />
            <Ourservices />
            <Clients />
            <Slider />
            <Awards />
            <Questions />
            <Promotional />
        </div>
    );
};

export default Home;