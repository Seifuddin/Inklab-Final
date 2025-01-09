import React from "react";
import './Theteam.css';
import colonel from '../images/IMG_20240804_185749_718~2.jpg';

const TheTeam = () => {

    return (
        <div className="container-theteam border rounded mt-5 bg-light">
            <h1 className="head-digitalprint rounded p-2 text-center h5lay-6 fw-bold pt-5">The Team</h1>
            <p className="saying-teamm h5 text-center text-dark mb-5">Our team is made ofexperienced proffessionals who love what they do. From our skilled designers to our dedicated printing specialists, every member of our team is focused on providing the best services possible. We closely work with our clients to understand their needs, ensurind that every print reflects the quality and care we're known for.</p>
            <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="box-theteam container p-3 rounded bg-white">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-theteam" src={colonel} alt='the team'/>
                        </a>
                        <h5 className="service1 text-center rounded border bg-light mt-2 h6 fw-bold p-2">Chris - Chief Graphic Designer</h5>
                        <p className="par-theteam h6 text-center">With over 10 years of experience, Chris specializes in Graphic design and Photoshop</p>
                    </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="box-theteam container p-3 rounded bg-white">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-theteam" src={colonel} alt='the team'/>
                        </a>
                        <h5 className="service1 text-center rounded border bg-light mt-2 h6 fw-bold p-2">Chris - Chief Graphic Designer</h5>
                        <p className="par-theteam h6 text-center">With over 10 years of experience, Chris specializes in Graphic design and Photoshop</p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-theteam container p-3 rounded bg-white">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-theteam" src={colonel} alt='the team'/>
                        </a>
                        <h5 className="service1 text-center rounded border bg-light mt-2 h6 fw-bold p-2">Chris - Chief Graphic Designer</h5>
                        <p className="par-theteam h6 text-center">With over 10 years of experience, Chris specializes in Graphic design and Photoshop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheTeam;