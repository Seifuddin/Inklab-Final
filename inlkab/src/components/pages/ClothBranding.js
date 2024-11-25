import React from "react";
import './ClothBranding.css';
import magazines from '../images/1000040016.jpg';
import { useNavigate } from "react-router-dom";

const Cloth = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/calculator");
    };

    return (
        <div className="container-Cloth">
            <div className="cont-Cloth m-5">
                <h1 className="head-Cloth rounded p-2 text-center text-white bg-primary display-6 fw-bold">Cloth Branding</h1>

                <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clothes h5 text-center fw-bold m-2  p-1 text-primary">T-Shirt Branding</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="hh3-clothes h5 text-center fw-bold m-2  p-1 text-primary">Hoodies</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clothes h5 text-center fw-bold m-2  p-1 text-primary">Jerseys</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clothes h5 text-center fw-bold m-2  p-1 text-primary">Caps</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clothes h5 text-center fw-bold m-2  p-1 text-primary">Reflector Jackets</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clothes h5 text-center fw-bold m-2  p-1 text-primary">Custom Flags</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clothes h5 text-center fw-bold m-2  p-1 text-primary">Uniforms</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-6 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clothes h5 text-center fw-bold m-2  p-1 text-primary">Prons And Overalls</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-6 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clothes h5 text-center fw-bold m-2  p-1 text-primary">Bags</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-6 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clothes h5 text-center fw-bold m-2  p-1 text-primary">Towels</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-12 ">
                        <div className="box-clothes border border-3 rounded container p-2">
                            <a href={magazines} target="_blank" rel="noopener noreferrer">
                                <img src={magazines} alt="magazines" className="img-LargeFormat" />
                            </a>
                            <h3 className="h3-clothes h5 text-center fw-bold m-2  p-1 text-primary">Corporate Shirts</h3>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Cloth;