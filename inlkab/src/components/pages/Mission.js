import React from "react";
import './Mission.css';
import inklablogoh from '../images/1000040014.jpg';

const Mission = () => {

    return (
        <div className="container-mission container-flex p-5 bg-white">
            <h2 className="ttle-aboutus text-center display-5 fw-bold p-2 text-dark">About Us</h2>
            <p className="saying-mission text-center h3 pb-5 pt-3 fw-bold">We're more than just a printing company. We're your creative partner, dedicated to helping individuals and businesses alike bring their ideas to life with vibrant, high-quality prints.</p>
            <div className="row container-flex">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="box-mission p-5 border bg-white">
                        <p className="par-mission1 h4 fw-bold text-center">Our Mission</p>
                        <p className="par-mission">Our mission is to deliver outstanding printing services that exceed customer expectations, using the latest technology and top-quality materials. We are committed to providing personalized solutions, fostering creativity, and building lasting relationships with our clients while ensuring efficiency, reliability, and sustainability in every project we undertake.</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="box-mission rounded border bg-white">
                        <p className="par-mission1 h3 fw-bold text-center">Our Vision</p>
                        <p className="par-mission">Our Vision is to offer local and International organizations the finest of products and services in the market through INKLAB GRAPHICS LIMITED. To be the leading provider of innovative and high-quality printing solutions, empowering businesses and individuals to express their creativity with precision, durability, and exceptional service</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                    <div className="box-mission rounded border bg-white">
                        <p className="par-mission1 h3 fw-bold text-center">Core Objective</p>
                        <p className="par-mission"> Our objective is to obtain mega realizable contracts so as to maximize the usage of our present resources and information, with a pragmatic approach in developing solutions, so as to meet the needs of our clients as well as enable Inlkb Graphics LTD achieve profit targets set from time to time.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Mission;