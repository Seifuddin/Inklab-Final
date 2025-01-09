import React from "react";
import './OurTeam.css';
import ceo from '../images/IMG_20240804_185749_718~2.jpg';
import gmailCliff from '../images/gratis-png-direccion-de-correo-electronico-iconos-de-la-computadora-logo-usuario-gmail.png';
import whatsappCliff from '../images/pngtree-whatsapp-icon-png-image_3584845.jpg';

const Team = () => {

    return (
        <div className="container-team container-flex">
            <div className="ourteam container">
                <h1 className="head-team h1 fw-bold display-4 text-center p-5">The Team</h1>
                <p className="saying-mission display-6 text-white p-5">Our team is made of.</p>
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-6 col-lg-8 col-xl-8">
                        <div className="box-team p-5">
                            <h3 className="header1 fw-bold">Dr. Clifford Matara</h3>
                            <h5 className="header2 h5">Founder and Chair, Board of Directors.</h5>
                            <h6 className="header2 h6">Clifford Matara is a principal and Founder of Inklab Graphics LTD. Clifford has over 13 years in print production, Graphics work and vast number of years of experience in management, Financing and Accounting. He is a member of the prestigious Kenya Institute of Managers.</h6>
                            <button className="button-cliff bg-primary text-center">Read More...</button>
                            <h5 className="header2 h5">Contact Cliff.</h5>

                            <div className="row">
                                <div className="col">
                                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' >
                                        <img className='imej-teamm bg-secondary' src={whatsappCliff} alt='whatsappCliff' />
                                    </a>
                                </div>

                                <div className="col">
                                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' >
                                        <img className='imej-teamm bg-secondary' src={gmailCliff} alt='gmailCliff' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="box-team">
                            <a href={ceo} target="_blank" rel="noopener noreferrer">
                                <img src={ceo} alt="ceo" className="ceo" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">

                        <div className="box-team">
                            <a href={ceo} target="_blank" rel="noopener noreferrer">
                                <img src={ceo} alt="ceo" className="ceo" />
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-8 col-xl-8">
                    <div className="box-team p-5">
                            <h3 className="header1 fw-bold">Vincent Nyangaresi Obwogi</h3>
                            <h5 className="header2 h5">Co-founder and Managing Director.</h5>
                            <h6 className="header2 h6">Clifford Matara is a principal and Founder of Inklab Graphics LTD.</h6>
                            <button className="button-cliff bg-primary text-center">Read More...</button>
                            <h5 className="header2 h5">Contact Cliff.</h5>

                            <div className="row">
                                <div className="col">
                                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' >
                                        <img className='imej-teamm bg-secondary' src={whatsappCliff} alt='whatsappCliff' />
                                    </a>
                                </div>

                                <div className="col">
                                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' >
                                        <img className='imej-teamm bg-secondary' src={gmailCliff} alt='gmailCliff' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Team;