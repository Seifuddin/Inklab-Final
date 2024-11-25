import React from "react";
import './Homepage.css';
import printer from '../images/konica-minolta-production-printer-removebg-preview.png';
import Video from "./Videos";

const Homepage = () => {
    return (
        <div className="container-homepage container-flex p-5">
            <div className="homepage">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                        <div className="box-homepage">
                            <h1 className="homepage-titl display-4 fw-bold text-danger p-2">Transform Your Vision into Stunning Designs</h1>
                            <p className="second-titl h2 fw-bold p-2">Proffessional Graphic Design and High-Quality Printing Services Tailored to Your Needs</p>
                        </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-5 col-8">
                        <div className="box-homepage">
                            <img src={printer} alt="printer" className="img-konika" />
                        </div>
                    </div>

                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="box-homepage">
                            <Video />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Homepage;