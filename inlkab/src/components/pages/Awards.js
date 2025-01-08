import React from "react";
import './Awards.css';
import trophy from '../images/lovepik-business-people-awarding-awards-png-image_401594823_wh1200.png';

const Awards = () => {
    return (
        <div className="container-awards container-flex">
            <div className="opasity"></div>
                    <div className="box">
                        <h3 className="Awards-ttle display-5 text-center mb-5 mt-5 fw-bold"> Awards and Achievements</h3>
                        <p className="saying-mission mt-0 text-center h3 text-white p-1">We are proud to be recognized by industry leaders and clients alike for our commitment to quality, innovation, and customer service. Our achievements are a testament to the hard work and dedication we put into every project</p>
                        <div className="row mt-5 m-1 m-5">
                            <div className="collum col p-2 m-2 container">
                                <a href={trophy} target="_blank" rel="noopener noreferrer">
                                    <img className="img-trophy" src={trophy} alt='client-1'/>
                                </a>
                                <h5 className="hedertrophy text-center h6 fw-bold mt-3 mb-3">Innovation Award for the outstanding quality.</h5>
                                <h5 className="hed-awrd h6 text-white">Recognized for delivering superior print quality that meets the highest standards in the industry.</h5>
                            </div>

                            <div className="collum col p-2 m-2 container">
                                <a href={trophy} target="_blank" rel="noopener noreferrer">
                                    <img className="img-trophy" src={trophy} alt='client-1'/>
                                </a>
                                <h5 className="hedertrophy text-center h6 fw-bold mt-3 mb-3">Innovation Award for the outstanding quality.</h5>
                                <h5 className="hed-awrd h6 text-white">Also, we are celebrated for our advancements in printing technology, ensuring our clients benefit from cutting -edge solutions.</h5>
                            </div>
                        </div>
                        <div className="OurMotto">
                    </div>
        </div>
        </div>
    );
};

export default Awards;