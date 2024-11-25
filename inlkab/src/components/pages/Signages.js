import React from "react";
import './Signages.css';
import printing from '../images/1000040016.jpg';
import { useNavigate } from "react-router-dom";


const Signage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/calculator");
    };

    return (
        <div className="container-signage m-5">
            <h1 className="signage-header rounded p-2 text-center text-white bg-primary display-6 fw-bold m-4">Signages</h1>
            <div className="sub-signage ">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={printing} alt='signage' />
                            </a>
                            <h1 className="h3-signage h5 text-center fw-bold m-2  p-1 text-danger">Backlit3</h1>
                            <h3 className="h3-signej2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-6 col-xl-4 col-lg-3 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={printing} alt='signage' />
                            </a>
                            <h1 className="h3-signage h5 text-center fw-bold m-2  p-1 text-danger">D Signs</h1>
                            <h3 className="h3-signej2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={printing} alt='signage' />
                            </a>
                            <h1 className="h3-signage h5 text-center fw-bold m-2  p-1 text-danger">Lightbox</h1>
                            <h3 className="h3-signej2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={printing} alt='signage' />
                            </a>
                            <h1 className="h3-signage h5 text-center fw-bold m-2  p-1 text-danger">Road Signs</h1>
                            <h3 className="h3-signej2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-danger  p-1 text-danger rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-6">
                        <div className="box-signage border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-signage' src={printing} alt='signage' />
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