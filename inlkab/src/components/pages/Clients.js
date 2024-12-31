import React from "react";
import './Clients.css';
import facebook from '../images/2048px-Facebook_icon_2013.svg.png';
import gok from '../images/government-of-kenya.jpg';
import lemaiyan from '../images/Untitled-design-1.png';
import kisasi from '../images/IMG_20241109_002156_654~2.jpg';
import alma from '../images/IMG_20241109_002202_122~2.jpg';
import algorithmic from '../images/IMG_20241109_002207_851~2.jpg';
import motospot from '../images/IMG_20241109_002214_619~2.jpg';
import mangu from '../images/IMG_20241109_002615_287~2.jpg';
import nima from '../images/IMG_20241109_002222_508~2.jpg';
import serene from '../images/IMG_20241109_002222_508~2.jpg';
import aggrey from '../images/IMG_20241109_002618_921~2.jpg';
import sombe from '../images/IMG_20241109_002244_764~2.jpg';
import critical from '../images/IMG_20241109_002244_764~2.jpg';

const Clients = () => {

    return (
        <div className="container-clients container-flex bg-white">
            <div className="sub-clients container rounded p-5">
                <h1 className="h1-clients h1 fw-bold text-center p-5">Our Clients...</h1>
                <p className="saying-feedack text-center h3 fw-bold">"Our partners in success. Proudly serving clients from all industries and building lasting relationships through quality printing"</p>
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={gok} target="_blank" rel="noopener noreferrer">
                                <img src={gok} alt="gok" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">Government of Kenya</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={lemaiyan} target="_blank" rel="noopener noreferrer">
                                <img src={lemaiyan} alt="lemaiyan" className="facebook border" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">Lemaiyan</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={aggrey} target="_blank" rel="noopener noreferrer">
                                <img src={aggrey} alt="aggrey" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">DR. Aggrey High School</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={mangu} target="_blank" rel="noopener noreferrer">
                                <img src={mangu} alt="mangu" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">Mangu High School</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={sombe} target="_blank" rel="noopener noreferrer">
                                <img src={sombe} alt="sombe" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">AIC Sombe Girls School</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={serene} target="_blank" rel="noopener noreferrer">
                                <img src={serene} alt="serene" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">Serene Haven</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={alma} target="_blank" rel="noopener noreferrer">
                                <img src={alma} alt="alma" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">Alma Brands</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={algorithmic} target="_blank" rel="noopener noreferrer">
                                <img src={algorithmic} alt="algorithmic" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">Algorithmic Coding School</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={nima} target="_blank" rel="noopener noreferrer">
                                <img src={nima} alt="nima" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">NIMA East Africa</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={critical} target="_blank" rel="noopener noreferrer">
                                <img src={critical} alt="critiacal" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">Cittificial Klothing</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={motospot} target="_blank" rel="noopener noreferrer">
                                <img src={motospot} alt="motospot" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">Motospot</h3>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="box-clients m-3">
                            <a href={kisasi} target="_blank" rel="noopener noreferrer">
                                <img src={kisasi} alt="kisasi" className="facebook" />
                            </a>
                            <h3 className="h3-clients h6 text-center fw-bold">Kisasi Secondary School</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;