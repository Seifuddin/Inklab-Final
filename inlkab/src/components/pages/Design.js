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
        <div className="container-design p-2 bg-white border">
            <h1 className="head-digitalprint rounded p-2 text-center h5lay-6 fw-bold pt-5">Other Services</h1>
            <h1 className="signage-header2 h6 rounded pb-4 text-center text-dark">Apart from the basic services, we have many many more services that we have not listed in our website. They include Web design and development, Desktop Applications development, Animations and Cartoons, Video editing, Hand drawing, Painting and Video Adverts</h1>
            <div className="sub-design">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={graficdesign} target="_blank" rel="noopener noreferrer">
                                <img className='imej-design' src={graficdesign} alt='graphicdesign' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">Graphic Design</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={animation} target="_blank" rel="noopener noreferrer">
                                <img className='imej-design' src={animation} alt='animationdesign' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">Animations/ Cartoons</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={d3ddesign} target="_blank" rel="noopener noreferrer">
                                <img className='imej-design' src={d3ddesign} alt='ddesign' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">2D/ 3D Design</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={videoadverts} target="_blank" rel="noopener noreferrer">
                                <img className='imej-design' src={videoadverts} alt='videoadverts' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">Video Adverts</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={videoediting} target="_blank" rel="noopener noreferrer">
                                <img className='imej-design' src={videoediting} alt='videoediting' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">Video Editing</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={webdesign} target="_blank" rel="noopener noreferrer">
                                <img className='imej-design' src={webdesign} alt='webdesign' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">Web Development</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={appdevelopment} target="_blank" rel="noopener noreferrer">
                                <img className='imej-design' src={appdevelopment} alt='appdevelopment' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">App Development</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 col-6">
                        <div className="box-digitalprinting rounded container bg-white">
                            <a href={illustrations} target="_blank" rel="noopener noreferrer">
                                <img className='imej-design' src={illustrations} alt='illustrations' />
                            </a>
                            <h1 className="h3-clients1 h6 text-center fw-bold p-1">Hand Drawing</h1>
                            <h3 className="h3-clothes2 h6 text-center">From Kshs. 100 - Kshs. 100 per A3 size </h3>
                            <button className="btn-quotation h6 text-center m-2 border rounded p-2 rounded" onClick={handleButtonClick}> Quoatation </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

};

export default Design;