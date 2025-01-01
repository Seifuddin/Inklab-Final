import React from "react";
import './Awards.css';
import colonel from '../images/General_Service_Unit.jpg';
import trophy from '../images/cupAwards.png';
import { Link, useNavigate } from 'react-router-dom';

const Awards = () => {
    return (
        <div className="container-awards p-2 container-flex bg-light border">
            <h3 className="Awards-ttle display-5 text-center m-5 fw-bold"> Awards and Achievements</h3>
            <p className="saying-mission mt-0 text-center h3">We are proud to be recognized by industry leaders and clients alike for our commitment to quality, innovation, and customer service. Our achievements are a testament to the hard work and dedication we put into every project</p>
            <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-sm-12 col-xs-12">
                    <div className="box">
                        <a href={trophy} target="_blank" rel="noopener noreferrer">
                            <img src={trophy} alt="Trophy" className="imgtrophy" />
                        </a>
                        <div className="OurMotto">
                        </div>
                    </div>
                </div>

                <div className="col-xxl-6 col-xl-4 col-lg-5 col-md-7 col-sm-12 col-xs-12">
                    <div className="box p-3">
                        <h5 className="service-1 text-center rounded border bg-white h4 fw-bold text-dark p-1">Innovation Award for the outstanding quality.</h5>
                        <h5 className="hed-awrd h4 p-2">Recognized for delivering superior print quality that meets the highest standards in the industry.</h5>
                        <h5 className="hed-awrd h4 p-2">Also, we are celebrated for our advancements in printing technology, ensuring our clients benefit from cutting -edge solutions.</h5>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Awards;