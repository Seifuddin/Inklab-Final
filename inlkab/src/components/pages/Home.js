import React from "react";
import './Home.css';
import Mission from "./Mission";
import Ourservices from "./Ourservices";
import Questions from "./Questions";
import Clients from "./Clients";
import Follow from "./FollowUs";
import Team from "./OurTeam";
import Awards from "./Awards";

const Home = () => {
    return (
        <div className="container-flex">
            <div className="home container-flex">
                <div className="home-info container">
                    <h1 className="home-ttl display-3 fw-bold p-3"><br /> <span className="ttle">Transform Your Vision into <br /> Stunning Designs</span></h1>
                    <p className="second-ttl h3 fw-bold p-3">Proffessional Grahic Design and High-Quality Printing <br />Services Tailored to Your Needs</p>
                    <hr />
                </div>
            </div>

            <Mission />
            <Ourservices />
            <Clients />
            <Team />
            <Questions />
            <Awards />
            <Follow />
        </div>
    );
};

export default Home;