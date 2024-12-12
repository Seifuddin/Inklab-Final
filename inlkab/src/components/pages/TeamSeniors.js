import React from "react";
import './TeamSeniors.css';
import colonel from '../images/General_Service_Unit.jpg';

const Seniors = () => {

    return (
        <div className="container-seniors border rounded m-5 bg-light">
            <h1 className="head-seniors text-center display-6 fw-bold p-5">Current Senior Office Holders</h1>
            <div className="row m-5 rounded border border-primary bg-primary">
                <div className="col">
                    <div className="box-seniors container ">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-seniors" src={colonel} alt='seniors'/>
                        </a>
                    </div>
                </div>

                <div className="col">
                    <div className="box-seniors container rounded bg-primary p-5">
                        <h5 className="seniors-name text-center text-warning h4 fw-bold">Clifford Matara - Chair, Board of Directors</h5>
                        <p className="par-seniors text-white h5">Clifford Matara is a principal and founder of Inklab Graphics LTD. His primary areas of expertise are in management and leadership, labor, financial and marketing management.</p>
                        <p className="par-seniors text-white h5">Clifford has over 13 years in print production, graphics work and vast number of years of experience in management, finance and accounting. He is a member of Kenya Institute of Managers.</p>
                    </div>
                </div>
            </div>

            <div className="row m-5 border border-primary rounded">
                <div className="col">
                    <div className="box-seniors container bg-primary rounded p-5">
                        <h5 className="seniors-name text-center text-warning h4 fw-bold">Vincent Obwogi - Managing Director, Operations</h5>
                        <p className="par-seniors text-white h5">Vincent Obwogi is the co-founder and the operations director at Inklab Graphics LTD. He holds over 12 years in print production, design and branding.</p>
                        <p className="par-seniors text-white h5">He captains a team of over seven permanent employees and a big number of casuals who are involved in the day to day production of outputs. He is responsible in the overall management and oversight of multi-discplined projects and programs including costing and estimation.</p>
                    </div>
                </div>

                <div className="col">
                    <div className="box-seniors container">
                        <a href={colonel} target="_blank" rel="noopener noreferrer">
                            <img className="img-seniors" src={colonel} alt='seniors'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seniors;