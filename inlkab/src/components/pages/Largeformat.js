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
        <div className="container-LargeFormat" id="largeformat">
            <div className="cont-Largeformt m-5">
                <h1 className="head-LajFomat rounded p-2 text-center text-white p-5 display-6 fw-bold m-5 mt-0">Large Format Printing</h1>

                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-6 col-6">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={bannerz} target="_blank" rel="noopener noreferrer">
                                <img src={bannerz} alt="banners" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Banners & Wallpapers</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={wheel} target="_blank" rel="noopener noreferrer">
                                <img src={wheel} alt="wheelcovers" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning"> Wheel Covers (for cars)</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center border fw-bold m-2 p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={xstand} target="_blank" rel="noopener noreferrer">
                                <img src={xstand} alt="xstand" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">X Stand Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={broadbase} target="_blank" rel="noopener noreferrer">
                                <img src={broadbase} alt="broadbase" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Broadbase Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={teardrop} target="_blank" rel="noopener noreferrer">
                                <img src={teardrop} alt="teardrop" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Tear Drop Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={popup} target="_blank" rel="noopener noreferrer">
                                <img src={popup} alt="popupbanners" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Pop Up Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={umbrella} target="_blank" rel="noopener noreferrer">
                                <img src={umbrella} alt="umbrella" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Umbrella Brandings</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={backdrop} target="_blank" rel="noopener noreferrer">
                                <img src={backdrop} alt="backdrop" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Back Drop Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={vinyl} target="_blank" rel="noopener noreferrer">
                                <img src={vinyl} alt="vinyl" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Vinyl Bannerss</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={vehiclez} target="_blank" rel="noopener noreferrer">
                                <img src={vehiclez} alt="vehiclebranding" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Vehicle Branding</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={kitc} target="_blank" rel="noopener noreferrer">
                                <img src={kitc} alt="kitc" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Kit C Pop Up Stands</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={outdoor} target="_blank" rel="noopener noreferrer">
                                <img src={outdoor} alt="outdoor" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Out Door Umbrella</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={popuptent} target="_blank" rel="noopener noreferrer">
                                <img src={popuptent} alt="popuptents" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Pop-Up Tent Deluxe Kit</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={snapper} target="_blank" rel="noopener noreferrer">
                                <img src={snapper} alt="snapper" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Snapper Frames</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={forex} target="_blank" rel="noopener noreferrer">
                                <img src={forex} alt="forex" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Forex Board Printing</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-6 ">
                        <div className="box-Largefromat border rounded container p-2">
                            <a href={wallstickers} target="_blank" rel="noopener noreferrer">
                                <img src={wallstickers} alt="wallstickers" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-warning">Wall stickers & Canvas</h3>
                            <h3 className="h3-lformat2 h6 text-center text-white">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default LargeFormat;