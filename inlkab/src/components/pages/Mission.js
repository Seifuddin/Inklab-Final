import React from "react";
import './Mission.css';
import inklab_logo from '../images/1000040014.jpg';

const Mission = () => {
    return (
        <div className="container-mission container-flex p-5">
            <div className="row container-flex">
            <h2 className="ttle-aboutus text-center display-5 fw-bold p-5">About Us</h2>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
                    <div className="box-mission p-5">
                        <p className="par-mission1 h4 fw-bold text-center">Our Mission</p>
                        <p className="par-mission h5">To be a partner of choice by delivering convenient, cost-effective products and proffessional services in Printing & Branding, at competitive prices, throughout the business community with effective consultation, a superior ordering process and on-time delivery.</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
                    <div className="box-mission rounded">
                        <p className="par-mission1 h3 fw-bold text-center">Our Vision</p>
                        <p className="par-mission h5">Our Vision is to offer local and International organizations the finest of products and services in the market through INKLAB GRAPHICS LIMITED.</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 mt-4">
                    <div className="box-mission p-5 rounded">
                        <div className="box-mission2 m-3 p-3 border rounded">
                            <p className="par-mission1 h3 fw-bold text-center">Our Motto</p>
                            <p className="par-mission h5">We are committed to excellence in Print and Branding.</p>
                        </div>

                        <div className="box-mission2 m-3 p-3 border rounded">
                            <p className="par-mission1 h3 fw-bold text-center">Our Slogan</p>
                            <p className="par-mission h5">Ethics is our core value, Quality our way of life.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row border rounded mt-5">
            <h2 className="ttle-aboutus text-center display-5 fw-bold p-5">Who we are</h2>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-5 col-xl-4 mt-4">
                    <div className="box-mission1">
                        <a href={inklab_logo} target="_blank" rel="noopener noreferrer">
                            <img src={inklab_logo} alt="inklab logo" className="inklab_logo" />
                        </a>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-7 col-xl-8 mt-4">
                    <div className="box-mission2 m-3 p-4">
                        <p className="par-mission h5">Inklab Graphics Ltd is your one-stop print and branding source. Combining the absolutely best products in the industry with the most competitive pricing-Thats a deal that can't beat. It was established as a printing and branding company and incorporated on July 2024.</p>
                        <p className="par-mission h5">Inklab now supplies a wide range of business sectors. These Include:</p>
                        <p className="par-mission h6">-Banking</p>
                        <p className="par-mission h6">-Leisure</p>
                        <p className="par-mission h6">-Education</p>
                        <p className="par-mission h6">-Sports and Energy</p>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Mission;