import React from "react";
import Mission from "./Mission";
import Ourservices from "./Ourservices";
import Questions from "./Questions";
import Clients from "./Clients";
import Follow from "./FollowUs";
import Awards from "./Awards";
import Slider from "./Slider";
import Promotional from "./Promotional";
import Video from "./Videos";
import Homepage from "./Homepage";

const Home = () => {
    return (
        <div className="container-home container-flex bg-dark">
            <Homepage />
            <Mission />
            <Ourservices />
            <Clients />
            <Questions />
            <Slider />
            <Awards />
            <Promotional />
            <Follow />
        </div>
    );
};

export default Home;