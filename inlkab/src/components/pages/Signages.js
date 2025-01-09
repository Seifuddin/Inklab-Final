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
        <div className="container-signage border p-2 pb-5 bg-light">
            <h1 className="head-digitalprint rounded p-2 text-center h5lay-6 fw-bold pt-5">Signages</h1>
            <h1 className="signage-header2 h6 rounded pt-2 text-center text-dark">Enhance your visibility with custom signage solutions tailored to your brand. From indoor displays to outdoor signs, we create high-quality, durable signages that leave a lasting impression.</h1>
            <div className="sub-signage">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={backlit3} target="_blank" rel="noopener noreferrer">
                                <img className='imej-signage mt-' src={backlit3} alt='backlit3' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">Backlit3</h1>
                            <h3 className="h3-signej2 h6 text-center text-dark p-3">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={dsign2} target="_blank" rel="noopener noreferrer">
                                <img className='imej-signage' src={dsign2} alt='dsigns' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">2 D Signs</h1>
                            <h3 className="h3-signej2 h6 text-center text-dark p-3">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={dsign3} target="_blank" rel="noopener noreferrer">
                                <img className='imej-signage' src={dsign3} alt='dsigns' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1t-dark">3 D Signs</h1>
                            <h3 className="h3-signej2 h6 text-center text-dark p-3">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={Lightbox} target="_blank" rel="noopener noreferrer">
                                <img className='imej-signage' src={Lightbox} alt='lightbox' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">Lightbox</h1>
                            <h3 className="h3-signej2 h6 text-center text-dark p-3">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={roadsign} target="_blank" rel="noopener noreferrer">
                                <img className='imej-signage' src={roadsign} alt='roadsign' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">Road Signs</h1>
                            <h3 className="h3-signej2 h6 text-center text-dark p-3">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={wallsign} target="_blank" rel="noopener noreferrer">
                                <img className='imej-signage' src={wallsign} alt='wallsign' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">Wall Signs</h1>
                            <h3 className="h3-signej2 h6 text-center text-dark p-3">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

};

export default Signage;