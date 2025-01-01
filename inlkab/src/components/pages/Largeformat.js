import React from "react";
import './Largeformat.css';
import bannerz from '../images/large-fomat-printing-600x600.jpg';
import wheel from '../images/wheel-cover-benefits(0).jpg';
import xstand from '../images/1280x1280_X-stand_banner_03__73386.1626447544.jpg';
import broadbase from '../images/e92886_a011b374f3994c87bc715aaf3737a15f~mv2.jpg';
import teardrop from '../images/teardrop-banner-printing-3.webp';
import popup from '../images/Pop-up-Banners-Oval.jpg';
import umbrella from '../images/branded-umbrella-promotional-print-printfactory-lagos-ng.png';
import backdrop from '../images/backdrop-800-x-800-1.jpg';
import vinyl from '../images/hikeprint-vinyl-banner.png';
import vehiclez from '../images/Vehicle-branding-1.png';
import kitc from '../images/Untitleddesign_84_480x480_crop_center.png';
import outdoor from '../images/patio Promotional umbrella by classic umbrella india umbrella manufacturers.jpg';
import popuptent from '../images/GT-0110_2.webp';
import snapper from '../images/Interbrand-Advertising-Snapper-frame-1080.jpg';
import forex from '../images/untitled-799.jpg';
import wallstickers from '../images/DSC00337ThinkDigital_566x566.jpg';
import { useNavigate } from "react-router-dom";

const LargeFormat = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/calculator");
    };

    return (
        <div className="container-LargeFormat pb-5 bg-light" id="largeformat">
            <div className="cont-Largeformt p-2 bg-light">
                <h1 className="head-LajFomat rounded text-center text-dark p-3 display-6 fw-bold mt-5">Large Format Printing</h1>
            <h1 className="signage-header2 h4 rounded pb-4 text-center text-dark">Make a big impact with our large format printing services! Perfect for banners, posters, signs, and other oversized materials, this printing method delivers sharp, high-resolution visuals on a variety of materials.</h1>

                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-6 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={bannerz} target="_blank" rel="noopener noreferrer">
                                <img src={bannerz} alt="banners" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Banners & Wallpapers</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={wheel} target="_blank" rel="noopener noreferrer">
                                <img src={wheel} alt="wheelcovers" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark"> Wheel Covers (for cars)</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={xstand} target="_blank" rel="noopener noreferrer">
                                <img src={xstand} alt="xstand" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">X Stand Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={broadbase} target="_blank" rel="noopener noreferrer">
                                <img src={broadbase} alt="broadbase" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Broadbase Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={teardrop} target="_blank" rel="noopener noreferrer">
                                <img src={teardrop} alt="teardrop" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Tear Drop Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={popup} target="_blank" rel="noopener noreferrer">
                                <img src={popup} alt="popupbanners" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Pop Up Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={umbrella} target="_blank" rel="noopener noreferrer">
                                <img src={umbrella} alt="umbrella" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Umbrella Brandings</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={backdrop} target="_blank" rel="noopener noreferrer">
                                <img src={backdrop} alt="backdrop" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Back Drop Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={vinyl} target="_blank" rel="noopener noreferrer">
                                <img src={vinyl} alt="vinyl" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Vinyl Bannerss</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={vehiclez} target="_blank" rel="noopener noreferrer">
                                <img src={vehiclez} alt="vehiclebranding" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Vehicle Branding</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={kitc} target="_blank" rel="noopener noreferrer">
                                <img src={kitc} alt="kitc" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Kit C Pop Up Stands</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={outdoor} target="_blank" rel="noopener noreferrer">
                                <img src={outdoor} alt="outdoor" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Out Door Umbrella</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={popuptent} target="_blank" rel="noopener noreferrer">
                                <img src={popuptent} alt="popuptents" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Pop-Up Tent Deluxe Kit</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={snapper} target="_blank" rel="noopener noreferrer">
                                <img src={snapper} alt="snapper" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Snapper Frames</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={forex} target="_blank" rel="noopener noreferrer">
                                <img src={forex} alt="forex" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Forex Board Printing</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-6 ">
                        <div className="box-digitalprinting border border-3 rounded container bg-white">
                            <a href={wallstickers} target="_blank" rel="noopener noreferrer">
                                <img src={wallstickers} alt="wallstickers" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clients1 h6 text-center fw-bold p-1 text-dark">Wall stickers & Canvas</h3>
                            <h3 className="h3-lformat2 h6 text-center text-dark">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default LargeFormat;