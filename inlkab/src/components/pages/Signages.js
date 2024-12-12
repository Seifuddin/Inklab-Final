import React from "react";
import './Signages.css';
import backlit3 from '../images/6-5mm-led-acrylic-letter-sign-board-500x500.jpeg';
import dsign3 from '../images/3D-Signage-Letters.jpg';
import dsign2 from '../images/2d-sign-board-500x500.jpg';
import Lightbox from '../images/Lightbox-Signage-exotic-Banners.jpg';
import roadsign from '../images/road-signs-in-kenya-signages-nairobi-kenya.jpg';
import wallsign from '../images/Lobby-signs-in-orange-county.jpg';
import { useNavigate } from "react-router-dom";


const Signage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/calculator");
    };

    return (
        <div className="container-signage m-5">
            <h1 className="signage-header rounded p-2 text-center text-white bg-primary display-6 fw-bold m-4">Signages</h1>
            <div className="sub-signage">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={backlit3} alt='backlit3' />
                            </a>
                            <h1 className="h3-signage h5 text-center fw-bold m-2  p-1 text-danger">Backlit3</h1>
                            <h3 className="h3-signej2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={dsign2} alt='dsigns' />
                            </a>
                            <h1 className="h3-signage h5 text-center fw-bold m-2  p-1 text-danger">2 D Signs</h1>
                            <h3 className="h3-signej2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={dsign3} alt='dsigns' />
                            </a>
                            <h1 className="h3-signage h5 text-center fw-bold m-2  p-1 text-danger">3 D Signs</h1>
                            <h3 className="h3-signej2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={Lightbox} alt='lightbox' />
                            </a>
                            <h1 className="h3-signage h5 text-center fw-bold m-2  p-1 text-danger">Lightbox</h1>
                            <h3 className="h3-signej2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={roadsign} alt='roadsign' />
                            </a>
                            <h1 className="h3-signage h5 text-center fw-bold m-2  p-1 text-danger">Road Signs</h1>
                            <h3 className="h3-signej2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={wallsign} alt='wallsign' />
                            </a>
                            <h1 className="h3-signage h5 text-center fw-bold m-2  p-1 text-danger">Wall Signs</h1>
                            <h3 className="h3-signej2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

};

export default Signage;