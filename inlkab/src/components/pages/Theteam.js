import React from "react";
import './Theteam.css';
import colonel from '../images/General_Service_Unit.jpg';

const TheTeam = () => {

    return (
        <div className="container-theteam container">
            <h1 className="head-theteam display-6 fw-bold p-3">The Team</h1>
            <p className="saying-teamm h3">Our team is made ofexperienced proffessionals who love what they do. From our skilled designers to our dedicated printing specialists, every member of our team is focused on providing the best services possible. We closely work with our clients to understand their needs, ensurind that every print reflects the quality and care we're known for.</p>
            <div className="row">
                <div className="col">
                    <div className="box-theteam container p-3">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-theteam" src={colonel} alt='the team'/>
                        </a>
                        <h5 className="theteam-name text-center h4 text-primary">Chris - Chief Graphic Designer</h5>
                        <p className="par-theteam h5 text-center">With over 10 years of experience, Chris specializes in Graphic design and Photoshop</p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-theteam container p-3">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-theteam" src={colonel} alt='the team'/>
                        </a>
                        <h5 className="theteam-name text-center h4 text-primary">Chris - Chief Graphic Designer</h5>
                        <p className="par-theteam h5 text-center">With over 10 years of experience, Chris specializes in Graphic design and Photoshop</p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-theteam container p-3">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-theteam" src={colonel} alt='the team'/>
                        </a>
                        <h5 className="theteam-name text-center h4 text-primary">Chris - Chief Graphic Designer</h5>
                        <p className="par-theteam h5 text-center">With over 10 years of experience, Chris specializes in Graphic design and Photoshop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheTeam;