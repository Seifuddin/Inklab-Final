import React, { useRef } from "react";
import './Ourservices.css';
import printing from '../images/1000040016.jpg';
import konika from '../images/konica-minolta-production-printer.jpg';
import lformat from '../images/c9c5520ecb9ad68e1054d68d75b9a2d7bdec3dfb.jpg';
import clothe from '../images/61d1aff14bf9944a66bdd2fb81cf637c729d70c9.jpg';
import signages from '../images/directional-signages.jpg';
import graphics from '../images/do-graphic-design-and-assignament.jpg';
import web from '../images/How_to_Learn_Web_Designing.jpg';
import video from '../images/maxresdefault(1).jpg';
import d from '../images/3d-logo-png-free-png-images-download-36731.png';

const Ourservices = () => {
    
    return (
        <div className="container-services container-flex">
            <h1 className="ourservices-header display-4 fw-bold text-center p-5">Our services</h1>
            <p className="saying-services p-5 pt-0 h3 text-center">Whether you're a business proffessional, an artist, or a student, our range of services ensures we have the right solution for every project.</p>
            <div className="sub-ourservices m-3">
                <div className="row">
                    <div className="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={konika} alt='konika' />
                            </a>
                            <h1 className="par-service h4">Digital Printing</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={lformat} alt='large format' />
                            </a>
                            <h1 className="par-service h4">Large Format Printing</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={clothe} alt='clothe' />
                            </a>
                            <h1 className="par-service h4">Cloth Branding</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={signages} alt='signages' />
                            </a>
                            <h1 className="par-service h4">Signages</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={graphics} alt='graphics' />
                            </a>
                            <h1 className="par-service h4">Graphic Design</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={web} alt='web' />
                            </a>
                            <h1 className="par-service h4">Web Design</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={video} alt='video' />
                            </a>
                            <h1 className="par-service h4">Video Advertising</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="box-service">
                            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                                <img className='imej-printing' src={d} alt='3d' />
                            </a>
                            <h1 className="par-service h4">3D/ 2D Design</h1>
                            <p className="h-service">Digital Printing is our main business in Inklab Graphics Ltd. It is also refered to as the father of Inklab Graphics as it was also the first business we started with</p>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )

};

export default Ourservices;