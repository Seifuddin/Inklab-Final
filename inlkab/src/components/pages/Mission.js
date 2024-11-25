import React from "react";
import './Mission.css';
import inklablogoh from '../images/1000040014.jpg';

const Mission = () => {

    return (
        <div className="container-mission container-flex p-5">
            <h2 className="ttle-aboutus text-center display-5 fw-bold p-5">About Us</h2>
            <p className="saying-mission text-center h3 p-5 pt-0">We're more than just a printing company. We're your creative partner, dedicated to helping individuals and businesses alike bring their ideas to life with vibrant, high-quality prints.</p>
            <div className="row container-flex">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="box-mission p-5 border">
                        <p className="par-mission1 h4 fw-bold text-center">Our Mission</p>
                        <p className="par-mission">To be a partner of choice by delivering convenient, cost-effective products and proffessional services in Printing & Branding, at competitive prices, throughout the business community with effective consultation, a superior ordering process and on-time delivery.</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="box-mission rounded border">
                        <p className="par-mission1 h3 fw-bold text-center">Our Vision</p>
                        <p className="par-mission">Our Vision is to offer local and International organizations the finest of products and services in the market through INKLAB GRAPHICS LIMITED.</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                    <div className="box-mission rounded border">
                        <p className="par-mission1 h3 fw-bold text-center">Our Motto</p>
                        <p className="par-mission">We are committed to excellence in Print and Branding.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Mission;