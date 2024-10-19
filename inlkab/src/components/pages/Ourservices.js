import React, { useRef } from "react";
import './Ourservices.css';
import printing from '../images/1000040016.jpg';
import { Link } from "react-router-dom";

const Ourservices = () => {
    
    return (
        <div className="container-services container-flex">
            <h1 className="ourservices-header display-4 fw-bold text-center mt-5 mb-5">Our services</h1>
            <div className="sub-ourservices m-3">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={printing} alt='printing' />
                            </a>
                            <h1 className="par-service h4">Digital Printing</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={printing} alt='printing' />
                            </a>
                            <h1 className="par-service h4">Large Format Printing</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                            <Link to="./largeformat">
                                <button>See more...</button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={printing} alt='printing' />
                            </a>
                            <h1 className="par-service h4">Digital Printing</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={printing} alt='printing' />
                            </a>
                            <h1 className="par-service h4">Digital Printing</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={printing} alt='printing' />
                            </a>
                            <h1 className="par-service h4">Digital Printing</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={printing} alt='printing' />
                            </a>
                            <h1 className="par-service h4">Digital Printing</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={printing} alt='printing' />
                            </a>
                            <h1 className="par-service h4">Digital Printing</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={printing} alt='printing' />
                            </a>
                            <h1 className="par-service h4">Digital Printing</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

};

export default Ourservices;