import React from "react";
import './Theteam.css';
import colonel from '../images/General_Service_Unit.jpg';

const TheTeam = () => {

    return (
        <div className="container-theteam container-flex p-5">
            <h1 className="head-theteam display-6 fw-bold p-3">The Team</h1>
            <div className="row">
                <div className="col">
                    <div className="box-theteam p-3">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-theteam" src={colonel} alt='the team'/>
                        </a>
                        <h5 className="theteam-name text-center h-5">Chris - Chief Graphic Designer</h5>
                        <p className="par-theteam h-6 text-center">With over 10 years of experience, Chris specializes in Graphic design and Photoshop</p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-theteam p-3">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-theteam" src={colonel} alt='the team'/>
                        </a>
                        <h5 className="theteam-name text-center h-5">Chris - Chief Graphic Designer</h5>
                        <p className="par-theteam h-6 text-center">With over 10 years of experience, Chris specializes in Graphic design and Photoshop</p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-theteam p-3">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-theteam" src={colonel} alt='the team'/>
                        </a>
                        <h5 className="theteam-name text-center h-5">Chris - Chief Graphic Designer</h5>
                        <p className="par-theteam h-6 text-center">With over 10 years of experience, Chris specializes in Graphic design and Photoshop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheTeam;