import React from "react";
import './Largeformat.css';
import magazines from '../images/1000040016.jpg';
import bannerz from '../images/1000040016.jpg';
import wheel from '../images/1000040016.jpg';
import xstand from '../images/1000040016.jpg';
import broadbase from '../images/1000040016.jpg';
import teardrop from '../images/1000040016.jpg';
import popup from '../images/1000040016.jpg';
import umbrella from '../images/1000040016.jpg';
import backdrop from '../images/1000040016.jpg';
import vinyl from '../images/1000040016.jpg';
import vehiclez from '../images/1000040016.jpg';
import kitc from '../images/1000040016.jpg';
import outdoor from '../images/1000040016.jpg';
import popuptent from '../images/1000040016.jpg';
import snapper from '../images/1000040016.jpg';
import forex from '../images/1000040016.jpg';
import { useNavigate } from "react-router-dom";

const LargeFormat = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/calculator");
    };

    return (
        <div className="container-LargeFormat" id="largeformat">
            <div className="cont-Largeformt m-5">
                <h1 className="head-LajFomat rounded p-2 text-center text-white bg-danger display-6 fw-bold">Large Format Printing</h1>

                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={bannerz} target="_blank" rel="noopener noreferrer">
                                <img src={bannerz} alt="banners" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={wheel} target="_blank" rel="noopener noreferrer">
                                <img src={wheel} alt="wheelcovers" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Wheel Covers</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={xstand} target="_blank" rel="noopener noreferrer">
                                <img src={xstand} alt="xstand" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">X Stand Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={broadbase} target="_blank" rel="noopener noreferrer">
                                <img src={broadbase} alt="broadbase" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Broadbase Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={teardrop} target="_blank" rel="noopener noreferrer">
                                <img src={teardrop} alt="teardrop" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Tear Drop Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={popup} target="_blank" rel="noopener noreferrer">
                                <img src={popup} alt="popupbanners" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Pop Up Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={umbrella} target="_blank" rel="noopener noreferrer">
                                <img src={umbrella} alt="umbrella" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Umbrella Brandings</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={backdrop} target="_blank" rel="noopener noreferrer">
                                <img src={backdrop} alt="backdrop" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Back Drop Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={vinyl} target="_blank" rel="noopener noreferrer">
                                <img src={vinyl} alt="vinyl" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Vinyl Banners</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={vehiclez} target="_blank" rel="noopener noreferrer">
                                <img src={vehiclez} alt="vehiclebranding" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Vehicle Branding</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={kitc} target="_blank" rel="noopener noreferrer">
                                <img src={kitc} alt="kitc" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Kit C Pop Up Stands</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={outdoor} target="_blank" rel="noopener noreferrer">
                                <img src={outdoor} alt="outdoor" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Out Door Umbrella</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={popuptent} target="_blank" rel="noopener noreferrer">
                                <img src={popuptent} alt="popuptents" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Pop-Up Tent Deluxe Kit</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={snapper} target="_blank" rel="noopener noreferrer">
                                <img src={snapper} alt="snapper" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Snapper Frames</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-Largefromat border border-3 rounded container p-2">
                            <a href={forex} target="_blank" rel="noopener noreferrer">
                                <img src={forex} alt="forex" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-lformat h5 text-center fw-bold m-2  p-1 text-danger">Forex Board Direct Printing</h3>
                            <h3 className="h3-lformat2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default LargeFormat;