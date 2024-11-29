import React from "react";
import './Design.css';
import graficdesign from '../images/graphics.jpg';
import animation from '../images/hq720(7).jpg';
import d3ddesign from '../images/2d-and-3d-design-500x500.jpg';
import videoadverts from '../images/video-ad-maker-hero.webp';
import videoediting from '../images/How-to-Edit-Videos.jpg';
import webdesign from '../images/Web-design-Cork-web-designer-website-design-Ireland-web-desgin-agency-Diane-Higgins-Design-website-designer-CPS-website.jpg';
import appdevelopment from '../images/iphone_apps.jpg';
import illustrations from '../images/sddefault(0).jpg';
import { useNavigate } from "react-router-dom";


const Design = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/calculator");
    };

    return (
        <div className="container-design container-flex">
            <h1 className="design-header container rounded p-2 text-center text-white bg-primary display-6 fw-bold">Other Services</h1>
            <div className="sub-design m-3">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-design border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-design' src={graficdesign} alt='graphicdesign' />
                            </a>
                            <h1 className="h3-designh h5 text-center fw-bold m-2  p-1 text-primary">Graphic Design</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-design border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-design' src={animation} alt='animationdesign' />
                            </a>
                            <h1 className="h3-designh h5 text-center fw-bold m-2  p-1 text-primary">Animation</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-design border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-design' src={d3ddesign} alt='ddesign' />
                            </a>
                            <h1 className="h3-designh h5 text-center fw-bold m-2  p-1 text-primary">2D/ 3D Design</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-design border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-design' src={videoadverts} alt='videoadverts' />
                            </a>
                            <h1 className="h3-designh h5 text-center fw-bold m-2  p-1 text-primary">Video Adverts</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-design border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-design' src={videoediting} alt='videoediting' />
                            </a>
                            <h1 className="h3-designh h5 text-center fw-bold m-2  p-1 text-primary">Video Editing</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-design border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-design' src={webdesign} alt='webdesign' />
                            </a>
                            <h1 className="h3-designh h5 text-center fw-bold m-2  p-1 text-primary">Web Design</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 col-6">
                        <div className="box-design border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-design' src={appdevelopment} alt='appdevelopment' />
                            </a>
                            <h1 className="h3-designh h5 text-center fw-bold m-2  p-1 text-primary">App Development</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 col-6">
                        <div className="box-design border border-3 rounded container p-2">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-design' src={illustrations} alt='illustrations' />
                            </a>
                            <h1 className="h3-designh h5 text-center fw-bold m-2  p-1 text-primary">Hand Drawing</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center fw-bold m-2 border border-3 border-primary  p-1 text-primary rounded " onClick={handleButtonClick}> Get Quoatation </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

};

export default Design;